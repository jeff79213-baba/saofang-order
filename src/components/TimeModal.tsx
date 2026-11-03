import { useEffect, useRef, useState } from 'react'
import type { RoomState } from '../types'
import { formatZh, parseDigits, shiftAmPm } from '../lib/time'

export function TimeModal({ room, onConfirm, onClear, onClose }: {
  room: RoomState
  onConfirm: (time: string) => void
  onClear: () => void
  onClose: () => void
}) {
  const [raw, setRaw] = useState(room.checkInTime ? room.checkInTime.replace(':', '') : '')
  const [err, setErr] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    inputRef.current?.select()
  }, [])

  const parsed = parseDigits(raw)

  function confirm() {
    if (parsed.error || !parsed.time) { setErr(parsed.error ?? '時間錯誤'); return }
    onConfirm(parsed.time)
  }
  function shift(dir: 1 | -1) {
    const base = parsed.time ?? '12:00'
    setRaw(shiftAmPm(base, dir).replace(':', ''))
    setErr(null)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/40" onClick={onClose}>
      <div className="w-full rounded-t-3xl bg-white p-5" onClick={e => e.stopPropagation()}>
        <h3 className="text-base font-bold text-slate-900">{room.no} 入住時間</h3>
        <input
          ref={inputRef}
          inputMode="numeric"
          maxLength={4}
          value={raw}
          onChange={e => { setRaw(e.target.value); setErr(null) }}
          className="mt-4 w-full rounded-xl border border-slate-300 p-3 text-center text-3xl font-black tabular-nums tracking-widest"
          placeholder="HHMM"
        />
        <div className="mt-2 text-center text-lg font-bold tabular-nums text-indigo-600">
          {parsed.time ?? '--:--'}
        </div>
        <div className="mt-1 text-center text-xs text-slate-500">
          {parsed.time ? formatZh(parsed.time) : ''}
        </div>
        {err && <div className="mt-2 text-center text-sm text-red-600">{err}</div>}
        <div className="mt-4 flex justify-center gap-2">
          <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm" onClick={() => shift(-1)}>上午</button>
          <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm" onClick={() => shift(1)}>下午</button>
        </div>
        <div className="mt-5 flex justify-between">
          <button className="rounded-lg px-4 py-2 text-sm text-red-600" onClick={onClear}>清除</button>
          <div className="flex gap-2">
            <button className="rounded-lg px-4 py-2 text-sm text-slate-600" onClick={onClose}>取消</button>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white" onClick={confirm}>確定</button>
          </div>
        </div>
      </div>
    </div>
  )
}
