import { useEffect, useMemo, useState } from 'react'
import type { BuildingId, RoomMeta, Role, Settings } from '../types'
import { BUILDINGS, BUILDING_LABEL } from '../types'
import { buildingRoomCount, roomNo } from '../lib/rooms'
import type { RoomRepo } from '../lib/repo'
import { ConfirmDialog } from '../components/ConfirmDialog'

export function SettingsPage({ settings, repo, role, isDemo, email, onBack, onSignOut }: {
  settings: Settings; repo: RoomRepo; role: Role; isDemo: boolean; email: string
  onBack: () => void; onSignOut: () => void
}) {
  const floors = settings.floors
  const [layout, setLayout] = useState(settings.layout)
  const [metas, setMetas] = useState<RoomMeta[]>([])
  const [confirm, setConfirm] = useState<null | { message: string; onOk: () => void }>(null)
  const [pendingRoom, setPendingRoom] = useState<string | null>(null)

  useEffect(() => {
    setLayout(settings.layout)
  }, [settings])

  useEffect(() => {
    const un = repo.subscribeRooms(setMetas)
    return () => un()
  }, [repo])

  const total = useMemo(
    () => BUILDINGS.reduce((s, b) => s + buildingRoomCount(layout, b), 0),
    [layout],
  )

  function step(b: BuildingId, floor: number, delta: number) {
    const cur = layout[b][String(floor)] ?? 0
    const next = Math.max(0, Math.min(20, cur + delta))
    setLayout({ ...layout, [b]: { ...layout[b], [String(floor)]: next } })
  }

  function apply(b: BuildingId, floor: number) {
    const cur = settings.layout[b][String(floor)] ?? 0
    const next = layout[b][String(floor)] ?? 0
    if (cur === next) return
    const changedNo = roomNo(floor, Math.max(cur, next))
    setConfirm({
      message: next > cur
        ? `${BUILDING_LABEL[b]} ${floor}F 從 ${cur} 間改為 ${next} 間，會新增房間 ${changedNo}。確定？`
        : `${BUILDING_LABEL[b]} ${floor}F 從 ${cur} 間改為 ${next} 間，房間 ${changedNo} 會停用。確定？`,
      onOk: async () => {
        setConfirm(null)
        try {
          await repo.applyLayout(layout)
        } catch {
          window.alert('儲存失敗，已還原')
          setLayout(settings.layout)
        }
      },
    })
  }

  async function toggleRoom(meta: RoomMeta) {
    setPendingRoom(meta.id)
    try {
      await repo.setRoomEnabled(meta.id, !meta.enabled)
    } catch {
      window.alert('儲存失敗，請重試')
    } finally {
      setPendingRoom(null)
    }
  }

  return (
    <div className="min-h-full bg-slate-100 pb-10">
      <header className="sticky top-0 z-40 flex items-center gap-2 border-b bg-white px-4 py-3">
        <button className="text-sm text-slate-600" onClick={onBack}>← 返回</button>
        <h1 className="text-base font-bold">設定</h1>
      </header>
      <main className="px-4 py-4">
        <h2 className="mb-2 text-sm font-semibold text-slate-500">房數</h2>
        {BUILDINGS.map(b => (
          <div key={b} className="mb-3 rounded-2xl bg-white p-3">
            <div className="mb-2 text-sm font-semibold">{BUILDING_LABEL[b]}</div>
            {floors.map(f => {
              const cur = layout[b][String(f)] ?? 0
              const applied = settings.layout[b][String(f)] ?? 0
              const dirty = cur !== applied
              return (
                <div key={f} className="flex items-center justify-between py-1">
                  <span className="text-sm text-slate-600">{f}F</span>
                  <div className="flex items-center gap-3">
                    <button className="h-8 w-8 rounded-lg bg-slate-100" onClick={() => step(b, f, -1)}>−</button>
                    <span className="w-6 text-center tabular-nums">{cur}</span>
                    <button className="h-8 w-8 rounded-lg bg-slate-100" onClick={() => step(b, f, 1)}>＋</button>
                    <button
                      className={`rounded-lg px-3 py-1 text-xs ${dirty ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}
                      disabled={!dirty}
                      onClick={() => apply(b, f)}
                    >
                      套用
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
        <div className="mb-4 text-sm text-slate-600">
          {BUILDINGS.map(b => `${BUILDING_LABEL[b]} ${buildingRoomCount(layout, b)} 間`).join(' / ')} / 合計 {total} 間
        </div>

        <h2 className="mb-2 text-sm font-semibold text-slate-500">房間清單</h2>
        {BUILDINGS.map(b => (
          <div key={b} className="mb-3 rounded-2xl bg-white p-3">
            <div className="mb-2 text-sm font-semibold">{BUILDING_LABEL[b]}</div>
            <div className="flex flex-wrap gap-2">
              {metas.filter(m => m.building === b).map(m => (
                <button
                  key={m.id}
                  disabled={pendingRoom === m.id}
                  onClick={() => toggleRoom(m)}
                  className={`rounded-lg px-3 py-1 text-sm tabular-nums ${m.enabled ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400 line-through'}`}
                >
                  {m.no}
                </button>
              ))}
            </div>
          </div>
        ))}

        <h2 className="mb-2 text-sm font-semibold text-slate-500">帳號</h2>
        <div className="rounded-2xl bg-white p-3 text-sm text-slate-600">
          <div>帳號：{email || '（未登入）'}</div>
          <div>角色：{role === 'front' ? '櫃台' : '房務'}</div>
          {isDemo && <div className="text-amber-700">DEMO 模式（資料不共用）</div>}
          <button className="mt-2 text-red-600" onClick={onSignOut}>登出</button>
        </div>
      </main>
      <ConfirmDialog
        open={!!confirm} title="確認" message={confirm?.message ?? ''}
        onConfirm={() => confirm?.onOk()} onCancel={() => setConfirm(null)}
      />
    </div>
  )
}
