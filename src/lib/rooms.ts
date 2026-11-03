import type { BuildingId, RoomMeta, Settings } from '../types'
import { BUILDINGS } from '../types'

export function roomNo(floor: number, seq: number): string {
  return `${floor * 100 + seq}`
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
        out.push({ id: `${building}-${no}`, building, floor, no, enabled: true })
      }
    }
  }
  return out
}

export function buildingRoomCount(layout: Settings['layout'], building: BuildingId): number {
  const floorsMap = layout[building] ?? {}
  return Object.values(floorsMap).reduce((sum, n) => sum + (n ?? 0), 0)
}
