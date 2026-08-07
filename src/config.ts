export const SITE = {
  name: 'Tomoroll',
  legalNameUS: 'Tomoroll LLC',
  legalNameTW: '優呈翌科技股份有限公司',
  title: 'Tomoroll｜讓明日，持續向前',
  description:
    'Tomoroll 是一間跨足產品策略、體驗設計與軟體開發的科技公司，陪伴團隊把好想法推進成可持續的數位產品。',
  locale: 'zh-TW',
  url: 'https://tomoroll.com',
  contactEmail: 'hello@tomoroll.com',
  ogImage: '/images/og-default.png',
} as const;

export const navigation = [
  { href: '/about', label: '關於我們' },
  { href: '/team', label: '團隊' },
  { href: '/projects', label: '專案' },
  { href: '/contact', label: '聯絡' },
] as const;

export const services = [
  {
    number: '01',
    title: '產品策略',
    english: 'Product Strategy',
    description: '從問題定義、需求梳理到執行路徑，讓投入的每一步都有清楚理由。',
  },
  {
    number: '02',
    title: '體驗與介面設計',
    english: 'Experience Design',
    description: '把複雜流程轉為直覺、清楚且兼顧品牌辨識度的使用體驗。',
  },
  {
    number: '03',
    title: '網站與產品開發',
    english: 'Web Development',
    description: '以穩定、可維護的技術落實產品，並為後續成長保留彈性。',
  },
] as const;
