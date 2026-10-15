# StartPage

自訂起始頁（startpage）—— 單檔 HTML、零依賴、離線可用。

- 線上：https://lsisan1212.github.io/StartPage/
- 資料（書籤／主題）存於瀏覽器 `localStorage`（key: `startpage-data-v1`），唔會上傳。
- PWA：`manifest.json` + `sw.js` + `icon.svg`，可安裝、離線開啟。

## 功能

| 分類 | 內容 |
|---|---|
| 書籤 | 多頁面（page tabs）、小工具（widget）分組、list / icons 檢視、masonry 瀑布流、拖曳重排、跨頁拖移、widget 顏色／收埋 |
| 小工具類型 | 連結清單、Crypto 報價（CoinGecko，紅漲綠跌）、股票報價（騰訊 qt.gtimg，A股/港股/美股，紅漲綠跌）、天氣（Open-Meteo，免 key）、便簽、待辦、計時器／番茄鐘、最常用書籤（click 統計自動生成） |
| 搜尋 | 搜尋列（Google/Bing/DDG/Brave/YouTube/GitHub + AI engines + YT Transcript）+ Command palette（`Ctrl+Shift+K` 或頂欄 `⌘`） |
| 外觀 | 6 主題、強調色、背景（純色／Bing 每日一圖／圖片 URL）、密度（compact/cozy/spacious）、三語 i18n（en/繁中/简中） |
| 數據 | 匯出／匯入 JSON、複製／貼上、QR 碼傳送、5 位數字 code 傳送、匯入瀏覽器書籤（Netscape `bookmarks.html`） |
| 快速新增 | 拖 URL 落頁面 → 彈窗揀 widget 加入；`+ Widget` 選類型新增 |

## 快捷鍵

- `Ctrl/Cmd+K` — 聚焦搜尋列
- `Ctrl/Cmd+Shift+K` — Command palette
- `Ctrl/Cmd+Shift+N` — 新增頁面
- `Ctrl/Cmd+Shift+W` — 新增小工具

## 版本

- 頁底 footer 顯示版本號（link 去 repo）+ 更新日期；`manifest.json` 有 `version` 欄位。
- 目前：v1.1（2026-10-15）

## 檔案

- `index.html` — 全部（HTML + CSS + JS 單檔）
- `manifest.json` / `sw.js` / `icon.svg` — PWA
