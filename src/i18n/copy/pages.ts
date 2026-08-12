import type { Locale } from '../config';

/**
 * Copy for Products, About and Contact.
 *
 * DRAFT — Tomoroll writes the final copy. Assembled from facts Moritz stated
 * directly; nothing here is invented, but none of it has been through the
 * company's own editing.
 *
 * Chinese and English are deliberately not translations of each other. The
 * Chinese About page carries the detail a grant reviewer looks for — capability
 * scope, registration status, who is on the team. The English one is shorter
 * and aimed at investors.
 */

export interface Section {
  eyebrow: string;
  title: string;
  body?: string[];
}

export interface ProductsCopy {
  hero: Section;
  /** Shown until the first concept page is published. */
  pendingTitle: string;
  pendingBody: string;
}

export interface AboutCopy {
  hero: Section;
  capabilities: Section & { items: { number: string; title: string; body: string }[] };
  contract: Section;
  team: Section;
  company: Section & { facts: { label: string; value: string }[] };
}

export interface ContactCopy {
  hero: Section;
  emailLabel: string;
  /** Distinguishes the two reasons people write, per the two audiences. */
  routes: { title: string; body: string }[];
  note: string;
}

export const productsCopy = {
  'zh-TW': {
    hero: {
      eyebrow: 'Products',
      title: '五條產品線，尚未上市。',
      body: [
        '我們的產品涵蓋運動、健康、家用器具、居家照護科技與教具。第一項計畫聚焦高齡者的日常科技支援，目前正在聯絡不同居住區域的長者，透過需求調查理解他們在手機、網路與居家科技上的實際困境。',
        '產品上市後將於各銷售通路販售，本站不進行線上交易。',
      ],
    },
    pendingTitle: '高齡者日常科技支援計畫準備中',
    pendingBody: '我們正在進行需求調查，將以長者熟悉的溝通方式為出發點，設計能協助處理手機、網路與居家科技問題的服務。內容確認後會在這裡公開。',
  },
  en: {
    hero: {
      eyebrow: 'Products',
      title: 'Five lines, none launched yet.',
      body: [
        'Our products span sport, health, household goods, home-care technology and educational toys. Our first programme focuses on everyday technology support for older adults. We are surveying seniors in different residential areas to understand the practical difficulties they face with phones, internet access and home technology.',
        'Products will be sold through retail channels. This site does not sell directly.',
      ],
    },
    pendingTitle: 'Everyday technology support for older adults',
    pendingBody: 'We are conducting needs research and starting from the ways older adults already communicate, with the aim of designing support for phone, internet and home technology problems. More will be published here once confirmed.',
  },
} as const satisfies Record<Locale, ProductsCopy>;

export const aboutCopy = {
  'zh-TW': {
    hero: {
      eyebrow: 'About Tomoroll',
      title: '一家把產品從想法帶到市場的公司。',
      body: [
        'Tomoroll 涵蓋產品策略、設計與開發，並在委外製造後進行販售。我們自有的產品線橫跨運動、健康、家用器具、居家照護科技與教具。',
        '公司同時承接外部單位的開發委託，將同一套能力提供給需要完整產品開發流程的合作對象。',
      ],
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title: '六項能力，在同一個團隊裡。',
      items: [
        { number: '01', title: '市場調查', body: '' },
        { number: '02', title: '產品開發', body: '' },
        { number: '03', title: '試用者體驗研究', body: '' },
        { number: '04', title: '工業設計', body: '' },
        { number: '05', title: '軟硬體設計整合', body: '' },
        { number: '06', title: '行銷', body: '' },
      ],
    },
    contract: {
      eyebrow: 'Contract development',
      title: '委託開發',
      body: [
        '除了自有產品，我們也承接外部單位的開發委託。合作範圍可以是完整的產品開發流程，也可以是其中的特定環節。',
      ],
    },
    team: {
      eyebrow: 'Team',
      title: '團隊',
      body: ['產品需要多種專長同時在場。以下是負責這些工作的人。'],
    },
    company: {
      eyebrow: 'Company',
      title: '公司資訊',
      facts: [],
    },
  },
  en: {
    hero: {
      eyebrow: 'About Tomoroll',
      title: 'A company that takes products from idea to market.',
      body: [
        'Tomoroll covers product strategy, design and development, then manufactures through partners and sells. Our own lines span sport, health, household goods, home-care technology and educational toys.',
        'We also develop products under contract, offering the same capability to partners who need a full development process.',
      ],
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title: 'Six disciplines, one team.',
      items: [
        { number: '01', title: 'Market research', body: '' },
        { number: '02', title: 'Product development', body: '' },
        { number: '03', title: 'User experience research', body: '' },
        { number: '04', title: 'Industrial design', body: '' },
        { number: '05', title: 'Hardware and software integration', body: '' },
        { number: '06', title: 'Marketing', body: '' },
      ],
    },
    contract: {
      eyebrow: 'Contract development',
      title: 'Working with us',
      body: [
        'Alongside our own products we develop under contract — either a full development process or a specific stage of one.',
      ],
    },
    team: {
      eyebrow: 'Team',
      title: 'Team',
      body: ['A product needs several kinds of expertise in the room at once. These are the people who do that work.'],
    },
    company: {
      eyebrow: 'Company',
      title: 'Company information',
      facts: [],
    },
  },
} as const satisfies Record<Locale, AboutCopy>;

export const contactCopy = {
  'zh-TW': {
    hero: {
      eyebrow: 'Contact',
      title: '與我們聯絡。',
      body: ['目前請直接來信，我們會盡快回覆。'],
    },
    emailLabel: 'Email',
    routes: [
      {
        title: '產品與售後',
        body: '產品資訊、使用問題，或購買後的協助。',
      },
      {
        title: '合作、計畫與投資',
        body: '委託開發、政府計畫、投資與其他合作提案。',
      },
    ],
    note: '本網站目前不蒐集表單資料。請勿透過未經確認的管道傳送密碼、金鑰或其他敏感資訊。',
  },
  en: {
    hero: {
      eyebrow: 'Contact',
      title: 'Get in touch.',
      body: ['Email is the fastest way to reach us at the moment.'],
    },
    emailLabel: 'Email',
    routes: [
      {
        title: 'Products and support',
        body: 'Product information, questions about use, or help after purchase.',
      },
      {
        title: 'Partnership, programmes and investment',
        body: 'Contract development, government programmes, investment and other proposals.',
      },
    ],
    note: 'This site does not collect form submissions. Please do not send passwords, keys or other sensitive information through unverified channels.',
  },
} as const satisfies Record<Locale, ContactCopy>;
