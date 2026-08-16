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
  body: string;
  icon: 'research' | 'build' | 'experience' | 'industrial' | 'integration' | 'market';
}

export interface ProductLine {
  title: string;
  description: string;
}

export interface HomeCopy {
  /** Sits over the hero image, on the lilac caption bar. */
  heroCaption: string;
  /** From artboard 9. Localized per locale for the homepage statement block. */
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

  research: {
    eyebrow: string;
    title: string;
    body: string[];
    points: { label: string; value: string }[];
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
    statement: '讓日常科技更容易融入生活',

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
      lead: '這六項能力不是平行羅列，而是一條產品路徑：先確認需求，再定義可落地的解法，最後整理成能被市場理解的產品與服務。',
      items: [
        {
          number: '01',
          title: '市場調查',
          body: '確認使用者、照顧者與通路端的真實痛點。',
          icon: 'research',
        },
        {
          number: '02',
          title: '產品開發',
          body: '把洞察轉成規格、流程、原型與可測試假設。',
          icon: 'build',
        },
        {
          number: '03',
          title: '試用者體驗研究',
          body: '觀察使用現場，修正不直覺、不安心或不願持續使用的環節。',
          icon: 'experience',
        },
        {
          number: '04',
          title: '工業設計',
          body: '處理介面、形式、材質與日常場景裡的使用細節。',
          icon: 'industrial',
        },
        {
          number: '05',
          title: '軟硬體設計整合',
          body: '讓服務、設備、數位系統與現場支援能接在一起。',
          icon: 'integration',
        },
        {
          number: '06',
          title: '行銷',
          body: '把產品價值說給使用者、家庭、合作夥伴與市場聽懂。',
          icon: 'market',
        },
      ],
    },

    research: {
      eyebrow: 'Needs research',
      title: '第一項計畫正在從長者的生活現場開始。',
      body: [
        '我們正在聯絡不同居住區域的長者，了解手機、網路、智慧電視與居家科技在日常生活中造成的阻礙。',
        '這些訪談會協助我們判斷哪些問題適合電話支援、哪些情境需要到府協助，以及家庭照顧者最需要被減輕的壓力。',
      ],
      points: [
        { label: '研究對象', value: '不同居住型態與區域的高齡者' },
        { label: '觀察場景', value: '手機、網路、智慧電視、居家科技' },
        { label: '設計目標', value: '一通電話開始，必要時銜接到府支援' },
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
      lead: 'These are not six disconnected services. They form one operating path: validate the need, shape the solution, test the experience and prepare it for market.',
      items: [
        {
          number: '01',
          title: 'Market research',
          body: 'Identify real pain points across users, caregivers and channels.',
          icon: 'research',
        },
        {
          number: '02',
          title: 'Product development',
          body: 'Translate insight into requirements, workflows, prototypes and testable assumptions.',
          icon: 'build',
        },
        {
          number: '03',
          title: 'User experience research',
          body: 'Observe real use and refine the moments that feel confusing, unsafe or hard to repeat.',
          icon: 'experience',
        },
        {
          number: '04',
          title: 'Industrial design',
          body: 'Shape interfaces, form, materials and daily-use details.',
          icon: 'industrial',
        },
        {
          number: '05',
          title: 'Hardware and software integration',
          body: 'Connect services, devices, digital systems and in-person support.',
          icon: 'integration',
        },
        {
          number: '06',
          title: 'Marketing',
          body: 'Make the value clear to users, families, partners and the market.',
          icon: 'market',
        },
      ],
    },

    research: {
      eyebrow: 'Needs research',
      title: 'The first programme starts in older adults’ everyday settings.',
      body: [
        'We are speaking with seniors across different residential areas to understand where phones, internet access, smart TVs and home technology break down in daily life.',
        'The research helps us decide what can be handled by phone, when in-home support is needed and where family caregivers most need relief.',
      ],
      points: [
        { label: 'Participants', value: 'Older adults across varied living settings' },
        { label: 'Scenarios', value: 'Phones, internet access, smart TVs and home technology' },
        { label: 'Design target', value: 'Start by phone, connect to in-home help when needed' },
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
