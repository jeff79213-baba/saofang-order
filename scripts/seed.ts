import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const here = path.dirname(fileURLToPath(import.meta.url))
const keyDir = path.resolve(here, '..', '..')

const DEFAULT_FLOORS = [1, 2, 3, 5]
const DEFAULT_LAYOUT = {
  A: { '1': 2, '2': 2, '3': 2, '5': 2 },
  B: { '1': 12, '2': 12, '3': 12, '5': 12 },
}

function findKeyFile(): string | null {
  const files = fs.readdirSync(keyDir).filter(f => /^opencode-sk-.*\.json$/i.test(f)).sort()
  return files.length ? path.join(keyDir, files[0]) : null
}

function buildRoomList(layout: Record<string, Record<string, number>>, floors: number[]) {
  const out: Array<{ id: string; building: string; floor: number; no: string; enabled: boolean }> = []
  for (const building of ['A', 'B']) {
    for (const floor of floors) {
      const count = layout[building]?.[String(floor)] ?? 0
      for (let seq = 1; seq <= count; seq++) {
        const no = String(floor * 100 + seq)
        out.push({ id: `${building}-${no}`, building, floor, no, enabled: true })
      }
    }
  }
  return out
}

async function main() {
  const key = findKeyFile()
  if (!key) {
    console.log('[略過] 找不到 opencode-sk-*.json 服務帳號金鑰，未執行 seed。')
    return
  }
  const serviceAccount = JSON.parse(fs.readFileSync(key, 'utf8'))
  initializeApp({ credential: cert(serviceAccount) })
  const db = getFirestore()

  await db.collection('sq-settings').doc('app').set({ floors: DEFAULT_FLOORS, layout: DEFAULT_LAYOUT }, { merge: true })

  const rooms = buildRoomList(DEFAULT_LAYOUT, DEFAULT_FLOORS)
  const batch = db.batch()
  for (const r of rooms) {
    const { id, ...rest } = r
    batch.set(db.collection('sq-rooms').doc(id), rest, { merge: true })
  }
  await batch.commit()

  console.log(`已建立 ${rooms.length} 筆房間與 sq-settings/app。`)
}

main().then(() => process.exit(0)).catch(e => { console.error('[失敗]', e.message); process.exit(1) })
