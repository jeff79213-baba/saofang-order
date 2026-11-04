import { useMemo, useState } from 'react'
import type { RoomState } from '../types'

export function OrderSheet({ title, rooms, ids, onSave, onClear, onClose }: {
  title: string
  rooms: RoomState[]          // 該層可掃房
  ids: string[]               // 目前自訂順序
  onSave: (ids: string[]) => void
  onClear: () => void
  onClose: () => void
}) {
  const [order, setOrder] = useState<string[]>(() => {
    const present = new Set(rooms.map(r => r.id))
    const listed = ids.filter(id => present.has(id))
    const rest = rooms.filter(r => !listed.includes(r.id))
      .sort((a, b) => a.no.localeCompare(b.no, 'en', { numeric: true }))
      .map(r => r.id)
    return [...listed, ...rest]
  })

  const byId = useMemo(() => new Map(rooms.map(r => [r.id, r])), [rooms])

  function move(i: number, dir: -1 | 1) {
    const j = i + dir
    if (j < 0 || j >= order.length) return
    const next = [...order]
    ;[next[i], next[j]] = [next[j], next[i]]
    setOrder(next)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/40" onClick={onClose}>
      <div className="max-h-[80vh] w-full overflow-y-auto rounded-t-3xl bg-white p-5" onClick={e => e.stopPropagation()}>
        <h3 className="mb-1 text-base font-bold text-slate-900">{title}　自訂打掃順序</h3>
        <p className="mb-3 text-xs text-slate-500">僅今日有效；未設定時依系統自動排序。</p>
        <ul className="mb-3 divide-y divide-slate-100">
          {order.map((id, i) => {
            const r = byId.get(id)
            if (!r) return null
            return (
              <li key={id} className="flex items-center gap-3 py-2">
                <span className="w-6 text-center text-sm font-semibold tabular-nums text-slate-400">{i + 1}</span>
                <span className="flex-1 text-base font-bold tabular-nums">{r.no}</span>
                <button className="rounded-lg bg-slate-100 px-2 py-1 text-sm" onClick={() => move(i, -1)}>↑</button>
                <button className="rounded-lg bg-slate-100 px-2 py-1 text-sm" onClick={() => move(i, 1)}>↓</button>
              </li>
            )
          })}
          {order.length === 0 && <li className="py-3 text-sm text-slate-400">此層目前沒有可掃房間</li>}
        </ul>
        <div className="flex justify-between">
          <button className="rounded-lg px-3 py-2 text-sm text-red-600" onClick={onClear}>清除自訂（回自動）</button>
          <div className="flex gap-2">
            <button className="rounded-lg px-4 py-2 text-sm text-slate-600" onClick={onClose}>取消</button>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white" onClick={() => onSave(order)}>儲存</button>
          </div>
        </div>
      </div>
    </div>
  )
}
