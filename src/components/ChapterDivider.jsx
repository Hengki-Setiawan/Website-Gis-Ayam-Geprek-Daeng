// Section divider component — BP1 "garis horizontal dengan ● di tengah"
export function ChapterDivider({ label }) {
  return (
    <div className="chapter-divider text-gray-700 text-xs font-semibold tracking-widest uppercase select-none">
      <span>{label || '●'}</span>
    </div>
  )
}
