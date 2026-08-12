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
      'Tomoroll 從產品策略、設計到開發，委外製造後進行販售。產品線涵蓋運動、健康、家用器具、居家照護科技與教具，並承接外部單位的開發委託。',
  },
  en: {
    title: 'Tomoroll',
    description:
      'Tomoroll takes products from strategy and design through development to manufacture and sale, across sport, health, household, home-care technology and educational toys.',
  },
} as const satisfies Record<Locale, SiteCopy>;
