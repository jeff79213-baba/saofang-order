import type { RoomState } from '../types'

export function tier(r: RoomState): number | null {
  if (r.status === 'occupied' || r.status === 'clean') return null
  if (r.status === 'arriving' && r.checkInTime) return 1
  if (r.status === 'arriving') return 2
  if (r.status === 'dirty' && r.checkedOutAt) return 3
  if (r.status === 'dirty') return 4
  return null
}

const cmpNo = (a: RoomState, b: RoomState) =>
  a.no.localeCompare(b.no, 'en', { numeric: true })

export function buildQueue(rooms: RoomState[]): Array<{ room: RoomState; seq: number }> {
  return rooms
    .filter(r => tier(r) !== null)
    .sort((a, b) => {
      const ta = tier(a)!, tb = tier(b)!
      if (ta !== tb) return ta - tb
      if (ta === 1) {
        if (a.checkInTime !== b.checkInTime) return a.checkInTime! < b.checkInTime! ? -1 : 1
        return cmpNo(a, b)
      }
      return cmpNo(a, b)
    })
    .map((room, i) => ({ room, seq: i + 1 }))
}
