import type { LocalizedCopy } from '../config';

/**
 * The three working principles.
 *
 * Shared between the homepage (as a summary section) and the about page (as the
 * detailed section), so the two cannot drift apart. Previously the about page
 * carried them as hardcoded markup, which is exactly the kind of duplication
 * that goes stale the first time someone edits one page and not the other.
 */

export interface Principle {
  number: string;
  title: string;
  description: string;
}

export const principles: LocalizedCopy<Principle[]> = {
  'zh-TW': [
    {
      number: '01',
      title: '先問為什麼',
      description: '不急著用熟悉的解法回答。先確認真正要改變的是什麼，讓時間花在有價值的地方。',
    },
    {
      number: '02',
      title: '把複雜變清楚',
      description: '用結構、語言和原型建立共同理解，讓每個參與者都知道現在在哪裡、下一步往哪裡。',
    },
    {
      number: '03',
      title: '為長期負責',
      description: '除了眼前交付，也考慮維護、效能與擴充。好的成果，應該在專案結束後繼續創造價值。',
    },
  ],
};
