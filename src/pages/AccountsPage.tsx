import { useEffect, useState } from 'react'
import type { Role } from '../types'
import {
  deleteAccount, disableAccount, enableAccount,
  listAccounts, restoreAccount, setRole, type AccountRow,
} from '../lib/accounts'

export function AccountsPage({ onBack }: { onBack: () => void }) {
  const [rows, setRows] = useState<AccountRow[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function refresh() {
    setLoading(true)
    try { setRows(await listAccounts()) }
    catch (e) { setMsg('讀取帳號失敗：' + (e instanceof Error ? e.message : '錯誤')) }
    finally { setLoading(false) }
  }
  useEffect(() => { refresh() }, [])

  function flash(t: string) { setMsg(t); setTimeout(() => setMsg(null), 3000) }

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

        <div className="mb-4 rounded-2xl bg-amber-50 p-3 text-xs text-amber-900">
          「刪除」＝收回權限並放入保留區（可復原）。<br />
          建立帳號 / 改密碼 / 永久刪除請執行工具：<br />
          <code className="mt-1 block whitespace-pre-wrap break-all rounded bg-white/70 p-1">
            node tools/set-account.mjs &lt;帳號&gt; &lt;密碼&gt; [front|housekeeping]{'\n'}
            node tools/set-account.mjs &lt;帳號&gt; --password &lt;新密碼&gt;{'\n'}
            node tools/set-account.mjs &lt;帳號&gt; --remove
          </code>
        </div>

        <section className="mb-4 rounded-2xl bg-white p-3">
          <h2 className="mb-2 text-sm font-semibold text-slate-500">帳號（{active.length}）</h2>
          {loading && <div className="text-sm text-slate-400">載入中…</div>}
          {active.map(a => (
            <div key={a.uid} className="flex flex-wrap items-center gap-2 border-t border-slate-100 py-2">
              <div className="min-w-[150px] flex-1">
                <div className="text-sm font-semibold">{a.email || a.uid}</div>
                <div className="text-xs text-slate-500">
                  {a.name}・{a.disabled ? <span className="text-amber-600">已停用</span> : '正常'}
                </div>
              </div>
              <select className="rounded-lg border border-slate-300 p-1 text-xs" value={a.role}
                disabled={busy}
                onChange={e => run(() => setRole(a.uid, e.target.value as Role), '已更新角色')}>
                <option value="housekeeping">房務</option>
                <option value="front">櫃台</option>
              </select>
              {a.disabled
                ? <button disabled={busy} className="rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white" onClick={() => run(() => enableAccount(a.uid), '已啟用')}>啟用</button>
                : <button disabled={busy} className="rounded-lg bg-amber-100 px-2 py-1 text-xs text-amber-800" onClick={() => run(() => disableAccount(a.uid), '已停用')}>停用</button>}
              <button disabled={busy} className="rounded-lg bg-red-50 px-2 py-1 text-xs text-red-600" onClick={() => run(() => deleteAccount(a.uid), '已移至保留區')}>刪除</button>
            </div>
          ))}
        </section>

        <section className="rounded-2xl bg-slate-200 p-3">
          <h2 className="mb-2 text-sm font-semibold text-slate-500">保留區（{bin.length}）</h2>
          {bin.map(a => (
            <div key={a.uid} className="flex flex-wrap items-center gap-2 border-t border-slate-300 py-2">
              <div className="min-w-[150px] flex-1">
                <div className="text-sm font-semibold text-slate-500 line-through">{a.email || a.uid}</div>
                <div className="text-xs text-slate-400">{a.name}</div>
              </div>
              <button disabled={busy} className="rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white" onClick={() => run(() => restoreAccount(a.uid), '已復原')}>復原</button>
            </div>
          ))}
          {bin.length === 0 && <div className="py-2 text-xs text-slate-400">（沒有已刪除帳號）</div>}
        </section>
      </main>
    </div>
  )
}
