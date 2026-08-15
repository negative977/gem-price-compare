import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search } from "lucide-react"

export default function SearchBar({ size = "lg", initialValue = "", className = "" }) {
  const [value, setValue] = useState(initialValue)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const q = value.trim()
    navigate(q ? `/search?q=${encodeURIComponent(q)}` : "/search")
  }

  const isLarge = size === "lg"

  return (
    <form onSubmit={handleSubmit} className={`flex w-full items-center gap-2 ${className}`}>
      <div className="relative flex-1">
        <Search
          className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted ${
            isLarge ? "h-5 w-5" : "h-4 w-4"
          }`}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for a product…"
          className={`w-full rounded-md border border-border bg-surface text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${
            isLarge ? "py-3.5 pl-12 pr-4 text-base" : "py-2.5 pl-10 pr-4 text-sm"
          }`}
        />
      </div>
      <button
        type="submit"
        className={`shrink-0 rounded-md bg-primary font-semibold text-primary-foreground transition-colors hover:bg-primary-strong ${
          isLarge ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm"
        }`}
      >
        Compare Prices
      </button>
    </form>
  )
}
