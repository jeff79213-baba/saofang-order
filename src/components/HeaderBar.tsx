import type { BuildingId, Role } from '../types'
import { BUILDINGS, BUILDING_LABEL } from '../types'

export function HeaderBar(props: {
  building: BuildingId
  onBuilding: (b: BuildingId) => void
  role: Role
  mode: 'normal' | 'clean'
  dayKey: string
  isDemo: boolean
  onFillHouse: () => void
  onClearHouse: () => void
  onMarkAllClean: () => void
  onResetDay: () => void
  onSettings: () => void
  onSignOut: () => void
}) {
  const isFront = props.role === 'front'
  const md = props.dayKey.slice(5).replace('-', '/')
  return (
    <header className={`sticky top-0 z-40 border-b border-slate-200 shadow-sm ${props.mode === 'clean' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-900'}`}>
      <div className="flex items-center gap-2 px-4 py-2">
        {BUILDINGS.map(b => (
          <button
            key={b}
            onClick={() => props.onBuilding(b)}
            className={`rounded-full px-3 py-1 text-sm font-semibold ${props.building === b ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}
          >
            {BUILDING_LABEL[b]}
          </button>
        ))}
        <span className="ml-auto text-xs opacity-80">{md}</span>
        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{isFront ? '櫃台' : '房務'}</span>
      </div>
      <div className="flex items-center gap-2 px-4 pb-2">
        {!isFront && <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">掃房模式</span>}
        {props.isDemo && <span className="text-xs text-amber-700">DEMO 模式（資料不共用）</span>}
        <div className="ml-auto flex gap-2">
          {isFront && (
            <>
              <button className="rounded-lg bg-slate-100 px-2 py-1 text-xs" onClick={props.onFillHouse}>一鍵滿房</button>
              <button className="rounded-lg bg-slate-100 px-2 py-1 text-xs" onClick={props.onClearHouse}>一鍵未入住</button>
              <button className="rounded-lg bg-slate-100 px-2 py-1 text-xs" onClick={props.onMarkAllClean}>一鍵已掃</button>
              <button className="rounded-lg bg-slate-100 px-2 py-1 text-xs" onClick={props.onResetDay}>換日</button>
              <button className="rounded-lg bg-slate-100 px-2 py-1 text-xs" onClick={props.onSettings}>⚙</button>
            </>
          )}
          <button className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-600" onClick={props.onSignOut}>登出</button>
        </div>
      </div>
    </header>
  )
}
