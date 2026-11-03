import { describe, it, expect } from 'vitest'
import { todayKey } from './dayKey'

describe('todayKey', () => {
  it('回傳 YYYY-MM-DD', () => {
    expect(todayKey(new Date('2026-11-03T10:00:00+08:00'))).toBe('2026-11-03')
  })
  it('以 Asia/Taipei 為準：UTC 深夜算隔天', () => {
    expect(todayKey(new Date('2026-11-03T16:30:00Z'))).toBe('2026-11-04')
  })
})
