import type { BuildingId, RoomMeta, Settings } from '../types'
import { BUILDINGS } from '../types'

export function roomNo(floor: number, seq: number): string {
  return `${floor * 100 + seq}`
}

export function newRoomId(building: BuildingId): string {
  const uuid = (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(16).slice(2))
  return `${building}-${uuid}`
}

export function buildRoomList(
  layout: Settings['layout'],
  floors: number[],
): RoomMeta[] {
  const out: RoomMeta[] = []
  for (const building of BUILDINGS) {
    for (const floor of floors) {
      const count = layout[building]?.[String(floor)] ?? 0
      for (let seq = 1; seq <= count; seq++) {
        const no = roomNo(floor, seq)
        out.push({ id: newRoomId(building), building, floor, no, enabled: true })
      }
    }
  }
  return out
}

export function buildingRoomCount(layout: Settings['layout'], building: BuildingId): number {
  const floorsMap = layout[building] ?? {}
  return Object.values(floorsMap).reduce((sum, n) => sum + (n ?? 0), 0)
}

export function countByBuilding(rooms: RoomMeta[], building: BuildingId): number {
  return rooms.filter(r => r.building === building).length
}

export function isValidRoomNo(no: string): boolean {
  return /^\d{3,4}$/.test(no)
}

export function isDuplicateNo(rooms: RoomMeta[], building: BuildingId, no: string, exceptId?: string): boolean {
  return rooms.some(r => r.building === building && r.no === no && r.id !== exceptId)
}
