import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Scale, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Compare" },
  { to: "/analytics", label: "Analytics" },
  { to: "/about", label: "About" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Scale className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            GeM Price Compare
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-muted-surface text-primary"
                    : "text-muted hover:bg-muted-surface hover:text-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/search"
            className="ml-3 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
          >
            Compare Prices
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3.5 py-2.5 text-sm font-medium",
                    isActive ? "bg-muted-surface text-primary" : "text-muted",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
