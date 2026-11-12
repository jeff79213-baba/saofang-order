import { useEffect, useState } from 'react'
import type { Role } from '../types'
import {
  createAccount, deleteAccount, disableAccount, enableAccount,
  listAccounts, restoreAccount, setNote, setRole, type AccountRow,
} from '../lib/accounts'

function NoteInput({ value, onSave }: { value: string; onSave: (v: string) => void }) {
  const [val, setVal] = useState(value)
  useEffect(() => { setVal(value) }, [value])
  return (
    <input
      value={val}
      placeholder="備註（中文名）"
      onChange={e => setVal(e.target.value)}
      onBlur={() => { if (val !== value) onSave(val.trim()) }}
      onKeyDown={e => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur() }}
      className="w-32 rounded-lg border border-slate-200 px-2 py-1 text-xs"
    />
  )
}

export function AccountsPage({ onBack, selfUid }: { onBack: () => void; selfUid?: string }) {
  const [rows, setRows] = useState<AccountRow[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [form, setForm] = useState<{ username: string; password: string; role: Role; note: string }>({
    username: '', password: '', role: 'housekeeping', note: '',
  })
  const [showPw, setShowPw] = useState(false)

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

        <section className="mb-4 rounded-2xl bg-white p-3">
          <h2 className="mb-2 text-sm font-semibold text-slate-500">新增帳號</h2>
          <div className="grid grid-cols-2 gap-2">
            <input className="rounded-lg border border-slate-300 p-2 text-sm" placeholder="短帳號（如 WIND01）"
              autoCapitalize="none" autoCorrect="off" spellCheck={false}
              value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
            <input className="rounded-lg border border-slate-300 p-2 text-sm" placeholder="備註（中文名）"
              value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} />
            <div className="pw-wrap flex items-center" style={{ position: 'relative' }}>
              <input type={showPw ? 'text' : 'password'} className="w-full rounded-lg border border-slate-300 p-2 text-sm"
                style={{ paddingRight: 48 }} placeholder="密碼（≥6）"
                value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
              <button type="button" className="absolute right-2 text-xs text-slate-500" onClick={() => setShowPw(s => !s)}>
                {showPw ? '隱藏' : '顯示'}
              </button>
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
            onClick={() => run(async () => {
              await createAccount(form)
              setForm({ username: '', password: '', role: 'housekeeping', note: '' })
            }, '已建立帳號')}
          >
            建立
          </button>
          <p className="mt-1 text-xs text-slate-400">短帳號會自動補 @saofang.local；建立後即可用該帳密登入。</p>
        </section>

        <div className="mb-4 rounded-2xl bg-amber-50 p-3 text-xs text-amber-900">
          「刪除」＝收回權限並放入保留區（可復原）。若要「永久刪除」或重設密碼，請在電腦執行：<br />
          <code className="mt-1 block whitespace-pre-wrap break-all rounded bg-white/70 p-1">
            node tools/set-account.mjs &lt;帳號&gt; --remove{'\n'}
            node tools/set-account.mjs &lt;帳號&gt; --password &lt;新密碼&gt;
          </code>
        </div>

        <section className="mb-4 rounded-2xl bg-white p-3">
          <h2 className="mb-2 text-sm font-semibold text-slate-500">帳號（{active.length}）</h2>
          {loading && <div className="text-sm text-slate-400">載入中…</div>}
          {active.map(a => {
            const isSelf = a.uid === selfUid
            return (
              <div key={a.uid} className="flex flex-wrap items-center gap-2 border-t border-slate-100 py-2">
                <div className="min-w-[150px] flex-1">
                  <div className="text-sm font-semibold">
                    {a.role === 'front' && <span className="mr-1 rounded bg-indigo-600 px-1 py-0.5 text-[10px] text-white">櫃台</span>}
                    {a.email || a.uid}
                    {isSelf && <span className="ml-1 rounded bg-slate-200 px-1 py-0.5 text-[10px] text-slate-600">本人</span>}
                  </div>
                  <div className="text-xs text-slate-500">
                    {a.disabled ? <span className="text-amber-600">已停用</span> : '正常'}
                  </div>
                </div>
                {isSelf ? (
                  <div className="text-xs text-slate-400">本人帳號不可在此停用或刪除</div>
                ) : (
                  <>
                    <NoteInput value={a.note} onSave={v => run(() => setNote(a.uid, v), '已更新備註')} />
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
                  </>
                )}
              </div>
            )
          })}
        </section>

        <section className="rounded-2xl bg-slate-200 p-3">
          <h2 className="mb-2 text-sm font-semibold text-slate-500">保留區（{bin.length}）</h2>
          {bin.map(a => (
            <div key={a.uid} className="flex flex-wrap items-center gap-2 border-t border-slate-300 py-2">
              <div className="min-w-[150px] flex-1">
                <div className="text-sm font-semibold text-slate-500 line-through">{a.email || a.uid}</div>
                <div className="text-xs text-slate-400">{a.note}</div>
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
