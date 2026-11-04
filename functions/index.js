import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

initializeApp()

const DOMAIN = 'saofang.local'
const ROLES = ['front', 'housekeeping']

function assertFront(me) {
  if (!me || me.role !== 'front' || me.deleted === true || me.disabled === true) {
    throw new HttpsError('permission-denied', '僅櫃台可管理帳號')
  }
}

export const saofangApi = onCall(async (req) => {
  if (!req.auth) throw new HttpsError('unauthenticated', '請先登入')
  const db = getFirestore()
  const admin = getAuth()
  const uid = req.auth.uid

  const meSnap = await db.collection('sq-staff').doc(uid).get()
  const me = meSnap.exists ? meSnap.data() : null
  assertFront(me)

  const data = req.data || {}
  const action = data.action
  const staffCol = db.collection('sq-staff')

  switch (action) {
    case 'list': {
      const list = await admin.listUsers(1000)
      const staffSnap = await staffCol.get()
      const staffMap = new Map(staffSnap.docs.map(d => [d.id, d.data()]))
      const accounts = list.users.map(u => {
        const s = staffMap.get(u.uid) || {}
        return {
          uid: u.uid,
          email: u.email || '',
          role: s.role || 'housekeeping',
          name: s.name || '',
          disabled: u.disabled === true || s.disabled === true,
          deleted: s.deleted === true,
        }
      })
      return { accounts }
    }

    case 'create': {
      const username = String(data.username || '').trim()
      const password = String(data.password || '')
      const role = data.role
      const name = String(data.name || '').trim()
      if (!/^[A-Za-z0-9]{3,20}$/.test(username)) throw new HttpsError('invalid-argument', '使用者名稱需 3–20 位英數')
      if (password.length < 6) throw new HttpsError('invalid-argument', '密碼至少 6 位')
      if (!ROLES.includes(role)) throw new HttpsError('invalid-argument', '角色錯誤')
      const email = `${username}@${DOMAIN}`
      const user = await admin.createUser({ email, password, emailVerified: true })
      await staffCol.doc(user.uid).set({ role, name, createdAt: Date.now() })
      return { uid: user.uid }
    }

    case 'setRole': {
      const target = String(data.uid || '')
      if (!ROLES.includes(data.role)) throw new HttpsError('invalid-argument', '角色錯誤')
      await staffCol.doc(target).set({ role: data.role }, { merge: true })
      return { ok: true }
    }

    case 'disable':
    case 'delete': {
      const target = String(data.uid || '')
      if (target === uid) throw new HttpsError('failed-precondition', '不可停用/刪除自己')
      await admin.updateUser(target, { disabled: true })
      const patch = action === 'delete'
        ? { deleted: true, deletedAt: Date.now(), disabled: true }
        : { disabled: true }
      await staffCol.doc(target).set(patch, { merge: true })
      return { ok: true }
    }

    case 'enable':
    case 'restore': {
      const target = String(data.uid || '')
      await admin.updateUser(target, { disabled: false })
      const patch = action === 'restore'
        ? { deleted: false, disabled: false }
        : { disabled: false }
      await staffCol.doc(target).set(patch, { merge: true })
      return { ok: true }
    }

    case 'purge': {
      const target = String(data.uid || '')
      if (target === uid) throw new HttpsError('failed-precondition', '不可刪除自己')
      await admin.deleteUser(target).catch(() => {})
      await staffCol.doc(target).delete()
      return { ok: true }
    }

    default:
      throw new HttpsError('invalid-argument', '未知的動作')
  }
})
