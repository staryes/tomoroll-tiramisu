import { DEFAULT_LOCALE, LOCALES, LOCALE_META, type Locale } from './config';

/**
 * URL shape for the bilingual site.
 *
 * Single source of truth for how a path maps to a locale and back. Every helper
 * here returns a trailing-slashed path, matching Astro's `build.format:
 * 'directory'` output — canonical URLs, hreflang alternates, nav links and
 * active-state comparisons all have to agree on that or they silently disagree
 * by one character.
 *
 * Hand-rolled rather than using `astro:i18n`: `getRelativeLocaleUrl()` lowercases
 * the locale by default (so `zh-TW` becomes `zh-tw`), has no `stripLocale`
 * counterpart, and couples its trailing-slash behaviour to config we would have
 * to re-derive anyway. This module is needed regardless, at which point the
 * built-in helpers add nothing.
 */

/** Ensures a path starts and ends with exactly one slash. */
function normalise(path: string): string {
  const trimmed = `/${path}/`.replace(/\/+/g, '/');
  return trimmed;
}

/**
 * Which locale a pathname belongs to.
 *
 * Derived from the path rather than from `Astro.currentLocale`, which is typed
 * `string | undefined`, throws inside `getStaticPaths`, and — the real hazard —
 * is overridden by any route param whose value happens to match a locale code.
 */
export function localeFromPath(pathname: string): Locale {
  const segments = normalise(pathname).split('/').filter(Boolean);
  const first = segments[0];
  const match = LOCALES.find(
    (locale) => locale !== DEFAULT_LOCALE && LOCALE_META[locale].prefix === `/${first}`,
  );
  return match ?? DEFAULT_LOCALE;
}

/** Removes the locale prefix, giving the locale-independent path. */
export function stripLocale(pathname: string): string {
  const locale = localeFromPath(pathname);
  const prefix = LOCALE_META[locale].prefix;
  if (!prefix) return normalise(pathname);
  return normalise(normalise(pathname).slice(prefix.length) || '/');
}

/** Adds the locale prefix to a locale-independent path. */
export function localizePath(path: string, locale: Locale): string {
  return normalise(`${LOCALE_META[locale].prefix}${normalise(path)}`);
}

/**
 * Absolute URL for a path, used for canonical and hreflang.
 *
 * Reads `PUBLIC_SITE_URL` so preview deployments emit their own origin rather
 * than claiming to be production.
 */
export function absoluteUrl(path: string, siteUrl: string): string {
  return `${siteUrl.replace(/\/$/, '')}${path}`;
}

/**
 * The same page in every locale.
 *
 * Both the Chinese and the English route compute this from the same helper, so
 * hreflang reciprocity is structural rather than something a person maintains.
 */
export function alternatesFor(pathname: string): Record<Locale, string> {
  const base = stripLocale(pathname);
  return Object.fromEntries(LOCALES.map((locale) => [locale, localizePath(base, locale)])) as Record<
    Locale,
    string
  >;
}
