import type { Role } from '../types'
import { hasFirebaseEnv } from './repo'
import { dbClient } from './firebase'

export interface AccountRow {
  uid: string
  email: string
  role: Role
  name: string
  note: string
  disabled: boolean
  deleted: boolean
}

function isDemo() {
  return import.meta.env.VITE_USE_MOCK === 'true' || !hasFirebaseEnv()
}

let demoStore: AccountRow[] = [
  { uid: 'demo-front', email: 'WIND00@saofang.local', role: 'front', name: '櫃台', note: '', disabled: false, deleted: false },
  { uid: 'demo-housekeeping', email: 'JEFF@saofang.local', role: 'housekeeping', name: '房務', note: '', disabled: false, deleted: false },
]

// 櫃台一律排在最前面，其次依帳號
function sortAccounts(rows: AccountRow[]): AccountRow[] {
  return rows.sort((a, b) => {
    const fa = a.role === 'front' ? 0 : 1
    const fb = b.role === 'front' ? 0 : 1
    if (fa !== fb) return fa - fb
    return a.email.localeCompare(b.email)
  })
}

export async function listAccounts(): Promise<AccountRow[]> {
  if (isDemo()) return sortAccounts(structuredClone(demoStore))
  const { collection, getDocs } = await import('firebase/firestore')
  const snap = await getDocs(collection(dbClient(), 'sq-staff'))
  return sortAccounts(snap.docs.map(d => {
    const s = d.data() as Record<string, unknown>
    return {
      uid: d.id,
      email: (s.email as string) || '',
      role: (s.role as Role) || 'housekeeping',
      name: (s.name as string) || '',
      note: (s.note as string) || '',
      disabled: s.disabled === true,
      deleted: s.deleted === true,
    }
  }))
}

async function patch(uid: string, data: Record<string, unknown>): Promise<void> {
  if (isDemo()) {
    demoStore = demoStore.map(a => (a.uid === uid ? { ...a, ...data } as AccountRow : a))
    return
  }
  const { doc, updateDoc } = await import('firebase/firestore')
  await updateDoc(doc(dbClient(), 'sq-staff', uid), data)
}

export const setRole = (uid: string, role: Role) => patch(uid, { role })
export const setNote = (uid: string, note: string) => patch(uid, { note })
export const disableAccount = (uid: string) => patch(uid, { disabled: true })
export const enableAccount = (uid: string) => patch(uid, { disabled: false })
export const deleteAccount = (uid: string) => patch(uid, { deleted: true, disabled: true, deletedAt: Date.now() })
export const restoreAccount = (uid: string) => patch(uid, { deleted: false, disabled: false })

const DOMAIN = 'saofang.local'

export function accountToEmail(raw: string): string {
  const a = raw.trim()
  if (!a) return ''
  return a.includes('@') ? a.toLowerCase() : `${a.toLowerCase()}@${DOMAIN}`
}

export async function createAccount(input: {
  username: string; password: string; role: Role; note: string
}): Promise<void> {
  const email = accountToEmail(input.username)
  if (!/^[a-z0-9._-]{3,}@/.test(email)) throw new Error('帳號需 3 位以上英數')
  if (!input.password || input.password.length < 6) throw new Error('密碼至少 6 碼')

  if (isDemo()) {
    if (demoStore.some(a => a.email === email)) throw new Error('此帳號已存在')
    demoStore.push({ uid: `demo-${email}`, email, role: input.role, name: '', note: input.note, disabled: false, deleted: false })
    return
  }

  const { initializeApp, deleteApp } = await import('firebase/app')
  const { getAuth, createUserWithEmailAndPassword, signOut, deleteUser } = await import('firebase/auth')
  const { firebaseConfig } = await import('./firebase')

  // 用第二個 app 實例建立帳號，不影響目前櫃台登入狀態
  const secondary = initializeApp(firebaseConfig(), `saofang-prov-${Date.now()}`)
  const sAuth = getAuth(secondary)
  let cred: Awaited<ReturnType<typeof createUserWithEmailAndPassword>> | null = null
  try {
    cred = await createUserWithEmailAndPassword(sAuth, email, input.password)
    const { doc, setDoc } = await import('firebase/firestore')
    await setDoc(doc(dbClient(), 'sq-staff', cred.user.uid), {
      role: input.role, name: '', note: input.note, email,
      disabled: false, deleted: false, createdAt: Date.now(),
    })
  } catch (e) {
    if (cred) await deleteUser(cred.user).catch(() => {})
    const code = (e as { code?: string })?.code
    if (code === 'auth/email-already-in-use') throw new Error('此帳號已存在')
    throw e
  } finally {
    await signOut(sAuth).catch(() => {})
    await deleteApp(secondary).catch(() => {})
  }
}

export function purgeAccount(): never {
  throw new Error('永久刪除請用工具：node tools/set-account.mjs <帳號> --remove')
}
