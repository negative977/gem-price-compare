import { Link, useParams } from "react-router-dom"
import { ChevronRight, TrendingDown, TrendingUp, ArrowLeft } from "lucide-react"
import MetricCard from "@/components/MetricCard"
import ComparisonTable from "@/components/ComparisonTable"
import MatchingFlow from "@/components/MatchingFlow"
import AnalyticsSummary from "@/components/AnalyticsSummary"
import { formatINR, formatPercent } from "@/lib/utils"
import { getComparison } from "@/data/mockProducts"

export default function ProductComparison() {
  const { productId } = useParams()
  const comparison = getComparison(productId)

  if (!comparison) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-lg font-bold text-foreground">Product not found</p>
        <Link to="/search" className="mt-4 text-sm font-semibold text-primary">
          Back to search
        </Link>
      </div>
    )
  }

  const { product, gemListing, marketListings, lowest, priceDifference, percentDifference } = comparison
  const isHigher = priceDifference > 0

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-center gap-1.5 text-xs font-medium text-muted">
        <Link to="/search" className="inline-flex items-center gap-1 hover:text-primary">
          <ArrowLeft className="h-3.5 w-3.5" />
          Search Results
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="mt-4 flex flex-col gap-6 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center">
        <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-md bg-muted-surface">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-contain"
            crossOrigin="anonymous"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{product.brand}</p>
          <h1 className="mt-1 font-heading text-2xl font-bold text-foreground text-balance">{product.name}</h1>
          <p className="mt-2 text-sm text-muted">{product.specs.join(" · ")}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MetricCard label="GeM Price" value={formatINR(gemListing.price)} tone="primary" />
        <MetricCard label="Lowest Market Price" value={formatINR(lowest)} tone="positive" icon={TrendingDown} />
        <MetricCard
          label="Price Difference"
          value={formatINR(Math.abs(priceDifference))}
          tone={isHigher ? "negative" : "positive"}
          icon={isHigher ? TrendingUp : TrendingDown}
        />
        <MetricCard
          label="Difference"
          value={formatPercent(percentDifference)}
          tone={isHigher ? "negative" : "positive"}
        />
      </div>

      <div className="mt-8">
        <h2 className="font-heading text-lg font-bold text-foreground">Comparison Table</h2>
        <div className="mt-3">
          <ComparisonTable gemListing={gemListing} marketListings={marketListings} lowestPrice={lowest} />
        </div>
      </div>

      <div className="mt-8">
        <MatchingFlow gemListing={gemListing} marketListings={marketListings} />
      </div>

      <div className="mt-8">
        <AnalyticsSummary comparison={comparison} />
      </div>
    </div>
  )
}
