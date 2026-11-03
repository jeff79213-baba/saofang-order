export function NextGuestTag({ on, editable, onToggle }: {
  on: boolean; editable: boolean; onToggle: () => void
}) {
  if (on) {
    return (
      <span
        className={`rounded bg-amber-100 px-1 py-0.5 text-[10px] text-amber-900 ${editable ? 'cursor-pointer' : ''}`}
        onClick={editable ? (e) => { e.stopPropagation(); onToggle() } : undefined}
      >
        後續入住
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
