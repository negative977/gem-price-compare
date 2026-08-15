import { cn } from "@/lib/utils"

export default function MetricCard({ label, value, sublabel, icon: Icon, tone = "neutral", className }) {
  const toneClasses = {
    neutral: "text-foreground",
    positive: "text-positive",
    negative: "text-negative",
    primary: "text-primary",
  }

  return (
    <div className={cn("rounded-lg border border-border bg-surface p-5", className)}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
        {Icon && <Icon className="h-4 w-4 text-muted" strokeWidth={2} />}
      </div>
      <p className={cn("mt-2 font-heading text-2xl font-bold tabular-nums", toneClasses[tone])}>{value}</p>
      {sublabel && <p className="mt-1 text-xs text-muted">{sublabel}</p>}
    </div>
  )
}
