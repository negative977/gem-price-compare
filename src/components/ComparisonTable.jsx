import { Star } from "lucide-react"
import PlatformTag from "@/components/PlatformTag"
import { formatINR } from "@/lib/utils"

export default function ComparisonTable({ gemListing, marketListings, lowestPrice }) {
  const rows = [gemListing, ...marketListings]

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-border bg-muted-surface text-left">
              <th className="px-5 py-3 font-semibold text-muted">Platform</th>
              <th className="px-5 py-3 font-semibold text-muted">Product</th>
              <th className="px-5 py-3 font-semibold text-muted">Price</th>
              <th className="px-5 py-3 font-semibold text-muted">Rating</th>
              <th className="px-5 py-3 font-semibold text-muted">Match</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isLowest = row.price === lowestPrice
              const isGem = row.platform === "GeM"
              return (
                <tr key={row.platform} className="border-b border-border last:border-0">
                  <td className="px-5 py-4">
                    <PlatformTag platform={row.platform} />
                  </td>
                  <td className="px-5 py-4 text-foreground">{row.productName}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`font-heading font-bold ${isLowest ? "text-positive" : "text-foreground"}`}
                    >
                      {formatINR(row.price)}
                    </span>
                    {isLowest && !isGem && (
                      <span className="ml-2 rounded-full bg-positive-soft px-2 py-0.5 text-[11px] font-semibold text-positive">
                        Lowest
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 text-foreground">
                      <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                      {row.rating}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`font-semibold ${isGem ? "text-primary" : "text-foreground"}`}
                    >
                      {row.match}%
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
