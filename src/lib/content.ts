import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from '../i18n/config';

/**
 * Reading helpers for the content collections.
 *
 * These exist so pages never reach into the raw entries and re-implement the
 * same locale fallback and sort order three different ways.
 */

/** The translated block for a locale, falling back to Chinese. */
export function textFor<T>(
  translations: { 'zh-TW': T; en?: T },
  locale: Locale,
): { text: T; isFallback: boolean } {
  const exact = translations[locale as 'en'];
  if (locale !== DEFAULT_LOCALE && exact) return { text: exact, isFallback: false };
  if (locale !== DEFAULT_LOCALE) return { text: translations[DEFAULT_LOCALE], isFallback: true };
  return { text: translations[DEFAULT_LOCALE], isFallback: false };
}

/**
 * Published product lines, in order.
 *
 * Not filtered by locale: a line without an English block still appears on the
 * English page, using its Chinese text marked with `lang`. A product category
 * silently vanishing between languages would be worse than a untranslated word.
 */
export async function getProductLines() {
  const lines = await getCollection('productLines', ({ data }) => data.published);
  return lines.sort((a, b) => a.data.order - b.data.order);
}

/** Published team members, in order. Same fallback reasoning as above. */
export async function getMembers() {
  const members = await getCollection('members', ({ data }) => data.published);
  return members.sort((a, b) => a.data.order - b.data.order);
}

/** The slug part of a product id — `zh-TW/kettle` → `kettle`. */
export const productSlug = (entry: CollectionEntry<'products'>) =>
  entry.id.slice(entry.id.indexOf('/') + 1);

/**
 * Published products for one locale.
 *
 * Products *are* filtered by locale, unlike lines and members: a product page
 * is a long prose document, and showing an untranslated one would be a wall of
 * Chinese on an English page rather than a single fallback label.
 */
export async function getProducts(locale: Locale) {
  const products = await getCollection(
    'products',
    ({ id, data }) => data.published && id.startsWith(`${locale}/`),
  );
  return products.sort((a, b) => a.data.order - b.data.order);
}
