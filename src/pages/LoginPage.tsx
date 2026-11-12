import { useState } from 'react'

function togglePw(inputId: string, btn: HTMLButtonElement) {
  const inp = document.getElementById(inputId) as HTMLInputElement | null
  if (!inp) return
  const show = inp.type === 'password'
  inp.type = show ? 'text' : 'password'
  btn.innerHTML = show
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
}

const LOGIN_DOMAIN = 'saofang.local'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [err, setErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setErr(null)
    setLoading(true)
    try {
      const { authClient } = await import('../lib/firebase')
      const { signInWithEmailAndPassword } = await import('firebase/auth')
      const id = email.trim().toLowerCase()
      const full = id.includes('@') ? id : `${id}@${LOGIN_DOMAIN}`
      await signInWithEmailAndPassword(authClient(), full, pw)
    } catch {
      setErr('登入失敗，請檢查帳號密碼')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-full items-center justify-center bg-slate-100 px-6">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-1 text-lg font-bold text-slate-900">民宿掃房順序</h1>
        <p className="mb-5 text-xs text-slate-500">請以櫃台或房務帳號登入</p>
        <label className="mb-1 block text-sm text-slate-600">帳號</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="mb-3 w-full rounded-lg border border-slate-300 p-2 text-sm"
          autoComplete="username"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />
        <label className="mb-1 block text-sm text-slate-600">密碼</label>
        <div className="pw-wrap mb-4 flex items-center" style={{ position: 'relative' }}>
          <input
            id="login-pw"
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-2 text-sm"
            style={{ paddingRight: 40 }}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="pw-toggle absolute right-2"
            onClick={(e) => togglePw('login-pw', e.currentTarget)}
            aria-label="顯示或隱藏密碼"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        {err && <div className="mb-3 text-sm text-red-600">{err}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? '登入中…' : '登入'}
        </button>
      </form>
    </div>
  )
}
