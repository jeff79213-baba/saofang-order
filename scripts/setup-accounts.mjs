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

const PASSWORD = process.env.SAOFANG_PASSWORD || 'windroom2026'
const ACCOUNTS = [
  { email: 'saofang-front@example.com', role: 'front', name: '櫃台' },
  { email: 'saofang-housekeeping@example.com', role: 'housekeeping', name: '房務' },
]

async function upsertUser(email) {
  try {
    return await auth.getUserByEmail(email)
  } catch {
    return await auth.createUser({ email, password: PASSWORD, emailVerified: true })
  }
}

async function main() {
  for (const acc of ACCOUNTS) {
    const user = await upsertUser(acc.email)
    await db.collection('sq-staff').doc(user.uid).set({ role: acc.role, name: acc.name }, { merge: true })
    console.log(`[帳號] ${acc.email} → ${acc.role}`)
  }
  console.log(`\n登入密碼：${PASSWORD}`)
}

main().then(() => process.exit(0)).catch(e => { console.error('[失敗]', e.message); process.exit(1) })
