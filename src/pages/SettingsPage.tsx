import { useEffect, useMemo, useState } from 'react'
import type { BuildingId, RoomMeta, Role, Settings } from '../types'
import { BUILDINGS, BUILDING_LABEL } from '../types'
import { countByBuilding, isDuplicateNo, isValidRoomNo } from '../lib/rooms'
import type { RoomRepo } from '../lib/repo'
import { ConfirmDialog } from '../components/ConfirmDialog'

function RoomNoRow({ meta, onCommit, onToggle, onDelete }: {
  meta: RoomMeta
  onCommit: (no: string) => string | null
  onToggle: () => void
  onDelete: () => void
}) {
  const [val, setVal] = useState(meta.no)
  const [err, setErr] = useState<string | null>(null)
  useEffect(() => { setVal(meta.no); setErr(null) }, [meta.no, meta.id])

  function commit() {
    if (val === meta.no) { setErr(null); return }
    const e = onCommit(val)
    if (e) { setErr(e); setVal(meta.no) } else setErr(null)
  }

  return (
    <div className="flex items-center gap-2 py-1">
      <input
        value={val}
        inputMode="numeric"
        maxLength={4}
        onChange={e => { setVal(e.target.value); setErr(null) }}
        onBlur={commit}
        onKeyDown={e => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur() }}
        className={`w-20 rounded-lg border p-1 text-center text-sm tabular-nums ${err ? 'border-red-500' : 'border-slate-300'}`}
      />
      <button
        onClick={onToggle}
        className={`rounded-lg px-2 py-1 text-xs ${meta.enabled ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400 line-through'}`}
      >
        {meta.enabled ? '啟用' : '停用'}
      </button>
      <button onClick={onDelete} className="rounded-lg bg-red-50 px-2 py-1 text-xs text-red-600">🗑 刪除</button>
      {err && <span className="text-xs text-red-600">{err}</span>}
    </div>
  )
}

export function SettingsPage({ settings, repo, role, isDemo, email, onBack, onSignOut, onOpenAccounts }: {
  settings: Settings; repo: RoomRepo; role: Role; isDemo: boolean; email: string
  onBack: () => void; onSignOut: () => void; onOpenAccounts: () => void
}) {
  const floors = settings.floors
  const [metas, setMetas] = useState<RoomMeta[]>([])
  const [confirm, setConfirm] = useState<null | { message: string; onOk: () => void }>(null)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const un = repo.subscribeRooms(setMetas)
    return () => un()
  }, [repo])

  const grouped = useMemo(() => {
    const map = new Map<string, RoomMeta[]>()
    for (const m of metas) {
      const key = `${m.building}-${m.floor}`
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(m)
    }
    for (const arr of map.values()) arr.sort((a, b) => a.no.localeCompare(b.no, 'en', { numeric: true }))
    return map
  }, [metas])

  function toastFail() { window.alert('儲存失敗，請重試') }

  function commitNo(meta: RoomMeta, no: string): string | null {
    const trimmed = no.trim()
    if (!isValidRoomNo(trimmed)) return '需為 3–4 位數字'
    if (isDuplicateNo(metas, meta.building, trimmed, meta.id)) return '同館號碼重複'
    setPending(true)
    repo.updateRoomNo(meta.id, trimmed).catch(toastFail).finally(() => setPending(false))
    return null
  }

  async function toggle(meta: RoomMeta) {
    setPending(true)
    try { await repo.setRoomEnabled(meta.id, !meta.enabled) } catch { toastFail() } finally { setPending(false) }
  }

  function del(meta: RoomMeta) {
    setConfirm({
      message: `確定刪除房間 ${meta.no}？該房當天的紀錄也會移除。`,
      onOk: async () => {
        setConfirm(null)
        setPending(true)
        try { await repo.removeRoom(meta.id) } catch { toastFail() } finally { setPending(false) }
      },
    })
  }

  function suggestNo(building: BuildingId, floor: number): string {
    const inB = metas.filter(m => m.building === building)
    let candidate = inB.reduce((mx, m) => Math.max(mx, parseInt(m.no, 10) || 0), 0) + 1
    if (candidate < 100) candidate = floor * 100 + 1
    while (isDuplicateNo(metas, building, String(candidate))) candidate++
    return String(candidate)
  }

  async function addRoom(building: BuildingId, floor: number) {
    setPending(true)
    try { await repo.addRoom(building, floor, suggestNo(building, floor)) } catch { toastFail() } finally { setPending(false) }
  }

  return (
    <div className="min-h-full bg-slate-100 pb-10">
      <header className="sticky top-0 z-40 flex items-center gap-2 border-b bg-white px-4 py-3">
        <button className="text-sm text-slate-600" onClick={onBack}>← 返回</button>
        <h1 className="text-base font-bold">設定</h1>
      </header>
      <main className="px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-500">房間（房號可自訂）</h2>
          <span className="text-sm text-slate-600">
            {BUILDINGS.map(b => `${BUILDING_LABEL[b]} ${countByBuilding(metas, b)} 間`).join(' / ')} / 合計 {metas.length} 間
          </span>
        </div>

        {BUILDINGS.map(b => (
          <div key={b} className="mb-4 rounded-2xl bg-white p-3">
            <div className="mb-2 text-sm font-bold text-slate-700">{BUILDING_LABEL[b]}</div>
            {floors.map(f => (
              <div key={f} className="mb-2 border-t border-slate-100 pt-2">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">{f}F</span>
                  <button
                    className="rounded-lg bg-indigo-600 px-2 py-0.5 text-xs text-white"
                    onClick={() => addRoom(b, f)}
                    disabled={pending}
                  >
                    ＋ 新增房間
                  </button>
                </div>
                {(grouped.get(`${b}-${f}`) ?? []).map(m => (
                  <RoomNoRow
                    key={m.id} meta={m}
                    onCommit={no => commitNo(m, no)} onToggle={() => toggle(m)} onDelete={() => del(m)}
                  />
                ))}
                {(grouped.get(`${b}-${f}`) ?? []).length === 0 && (
                  <div className="py-1 text-xs text-slate-400">（此層尚無房間）</div>
                )}
              </div>
            ))}
          </div>
        ))}

        <h2 className="mb-2 text-sm font-semibold text-slate-500">帳號</h2>
        <div className="rounded-2xl bg-white p-3 text-sm text-slate-600">
          <div>帳號：{email || '（未登入）'}</div>
          <div>角色：{role === 'front' ? '櫃台' : '房務'}</div>
          {isDemo && <div className="text-amber-700">DEMO 模式（資料不共用）</div>}
          {role === 'front' && (
            <button className="mt-2 block text-indigo-600" onClick={onOpenAccounts}>→ 帳號管理</button>
          )}
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
