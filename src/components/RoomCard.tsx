import { useRef } from 'react'
import type { Role, RoomState } from '../types'
import { NextGuestTag } from './NextGuestTag'

interface Props {
  room: RoomState
  seq: number | null
  role: Role
  mode: 'normal' | 'clean'
  pending: boolean
  onCardClick: (room: RoomState) => void
  onLongPressTime: (room: RoomState) => void
  onToggleNextGuest: (room: RoomState) => void
}

const LONG_MS = 1000

export function RoomCard({ room, seq, role, mode, pending, onCardClick, onLongPressTime, onToggleNextGuest }: Props) {
  const pressRef = useRef<{ timer: number; cancelled: boolean; startX: number; startY: number } | null>(null)
  const suppressRef = useRef(false)
  const canSetTime = role === 'front'

  const skin = (() => {
    if (room.status === 'occupied') return { cls: 'bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,.55)] text-amber-950', border: '' }
    if (room.status === 'arriving') return { cls: 'bg-white text-red-600', border: 'border-2 border-red-500' }
    if (room.status === 'dirty' && room.checkedOutAt) return { cls: 'bg-white text-slate-900', border: 'border-2 border-blue-500' }
    if (room.status === 'dirty') return { cls: 'bg-slate-50 text-slate-700', border: 'border border-slate-300' }
    return { cls: 'bg-emerald-50 text-emerald-700 opacity-60', border: 'border border-emerald-300' }
  })()

  const center =
    room.status === 'occupied' ? '入住中'
      : room.status === 'clean' ? '✓ 已打掃'
        : seq !== null ? `待掃 ${seq}` : ''

  function startPress(e: React.PointerEvent) {
    if (!canSetTime) return
    const p = { timer: 0, cancelled: false, startX: e.clientX, startY: e.clientY }
    pressRef.current = p
    p.timer = window.setTimeout(() => {
      if (!p.cancelled) {
        suppressRef.current = true
        navigator.vibrate?.(30)
        onLongPressTime(room)
      }
    }, LONG_MS)
  }
  function endPress() {
    const p = pressRef.current
    if (p) { clearTimeout(p.timer); p.cancelled = true }
    pressRef.current = null
  }
  function movePress(e: React.PointerEvent) {
    const p = pressRef.current
    if (!p) return
    if (Math.abs(e.clientX - p.startX) > 10 || Math.abs(e.clientY - p.startY) > 10) endPress()
  }

  return (
    <div
      className={`relative flex min-h-[88px] cursor-pointer select-none flex-col justify-between rounded-2xl p-2 ${skin.cls} ${skin.border} ${pending ? 'animate-pulse opacity-70' : ''} ${mode === 'clean' && room.status !== 'occupied' ? 'active:scale-95' : ''}`}
      style={{ touchAction: 'manipulation' }}
      onClick={() => {
        if (suppressRef.current) { suppressRef.current = false; return }
        if (mode === 'clean' && room.status === 'occupied') return
        onCardClick(room)
      }}
    >
      <div className="flex items-start justify-between">
        <span className="text-xl font-bold tabular-nums">{room.no}</span>
      </div>
      <div className="text-center text-2xl font-black tabular-nums">{center}</div>
      <div className="flex flex-col items-center gap-1">
        <div
          className="w-full text-center text-[11px] tabular-nums text-slate-500"
          onPointerDown={startPress}
          onPointerUp={endPress}
          onPointerCancel={endPress}
          onPointerMove={movePress}
        >
          {room.checkInTime ?? '----'}
        </div>
        <NextGuestTag on={room.nextGuest} editable={role === 'front'} onToggle={() => onToggleNextGuest(room)} />
      </div>
    </div>
  )
}
