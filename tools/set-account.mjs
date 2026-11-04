import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { cert, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore, FieldValue } from 'firebase-admin/firestore'

const here = path.dirname(fileURLToPath(import.meta.url))
const keyDir = path.resolve(here, '..', '..')
const DOMAIN = 'saofang.local'
const ROLES = ['front', 'housekeeping']

function findKeyFile() {
  const files = fs.readdirSync(keyDir).filter(f => /^opencode-sk-.*\.json$/i.test(f)).sort()
  if (!files.length) throw new Error(`找不到金鑰檔：${path.join(keyDir, 'opencode-sk-*.json')}`)
  return path.join(keyDir, files[0])
}

let app = null
function admin() {
  if (!app) app = initializeApp({ credential: cert(JSON.parse(fs.readFileSync(findKeyFile(), 'utf8'))) })
  return { auth: getAuth(app), db: getFirestore(app) }
}

function accountToEmail(raw) {
  const a = String(raw || '').trim()
  if (!a) return ''
  return a.includes('@') ? a.toLowerCase() : `${a.toLowerCase()}@${DOMAIN}`
}

function usage() {
  console.log('用法：')
  console.log('  node tools/set-account.mjs <帳號> <密碼> [front|housekeeping] [備註中文名]  開帳號（預設 housekeeping）')
  console.log('  node tools/set-account.mjs <帳號> --password <新密碼>           重設密碼')
  console.log('  node tools/set-account.mjs <帳號> --remove                      永久刪除帳號')
  console.log('  node tools/set-account.mjs <帳號> --disable | --enable         停用/啟用')
  console.log('  node tools/set-account.mjs --list                              列出名單')
  console.log(`  （<帳號> 沒寫 @ 時自動補 @${DOMAIN}）`)
}

async function list() {
  const { db } = admin()
  const snap = await db.collection('sq-staff').orderBy('email').get()
  if (snap.empty) { console.log('名單是空的。開第一個櫃台帳號：node tools/set-account.mjs wind 密碼 front'); return }
  snap.forEach(d => {
    const s = d.data() || {}
    const state = s.deleted ? '保留區' : (s.disabled ? '停用' : '正常')
    console.log(`- ${(s.email || d.id).padEnd(28)} ${String(s.role).padEnd(12)} ${state}`)
  })
}

async function open(rawAccount, password, role, note) {
  const email = accountToEmail(rawAccount)
  if (!email) throw new Error('帳號格式不正確')
  if (!password || password.length < 6) throw new Error('密碼至少 6 碼')
  if (!ROLES.includes(role)) throw new Error('角色只能是 front 或 housekeeping')
  const { auth, db } = admin()
  let created = true
  try {
    await auth.createUser({ email, password, emailVerified: true, disabled: false })
  } catch (e) {
    if (e.code !== 'auth/email-already-exists') throw e
    created = false
    await auth.updateUser((await auth.getUserByEmail(email)).uid, { password, emailVerified: true, disabled: false })
  }
  const uid = (await auth.getUserByEmail(email)).uid
  await db.doc(`sq-staff/${uid}`).set({
    role, name: '', note: note || '', email: email.toLowerCase(),
    deleted: false, disabled: false, createdAt: FieldValue.serverTimestamp(),
  }, { merge: true })
  console.log(`[完成] ${email} → ${role}${created ? '' : '（已存在，已更新密碼/角色）'}`)
}

async function resetPassword(rawAccount, password) {
  const email = accountToEmail(rawAccount)
  if (!password || password.length < 6) throw new Error('密碼至少 6 碼')
  const { auth } = admin()
  const user = await auth.getUserByEmail(email)
  await auth.updateUser(user.uid, { password })
  console.log(`[完成] ${email} 密碼已重設`)
}

async function remove(rawAccount) {
  const email = accountToEmail(rawAccount)
  const { auth, db } = admin()
  try { await auth.deleteUser((await auth.getUserByEmail(email)).uid) }
  catch (e) { if (e.code !== 'auth/user-not-found') throw e }
  const snap = await db.collection('sq-staff').where('email', '==', email).get()
  for (const d of snap.docs) await d.ref.delete()
  console.log(`[完成] 已永久刪除 ${email}`)
}

async function setDisabled(rawAccount, disabled) {
  const email = accountToEmail(rawAccount)
  const { auth, db } = admin()
  const user = await auth.getUserByEmail(email)
  await auth.updateUser(user.uid, { disabled })
  await db.doc(`sq-staff/${user.uid}`).set({ disabled }, { merge: true })
  console.log(`[完成] ${email} 已${disabled ? '停用' : '啟用'}`)
}

async function main() {
  const args = process.argv.slice(2)
  if (!args.length || args[0] === '--help') return usage()
  if (args[0] === '--list') return list()
  const [account, second, third, fourth] = args
  if (second === '--remove') return remove(account)
  if (second === '--password') return resetPassword(account, third)
  if (second === '--disable') return setDisabled(account, true)
  if (second === '--enable') return setDisabled(account, false)
  return open(account, second, third || 'housekeeping', fourth)
}

main().then(() => process.exit(0)).catch(err => { console.error('[失敗]', err.message); process.exit(1) })
