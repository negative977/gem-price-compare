import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import AnalyticsSummary from "@/components/AnalyticsSummary"
import { getAllProducts, getComparison } from "@/data/mockProducts"

export default function Analytics() {
  const products = getAllProducts()
  const [productId, setProductId] = useState(products[0].id)
  const comparison = getComparison(productId)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Price Analytics</h1>
          <p className="mt-1 text-sm text-muted">
            Select a product to view its GeM price against market benchmarks.
          </p>
        </div>

        <select
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:w-72"
        >
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        <AnalyticsSummary comparison={comparison} />
      </div>

      <div className="mt-6 flex justify-end">
        <Link
          to={`/compare/${productId}`}
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-strong"
        >
          View Full Comparison
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
