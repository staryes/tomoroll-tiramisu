/**
 * Builds subsetted web fonts from the full families shipped in node_modules.
 *
 * Why this exists: @fontsource ships each family two ways, and both are bad to
 * consume directly for CJK.
 *   - The `NNN.css` entrypoints split the font into ~105 unicode-range subsets.
 *     The browser then downloads only what it needs, but the @font-face rules
 *     themselves cost ~160 KB gzipped of render-blocking CSS across three
 *     weights — larger than the fonts most visitors end up fetching.
 *   - The `chinese-traditional-NNN.css` entrypoints are one @font-face each,
 *     but each points at a ~950 KB file covering all of Traditional Chinese.
 *
 * This takes the third option: scan the source for the characters the site
 * actually uses and cut the full files down to exactly those. A site with a few
 * thousand distinct characters lands around 100 KB per CJK weight, with one
 * @font-face per weight (see public/fonts/fonts.css).
 *
 * It reads from src/ rather than dist/ so it can run as a `prebuild` step,
 * before Astro has produced any HTML. Scanning source means the glyph set is a
 * superset of what renders (it also picks up code comments), which is the safe
 * direction to be wrong in.
 *
 * Run automatically via the `prebuild` / `predev` npm scripts. Output is
 * gitignored — it is derived, and regenerates on every build.
 */
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import subsetFont from 'subset-font';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'public/fonts');

/**
 * The families to build.
 *
 * Chinese uses platform-native Traditional Chinese system fonts. That avoids a
 * heavy CJK webfont download and keeps the texture closer to the operating
 * system older visitors already read every day.
 */
const FAMILIES = [
  {
    id: 'latin',
    pkg: '@fontsource/source-sans-3',
    file: (w) => `source-sans-3-latin-${w}-normal.woff2`,
    weights: [400, 600, 700],
  },
];

/** Directories whose text can reach a rendered page. */
const SCAN_DIRS = ['src'];
const SCAN_EXTENSIONS = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.md', '.mdx', '.json']);

/**
 * Always included regardless of current content, so that adding a page does not
 * silently render with fallback glyphs: printable ASCII, Latin-1 supplement,
 * general punctuation, the CJK punctuation block, and full-width forms.
 */
const ALWAYS_INCLUDE = [
  [0x20, 0x7e],
  [0x00a0, 0x00ff],
  [0x2000, 0x206f],
  [0x3000, 0x303f],
  [0xfe30, 0xfe4f],
  [0xff00, 0xffef],
];

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      yield* walk(full);
    } else if (SCAN_EXTENSIONS.has(extname(entry.name))) {
      yield full;
    }
  }
}

async function collectCharacters() {
  const chars = new Set();

  for (const [start, end] of ALWAYS_INCLUDE) {
    for (let code = start; code <= end; code += 1) chars.add(String.fromCodePoint(code));
  }

  let fileCount = 0;
  for (const dir of SCAN_DIRS) {
    for await (const file of walk(join(ROOT, dir))) {
      fileCount += 1;
      const text = await readFile(file, 'utf8');
      for (const char of text) {
        // Codepoints above ASCII are the ones that might need a CJK glyph;
        // everything below is already covered by ALWAYS_INCLUDE.
        if (char.codePointAt(0) > 0x7f) chars.add(char);
      }
    }
  }

  return { text: [...chars].join(''), fileCount };
}

async function main() {
  const { text, fileCount } = await collectCharacters();
  await mkdir(OUT_DIR, { recursive: true });

  console.log(`[fonts] scanned ${fileCount} source files, ${text.length} distinct characters`);

  for (const family of FAMILIES) {
    for (const weight of family.weights) {
      const source = join(ROOT, 'node_modules', family.pkg, 'files', family.file(weight));

      let full;
      try {
        full = await readFile(source);
      } catch {
        throw new Error(
          `Missing ${source}. Run \`npm ci\` — ${family.pkg} must be installed before building fonts.`,
        );
      }

      const subset = await subsetFont(full, text, { targetFormat: 'woff2' });
      await writeFile(join(OUT_DIR, `${family.id}-${weight}.woff2`), subset);

      const pct = ((subset.length / full.length) * 100).toFixed(1);
      console.log(
        `[fonts] ${family.id} ${weight}: ${(full.length / 1024).toFixed(0)} KB → ` +
          `${(subset.length / 1024).toFixed(0)} KB (${pct}%)`,
      );
    }
  }
}

await main();
