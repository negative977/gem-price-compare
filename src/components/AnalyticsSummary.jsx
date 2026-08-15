import { TrendingUp, TrendingDown, Wallet, Target } from "lucide-react"
import MetricCard from "@/components/MetricCard"
import PriceChart from "@/components/PriceChart"
import { formatINR, formatPercent } from "@/lib/utils"

export default function AnalyticsSummary({ comparison }) {
  const { gemListing, marketAverage, lowest, fairPrice, potentialSaving, vsAveragePercent } = comparison
  const isAboveAverage = vsAveragePercent > 0

  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="font-heading text-lg font-bold text-foreground">Price Analytics</h3>
      <p className="mt-1 text-sm text-muted">
        Visual breakdown of GeM price versus current market benchmarks.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MetricCard label="GeM Price" value={formatINR(gemListing.price)} icon={Wallet} tone="primary" />
        <MetricCard label="Market Average" value={formatINR(marketAverage)} icon={Target} />
        <MetricCard label="Lowest Market Price" value={formatINR(lowest)} icon={TrendingDown} tone="positive" />
        <MetricCard label="Estimated Fair Price" value={formatINR(fairPrice)} icon={TrendingUp} />
      </div>

      <div className="mt-6">
        <PriceChart comparison={comparison} />
      </div>

      <div className="mt-6 space-y-2 rounded-md bg-muted-surface p-4 text-sm leading-relaxed text-foreground">
        <p>
          <span className="font-semibold">
            {isAboveAverage ? "GeM price is" : "GeM price is"} {formatPercent(vsAveragePercent)}
          </span>{" "}
          {isAboveAverage ? "higher" : "lower"} than the current market average.
        </p>
        <p>
          <span className="font-semibold">Potential saving</span> compared with the lowest market price:{" "}
          <span className="font-semibold text-positive">{formatINR(potentialSaving)}</span>.
        </p>
        <p>
          <span className="font-semibold">Estimated fair market price:</span> {formatINR(fairPrice)}.
        </p>
      </div>
    </div>
  )
}
