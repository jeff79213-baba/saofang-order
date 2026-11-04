export function NextGuestTag({ on, editable, onToggle }: {
  on: boolean; editable: boolean; onToggle: () => void
}) {
  if (on) {
    return (
      <span
        className={`tag-pop inline-flex items-center gap-0.5 rounded border border-amber-500 bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold text-amber-950 shadow-sm ${editable ? 'cursor-pointer' : ''}`}
        onClick={editable ? (e) => { e.stopPropagation(); onToggle() } : undefined}
      >
        ★ 後續入住
      </span>
    )
  }
  if (!editable) return null
  return (
    <button
      type="button"
      className="rounded bg-slate-100 px-1 py-0.5 text-[10px] text-slate-400"
      onClick={(e) => { e.stopPropagation(); onToggle() }}
    >
      ＋後續入住
    </button>
  )
}
