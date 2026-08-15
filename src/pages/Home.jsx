import { Link } from "react-router-dom"
import { Laptop, Printer, Monitor, Armchair, AirVent, Search, GitCompareArrows, BarChart3, TrendingUp } from "lucide-react"
import SearchBar from "@/components/SearchBar"
import { CATEGORIES } from "@/data/mockProducts"

const CATEGORY_ICONS = {
  Laptop,
  Printer,
  Monitor,
  Armchair,
  AirVent,
}

const EXAMPLES = ["Laptop", "Printer", "Office Chair", "Monitor", "Air Conditioner"]

const STEPS = [
  { icon: Search, title: "Search a product", description: "Enter any product listed on GeM to begin the analysis." },
  { icon: GitCompareArrows, title: "Find matching products", description: "We surface comparable listings from Amazon and Flipkart." },
  { icon: BarChart3, title: "Compare prices", description: "View a side-by-side comparison table with match scores." },
  { icon: TrendingUp, title: "Analyze market value", description: "Get fair-price estimates and potential savings instantly." },
]

export default function Home() {
  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              PS-17 · Price Comparison Prototype
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl">
              Compare GeM Prices with the Market
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              Analyze Government e-Marketplace prices against leading e-commerce platforms and discover
              the best market value.
            </p>

            <div className="mt-8">
              <SearchBar />
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
                <span className="text-xs font-medium uppercase tracking-wide">Try:</span>
                {EXAMPLES.map((example) => (
                  <Link
                    key={example}
                    to={`/search?q=${encodeURIComponent(example)}`}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {example}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/hero-dashboard.png"
              alt="Illustration of a procurement analytics dashboard comparing prices across platforms"
              className="w-full rounded-lg"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-heading text-2xl font-bold text-foreground">Popular Categories</h2>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.icon]
            return (
              <Link
                key={category.id}
                to={`/search?category=${category.id}`}
                className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-surface p-6 text-center transition-colors hover:border-accent"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-muted-surface text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-foreground text-balance">{category.name}</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-bold text-foreground">How it works</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A simple four-step process to move from a GeM listing to a data-backed pricing decision.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative rounded-lg border border-border bg-background p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-foreground">
                    {index + 1}. {step.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
