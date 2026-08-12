/**
 * Language-independent facts about the company and the deployment.
 *
 * Anything that would need translating lives under `src/i18n/` instead:
 * UI strings in `ui.ts`, page prose in `copy/`, site metadata in `site.ts`.
 *
 * These values are the single source of truth — pages must read company
 * information from here rather than repeating it as literals in markup.
 */
export const SITE = {
  name: 'Tomoroll',
  legalNameUS: 'Tomoroll LLC',
  legalNameTW: '優呈翌科技股份有限公司',
  registrationUS: 'Delaware, United States',
  /**
   * The Taiwan entity is a 籌備處 (preparatory office); registration is expected
   * to complete in September 2026. Stated plainly rather than glossed over —
   * grant reviewers read this as a status, and vagueness costs more than the
   * status itself. Update here when registration completes.
   */
  registrationTWStatus: 'preparatory',
  registrationTWExpected: '2026-09',
  url: 'https://tomoroll.com',
  contactEmail: 'hello@tomoroll.com',
  ogImage: '/images/og-default.png',
} as const;

/**
 * Primary navigation, in the order the design shows it.
 *
 * Per the designer's walkthrough video, this is a single scrolling page:
 * Home, Products and About Us are anchors within it, and only Contact is a
 * separate page. `hash` marks the anchor items so the header can tell the two
 * kinds apart when deciding what counts as the current page.
 *
 * `href` is locale-independent; `localizePath()` adds the prefix. `key` indexes
 * into the UI dictionary so labels stay with the other translated strings.
 */
export const navigation = [
  { href: '/', hash: '', key: 'nav.home' },
  { href: '/', hash: '#products', key: 'nav.products' },
  { href: '/', hash: '#about', key: 'nav.about' },
  { href: '/contact/', hash: '', key: 'nav.contact' },
] as const;
