/**
 * Locale primitives.
 *
 * Introduced ahead of the bilingual build-out so that copy written now is
 * already keyed by locale and adding English is a matter of filling in a second
 * key rather than reshaping every page. Nothing here reads Astro globals, so it
 * is safe to import from `src/content.config.ts` and from plain `.ts` modules.
 */

export const LOCALES = ['zh-TW', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

/**
 * Declared `as const satisfies Locale` rather than annotated `: Locale`, so the
 * type stays the literal `'zh-TW'`. `LocalizedCopy` below needs that literal to
 * distinguish the required key from the optional ones.
 */
export const DEFAULT_LOCALE = 'zh-TW' as const satisfies Locale;

export type DefaultLocale = typeof DEFAULT_LOCALE;

/**
 * Per-locale metadata that the document head needs.
 *
 * `prefix` is the URL prefix for that locale. The default locale deliberately
 * has none — Chinese pages live at `/about/`, not `/zh-TW/about/`.
 *
 * `hreflang` is kept as `zh-TW` rather than the more precise `zh-Hant-TW`, to
 * stay consistent with `htmlLang` and `ogLocale`. Both are valid BCP-47 and
 * both are accepted by search engines; this is a deliberate choice, not an
 * oversight.
 */
export const LOCALE_META = {
  'zh-TW': {
    prefix: '',
    htmlLang: 'zh-TW',
    ogLocale: 'zh_TW',
    hreflang: 'zh-TW',
    label: '中文',
  },
  en: {
    prefix: '/en',
    htmlLang: 'en',
    ogLocale: 'en_US',
    hreflang: 'en',
    label: 'English',
  },
} as const satisfies Record<
  Locale,
  { prefix: string; htmlLang: string; ogLocale: string; hreflang: string; label: string }
>;

/**
 * A record that must carry an entry for every locale.
 *
 * Copy modules are typed with this so that a missing English string is a
 * type error. `npm run build` runs `astro check` first, so CI fails on a
 * half-translated site without needing any additional tooling.
 *
 * While only Chinese copy exists, locales other than the default are optional;
 * tightening this to a full `Record<Locale, T>` is the switch that will enforce
 * complete translations once English lands.
 */
export type LocalizedCopy<T> = Record<DefaultLocale, T> & {
  [K in Exclude<Locale, DefaultLocale>]?: T;
};

/** Reads a copy bundle for a locale, falling back to Chinese. */
export function pick<T>(bundle: LocalizedCopy<T>, locale: Locale): T {
  return bundle[locale] ?? bundle[DEFAULT_LOCALE];
}
