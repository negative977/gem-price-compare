import { ArrowDown, CheckCircle2 } from "lucide-react"
import PlatformTag from "@/components/PlatformTag"
import { MATCHING_FACTORS } from "@/data/mockProducts"

export default function MatchingFlow({ gemListing, marketListings }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="font-heading text-lg font-bold text-foreground">Similar Product Detection</h3>
      <p className="mt-1 text-sm text-muted">
        How the system identifies similar products across platforms.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {marketListings.map((listing) => (
          <div key={listing.platform} className="flex flex-col items-center gap-2 rounded-lg bg-muted-surface p-6 text-center">
            <div className="rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground">
              <PlatformTag platform="GeM" className="justify-center" />
              <p className="mt-1">{gemListing.productName}</p>
            </div>

            <ArrowDown className="h-4 w-4 text-muted" />

            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              {listing.match}% Match
            </span>

            <ArrowDown className="h-4 w-4 text-muted" />

            <div className="rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground">
              <PlatformTag platform={listing.platform} className="justify-center" />
              <p className="mt-1">{listing.productName}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Matching factors</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {MATCHING_FACTORS.map((factor) => (
            <span
              key={factor}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-positive" />
              {factor}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs italic text-muted">
        Matching score represents similarity between product specifications. Scores shown are mock data
        for this prototype.
      </p>
    </div>
  )
}
