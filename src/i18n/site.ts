import type { Locale } from './config';

/**
 * Site-wide title and description, per locale.
 *
 * These are copy, so they live here rather than in `src/config.ts` — that file
 * holds only facts that do not change with language.
 *
 * Chinese and English are deliberately NOT translations of each other. The
 * Chinese version is read by reviewers assessing government grant applications
 * and wants completeness; the English version is read by prospective investors
 * and wants concision.
 */

export interface SiteCopy {
  title: string;
  description: string;
}

export const siteCopy = {
  'zh-TW': {
    title: 'Tomoroll 優呈翌科技',
    description:
      'Tomoroll 連結需求研究、產品設計、開發與市場落地，產品方向涵蓋運動、健康、家用器具、居家照護科技與教具，第一項計畫聚焦高齡者日常科技支援。',
  },
  en: {
    title: 'Tomoroll',
    description:
      'Tomoroll connects needs research, product design, development and market launch across sport, health, household, home-care technology and educational toys, beginning with everyday technology support for older adults.',
  },
} as const satisfies Record<Locale, SiteCopy>;
