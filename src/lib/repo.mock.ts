import type { BuildingId, RoomMeta, RoomState, Settings } from '../types'
import { DEFAULT_FLOORS, DEFAULT_LAYOUT } from '../types'
import { buildRoomList, newRoomId } from './rooms'
import type { RoomRepo } from './repo'

const K = {
  settings: 'sq-demo-settings',
  rooms: 'sq-demo-rooms',
  disabled: 'sq-demo-disabled',
  orders: 'sq-demo-orders',
  day: (d: string) => `sq-demo-day-${d}`,
}

function load<T>(k: string): T | null {
  try { const s = localStorage.getItem(k); return s ? (JSON.parse(s) as T) : null } catch { return null }
}
function save(k: string, v: unknown) { localStorage.setItem(k, JSON.stringify(v)) }

export function createMockRepo(): RoomRepo {
  let settings: Settings = load<Settings>(K.settings) ?? { floors: DEFAULT_FLOORS, layout: DEFAULT_LAYOUT }
  let disabled = new Set<string>(load<string[]>(K.disabled) ?? [])
  let rooms: RoomMeta[] = load<RoomMeta[]>(K.rooms)
    ?? buildRoomList(settings.layout, settings.floors).map(r => ({ ...r, enabled: !disabled.has(r.id) }))
  let orders: Record<string, string[]> = load<Record<string, string[]>>(K.orders) ?? {}
  let currentDay = ''

  save(K.rooms, rooms)
  save(K.settings, settings)

  const daySubs = new Map<string, Set<(r: RoomState[]) => void>>()
  const roomSubs = new Set<(r: RoomMeta[]) => void>()
  const orderSubs = new Map<string, Set<(ids: string[]) => void>>()

  const okey = (day: string, floorId: string) => `${day}|${floorId}`

  function seedState(r: RoomMeta): RoomState {
    return {
      id: r.id, building: r.building, floor: r.floor, no: r.no,
      status: 'dirty', checkInTime: null, nextGuest: false,
      checkedOutAt: null, prevStatus: null, updatedAt: Date.now(), updatedBy: 'demo',
    }
  }

  function readDay(dayKey: string): RoomState[] {
    const stored = load<RoomState[]>(K.day(dayKey))
    const list = stored ?? []
    const have = new Set(list.map(r => r.id))
    let changed = !stored
    for (const r of rooms) {
      if (!have.has(r.id)) { list.push(seedState(r)); changed = true }
    }
    if (changed) save(K.day(dayKey), list)
    return list
  }

  function writeDay(dayKey: string, list: RoomState[]) {
    save(K.day(dayKey), list)
    daySubs.get(dayKey)?.forEach(cb => cb(structuredClone(list)))
  }

  function notifyRooms() {
    roomSubs.forEach(cb => cb(structuredClone(rooms)))
  }

  return {
    subscribe(dayKey, cb) {
      currentDay = dayKey
      if (!daySubs.has(dayKey)) daySubs.set(dayKey, new Set())
      daySubs.get(dayKey)!.add(cb)
      cb(structuredClone(readDay(dayKey)))
      return () => { daySubs.get(dayKey)?.delete(cb) }
    },
    async update(roomId, patch) {
      const list = readDay(currentDay)
      const i = list.findIndex(r => r.id === roomId)
      if (i >= 0) list[i] = { ...list[i], ...patch, updatedAt: Date.now() }
      writeDay(currentDay, list)
    },
    async bulkUpdate(patches) {
      const list = readDay(currentDay)
      for (const { roomId, patch } of patches) {
        const i = list.findIndex(r => r.id === roomId)
        if (i >= 0) list[i] = { ...list[i], ...patch, updatedAt: Date.now() }
      }
      writeDay(currentDay, list)
    },
    async resetDay(fromDayKey, toDayKey) {
      const prev = readDay(fromDayKey)
      const next: RoomState[] = prev.map(p => ({
        ...p,
        status: p.status === 'occupied' ? 'occupied' : 'dirty',
        checkInTime: null, nextGuest: false, checkedOutAt: null, prevStatus: null,
        updatedAt: Date.now(),
      }))
      const seen = new Set(next.map(r => r.id))
      for (const r of rooms) if (!seen.has(r.id)) next.push(seedState(r))
      writeDay(toDayKey, next)
    },
    async ensureDay(dayKey, prevDayKey) {
      if (load(K.day(dayKey))) return
      await this.resetDay(prevDayKey, dayKey)
    },
    subscribeRooms(cb) {
      roomSubs.add(cb)
      cb(structuredClone(rooms))
      return () => { roomSubs.delete(cb) }
    },
    async getSettings() { return structuredClone(settings) },
    async saveSettings(p) {
      settings = { ...settings, ...p }
      save(K.settings, settings)
    },
    async setRoomEnabled(roomId, enabled) {
      if (enabled) disabled.delete(roomId); else disabled.add(roomId)
      save(K.disabled, [...disabled])
      rooms = rooms.map(r => r.id === roomId ? { ...r, enabled } : r)
      save(K.rooms, rooms)
      notifyRooms()
    },
    async addRoom(building: BuildingId, floor: number, no: string) {
      const m: RoomMeta = { id: newRoomId(building), building, floor, no, enabled: true }
      rooms = [...rooms, m]
      save(K.rooms, rooms)
      notifyRooms()
      if (currentDay) writeDay(currentDay, readDay(currentDay))
    },
    async updateRoomNo(roomId, no) {
      rooms = rooms.map(r => r.id === roomId ? { ...r, no } : r)
      save(K.rooms, rooms)
      notifyRooms()
      if (currentDay) {
        writeDay(currentDay, readDay(currentDay).map(r => r.id === roomId ? { ...r, no } : r))
      }
    },
    async removeRoom(roomId) {
      rooms = rooms.filter(r => r.id !== roomId)
      disabled.delete(roomId)
      save(K.disabled, [...disabled])
      save(K.rooms, rooms)
      notifyRooms()
      if (currentDay) writeDay(currentDay, readDay(currentDay).filter(r => r.id !== roomId))
    },
    subscribeOrder(dayKey, floorId, cb) {
      const key = okey(dayKey, floorId)
      if (!orderSubs.has(key)) orderSubs.set(key, new Set())
      orderSubs.get(key)!.add(cb)
      cb([...(orders[key] ?? [])])
      return () => { orderSubs.get(key)?.delete(cb) }
    },
    async saveOrder(dayKey, floorId, ids) {
      orders[okey(dayKey, floorId)] = ids
      save(K.orders, orders)
      orderSubs.get(okey(dayKey, floorId))?.forEach(cb => cb([...ids]))
    },
    async clearOrder(dayKey, floorId) {
      delete orders[okey(dayKey, floorId)]
      save(K.orders, orders)
      orderSubs.get(okey(dayKey, floorId))?.forEach(cb => cb([]))
    },
  }
}
