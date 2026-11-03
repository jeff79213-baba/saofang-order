export interface ToastMsg { id: number; text: string }

export function ToastHost({ toasts }: { toasts: ToastMsg[] }) {
  return (
    <div className="pointer-events-none fixed bottom-4 left-0 right-0 z-50 flex flex-col items-center gap-2 px-4">
      {toasts.map(t => (
        <div key={t.id} className="rounded-lg bg-slate-900/90 px-4 py-2 text-sm text-white shadow-lg">
          {t.text}
        </div>
      ))}
    </div>
  )
}
