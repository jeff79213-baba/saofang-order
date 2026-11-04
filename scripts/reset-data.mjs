// 清除舊測試資料（sq-days 全部、sq-rooms）後重新建立 56 筆房間與設定。
// 用途：v1→v2 房間 ID 制切換、或測試環境重置。會刪除 sq-days 內所有資料！
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomUUID } from 'node:crypto'
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const here = path.dirname(fileURLToPath(import.meta.url))
const keyDir = path.resolve(here, '..', '..')
const files = fs.readdirSync(keyDir).filter(f => /^opencode-sk-.*\.json$/i.test(f)).sort()
if (!files.length) { console.log('[略過] 找不到金鑰。'); process.exit(0) }
const sa = JSON.parse(fs.readFileSync(path.join(keyDir, files[0]), 'utf8'))
initializeApp({ credential: cert(sa) })
const db = getFirestore()

const FLOORS = [1, 2, 3, 5]
const LAYOUT = { A: { '1': 2, '2': 2, '3': 2, '5': 2 }, B: { '1': 12, '2': 12, '3': 12, '5': 12 } }

async function deleteCollection(query) {
  let total = 0
  while (true) {
    const snap = await query.limit(300).get()
    if (snap.empty) break
    const batch = db.batch()
    snap.docs.forEach(d => batch.delete(d.ref))
    await batch.commit()
    total += snap.size
  }
  return total
}

async function main() {
  // 1) 刪除 sq-days 下所有 rooms 與 orders
  const days = await db.collection('sq-days').listDocuments()
  let removed = 0
  for (const day of days) {
    removed += await deleteCollection(day.collection('rooms'))
    removed += await deleteCollection(day.collection('orders'))
    await day.delete()
  }
  console.log(`已清除 sq-days 文件 ${removed} 筆。`)

  // 2) 刪除 sq-rooms
  const r = await deleteCollection(db.collection('sq-rooms'))
  console.log(`已清除 sq-rooms ${r} 筆。`)

  // 3) 重建
  await db.collection('sq-settings').doc('app').set({ floors: FLOORS, layout: LAYOUT }, { merge: true })
  const rooms = []
  for (const building of ['A', 'B']) {
    for (const floor of FLOORS) {
      const count = LAYOUT[building][String(floor)] ?? 0
      for (let seq = 1; seq <= count; seq++) {
        rooms.push({ id: `${building}-${randomUUID()}`, building, floor, no: String(floor * 100 + seq), enabled: true })
      }
    }
  }
  const batch = db.batch()
  for (const room of rooms) {
    const { id, ...rest } = room
    batch.set(db.collection('sq-rooms').doc(id), rest)
  }
  await batch.commit()
  console.log(`已重建 ${rooms.length} 筆房間與 sq-settings/app。`)
}

main().then(() => process.exit(0)).catch(e => { console.error('[失敗]', e.message); process.exit(1) })
