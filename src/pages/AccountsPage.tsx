import { useEffect, useState } from 'react'
import type { Role } from '../types'
import {
  createAccount, deleteAccount, disableAccount, enableAccount,
  listAccounts, purgeAccount, restoreAccount, setRole, type AccountRow,
} from '../lib/accounts'

function togglePw(inputId: string, btn: HTMLButtonElement) {
  const inp = document.getElementById(inputId) as HTMLInputElement | null
  if (!inp) return
  const show = inp.type === 'password'
  inp.type = show ? 'text' : 'password'
  btn.textContent = show ? '隱藏' : '顯示'
}

export function AccountsPage({ onBack }: { onBack: () => void }) {
  const [rows, setRows] = useState<AccountRow[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState<string | null>(null)
  const [form, setForm] = useState<{ username: string; password: string; role: Role; name: string }>({
    username: '', password: '', role: 'housekeeping', name: '',
  })
  const [busy, setBusy] = useState(false)

  async function refresh() {
    setLoading(true)
    try { setRows(await listAccounts()) }
    catch { setMsg('讀取帳號失敗（需櫃台權限）') }
    finally { setLoading(false) }
  }
  useEffect(() => { refresh() }, [])

  function flash(t: string) { setMsg(t); setTimeout(() => setMsg(null), 2500) }

  async function run(fn: () => Promise<void>, ok: string) {
    setBusy(true)
    try { await fn(); await refresh(); flash(ok) }
    catch (e) { flash('操作失敗：' + (e instanceof Error ? e.message : '錯誤')) }
    finally { setBusy(false) }
  }

  const active = rows.filter(r => !r.deleted)
  const bin = rows.filter(r => r.deleted)

  return (
    <div className="min-h-full bg-slate-100 pb-10">
      <header className="sticky top-0 z-40 flex items-center gap-2 border-b bg-white px-4 py-3">
        <button className="text-sm text-slate-600" onClick={onBack}>← 返回</button>
        <h1 className="text-base font-bold">帳號管理</h1>
      </header>
      <main className="px-4 py-4">
        {msg && <div className="mb-3 rounded-lg bg-slate-900/90 px-3 py-2 text-sm text-white">{msg}</div>}

        <section className="mb-4 rounded-2xl bg-white p-3">
          <h2 className="mb-2 text-sm font-semibold text-slate-500">新增帳號</h2>
          <div className="grid grid-cols-2 gap-2">
            <input className="rounded-lg border border-slate-300 p-2 text-sm" placeholder="使用者名稱（如 WIND01）"
              value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
            <input className="rounded-lg border border-slate-300 p-2 text-sm" placeholder="姓名"
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <div className="pw-wrap flex items-center" style={{ position: 'relative' }}>
              <input id="acct-pw" type="password" className="w-full rounded-lg border border-slate-300 p-2 text-sm"
                style={{ paddingRight: 48 }} placeholder="密碼（≥6）"
                value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
              <button type="button" className="pw-toggle absolute right-2 text-xs text-slate-500"
                onClick={(e) => togglePw('acct-pw', e.currentTarget)}>顯示</button>
            </div>
            <select className="rounded-lg border border-slate-300 p-2 text-sm" value={form.role}
              onChange={e => setForm({ ...form, role: e.target.value as Role })}>
              <option value="housekeeping">房務</option>
              <option value="front">櫃台</option>
            </select>
          </div>
          <button
            disabled={busy}
            className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            onClick={() => run(() => createAccount(form), '已建立帳號')}
          >
            建立
          </button>
        </section>

        <section className="mb-4 rounded-2xl bg-white p-3">
          <h2 className="mb-2 text-sm font-semibold text-slate-500">帳號（{active.length}）</h2>
          {loading && <div className="text-sm text-slate-400">載入中…</div>}
          {active.map(a => (
            <div key={a.uid} className="flex flex-wrap items-center gap-2 border-t border-slate-100 py-2">
              <div className="min-w-[140px] flex-1">
                <div className="text-sm font-semibold">{a.email}</div>
                <div className="text-xs text-slate-500">
                  {a.name}・{a.disabled ? <span className="text-amber-600">已停用</span> : '正常'}
                </div>
              </div>
              <select className="rounded-lg border border-slate-300 p-1 text-xs" value={a.role}
                onChange={e => run(() => setRole(a.uid, e.target.value as Role), '已更新角色')}>
                <option value="housekeeping">房務</option>
                <option value="front">櫃台</option>
              </select>
              {a.disabled
                ? <button className="rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white" onClick={() => run(() => enableAccount(a.uid), '已啟用')}>啟用</button>
                : <button className="rounded-lg bg-amber-100 px-2 py-1 text-xs text-amber-800" onClick={() => run(() => disableAccount(a.uid), '已停用')}>停用</button>}
              <button className="rounded-lg bg-red-50 px-2 py-1 text-xs text-red-600" onClick={() => run(() => deleteAccount(a.uid), '已移至保留區')}>刪除</button>
            </div>
          ))}
        </section>

        <section className="rounded-2xl bg-slate-200 p-3">
          <h2 className="mb-2 text-sm font-semibold text-slate-500">保留區（{bin.length}）</h2>
          {bin.map(a => (
            <div key={a.uid} className="flex flex-wrap items-center gap-2 border-t border-slate-300 py-2">
              <div className="min-w-[140px] flex-1">
                <div className="text-sm font-semibold text-slate-500 line-through">{a.email}</div>
                <div className="text-xs text-slate-400">{a.name}</div>
              </div>
              <button className="rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white" onClick={() => run(() => restoreAccount(a.uid), '已復原')}>復原</button>
              <button className="rounded-lg bg-red-600 px-2 py-1 text-xs text-white" onClick={() => run(() => purgeAccount(a.uid), '已永久刪除')}>永久刪除</button>
            </div>
          ))}
          {bin.length === 0 && <div className="py-2 text-xs text-slate-400">（沒有已刪除帳號）</div>}
        </section>
      </main>
    </div>
  )
}
