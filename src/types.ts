export type Status = 'occupied' | 'arriving' | 'dirty' | 'clean'
export type BuildingId = 'A' | 'B'
export type Role = 'front' | 'housekeeping'

export interface RoomState {
  id: string
  building: BuildingId
  floor: number
  no: string
  status: Status
  checkInTime: string | null
  nextGuest: boolean
  checkedOutAt: number | null
  prevStatus: Status | null
  updatedAt: number
  updatedBy: string
}

export interface RoomMeta {
  id: string
  building: BuildingId
  floor: number
  no: string
  enabled: boolean
}

export interface Settings {
  floors: number[]
  layout: Record<BuildingId, Record<string, number>>
}

export const BUILDINGS: BuildingId[] = ['A', 'B']
export const BUILDING_LABEL: Record<BuildingId, string> = { A: '一館', B: '二館' }
export const DEFAULT_FLOORS = [1, 2, 3, 5]
export const DEFAULT_LAYOUT: Settings['layout'] = {
  A: { '1': 2, '2': 2, '3': 2, '5': 2 },
  B: { '1': 12, '2': 12, '3': 12, '5': 12 },
}
