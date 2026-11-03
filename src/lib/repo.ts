import type { RoomMeta, RoomState, Settings } from '../types'
import { createMockRepo } from './repo.mock'
import { createFirebaseRepo } from './repo.firebase'

export interface RoomRepo {
  subscribe(dayKey: string, cb: (rooms: RoomState[]) => void): () => void
  update(roomId: string, patch: Partial<RoomState>): Promise<void>
  bulkUpdate(patches: Array<{ roomId: string; patch: Partial<RoomState> }>): Promise<void>
  resetDay(fromDayKey: string, toDayKey: string): Promise<void>
  ensureDay(dayKey: string, prevDayKey: string): Promise<void>
  subscribeRooms(cb: (rooms: RoomMeta[]) => void): () => void
  getSettings(): Promise<Settings>
  saveSettings(p: Partial<Settings>): Promise<void>
  setRoomEnabled(roomId: string, enabled: boolean): Promise<void>
  applyLayout(layout: Settings['layout']): Promise<void>
}

export function hasFirebaseEnv(): boolean {
  return !!(
    import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_PROJECT_ID
  )
}

let instance: RoomRepo | null = null

export function getRepo(): RoomRepo {
  if (instance) return instance
  instance = (import.meta.env.VITE_USE_MOCK === 'true' || !hasFirebaseEnv())
    ? createMockRepo()
    : createFirebaseRepo()
  return instance
}
