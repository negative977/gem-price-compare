import { Link } from "react-router-dom"
import { Star, ArrowRight } from "lucide-react"
import PlatformTag from "@/components/PlatformTag"
import { formatINR } from "@/lib/utils"

export default function ProductCard({ product, listing }) {
  const isGem = listing.platform === "GeM"

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-shadow hover:shadow-md">
      <div className="flex h-44 items-center justify-center bg-muted-surface p-4">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-contain"
          crossOrigin="anonymous"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <PlatformTag platform={listing.platform} />
          {!isGem && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
              {listing.match}% match
            </span>
          )}
        </div>

        <div>
          <p className="text-xs font-medium text-muted">{product.brand}</p>
          <h3 className="mt-0.5 text-sm font-semibold leading-snug text-foreground text-balance">
            {listing.productName}
          </h3>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {product.specs.slice(0, 3).map((spec) => (
            <li
              key={spec}
              className="rounded-md bg-muted-surface px-2 py-1 text-[11px] font-medium text-muted"
            >
              {spec}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div>
            <p className="font-heading text-xl font-bold text-foreground">{formatINR(listing.price)}</p>
            <div className="mt-0.5 flex items-center gap-1 text-xs text-muted">
              <Star className="h-3.5 w-3.5 fill-warning text-warning" />
              <span className="font-medium text-foreground">{listing.rating}</span>
              <span>({listing.reviews.toLocaleString("en-IN")})</span>
            </div>
          </div>

          <Link
            to={`/compare/${product.id}`}
            className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-muted-surface"
          >
            Compare
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
