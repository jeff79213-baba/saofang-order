import type { ReactNode } from 'react'
import type { BuildingId, RoomState } from '../types'
import { BUILDING_LABEL } from '../types'

export function FloorSection({ building, floor, rooms, columns, renderCard }: {
  building: BuildingId; floor: number; rooms: RoomState[]
  columns: string
  renderCard: (room: RoomState) => ReactNode
}) {
  const total = rooms.length
  const cleanable = rooms.filter(r => r.status === 'arriving' || r.status === 'dirty').length
  return (
    <section className="mb-4">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-500">{BUILDING_LABEL[building]} {floor}F</h2>
        <span className="text-xs text-slate-400">可掃 {cleanable} / 共 {total}</span>
      </div>
      <div className={`grid ${columns} gap-2`}>{rooms.map(renderCard)}</div>
    </section>
  )
}
