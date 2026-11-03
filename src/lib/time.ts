export function parseDigits(raw: string): { time: string | null; error?: string } {
  const d = raw.replace(/\D/g, '').slice(0, 4)
  if (d.length < 3) return { time: null, error: '請輸入 4 位數字' }
  const s = d.padStart(4, '0')
  let hh = Number(s.slice(0, 2))
  const mm = Number(s.slice(2, 4))
  if (mm > 59) return { time: null, error: '分鐘格式錯誤' }
  if (hh > 23) return { time: null, error: '小時格式錯誤' }
  if (hh >= 1 && hh <= 11) hh += 12
  return { time: `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}` }
}

export function formatZh(time: string): string {
  const [hStr, mStr] = time.split(':')
  const h = Number(hStr)
  const ampm = h < 12 ? '上午' : '下午'
  let h12 = h % 12
  if (h12 === 0) h12 = 12
  return `${ampm} ${h12}:${mStr}`
}

export function shiftAmPm(time: string, dir: 1 | -1): string {
  const [hStr, mStr] = time.split(':')
  const h = (Number(hStr) + dir * 12 + 24) % 24
  return `${String(h).padStart(2, '0')}:${mStr}`
}
