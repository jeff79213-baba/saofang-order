import { describe, it, expect } from 'vitest'
import { parseDigits, formatZh, shiftAmPm } from './time'

describe('parseDigits', () => {
  const ok: Array<[string, string]> = [
    ['0330', '15:30'], ['1530', '15:30'], ['1230', '12:30'],
    ['0905', '21:05'], ['900', '21:00'], ['330', '15:30'],
    ['0000', '00:00'], ['030', '00:30'],
  ]
  ok.forEach(([input, out]) => {
    it(`${input} → ${out}`, () => expect(parseDigits(input).time).toBe(out))
  })
  it('2560 → 錯誤', () => expect(parseDigits('2560').error).toBeDefined())
  it('1265 → 錯誤', () => expect(parseDigits('1265').error).toBeDefined())
  it('30 → 錯誤（1–2 碼）', () => expect(parseDigits('30').error).toBeDefined())
  it('非數字濾除後不足 3 碼 → 錯誤', () => expect(parseDigits('1a2').error).toBeDefined())
})

describe('formatZh', () => {
  it('15:30 → 下午 3:30', () => expect(formatZh('15:30')).toBe('下午 3:30'))
  it('00:30 → 上午 12:30', () => expect(formatZh('00:30')).toBe('上午 12:30'))
  it('12:05 → 下午 12:05', () => expect(formatZh('12:05')).toBe('下午 12:05'))
})

describe('shiftAmPm', () => {
  it('15:30 -12h → 03:30', () => expect(shiftAmPm('15:30', -1)).toBe('03:30'))
  it('03:30 +12h → 15:30', () => expect(shiftAmPm('03:30', 1)).toBe('15:30'))
  it('00:30 -12h → 12:30', () => expect(shiftAmPm('00:30', -1)).toBe('12:30'))
})
