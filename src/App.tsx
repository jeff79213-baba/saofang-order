import { useState } from 'react'
import { todayKey } from './lib/dayKey'
import { useRooms } from './hooks/useRooms'
import { useAuth } from './hooks/useAuth'
import { MainPage } from './pages/MainPage'
import { SettingsPage } from './pages/SettingsPage'
import { LoginPage } from './pages/LoginPage'

export default function App() {
  const dayKey = todayKey()
  const auth = useAuth()
  const { rooms, settings, repo } = useRooms(dayKey)
  const [page, setPage] = useState<'main' | 'settings'>('main')

  if (auth.loading) {
    return <div className="flex h-full items-center justify-center text-slate-500">載入中…</div>
  }
  if (!auth.role) {
    return <LoginPage />
  }

  if (page === 'settings') {
    return (
      <SettingsPage
        settings={settings} repo={repo} role={auth.role} isDemo={auth.isDemo} email={auth.email}
        onBack={() => setPage('main')}
        onSignOut={async () => { await auth.signOut(); setPage('main') }}
      />
    )
  }

  return (
    <MainPage
      rooms={rooms} settings={settings} role={auth.role} isDemo={auth.isDemo}
      repo={repo} dayKey={dayKey} onOpenSettings={() => setPage('settings')}
    />
  )
}
