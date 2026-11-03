# 民宿掃房順序系統

手機優先的網頁 App：兩棟民宿（一館 A、二館 B）、預設 56 間房，用格子呈現每間房狀態，依權重自動算出**每層各自的掃房順序**，櫃台與房務在各自手機上即時同步。

## 功能

- 兩種角色：**櫃台（front）** 可入住／退房、設時間、後續入住、一鍵滿房、換日、設定；**房務（housekeeping）** 唯讀＋打掃模式。
- 四種狀態：入住中 / 待入住 / 剛退房・尚未打掃 / 已打掃。
- 排序：待入住(有時間) → 待入住(無時間) → 剛退房 → 尚未打掃；入住中與已打掃不進佇列、不佔號。每層各自從 1 開始。
- 房數可後台增減、單間可停用；樓層固定 1/2/3/5（無 4 樓）。

## 開發

```bash
npm install
npm run dev        # 無 Firebase 設定時自動走 DEMO 模式（localStorage）
npm run test       # Vitest（純函式）
npx playwright test  # E2E（跨角色權限）
npm run build      # 型別檢查 + 打包
```

### DEMO 模式

沒有 `.env.local`（或 `VITE_USE_MOCK=true`）時，App 使用 localStorage 假資料，Header 會顯示「DEMO 模式（資料不共用）」，可完整操作。
以 `?role=housekeeping` 開啟可模擬房務登入。

## Firebase 設定

1. 建立 Firebase 專案 → 啟用 Firestore（production mode）→ 啟用 Auth 的 Email/Password → 新增 Hosting。
2. 在 Console 建立兩個帳號（例：`front@…`、`housekeeping@…`），到 Firestore 建立 `sq-staff/{uid}` 並寫入 `role: 'front'` 或 `'housekeeping'`。
3. 複製 `.env.example` 為 `.env.local`，填入：
   ```
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_APP_ID=
   VITE_USE_MOCK=false
   ```
4. 建立 Hosting site 並部署：
   ```bash
   firebase hosting:sites:list --project opencode-sk
   firebase hosting:sites:create saofang-sk --project opencode-sk
   npm run seed           # 建立 56 筆 sq-rooms 與 sq-settings/app（需父目錄服務帳號金鑰）
   npm run deploy:safe    # 漂移檢查 + hosting + firestore
   ```

Firestore 頂層集合一律使用 `sq-` 前綴：`sq-staff`、`sq-settings`、`sq-rooms`、`sq-days`。
安全性規則見 `firestore.rules`：房務僅能改當日房況的 `status / prevStatus / updatedAt / updatedBy`，且狀態限 `clean / dirty / arriving`。

## 技術棧

React 18 + TypeScript + Vite + Tailwind CSS；Firebase Auth / Firestore / Hosting；Vitest + Playwright。無任何 UI 元件庫、狀態管理庫或日期庫。

## 設計文件

- 規格：`docs/superpowers/specs/2026-11-03-民宿掃房順序系統-design.md`
- 實作計畫：`docs/superpowers/plans/2026-11-03-民宿掃房順序系統.md`
