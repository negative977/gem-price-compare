import { Link } from "react-router-dom"
import { Scale } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Scale className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="font-heading text-base font-bold text-foreground">GeM Price Compare</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A comparative analytics prototype for evaluating Government e-Marketplace prices against
              leading e-commerce platforms. Built for PS-17.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <p className="text-sm font-semibold text-foreground">Platform</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/search" className="hover:text-primary">Compare</Link></li>
                <li><Link to="/analytics" className="hover:text-primary">Analytics</Link></li>
                <li><Link to="/about" className="hover:text-primary">About</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Data Sources</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>GeM</li>
                <li>Amazon</li>
                <li>Flipkart</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-xs text-muted">
          Prototype built with mock data for demonstration purposes. Not affiliated with the Government
          e-Marketplace, Amazon, or Flipkart.
        </div>
      </div>
    </footer>
  )
}
