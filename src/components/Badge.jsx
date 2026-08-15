import { cn } from "@/lib/utils"

const VARIANTS = {
  neutral: "bg-muted-surface text-foreground",
  primary: "bg-primary/10 text-primary",
  positive: "bg-positive-soft text-positive",
  negative: "bg-negative-soft text-negative",
  warning: "bg-warning-soft text-warning",
}

export default function Badge({ children, variant = "neutral", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
