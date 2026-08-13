# Tomoroll 公司網站

Tomoroll LLC／優呈翌科技股份有限公司（台灣設立登記辦理中）的官方網站原始碼。

網站以 Astro 靜態輸出，中英雙語，並由 GitHub 與 Cloudflare Workers Static Assets 自動建置及部署。
視覺以設計師交付的 artboard 為準（`webpage design/`），設計系統說明見 `docs/`。

## 正式環境

- 正式網址：<https://tomoroll.com>
- `www.tomoroll.com`：301 轉址至正式網址並保留路徑與查詢參數
- Cloudflare Worker：`tomoroll-tiramisu`
- Preview：<https://tomoroll-tiramisu.shoushan.workers.dev>
- DNS：Cloudflare authoritative DNS，已啟用 DNSSEC
- Email：Migadu（MX、SPF、DKIM、DMARC）

## 技術

- Astro 7 + TypeScript（strict mode）
- Tailwind CSS 4（僅用於色彩 token；版面為手寫語意 CSS）
- 中英雙語：中文在根路徑，英文在 `/en/`
- 自架字型，建置時依實際文案子集化（見下方「字型」）
- npm / Node.js 22
- Cloudflare Workers Static Assets
- Cloudflare Web Analytics（可透過建置環境變數啟用）

## 本機開發

```bash
nvm use
npm ci
cp .env.example .env
npm run dev
```

開啟 `http://localhost:4321`。

```bash
npm run check    # 型別檢查
npm run fonts    # 產生字型子集（dev/build 會自動先跑）
npm run build    # 檢查並輸出靜態網站至 dist/
npm run preview  # 預覽 dist/
```

## 字型

拉丁字母使用自架字型，透過中性別名 `Tomoroll Latin` 使用。
`public/_headers` 的 CSP 是 `font-src 'self'`，不能用 Google Fonts，必須自架。

**正式字型仍待設計師確認。** 在設計師回覆前，拉丁字母暫用 Source Sans 3；
繁體中文先使用平台原生字體（macOS 的 PingFang TC、Windows 的微軟正黑體等），
避免 Noto Sans TC webfont 在目前版面裡顯得過硬，也讓長者與一般訪客看到更熟悉的文字質地。
拿到設計師的字型後，只需改 `scripts/build-fonts.mjs` 的來源與 `public/fonts/fonts.css`，
呼叫端完全不動。

`scripts/build-fonts.mjs` 會掃描 `src/` 裡出現過的字元，將拉丁 webfont 裁切成只含本站需要的字。
這個步驟由 `predev` / `prebuild` 自動執行，產出的 `public/fonts/*.woff2` 不進版控——它們是衍生檔案，
文案改動時會重新產生。

若在部署後發現某些字顯示成系統字型，通常代表該次建置沒有跑到 `prebuild`。

## 目錄

```text
├── .github/                 # CI、Dependabot、PR 範本
├── docs/                    # 內容操作與上線清單
├── public/
│   ├── fonts/               # @font-face 定義（.woff2 由 npm run fonts 產生）
│   ├── images/              # 公開圖片
│   ├── _headers             # Cloudflare 安全／快取標頭
│   ├── favicon.svg
│   └── robots.txt
├── scripts/
│   └── build-fonts.mjs      # 依實際文案子集化字型
├── src/
│   ├── components/
│   │   ├── brand/           # logo（自設計檔抽出的向量）
│   │   └── pages/           # 各頁本體，中英共用
│   ├── i18n/
│   │   ├── copy/            # 各頁文案（中英各一組）
│   │   ├── config.ts        # 語系常數
│   │   ├── routing.ts       # 網址與語系對應
│   │   ├── site.ts          # 全站標題與描述
│   │   └── ui.ts            # 導覽、按鈕等短字串
│   ├── content/
│   │   ├── product-lines/   # 五條產品線
│   │   ├── products/        # 個別產品與計畫（zh-TW/ 與 en/）
│   │   └── members/         # 團隊成員
│   ├── layouts/             # SEO 與共用版型
│   ├── lib/                 # 內容讀取輔助（語系過濾、fallback）
│   ├── pages/               # 路由（中文在根，英文在 en/）
│   ├── styles/
│   │   ├── tokens.css       # 色彩、字級、間距 token
│   │   └── global.css       # 版面與元件
│   ├── config.ts            # 與語言無關的公司事實與導覽結構
│   └── content.config.ts    # Content Collections schema
└── astro.config.mjs
```

## 內容更新

分兩種：**固定文案**在 `src/i18n/`，**會增減的項目**（產品線、產品、團隊成員）
在 `src/content/` 的 Markdown。兩種都不需要動版面。

- 授權規則：**短欄位同檔雙語，長內文分檔分語言**
- 每個項目都有 `published`，**預設 false**——產品可以先寫完再上線，
  成員資料要等本人同意
- 中英文刻意不逐句對譯：中文給政府輔助計劃評審看、英文給投資人看

完整說明見 [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md)。
禁止將未公開客戶資料、個資、密碼、API token 或其他機密放入 repository。

## 網站架構

依設計師影片說明，**這是一個單頁捲動網站**：首頁／產品／About Us 是同一頁的錨點，
只有 Contact 是獨立頁面。

| 路由 | 內容 |
| --- | --- |
| `/`、`/en/` | `#top` hero → 品牌標語 → 旋轉分隔帶 → 公司定位 → `#products` 五條產品線 → `#about` 定位與六項能力 → 委託開發 → `#team` 團隊 → 公司資訊 → 聯絡引導 |
| `/contact/`、`/en/contact/` | Email 聯絡。設計檔的表單需要後端，待有產品要售後時再做 |
| `/404` | 中英雙語（Cloudflare 的 `not_found_handling` 設定未知，雙語版在兩種行為下都成立） |

團隊放在 About 段落之內，不獨立成頁。**個別產品頁尚未設計**，設計師畫好後再加入。

## 動態

首頁的捲動動畫全部用 CSS scroll-driven animation（`animation-timeline`），沒有 JavaScript。
包在 `@supports (animation-timeline: view())` 與 `prefers-reduced-motion: no-preference` 裡，
不支援或使用者關閉動畫時會直接得到靜態版面——也就是設計稿原本的樣子。

| 元素 | 動作 |
| --- | --- |
| Hero 橄欖色塊 | 捲動時縮成左上角方塊，logo 是它的百分比寬所以自動跟著縮 |
| Hero 說明文字 | 向上位移並淡出 |
| 標語 | 隨捲動往左上方縮小 |
| 散落圓點 | 視差：大（近）的位移多、小（遠）的位移少 |
| 粉色分隔帶 | 通過視窗時轉一整圈 |

實作注意：`animation` 簡寫會把 `animation-duration` 設成 `0s`，捲動驅動動畫必須是 `auto`，
所以這裡一律用長寫。另外容器要用 `overflow: clip` 而不是 `hidden`——`hidden` 會讓元素變成
捲動容器，`scroll()`／`view()` 會解析到它身上而永遠不前進。

## 環境變數

參考 `.env.example`：

| 變數 | 用途 | 必填 |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | 覆寫正式網站 origin；預設為 `https://tomoroll.com` | 選填 |
| `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` | Cloudflare Web Analytics site token | 選填 |
| `PUBLIC_CONTACT_EMAIL` | 覆寫公開信箱；預設為 `hello@tomoroll.com` | 選填 |

`PUBLIC_*` 會出現在前端產物，只能放可公開資訊。Secret 不可使用此前綴，也不可交由目前這個純靜態網站讀取。

## Cloudflare Workers 部署

Cloudflare Worker 已連接 GitHub repository，使用以下設定：

| 設定 | 值 |
| --- | --- |
| Worker name | `tomoroll-tiramisu` |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node.js | `22` |

`main` 更新後由 Cloudflare Git Integration 自動建置並發布。Pull Request 應先通過 GitHub Actions `build`，再使用 Cloudflare Preview 檢查結果。

## 上線前仍需由公司確認

目前 repository 不虛構尚未提供的公司資訊。以下資料需在正式發布前補齊：

1. 經本人同意的團隊姓名、職稱、照片與簡介。
2. 第一項計畫可公開的概念說明。
3. 台灣公司完成登記後的統編與登記狀態（目前為籌備處，預計 2026 年 9 月完成）。
4. 設計師的正式字型名稱與 webfont 授權（目前拉丁以 Source Sans 3 暫代，中文用平台字體）。
5. 首頁與產品頁的實際攝影素材。
6. 確認正式社群分享圖符合品牌規範。
7. Cloudflare Web Analytics token。

排程、分工與逐項進度見 [`docs/ROADMAP.md`](docs/ROADMAP.md)。
發布前逐項檢查見 [`docs/LAUNCH_CHECKLIST.md`](docs/LAUNCH_CHECKLIST.md)。

## 權利

網站程式碼與內容為 Tomoroll 所有。未經授權不得複製、散布或另作商業使用。
