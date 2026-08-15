export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value, digits = 1) {
  const sign = value > 0 ? "+" : ""
  return `${sign}${value.toFixed(digits)}%`
}
