import type { Role } from '../types'
import { hasFirebaseEnv } from './repo'
import { dbClient } from './firebase'

export interface AccountRow {
  uid: string
  email: string
  role: Role
  name: string
  disabled: boolean
  deleted: boolean
}

function isDemo() {
  return import.meta.env.VITE_USE_MOCK === 'true' || !hasFirebaseEnv()
}

let demoStore: AccountRow[] = [
  { uid: 'demo-front', email: 'WIND00@saofang.local', role: 'front', name: '櫃台', disabled: false, deleted: false },
  { uid: 'demo-housekeeping', email: 'JEFF@saofang.local', role: 'housekeeping', name: '房務', disabled: false, deleted: false },
]

export async function listAccounts(): Promise<AccountRow[]> {
  if (isDemo()) return structuredClone(demoStore)
  const { collection, getDocs } = await import('firebase/firestore')
  const snap = await getDocs(collection(dbClient(), 'sq-staff'))
  return snap.docs
    .map(d => {
      const s = d.data() as Record<string, unknown>
      return {
        uid: d.id,
        email: (s.email as string) || '',
        role: (s.role as Role) || 'housekeeping',
        name: (s.name as string) || '',
        disabled: s.disabled === true,
        deleted: s.deleted === true,
      }
    })
    .sort((a, b) => a.email.localeCompare(b.email))
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
export const disableAccount = (uid: string) => patch(uid, { disabled: true })
export const enableAccount = (uid: string) => patch(uid, { disabled: false })
export const deleteAccount = (uid: string) => patch(uid, { deleted: true, disabled: true, deletedAt: Date.now() })
export const restoreAccount = (uid: string) => patch(uid, { deleted: false, disabled: false })

export function createAccount(): never {
  throw new Error('建立帳號請用工具：node tools/set-account.mjs <帳號> <密碼> [front|housekeeping]')
}

export function purgeAccount(): never {
  throw new Error('永久刪除請用工具：node tools/set-account.mjs <帳號> --remove')
}
