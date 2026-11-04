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
2. 建立帳號（二選一，皆不需 Blaze）：
   - **App 內**：櫃台登入後 → 設定 → 帳號管理 → 新增帳號。
   - **工具**（Admin SDK，可先開第一位櫃台帳號）：
   ```bash
   node tools/set-account.mjs WIND00 000000 front          # 櫃台
   node tools/set-account.mjs JEFF   000000 housekeeping   # 房務
   node tools/set-account.mjs --list                       # 列出名單
   node tools/set-account.mjs WIND00 --password 新密碼      # 改密碼
   node tools/set-account.mjs JEFF --remove                # 永久刪除
   node tools/set-account.mjs JEFF --disable                # 停用
   ```
   帳號省略 `@` 時自動補 `@saofang.local`；角色為 `front`（櫃台）或 `housekeeping`（房務）。
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

### 帳號管理

- **App 內**（櫃台：設定 → 帳號管理）：**新增帳號**、列出全部帳號、備註（中文名）、改角色、停用、刪除（進保留區）、復原。刪除＝收回權限（停用登入）並放入保留區，可復原。櫃台帳號一律排最前面。
- **新增帳號原理**：前端用**第二個 Firebase app 實例**呼叫 `createUserWithEmailAndPassword` 建立 Auth 使用者（不影響目前櫃台登入），再寫入 `sq-staff` 名單；因此**不需要 Cloud Functions、不需要 Blaze**（比照「風自然餐廳專用」做法）。
- **工具**（Admin SDK，選用）：重設密碼、永久刪除，見上方 `tools/set-account.mjs`。
- 短帳號自動補 `@saofang.local`。

Firestore 頂層集合一律使用 `sq-` 前綴：`sq-staff`、`sq-settings`、`sq-rooms`、`sq-days`。
安全性規則見 `firestore.rules`：房務僅能改當日房況的 `status / prevStatus / updatedAt / updatedBy`，且狀態限 `clean / dirty / arriving`。

## 技術棧

React 18 + TypeScript + Vite + Tailwind CSS；Firebase Auth / Firestore / Hosting；Vitest + Playwright。無任何 UI 元件庫、狀態管理庫或日期庫。

## 設計文件

- 規格：`docs/superpowers/specs/2026-11-03-民宿掃房順序系統-design.md`
- 實作計畫：`docs/superpowers/plans/2026-11-03-民宿掃房順序系統.md`
