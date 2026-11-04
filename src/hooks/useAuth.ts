import { useEffect, useState } from 'react'
import type { Role } from '../types'
import { hasFirebaseEnv } from '../lib/repo'

export interface AuthState {
  role: Role | null
  uid: string
  email: string
  isDemo: boolean
  loading: boolean
}

function demoState(): AuthState {
  const q = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('role')
    : null
  const role: Role = q === 'housekeeping' ? 'housekeeping' : 'front'
  return { role, uid: `demo-${role}`, email: `demo-${role}@local`, isDemo: true, loading: false }
}

export function useAuth(): AuthState & { signOut: () => Promise<void> } {
  const demo = import.meta.env.VITE_USE_MOCK === 'true' || !hasFirebaseEnv()
  const [state, setState] = useState<AuthState>(() =>
    demo ? demoState() : { role: null, uid: '', email: '', isDemo: false, loading: true },
  )

  useEffect(() => {
    if (demo) return
    let unsub: () => void = () => {}
    ;(async () => {
      const { authClient, dbClient } = await import('../lib/firebase')
      const { onAuthStateChanged, signOut: fbSignOut } = await import('firebase/auth')
      const { doc, getDoc } = await import('firebase/firestore')
      unsub = onAuthStateChanged(authClient(), async (user) => {
        if (!user) {
          setState(s => ({ ...s, role: null, uid: '', email: '', loading: false }))
          return
        }
        try {
          const snap = await getDoc(doc(dbClient(), 'sq-staff', user.uid))
          const data = snap.exists() ? snap.data() : null
          if (!data || data.deleted === true || data.disabled === true) {
            await fbSignOut(authClient())
            setState(s => ({ ...s, role: null, uid: '', email: '', loading: false }))
            return
          }
          setState(s => ({ ...s, role: data.role as Role, uid: user.uid, email: user.email ?? '', loading: false }))
        } catch {
          setState(s => ({ ...s, role: null, uid: user.uid, email: user.email ?? '', loading: false }))
        }
      })
    })()
    return () => unsub()
  }, [demo])

  async function signOut() {
    if (demo) return
    const { authClient } = await import('../lib/firebase')
    const { signOut: fbSignOut } = await import('firebase/auth')
    await fbSignOut(authClient())
  }

  return { ...state, signOut }
}
