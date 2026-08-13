import type { Locale } from '../config';

/**
 * Copy for Products, About and Contact.
 *
 * Public page copy. This wording keeps internal strategy private while making
 * the first programme and Tomoroll's operating capability concrete enough for
 * reviewers, partners and early investors.
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
  pendingPoints: string[];
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
      title: '五條產品線，先從高齡者生活科技支援開始。',
      body: [
        'Tomoroll 的產品方向涵蓋運動、健康、家用器具、居家照護科技與教具。第一項計畫聚焦高齡者的日常科技支援，先從不同居住區域的長者訪談與需求調查開始。',
        '我們希望理解長者在手機、網路、智慧電視與居家科技上的真實困境，再設計能被長者與家庭自然使用的支援方式。產品與服務尚未上市，本站目前不進行線上交易。',
      ],
    },
    pendingTitle: '高齡者日常科技支援計畫準備中',
    pendingBody: '需求調查正在進行。可公開內容確認後，這裡會更新計畫範圍、服務情境與後續進度。',
    pendingPoints: ['需求訪談進行中', '服務情境整理中', '可公開範圍確認後更新'],
  },
  en: {
    hero: {
      eyebrow: 'Products',
      title: 'Five product lines, beginning with senior technology support.',
      body: [
        'Tomoroll works across sport, health, household goods, home-care technology and educational toys. Our first programme focuses on everyday technology support for older adults, beginning with interviews and needs research across different residential areas.',
        'We are learning where phones, internet access, smart TVs and home technology become difficult in real life, then designing support that older adults and families can use naturally. Products and services have not launched yet, and this site does not sell directly.',
      ],
    },
    pendingTitle: 'Everyday technology support for older adults',
    pendingBody: 'Needs research is underway. Once public details are confirmed, this section will share the programme scope, service settings and next steps.',
    pendingPoints: ['Needs interviews underway', 'Service scenarios being mapped', 'Public scope to be updated when confirmed'],
  },
} as const satisfies Record<Locale, ProductsCopy>;

export const aboutCopy = {
  'zh-TW': {
    hero: {
      eyebrow: 'About Tomoroll',
      title: '一家把需求研究、產品設計與市場落地接在一起的公司。',
      body: [
        'Tomoroll 從使用者問題出發，涵蓋市場調查、產品策略、設計與開發，並能銜接委外製造、販售與後續市場溝通。',
        '我們自有的產品線橫跨運動、健康、家用器具、居家照護科技與教具，也承接外部單位的開發委託，將同一套從發想到落地的能力提供給合作對象。',
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
        '除了自有產品，我們也承接外部單位的開發委託。合作範圍可以是完整產品流程，也可以是需求研究、產品規劃、設計開發、軟硬體整合或上市前準備中的特定環節。',
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
      title: 'A company connecting needs research, product design and market launch.',
      body: [
        'Tomoroll starts with user problems, covering market research, product strategy, design and development, then connecting to partner manufacturing, sales and market communication.',
        'Our own lines span sport, health, household goods, home-care technology and educational toys. We also develop products under contract, offering partners the same path from early idea to launch.',
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
        'Alongside our own products, we develop under contract. A collaboration can cover a full product process or a focused stage such as needs research, product planning, design development, hardware-software integration or launch preparation.',
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
