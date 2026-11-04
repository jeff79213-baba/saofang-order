import type { Role } from '../types'
import { hasFirebaseEnv } from './repo'
import { firebaseApp } from './firebase'

export interface AccountRow {
  uid: string
  email: string
  role: Role
  name: string
  disabled: boolean
  deleted: boolean
}

const DEMO_DOMAIN = 'saofang.local'

function isDemo() {
  return import.meta.env.VITE_USE_MOCK === 'true' || !hasFirebaseEnv()
}

let demoStore: AccountRow[] = [
  { uid: 'demo-front', email: `WIND00@${DEMO_DOMAIN}`, role: 'front', name: '櫃台', disabled: false, deleted: false },
  { uid: 'demo-housekeeping', email: `JEFF@${DEMO_DOMAIN}`, role: 'housekeeping', name: '房務', disabled: false, deleted: false },
]

function translate(e: unknown): never {
  const code = (e as { code?: string })?.code
  if (code === 'functions/not-found' || code === 'functions/internal') {
    throw new Error('後端功能尚未部署（Cloud Functions 需 Blaze 方案）')
  }
  if (code === 'functions/permission-denied') throw new Error('需要櫃台權限')
  if (code === 'functions/unauthenticated') throw new Error('請先登入')
  throw e
}

async function call<T = unknown>(data: Record<string, unknown>): Promise<T> {
  const { getFunctions, httpsCallable } = await import('firebase/functions')
  const fn = httpsCallable(getFunctions(firebaseApp(), 'us-central1'), 'saofangApi')
  try {
    const res = await fn(data)
    return res.data as T
  } catch (e) {
    translate(e)
  }
}

export async function listAccounts(): Promise<AccountRow[]> {
  if (isDemo()) return structuredClone(demoStore)
  const { accounts } = await call<{ accounts: AccountRow[] }>({ action: 'list' })
  return accounts
}

export async function createAccount(input: { username: string; password: string; role: Role; name: string }): Promise<void> {
  if (isDemo()) {
    const email = `${input.username}@${DEMO_DOMAIN}`
    if (demoStore.some(a => a.email === email)) throw new Error('帳號已存在')
    demoStore.push({ uid: `demo-${input.username}`, email, role: input.role, name: input.name, disabled: false, deleted: false })
    return
  }
  await call({ action: 'create', ...input })
}

export async function setRole(uid: string, role: Role): Promise<void> {
  if (isDemo()) { demoStore = demoStore.map(a => a.uid === uid ? { ...a, role } : a); return }
  await call({ action: 'setRole', uid, role })
}

export async function disableAccount(uid: string): Promise<void> {
  if (isDemo()) { demoStore = demoStore.map(a => a.uid === uid ? { ...a, disabled: true } : a); return }
  await call({ action: 'disable', uid })
}

export async function enableAccount(uid: string): Promise<void> {
  if (isDemo()) { demoStore = demoStore.map(a => a.uid === uid ? { ...a, disabled: false } : a); return }
  await call({ action: 'enable', uid })
}

export async function deleteAccount(uid: string): Promise<void> {
  if (isDemo()) { demoStore = demoStore.map(a => a.uid === uid ? { ...a, deleted: true, disabled: true } : a); return }
  await call({ action: 'delete', uid })
}

export async function restoreAccount(uid: string): Promise<void> {
  if (isDemo()) { demoStore = demoStore.map(a => a.uid === uid ? { ...a, deleted: false, disabled: false } : a); return }
  await call({ action: 'restore', uid })
}

export async function purgeAccount(uid: string): Promise<void> {
  if (isDemo()) { demoStore = demoStore.filter(a => a.uid !== uid); return }
  await call({ action: 'purge', uid })
}
