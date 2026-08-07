# 正式上線清單

## 公司與內容

- [ ] 確認 Tomoroll LLC 的公開登記描述
- [ ] 確認台灣公司名稱與登記狀態
- [ ] 補上公開聯絡信箱
- [ ] 團隊資料已取得本人同意
- [ ] 專案內容已取得必要的客戶／公司授權
- [ ] 移除不再需要的未公開範例內容
- [ ] 全站文案完成法務與品牌確認

## GitHub

- [ ] Repository 設為 private
- [ ] 預設分支為 `main`
- [ ] 啟用 branch protection
- [ ] 合併前要求 CI build 成功
- [ ] Dependabot 已啟用
- [ ] Repository 不含密碼、token、客戶機密或不必要個資

## Cloudflare

- [ ] Production branch 為 `main`
- [ ] Build command 為 `npm run build`
- [ ] Output directory 為 `dist`
- [ ] 設定 Node.js 22
- [ ] 設定 `PUBLIC_SITE_URL`
- [ ] 設定 `PUBLIC_CONTACT_EMAIL`
- [ ] 設定 Cloudflare Web Analytics token
- [ ] Preview 與 Production 部署皆成功
- [ ] 綁定正式網域並強制 HTTPS
- [ ] 確認 `_headers` 已套用

## 品質

- [ ] 手機、平板、桌面版面正常
- [ ] 鍵盤可操作導覽與所有連結
- [ ] 每頁 title、description、canonical、Open Graph 正確
- [ ] 404 頁面正常
- [ ] 所有圖片尺寸、壓縮與替代文字正確
- [ ] 沒有失效連結
- [ ] Lighthouse Performance、Accessibility、Best Practices、SEO 已檢查
- [ ] 正式網域的 robots 行為正確
