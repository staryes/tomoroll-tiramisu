# Tomoroll 公司網站

Tomoroll LLC／優呈翌科技股份有限公司（台灣設立登記辦理中）的官方網站原始碼。

網站以 Astro 靜態輸出，內容透過 Markdown 管理，並由 GitHub 與 Cloudflare Workers Static Assets 自動建置及部署。

## 正式環境

- 正式網址：<https://tomoroll.com>
- `www.tomoroll.com`：301 轉址至正式網址並保留路徑與查詢參數
- Cloudflare Worker：`tomoroll-tiramisu`
- Preview：<https://tomoroll-tiramisu.shoushan.workers.dev>
- DNS：Cloudflare authoritative DNS，已啟用 DNSSEC
- Email：Migadu（MX、SPF、DKIM、DMARC）

## 技術

- Astro 7 + TypeScript（strict mode）
- Tailwind CSS 4
- Astro Content Collections
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
npm run check    # 型別與內容 schema 檢查
npm run build    # 檢查並輸出靜態網站至 dist/
npm run preview  # 預覽 dist/
```

## 目錄

```text
├── .github/                 # CI、Dependabot、PR 範本
├── docs/                    # 內容操作與上線清單
├── public/
│   ├── images/              # 公開圖片
│   ├── _headers             # Cloudflare 安全／快取標頭
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/          # 共用 UI
│   ├── content/
│   │   ├── members/         # 團隊 Markdown
│   │   └── projects/        # 專案 Markdown
│   ├── layouts/             # SEO 與共用版型
│   ├── pages/               # Astro 路由
│   ├── styles/              # 全站樣式
│   ├── config.ts            # 網站文字與服務設定
│   └── content.config.ts    # Content Collections schema
└── astro.config.mjs
```

## 內容更新

團隊與專案使用 Markdown。複製各資料夾內的 `_template.md`、重新命名，完成內容後把 `published` 改成 `true`。

- 團隊：`src/content/members/`
- 專案：`src/content/projects/`
- 圖片：`public/images/members/`、`public/images/projects/`
- 公司與服務文案：`src/config.ts` 及各 `src/pages/*.astro`

完整操作方式請看 [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md)。禁止將未公開客戶資料、個資、密碼、API token 或其他機密放入 repository。

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
2. 經客戶或公司確認可公開的專案內容。
3. 台灣公司完成登記後的正式名稱、統編及登記狀態。
4. 確認正式社群分享圖符合最新品牌規範。
5. Cloudflare Web Analytics token。

請依 [`docs/LAUNCH_CHECKLIST.md`](docs/LAUNCH_CHECKLIST.md) 完成發布前檢查。

## 權利

網站程式碼與內容為 Tomoroll 所有。未經授權不得複製、散布或另作商業使用。
