// Section divider — visible line separator between chapters
export function ChapterDivider({ label }) {
  return (
    <div className="w-full py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <div className="flex-1 h-px bg-slate-200" />
        {label && (
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 select-none whitespace-nowrap">
            {label}
          </span>
        )}
        <div className="flex-1 h-px bg-slate-200" />
      </div>
    </div>
  )
}
