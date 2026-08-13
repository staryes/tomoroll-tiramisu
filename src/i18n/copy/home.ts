import type { Locale } from '../config';

/**
 * Homepage copy.
 *
 * Homepage copy. The public wording stays conservative: it uses confirmed
 * facts and the first programme's public concept without exposing internal
 * comparisons, business-model references or unvalidated claims.
 *
 * Chinese and English are deliberately not translations of each other. Chinese
 * is read by reviewers assessing government grant applications and wants
 * completeness; English is read by prospective investors and wants concision.
 *
 * Prose is stored as a structured object rather than one flat dictionary so
 * that markup — line breaks, emphasis — stays in the .astro file and is written
 * once. The two languages do not break lines in the same places.
 */

export interface Capability {
  number: string;
  title: string;
}

export interface ProductLine {
  title: string;
  description: string;
}

export interface HomeCopy {
  /** Sits over the hero image, on the lilac caption bar. */
  heroCaption: string;
  /** From artboard 9. Kept in English in both locales — it is the brand line. */
  statement: string;
  statementLead?: string;

  intro: {
    eyebrow: string;
    title: string;
    body: string[];
  };

  products: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
    lines: ProductLine[];
  };

  capabilities: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Capability[];
  };

  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
}

export const homeCopy = {
  'zh-TW': {
    heroCaption: '從需求調查、產品設計到市場落地。',
    statement: 'We make everyday technology easier to live with',

    intro: {
      eyebrow: 'About Tomoroll',
      title: 'Tomoroll 把產品從問題帶到市場。',
      body: [
        '我們從使用者真正遇到的問題出發，將市場調查、產品策略、設計開發與製造販售放在同一條路徑上思考。',
        '第一項計畫聚焦高齡者的日常科技支援。團隊正在聯絡不同居住區域的長者，理解手機、網路、智慧電視與居家科技在生活裡造成的實際困難。',
      ],
    },

    products: {
      eyebrow: 'Products',
      title: '以生活場景為起點的產品線。',
      lead: 'Tomoroll 的產品方向涵蓋運動、健康、家用器具、居家照護科技與教具。現階段優先投入高齡者生活科技支援，先用需求調查確認問題，再規劃可以被長者與家庭真正使用的服務。',
      cta: '查看產品',
      lines: [
        { title: '運動', description: '' },
        { title: '健康', description: '' },
        { title: '家用器具', description: '' },
        { title: '居家照護科技', description: '' },
        { title: '教具與教育玩具', description: '' },
      ],
    },

    capabilities: {
      eyebrow: 'Capabilities',
      title: '從研究、設計到落地，同一個團隊接住。',
      lead: 'Tomoroll 具備學術與實作背景，能把早期洞察轉成產品規格、服務流程與市場溝通，而不是停在概念或簡報。',
      items: [
        { number: '01', title: '市場調查' },
        { number: '02', title: '產品開發' },
        { number: '03', title: '試用者體驗研究' },
        { number: '04', title: '工業設計' },
        { number: '05', title: '軟硬體設計整合' },
        { number: '06', title: '行銷' },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: '合作、計畫與需求訪談，歡迎來信。',
      body: '若你想了解高齡者科技支援計畫、提供訪談線索，或討論產品開發合作，可以直接與我們聯絡。',
      cta: '寄信給我們',
    },
  },

  en: {
    heroCaption: 'From needs research to products that reach the market.',
    statement: 'We make everyday technology easier to live with',

    intro: {
      eyebrow: 'About Tomoroll',
      title: 'Tomoroll takes products from problem to market.',
      body: [
        'We start with the problems people actually meet, then connect market research, product strategy, design, development, manufacturing and sales into one path.',
        'Our first programme focuses on everyday technology support for older adults. We are surveying seniors in different residential areas to understand where phones, internet access, smart TVs and home technology break down in daily life.',
      ],
    },

    products: {
      eyebrow: 'Products',
      title: 'Product lines that begin with real-life settings.',
      lead: 'Tomoroll works across sport, health, household goods, home-care technology and educational toys. Our current priority is senior-focused technology support: validating the need first, then shaping a service that older adults and families can actually use.',
      cta: 'View products',
      lines: [
        { title: 'Sport', description: '' },
        { title: 'Health', description: '' },
        { title: 'Household', description: '' },
        { title: 'Home-care technology', description: '' },
        { title: 'Educational toys', description: '' },
      ],
    },

    capabilities: {
      eyebrow: 'Capabilities',
      title: 'Research, design and launch capability in one team.',
      lead: 'Tomoroll combines academic and practical experience, turning early insight into product requirements, service flows and market communication instead of stopping at a concept deck.',
      items: [
        { number: '01', title: 'Market research' },
        { number: '02', title: 'Product development' },
        { number: '03', title: 'User experience research' },
        { number: '04', title: 'Industrial design' },
        { number: '05', title: 'Hardware and software integration' },
        { number: '06', title: 'Marketing' },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Partnerships, programme discussions and interview leads are welcome.',
      body: 'Write to us about senior technology support, interview leads, product development partnerships or programme and investment conversations.',
      cta: 'Email us',
    },
  },
} as const satisfies Record<Locale, HomeCopy>;
