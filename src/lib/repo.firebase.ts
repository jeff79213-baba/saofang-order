import {
  collection, doc, onSnapshot, getDoc, getDocs, setDoc, updateDoc, writeBatch,
} from 'firebase/firestore'
import type { RoomMeta, RoomState, Settings } from '../types'
import { DEFAULT_FLOORS, DEFAULT_LAYOUT } from '../types'
import { authClient, dbClient } from './firebase'
import { buildRoomList } from './rooms'
import type { RoomRepo } from './repo'

const DAYS = 'sq-days'
const ROOMS = 'sq-rooms'
const SETTINGS = 'sq-settings'

export function createFirebaseRepo(): RoomRepo {
  const db = dbClient()
  let currentDay = ''
  const uid = () => authClient().currentUser?.uid ?? ''

  const dayCol = (day: string) => collection(db, DAYS, day, 'rooms')
  const roomDoc = (day: string, id: string) => doc(db, DAYS, day, 'rooms', id)

  function freshState(m: RoomMeta, status: RoomState['status'] = 'dirty'): Omit<RoomState, 'id'> {
    return {
      building: m.building, floor: m.floor, no: m.no,
      status, checkInTime: null, nextGuest: false,
      checkedOutAt: null, prevStatus: null, updatedAt: Date.now(), updatedBy: uid(),
    }
  }

  return {
    subscribe(dayKey, cb) {
      currentDay = dayKey
      return onSnapshot(
        dayCol(dayKey),
        snap => cb(snap.docs.map(d => ({ id: d.id, ...(d.data() as Omit<RoomState, 'id'>) }))),
        () => { /* 未登入或權限不足時靜默 */ },
      )
    },
    async update(roomId, patch) {
      await updateDoc(roomDoc(currentDay, roomId), { ...patch, updatedAt: Date.now(), updatedBy: uid() })
    },
    async bulkUpdate(patches) {
      const batch = writeBatch(db)
      for (const { roomId, patch } of patches) {
        batch.update(roomDoc(currentDay, roomId), { ...patch, updatedAt: Date.now(), updatedBy: uid() })
      }
      await batch.commit()
    },
    async resetDay(fromDayKey, toDayKey) {
      const snap = await getDocs(dayCol(fromDayKey))
      const metas = await getDocs(collection(db, ROOMS))
      const batch = writeBatch(db)
      const seen = new Set<string>()
      snap.forEach(d => {
        const r = d.data() as Omit<RoomState, 'id'>
        seen.add(d.id)
        batch.set(roomDoc(toDayKey, d.id), {
          building: r.building, floor: r.floor, no: r.no,
          status: r.status === 'occupied' ? 'occupied' : 'dirty',
          checkInTime: null, nextGuest: false, checkedOutAt: null, prevStatus: null,
          updatedAt: Date.now(), updatedBy: uid(),
        })
      })
      metas.forEach(d => {
        if (seen.has(d.id)) return
        const m = { id: d.id, ...(d.data() as Omit<RoomMeta, 'id'>) }
        batch.set(roomDoc(toDayKey, d.id), freshState(m))
      })
      await batch.commit()
    },
    async ensureDay(dayKey, prevDayKey) {
      const snap = await getDocs(dayCol(dayKey))
      if (snap.empty) await this.resetDay(prevDayKey, dayKey)
    },
    subscribeRooms(cb) {
      return onSnapshot(
        collection(db, ROOMS),
        snap => cb(snap.docs.map(d => ({ id: d.id, ...(d.data() as Omit<RoomMeta, 'id'>) }))),
        () => { /* 未登入或權限不足時靜默 */ },
      )
    },
    async getSettings() {
      const s = await getDoc(doc(db, SETTINGS, 'app'))
      if (s.exists()) return s.data() as Settings
      return { floors: DEFAULT_FLOORS, layout: DEFAULT_LAYOUT }
    },
    async saveSettings(p) {
      await setDoc(doc(db, SETTINGS, 'app'), p, { merge: true })
    },
    async setRoomEnabled(roomId, enabled) {
      await updateDoc(doc(db, ROOMS, roomId), { enabled })
    },
    async applyLayout(layout) {
      const settings = await this.getSettings()
      await setDoc(doc(db, SETTINGS, 'app'), { layout }, { merge: true })
      const fresh = buildRoomList(layout, settings.floors)
      const freshIds = new Set(fresh.map(r => r.id))
      const existing = await getDocs(collection(db, ROOMS))
      const existingIds = new Set(existing.docs.map(d => d.id))
      const batch = writeBatch(db)
      for (const r of fresh) {
        if (!existingIds.has(r.id)) {
          const { id, ...rest } = r
          batch.set(doc(db, ROOMS, id), rest)
        }
      }
      for (const d of existing.docs) {
        if (!freshIds.has(d.id)) batch.update(doc(db, ROOMS, d.id), { enabled: false })
      }
      await batch.commit()

      if (currentDay) {
        const daySnap = await getDocs(dayCol(currentDay))
        const dayIds = new Set(daySnap.docs.map(d => d.id))
        const b2 = writeBatch(db)
        let any = false
        for (const r of fresh) {
          if (!dayIds.has(r.id)) {
            b2.set(roomDoc(currentDay, r.id), freshState(r))
            any = true
          }
        }
        if (any) await b2.commit()
      }
    },
  }
}
