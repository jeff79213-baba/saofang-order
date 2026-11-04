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

function autoCompare(a: RoomState, b: RoomState): number {
  const ta = tier(a)!, tb = tier(b)!
  if (ta !== tb) return ta - tb
  if (ta === 1) {
    if (a.checkInTime !== b.checkInTime) return a.checkInTime! < b.checkInTime! ? -1 : 1
    return cmpNo(a, b)
  }
  return cmpNo(a, b)
}

export function buildQueue(
  rooms: RoomState[],
  customOrder?: string[],
): Array<{ room: RoomState; seq: number }> {
  const cleanable = rooms.filter(r => tier(r) !== null)

  if (customOrder && customOrder.length) {
    const rank = new Map<string, number>()
    customOrder.forEach((id, i) => rank.set(id, i))
    cleanable.sort((a, b) => {
      const ra = rank.has(a.id) ? rank.get(a.id)! : Number.MAX_SAFE_INTEGER
      const rb = rank.has(b.id) ? rank.get(b.id)! : Number.MAX_SAFE_INTEGER
      if (ra !== rb) return ra - rb
      return autoCompare(a, b)
    })
  } else {
    cleanable.sort(autoCompare)
  }

  return cleanable.map((room, i) => ({ room, seq: i + 1 }))
}
