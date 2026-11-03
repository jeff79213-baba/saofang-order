import { describe, it, expect } from 'vitest'
import { tier, buildQueue } from './ordering'
import type { RoomState, Status } from '../types'

function mk(no: string, status: Status, extra: Partial<RoomState> = {}): RoomState {
  return {
    id: `A-${no}`, building: 'A', floor: 1, no, status,
    checkInTime: null, nextGuest: false, checkedOutAt: null,
    prevStatus: null, updatedAt: 0, updatedBy: 'u', ...extra,
  }
}
const seqOf = (q: ReturnType<typeof buildQueue>, no: string) =>
  q.find(x => x.room.no === no)?.seq

describe('tier', () => {
  it('arriving 有時間 = 1、無時間 = 2', () => {
    expect(tier(mk('101', 'arriving', { checkInTime: '15:30' }))).toBe(1)
    expect(tier(mk('102', 'arriving'))).toBe(2)
  })
  it('dirty 剛退房 = 3、尚未打掃 = 4', () => {
    expect(tier(mk('101', 'dirty', { checkedOutAt: 1 }))).toBe(3)
    expect(tier(mk('102', 'dirty'))).toBe(4)
  })
  it('occupied / clean = null', () => {
    expect(tier(mk('101', 'occupied'))).toBeNull()
    expect(tier(mk('102', 'clean'))).toBeNull()
  })
})

describe('buildQueue', () => {
  it('1. 16:00 排在 15:30 之後', () => {
    const q = buildQueue([mk('101', 'arriving', { checkInTime: '16:00' }), mk('102', 'arriving', { checkInTime: '15:30' })])
    expect(seqOf(q, '102')).toBe(1)
    expect(seqOf(q, '101')).toBe(2)
  })
  it('2. 待入住無時間排在剛退房之前', () => {
    const q = buildQueue([mk('101', 'dirty', { checkedOutAt: 1 }), mk('102', 'arriving')])
    expect(seqOf(q, '102')).toBe(1)
    expect(seqOf(q, '101')).toBe(2)
  })
  it('3. 剛退房排在尚未打掃之前', () => {
    const q = buildQueue([mk('101', 'dirty'), mk('102', 'dirty', { checkedOutAt: 1 })])
    expect(seqOf(q, '102')).toBe(1)
    expect(seqOf(q, '101')).toBe(2)
  })
  it('4. occupied/clean 不取號不佔號', () => {
    const q = buildQueue([mk('101', 'dirty'), mk('102', 'clean'), mk('103', 'occupied'), mk('104', 'dirty')])
    expect(seqOf(q, '101')).toBe(1)
    expect(seqOf(q, '104')).toBe(2)
    expect(q).toHaveLength(2)
  })
  it('5. 二館單層 12 間全 dirty → 1..12 依房號', () => {
    const rooms = Array.from({ length: 12 }, (_, i) => mk(String(101 + i), 'dirty'))
    const q = buildQueue(rooms)
    expect(q.map(x => x.seq)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    expect(q[0].room.no).toBe('101')
  })
  it('6. 樓層互不影響（各自從 1 開始）', () => {
    const f1 = buildQueue([mk('101', 'dirty'), mk('102', 'dirty')])
    const f2 = buildQueue([mk('201', 'dirty')])
    expect(seqOf(f1, '101')).toBe(1)
    expect(f2[0].seq).toBe(1)
  })
  it('7. 全 occupied/clean → 空陣列', () => {
    expect(buildQueue([mk('101', 'occupied'), mk('102', 'clean')])).toEqual([])
  })
  it('8. 空輸入 → 空陣列', () => {
    expect(buildQueue([])).toEqual([])
  })
  it('9. 同級剛退房依房號數字排序（110 在 102 後）', () => {
    const q = buildQueue([mk('110', 'dirty', { checkedOutAt: 1 }), mk('102', 'dirty', { checkedOutAt: 1 })])
    expect(q[0].room.no).toBe('102')
    expect(q[1].room.no).toBe('110')
  })
  it('10. 同時間待入住依房號穩定', () => {
    const a = buildQueue([mk('103', 'arriving', { checkInTime: '15:30' }), mk('101', 'arriving', { checkInTime: '15:30' })])
    expect(a[0].room.no).toBe('101')
  })
  it('11. 四級混排 → 1→2→3→4', () => {
    const q = buildQueue([
      mk('101', 'dirty'),
      mk('102', 'dirty', { checkedOutAt: 1 }),
      mk('103', 'arriving'),
      mk('104', 'arriving', { checkInTime: '15:00' }),
    ])
    expect(q.map(x => x.room.no)).toEqual(['104', '103', '102', '101'])
  })
  it('12. 有時間全在前、無時間在後且各自依房號', () => {
    const q = buildQueue([
      mk('105', 'arriving'),
      mk('103', 'arriving', { checkInTime: '16:00' }),
      mk('101', 'arriving', { checkInTime: '15:00' }),
      mk('104', 'arriving'),
    ])
    expect(q.map(x => x.room.no)).toEqual(['101', '103', '104', '105'])
  })
})
