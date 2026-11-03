export function ModeToggle({ mode, locked, onToggle }: {
  mode: 'normal' | 'clean'; locked: boolean; onToggle: () => void
}) {
  if (locked) {
    return <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">打掃模式</span>
  }
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`rounded-full px-3 py-1 text-xs font-semibold ${mode === 'clean' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'}`}
    >
      {mode === 'clean' ? '打掃模式' : '一般模式'}
    </button>
  )
}
