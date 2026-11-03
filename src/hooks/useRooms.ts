import { useEffect, useMemo, useState } from 'react'
import type { RoomMeta, RoomState, Settings } from '../types'
import { DEFAULT_FLOORS, DEFAULT_LAYOUT } from '../types'
import { getRepo, type RoomRepo } from '../lib/repo'
import { prevDayKey } from '../lib/dayKey'

export function useRooms(dayKey: string) {
  const repo: RoomRepo = getRepo()
  const [dayRooms, setDayRooms] = useState<RoomState[]>([])
  const [roomMetas, setRoomMetas] = useState<RoomMeta[]>([])
  const [settings, setSettings] = useState<Settings>({ floors: DEFAULT_FLOORS, layout: DEFAULT_LAYOUT })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    repo.getSettings().then(setSettings).catch(() => {})
    const un1 = repo.subscribeRooms(setRoomMetas)
    const un2 = repo.subscribe(dayKey, rooms => { setDayRooms(rooms); setLoading(false) })
    repo.ensureDay(dayKey, prevDayKey(dayKey)).catch(() => {})
    return () => { un1(); un2() }
  }, [dayKey, repo])

  const enabledIds = useMemo(() => new Set(roomMetas.filter(r => r.enabled).map(r => r.id)), [roomMetas])
  const rooms = useMemo(
    () => (roomMetas.length ? dayRooms.filter(r => enabledIds.has(r.id)) : dayRooms),
    [dayRooms, enabledIds, roomMetas.length],
  )
  return { rooms, dayRooms, roomMetas, settings, loading, repo }
}
