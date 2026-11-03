import { describe, it, expect } from 'vitest'
import { roomNo, buildRoomList, buildingRoomCount } from './rooms'
import { DEFAULT_LAYOUT } from '../types'

describe('roomNo', () => {
  it('樓層×100+序號', () => {
    expect(roomNo(1, 1)).toBe('101')
    expect(roomNo(1, 3)).toBe('103')
    expect(roomNo(5, 12)).toBe('512')
  })
})

describe('buildRoomList', () => {
  it('預設共 56 間，無 4 樓', () => {
    const list = buildRoomList(DEFAULT_LAYOUT, [1, 2, 3, 5])
    expect(list).toHaveLength(56)
    expect(list.some(r => r.floor === 4)).toBe(false)
  })
  it('一館 8 間、二館 48 間', () => {
    const list = buildRoomList(DEFAULT_LAYOUT, [1, 2, 3, 5])
    expect(list.filter(r => r.building === 'A')).toHaveLength(8)
    expect(list.filter(r => r.building === 'B')).toHaveLength(48)
  })
  it('房數為 0 的樓層不產生房間', () => {
    const layout = { A: { '1': 0, '2': 2, '3': 2, '5': 2 }, B: { '1': 12, '2': 12, '3': 12, '5': 12 } }
    const list = buildRoomList(layout, [1, 2, 3, 5])
    expect(list.filter(r => r.building === 'A' && r.floor === 1)).toHaveLength(0)
  })
  it('roomId 格式為 A-101', () => {
    const list = buildRoomList(DEFAULT_LAYOUT, [1, 2, 3, 5])
    expect(list.find(r => r.no === '101')!.id).toBe('A-101')
  })
})

describe('buildingRoomCount', () => {
  it('加總各層房數', () => {
    expect(buildingRoomCount(DEFAULT_LAYOUT, 'A')).toBe(8)
    expect(buildingRoomCount(DEFAULT_LAYOUT, 'B')).toBe(48)
  })
})
