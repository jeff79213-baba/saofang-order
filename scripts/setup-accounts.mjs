import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { initializeApp, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

const here = path.dirname(fileURLToPath(import.meta.url))
const keyDir = path.resolve(here, '..', '..')
const files = fs.readdirSync(keyDir).filter(f => /^opencode-sk-.*\.json$/i.test(f)).sort()
if (!files.length) {
  console.log('[略過] 找不到服務帳號金鑰。')
  process.exit(0)
}
const serviceAccount = JSON.parse(fs.readFileSync(path.join(keyDir, files[0]), 'utf8'))
initializeApp({ credential: cert(serviceAccount) })
const auth = getAuth()
const db = getFirestore()

const DOMAIN = 'saofang.local'
const PASSWORD = process.env.SAOFANG_PASSWORD || '000000'

const ACCOUNTS = [
  { local: 'WIND00', role: 'front', name: '櫃台' },
  { local: 'JEFF', role: 'housekeeping', name: '房務' },
]
// 先前的臨時範例帳號，若存在則移除
const OLD = ['saofang-front@example.com', 'saofang-housekeeping@example.com']

async function upsert(local, password) {
  const email = `${local}@${DOMAIN}`
  try {
    const u = await auth.getUserByEmail(email)
    await auth.updateUser(u.uid, { password, emailVerified: true })
    return { user: u, created: false }
  } catch {
    const u = await auth.createUser({ email, password, emailVerified: true })
    return { user: u, created: true }
  }
}

async function main() {
  for (const acc of ACCOUNTS) {
    const { user, created } = await upsert(acc.local, PASSWORD)
    await db.collection('sq-staff').doc(user.uid).set({ role: acc.role, name: acc.name }, { merge: true })
    console.log(`[${created ? '建立' : '更新'}] ${acc.local}@${DOMAIN} → ${acc.role}（${acc.name}）`)
  }
  for (const email of OLD) {
    try {
      const u = await auth.getUserByEmail(email)
      await db.collection('sq-staff').doc(u.uid).delete()
      await auth.deleteUser(u.uid)
      console.log(`[移除] ${email}`)
    } catch { /* 不存在，略過 */ }
  }
  console.log(`\n登入使用者名稱：${ACCOUNTS.map(a => a.local).join(' / ')}`)
  console.log(`網域（登入時可省略）：@${DOMAIN}`)
  console.log(`密碼：${PASSWORD}`)
}

main().then(() => process.exit(0)).catch(e => { console.error('[失敗]', e.message); process.exit(1) })
