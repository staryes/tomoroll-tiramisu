# Tomoroll 公司網站

Tomoroll LLC／優呈翌科技股份有限公司（台灣設立登記辦理中）的官方網站原始碼。

網站以 Astro 靜態輸出，內容透過 Markdown 管理，預計由 GitHub 與 Cloudflare Pages 完成審核、Preview 及正式部署。

## 技術

- Astro 7 + TypeScript（strict mode）
- Tailwind CSS 4
- Astro Content Collections
- npm / Node.js 22
- Cloudflare Pages
- Cloudflare Web Analytics（以環境變數啟用）

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
| `PUBLIC_SITE_URL` | 正式網站完整 origin，用於 canonical 與 Open Graph URL | 正式環境必填 |
| `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` | Cloudflare Web Analytics site token | 選填 |
| `PUBLIC_CONTACT_EMAIL` | 聯絡頁公開信箱 | 上線前必填 |

`PUBLIC_*` 會出現在前端產物，只能放可公開資訊。Secret 不可使用此前綴，也不可交由目前這個純靜態網站讀取。

## Cloudflare Pages

連接 GitHub repository 後設定：

| 設定 | 值 |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node.js | `22` |

在 Production 與 Preview 環境加入所需環境變數。正式網域確定後，設定 `PUBLIC_SITE_URL` 並重新部署。

建議保護 `main`，要求 PR 與 GitHub Actions `build` 通過後才能合併。Cloudflare GitHub Integration 會為 PR 產生 Preview URL，合併後發布正式環境。

## 上線前仍需由公司確認

目前 repository 不虛構尚未提供的公司資訊。以下資料需在正式發布前補齊：

1. 正式網域與公開聯絡信箱。
2. 經本人同意的團隊姓名、職稱、照片與簡介。
3. 經客戶或公司確認可公開的專案內容。
4. 台灣公司完成登記後的正式名稱、統編及登記狀態。
5. 確認正式社群分享圖符合最新品牌規範。
6. Cloudflare Web Analytics token。

請依 [`docs/LAUNCH_CHECKLIST.md`](docs/LAUNCH_CHECKLIST.md) 完成發布前檢查。

## 權利

網站程式碼與內容為 Tomoroll 所有。未經授權不得複製、散布或另作商業使用。
