import { PLATFORMS } from "@/data/mockProducts"

export default function PlatformTag({ platform, className = "" }) {
  const info = PLATFORMS[platform] ?? { label: platform, color: "var(--color-muted)" }

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${className}`}
      style={{ color: info.color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: info.color }} />
      {info.label}
    </span>
  )
}
