export function ConfirmDialog(props: {
  open: boolean; title: string; message: string
  onConfirm: () => void; onCancel: () => void
}) {
  if (!props.open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6" onClick={props.onCancel}>
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl" onClick={e => e.stopPropagation()}>
        <h3 className="text-base font-bold text-slate-900">{props.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{props.message}</p>
        <div className="mt-5 flex justify-end gap-2">
          <button className="rounded-lg px-4 py-2 text-sm text-slate-600" onClick={props.onCancel}>取消</button>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white" onClick={props.onConfirm}>確定</button>
        </div>
      </div>
    </div>
  )
}
