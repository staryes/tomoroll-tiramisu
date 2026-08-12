import type { Locale } from '../config';

/**
 * Homepage copy.
 *
 * DRAFT — Tomoroll writes the final copy. Everything here is assembled from
 * facts Moritz stated directly (the business description, the five product
 * lines, the six capabilities) plus the tagline from the designer's artboard 9.
 * Nothing is invented marketing language, but it is placeholder in the sense
 * that it has not been through the company's own editing.
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
    heroCaption: '從一個念頭，到能放進生活裡的東西。',
    statement: 'Small ideas we grasp from a daydream of an elegant life',

    intro: {
      eyebrow: 'About Tomoroll',
      title: '我們把產品從想法帶到市場。',
      body: [
        'Tomoroll 涵蓋產品策略、設計與開發，並在委外製造後進行販售。我們自有的產品線橫跨運動、健康、家用器具、居家照護科技與教具，也承接外部單位的開發委託。',
        '這代表一件事：我們不只交出圖面或原型，而是對產品能不能被做出來、能不能被使用、能不能被賣出去負責。',
      ],
    },

    products: {
      eyebrow: 'Products',
      title: '五條產品線，一個共同的判準。',
      lead: '產品尚未上市。我們正在整理第一項計畫的概念說明，其餘產品線的內容會陸續公開。',
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
      title: '從調查到上市，六項能力在同一個團隊裡。',
      lead: '這些能力不外包，也不各自為政。同一群人從頭跟到尾，決策才不會在交接時失真。',
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
      title: '想談談嗎？',
      body: '無論是產品諮詢、合作提案，或是計畫與投資相關的討論，都歡迎直接來信。',
      cta: '寄信給我們',
    },
  },

  en: {
    heroCaption: 'From an idea to something that belongs in daily life.',
    statement: 'Small ideas we grasp from a daydream of an elegant life',

    intro: {
      eyebrow: 'About Tomoroll',
      title: 'We take products from idea to market.',
      body: [
        'Tomoroll covers product strategy, design and development, then manufactures through partners and sells. Our own lines span sport, health, household goods, home-care technology and educational toys. We also develop products under contract.',
        'That means we are answerable for whether a product can be built, used and sold — not only for the drawings and the prototype.',
      ],
    },

    products: {
      eyebrow: 'Products',
      title: 'Five lines, one standard.',
      lead: 'Nothing has launched yet. The concept for our first programme is being written up; the remaining lines will follow.',
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
      title: 'Six disciplines, one team.',
      lead: 'None of this is outsourced and none of it works in isolation. The same people see a product through, so decisions do not get lost at the handover.',
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
      title: 'Let’s talk.',
      body: 'Product questions, partnership proposals, programme and investment conversations — all welcome by email.',
      cta: 'Email us',
    },
  },
} as const satisfies Record<Locale, HomeCopy>;
