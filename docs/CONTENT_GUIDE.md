# 內容管理指南

## 新增團隊成員

1. 複製 `src/content/members/_template.md`，檔名使用穩定的英文 slug，例如 `wang-xiaoming.md`。
2. 將照片放在 `public/images/members/`；建議使用 WebP/JPEG、至少 640 × 760 px，並壓縮檔案。
3. 填寫 frontmatter。`photo` 必須是以 `/` 開頭的 public 路徑。
4. 取得成員同意並完成 Preview 檢查後，設定 `published: true`。
5. `order` 數字越小，排序越前面。

## 新增專案

1. 複製 `src/content/projects/_template.md`，檔名會成為網址，例如 `new-product.md` 對應 `/projects/new-product/`。
2. 將 3:2 封面圖放在 `public/images/projects/`；建議至少 1200 × 800 px。
3. 填寫摘要、客戶、年份、服務與正文，並提供能描述圖片的 `coverAlt`。
4. 只有經授權的內容才能公開；無法公開的成效數字不要猜測或虛構。
5. 設定 `featured: true` 才會出現在首頁；設定 `published: true` 才會產生公開頁面。

## Frontmatter 檢查

`src/content.config.ts` 定義所有欄位格式。執行：

```bash
npm run check
```

欄位遺漏、格式錯誤或年份不合法時，建置會失敗，避免錯誤內容被部署。

## 編輯流程

1. 從 `main` 建立 `feature/*` 分支。
2. 編輯內容並執行 `npm run build`。
3. Push 並建立 Pull Request。
4. 在 Cloudflare Preview URL 檢查手機與桌面畫面。
5. 確認內容授權、拼字、連結及圖片替代文字。
6. 核准後合併至 `main`。
