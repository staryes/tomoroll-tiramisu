import type { Locale } from './config';

/**
 * Short structural strings: navigation, buttons, aria labels, empty states.
 *
 * Page prose does NOT live here — it goes in `src/i18n/copy/`, as structured
 * objects, so that the markup around it (line breaks, emphasis) stays in the
 * .astro file and is written once. English and Chinese break lines in different
 * places; a flat string dictionary cannot express that.
 *
 * The `satisfies` constraint below is the guardrail that matters: a missing
 * English string is a type error, and `npm run build` runs `astro check`
 * first, so CI fails on a half-translated site with no extra tooling.
 */

const zhTW = {
  'nav.home': '首頁',
  'nav.products': '產品',
  'nav.about': '關於我們',
  'nav.contact': '聯絡',

  'a11y.skipToContent': '跳至主要內容',
  'a11y.menu': '開啟選單',
  'a11y.language': '語言',
  'a11y.home': '回到首頁',

  'cta.contact': '與我們聯絡',
  'cta.learnMore': '了解更多',
  'cta.viewProducts': '查看產品',
  'cta.email': '寄信給我們',

  'label.capabilities': '能力',
  'label.team': '團隊',
  'label.company': '公司資訊',
  'label.inDevelopment': '開發中',

  'empty.products': '產品內容準備中',
  'empty.productsBody': '第一項計畫的需求調查正在進行，確認可公開內容後會在這裡更新。',
  'empty.team': '成員簡介準備中',
  'empty.teamBody': '我們尊重每位成員的公開意願，資料與照片確認完成後會在這裡介紹。',

  'title.separator': '｜',
} as const;

const en = {
  'nav.home': 'Home',
  'nav.products': 'Products',
  'nav.about': 'About Us',
  'nav.contact': 'Contact',

  'a11y.skipToContent': 'Skip to main content',
  'a11y.menu': 'Open menu',
  'a11y.language': 'Language',
  'a11y.home': 'Back to home',

  'cta.contact': 'Get in touch',
  'cta.learnMore': 'Learn more',
  'cta.viewProducts': 'View products',
  'cta.email': 'Email us',

  'label.capabilities': 'Capabilities',
  'label.team': 'Team',
  'label.company': 'Company',
  'label.inDevelopment': 'In development',

  'empty.products': 'Product pages in preparation',
  'empty.productsBody':
    'Needs research for our first programme is underway. More will appear here once public details are confirmed.',
  'empty.team': 'Team profiles in preparation',
  'empty.teamBody':
    'We publish a profile only with the person’s consent. Profiles will appear here once confirmed.',

  'title.separator': ' — ',
} as const;

export type UIKey = keyof typeof zhTW;

export const ui = {
  'zh-TW': zhTW,
  en,
} as const satisfies Record<Locale, Record<UIKey, string>>;

/** Returns a translator bound to one locale. */
export function useTranslations(locale: Locale) {
  return (key: UIKey): string => ui[locale][key];
}
