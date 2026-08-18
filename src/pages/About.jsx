import { ShieldCheck, ScanSearch, LineChart, GitCompareArrows, Database, Layers } from "lucide-react"
import FAQAccordion from "@/components/FAQAccordion"

const FAQ_ITEMS = [
  {
    question: "Where does the price data come from?",
    answer:
      "This preview uses illustrative sample data. In production, listings would be pulled from the GeM catalogue and partner retail platforms on a scheduled basis.",
  },
  {
    question: "How is a 'match' score calculated?",
    answer:
      "Match confidence compares normalized attributes — brand, model, specifications, and category — between a GeM listing and a candidate retail listing, so buyers can see the basis for each comparison.",
  },
  {
    question: "How often are prices refreshed?",
    answer:
      "Comparison pages show the timestamp of the most recent price sync so you always know how current the figures are.",
  },
  {
    question: "Can I use this data for procurement decisions?",
    answer:
      "This prototype is for demonstration only and is not affiliated with the Government e-Marketplace, Amazon, or Flipkart. Always verify figures against the live source before citing them.",
  },
]

const steps = [
  {
    icon: ScanSearch,
    title: "Listing ingestion",
    description:
      "Product listings are pulled from GeM and partner e-commerce catalogues, including title, specification sheet, seller details, and price history.",
  },
  {
    icon: Layers,
    title: "Specification normalization",
    description:
      "Free-text specifications are parsed into structured attributes (brand, model, RAM, warranty, etc.) so unlike listings can be compared on equal terms.",
  },
  {
    icon: GitCompareArrows,
    title: "Cross-platform matching",
    description:
      "A similarity engine scores candidate listings against a reference product using attribute overlap, title similarity, and category alignment to find true equivalents.",
  },
  {
    icon: LineChart,
    title: "Price benchmarking",
    description:
      "Matched listings are indexed against historical price trends to flag overpricing, underpricing, and savings opportunities in real time.",
  },
]

const principles = [
  {
    icon: ShieldCheck,
    title: "Procurement integrity",
    description:
      "Every comparison is traceable to a source listing, so buyers can verify figures before citing them in a procurement decision.",
  },
  {
    icon: Database,
    title: "Transparent methodology",
    description:
      "Match confidence scores are shown alongside every result — nothing is presented as equivalent without a visible basis for that claim.",
  },
]

export default function About() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">About the platform</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Independent price intelligence for public procurement
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            GeM Price Compare cross-references product listings on the Government e-Marketplace against equivalent
            listings on open retail platforms, so procurement officers and vendors can verify that quoted prices
            reflect fair market value.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-xl font-bold text-foreground">How matching works</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Comparing procurement listings to retail listings is not a simple price lookup — it requires resolving
          which listings actually describe the same product. Our pipeline runs in four stages.
        </p>

        <ol className="mt-8 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <li
                key={step.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xl font-bold text-foreground">Principles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon
              return (
                <div key={principle.title} className="rounded-lg border border-border bg-card p-6">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-xl font-bold text-foreground">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="text-lg font-semibold text-foreground">Data disclaimer</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            This preview uses illustrative sample data for demonstration purposes. It is not affiliated with, and
            does not represent live prices from, the Government e-Marketplace or any listed retail platform.
          </p>
        </div>
      </section>
    </div>
  )
}
