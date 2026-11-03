import { useMemo, useState } from 'react'
import type { BuildingId, Role, RoomState, Settings } from '../types'
import { buildQueue } from '../lib/ordering'
import { nextDayKey } from '../lib/dayKey'
import type { RoomRepo } from '../lib/repo'
import { HeaderBar } from '../components/HeaderBar'
import { FloorSection } from '../components/FloorSection'
import { RoomCard } from '../components/RoomCard'
import { TimeModal } from '../components/TimeModal'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { ToastHost, type ToastMsg } from '../components/Toast'

interface Props {
  rooms: RoomState[]
  settings: Settings
  role: Role
  isDemo: boolean
  repo: RoomRepo
  dayKey: string
  onOpenSettings: () => void
}

export function MainPage({ rooms, settings, role, isDemo, repo, dayKey, onOpenSettings }: Props) {
  const [building, setBuilding] = useState<BuildingId>('A')
  const [mode, setMode] = useState<'normal' | 'clean'>(role === 'housekeeping' ? 'clean' : 'normal')
  const [pending, setPending] = useState<Set<string>>(new Set())
  const [toasts, setToasts] = useState<ToastMsg[]>([])
  const [timeRoom, setTimeRoom] = useState<RoomState | null>(null)
  const [confirm, setConfirm] = useState<null | { title: string; message: string; onOk: () => void }>(null)

  const effectiveMode: 'normal' | 'clean' = role === 'housekeeping' ? 'clean' : mode

  function toast(text: string) {
    const id = Date.now() + Math.random()
    setToasts(t => [...t, { id, text }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 2000)
  }

  async function send(patches: Array<{ roomId: string; patch: Partial<RoomState> }>) {
    const ids = patches.map(p => p.roomId)
    setPending(prev => new Set([...prev, ...ids]))
    try {
      await repo.bulkUpdate(patches)
    } catch {
      toast('儲存失敗，請重試')
    } finally {
      setPending(prev => { const n = new Set(prev); ids.forEach(i => n.delete(i)); return n })
    }
  }

  const byFloor = useMemo(() => {
    const map = new Map<number, RoomState[]>()
    for (const r of rooms.filter(r => r.building === building)) {
      if (!map.has(r.floor)) map.set(r.floor, [])
      map.get(r.floor)!.push(r)
    }
    return map
  }, [rooms, building])

  function seqMap(floorRooms: RoomState[]) {
    const m = new Map<string, number>()
    for (const { room, seq } of buildQueue(floorRooms)) m.set(room.id, seq)
    return m
  }

  function onCardClick(room: RoomState) {
    if (effectiveMode === 'clean') {
      if (room.status === 'occupied') { toast('入住中不可掃'); return }
      if (room.status === 'clean') {
        send([{ roomId: room.id, patch: { status: room.prevStatus ?? 'dirty', prevStatus: null } }])
      } else {
        send([{ roomId: room.id, patch: { prevStatus: room.status, status: 'clean' } }])
      }
      return
    }
    if (role !== 'front') return
    if (room.status === 'occupied') {
      send([{ roomId: room.id, patch: {
        status: room.nextGuest ? 'arriving' : 'dirty',
        checkedOutAt: Date.now(), checkInTime: null, prevStatus: null,
      } }])
    } else {
      send([{ roomId: room.id, patch: {
        status: 'occupied', nextGuest: false, checkedOutAt: null, prevStatus: null,
      } }])
    }
  }

  function onToggleNextGuest(room: RoomState) {
    if (role !== 'front') return
    const next = !room.nextGuest
    const patch: Partial<RoomState> = { nextGuest: next }
    if (next && room.status !== 'occupied') patch.status = 'arriving'
    if (!next && room.status === 'arriving' && !room.checkInTime) patch.status = 'dirty'
    send([{ roomId: room.id, patch }])
  }

  function onConfirmTime(time: string) {
    if (!timeRoom) return
    const patch: Partial<RoomState> = { checkInTime: time }
    if (timeRoom.status === 'dirty' || timeRoom.status === 'clean') patch.status = 'arriving'
    send([{ roomId: timeRoom.id, patch }])
    setTimeRoom(null)
  }
  function onClearTime() {
    if (!timeRoom) return
    send([{ roomId: timeRoom.id, patch: { checkInTime: null } }])
    setTimeRoom(null)
  }

  function onFillHouse() {
    const inBuilding = rooms.filter(r => r.building === building)
    const skipped = inBuilding.filter(r => r.nextGuest).length
    const label = building === 'A' ? '一館' : '二館'
    setConfirm({
      title: `一鍵滿房 ${label}`,
      message: `${inBuilding.length} 間將全部亮燈，設有「後續入住」的房間會維持待入住。確定？`,
      onOk: () => {
        setConfirm(null)
        const patches = inBuilding.map(r => r.nextGuest
          ? { roomId: r.id, patch: { status: 'arriving' as const, checkedOutAt: null } }
          : { roomId: r.id, patch: { status: 'occupied' as const, checkedOutAt: null } })
        send(patches)
        toast(`${label}已滿房${skipped ? `（跳過 ${skipped} 間後續入住）` : ''}`)
      },
    })
  }

  function onResetDay() {
    const target = nextDayKey(dayKey)
    setConfirm({
      title: '換日',
      message: `建立 ${target} 的一天？今天的紀錄會保留。`,
      onOk: async () => {
        setConfirm(null)
        try {
          await repo.resetDay(dayKey, target)
          toast(`已建立 ${target}`)
        } catch {
          toast('換日失敗，請重試')
        }
      },
    })
  }

  const columns = building === 'A'
    ? 'grid-cols-2 sm:grid-cols-4'
    : 'grid-cols-4 sm:grid-cols-6'

  return (
    <div className="min-h-full bg-slate-100 pb-10">
      <HeaderBar
        building={building} onBuilding={setBuilding} role={role}
        mode={effectiveMode} onMode={() => setMode(m => (m === 'clean' ? 'normal' : 'clean'))}
        dayKey={dayKey} totalRooms={rooms.length} isDemo={isDemo}
        onFillHouse={onFillHouse} onResetDay={onResetDay} onSettings={onOpenSettings}
      />
      <main className="px-4 py-4">
        {settings.floors.map(floor => {
          const floorRooms = byFloor.get(floor) ?? []
          if (floorRooms.length === 0) return null
          const sm = seqMap(floorRooms)
          return (
            <FloorSection
              key={floor} building={building} floor={floor} rooms={floorRooms} columns={columns}
              renderCard={room => (
                <RoomCard
                  key={room.id} room={room} seq={sm.get(room.id) ?? null}
                  role={role} mode={effectiveMode} pending={pending.has(room.id)}
                  onCardClick={onCardClick} onLongPressTime={setTimeRoom} onToggleNextGuest={onToggleNextGuest}
                />
              )}
            />
          )
        })}
      </main>
      {timeRoom && (
        <TimeModal room={timeRoom} onConfirm={onConfirmTime} onClear={onClearTime} onClose={() => setTimeRoom(null)} />
      )}
      <ConfirmDialog
        open={!!confirm} title={confirm?.title ?? ''} message={confirm?.message ?? ''}
        onConfirm={() => confirm?.onOk()} onCancel={() => setConfirm(null)}
      />
      <ToastHost toasts={toasts} />
    </div>
  )
}
