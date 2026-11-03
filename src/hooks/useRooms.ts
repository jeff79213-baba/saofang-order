import { useEffect, useMemo, useRef, useState } from 'react'
import type { RoomMeta, RoomState, Settings } from '../types'
import { DEFAULT_FLOORS, DEFAULT_LAYOUT } from '../types'
import { getRepo, type RoomRepo } from '../lib/repo'
import { todayKey, prevDayKey } from '../lib/dayKey'

export function useRooms(dayKey: string) {
  const repo: RoomRepo = getRepo()
  const [dayRooms, setDayRooms] = useState<RoomState[]>([])
  const [roomMetas, setRoomMetas] = useState<RoomMeta[]>([])
  const [settings, setSettings] = useState<Settings>({ floors: DEFAULT_FLOORS, layout: DEFAULT_LAYOUT })
  const [loading, setLoading] = useState(true)
  const [dayCreated, setDayCreated] = useState(false)
  const inited = useRef(false)

  useEffect(() => {
    inited.current = false
    repo.getSettings().then(setSettings)
    const un1 = repo.subscribeRooms(setRoomMetas)
    const un2 = repo.subscribe(dayKey, rooms => { setDayRooms(rooms); setLoading(false) })
    return () => { un1(); un2() }
  }, [dayKey, repo])

  useEffect(() => {
    if (inited.current) return
    inited.current = true
    const prev = prevDayKey(dayKey)
    const marker = `sq-day-inited-${dayKey}`
    if (sessionStorage.getItem(marker)) return
    sessionStorage.setItem(marker, '1')
    repo.ensureDay(dayKey, prev).then(() => setDayCreated(true)).catch(() => {})
  }, [dayKey, repo])

  const enabledIds = useMemo(() => new Set(roomMetas.filter(r => r.enabled).map(r => r.id)), [roomMetas])
  const rooms = useMemo(
    () => (roomMetas.length ? dayRooms.filter(r => enabledIds.has(r.id)) : dayRooms),
    [dayRooms, enabledIds, roomMetas.length],
  )
  return { rooms, dayRooms, roomMetas, settings, loading, dayCreated, repo }
}
