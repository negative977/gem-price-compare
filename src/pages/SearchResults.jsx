import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal } from "lucide-react"
import SearchBar from "@/components/SearchBar"
import ProductCard from "@/components/ProductCard"
import ProductCardSkeleton from "@/components/ProductCardSkeleton"
import { CATEGORIES, PLATFORMS, searchProducts } from "@/data/mockProducts"

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") ?? ""
  const [category, setCategory] = useState(searchParams.get("category") ?? "")
  const [platform, setPlatform] = useState("")
  const [sort, setSort] = useState("relevance")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 350)
    return () => clearTimeout(timer)
  }, [query, category, platform])

  const products = useMemo(
    () => searchProducts(query, { category: category || undefined, platform: platform || undefined }),
    [query, category, platform],
  )

  const cards = useMemo(() => {
    const flattened = products.flatMap((product) =>
      product.listings.map((listing) => ({ product, listing })),
    )

    if (sort === "low") {
      return flattened.sort((a, b) => a.listing.price - b.listing.price)
    }
    if (sort === "high") {
      return flattened.sort((a, b) => b.listing.price - a.listing.price)
    }
    return flattened
  }, [products, sort])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          {query ? `Results for "${query}"` : "All Products"}
        </h1>
        <p className="mt-1 text-sm text-muted">
          {cards.length} listing{cards.length === 1 ? "" : "s"} found across GeM, Amazon, and Flipkart.
        </p>
      </div>

      <div className="mt-6">
        <SearchBar size="sm" initialValue={query} />
      </div>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-56">
          <div className="rounded-lg border border-border bg-surface p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Sort by</p>
              <div className="mt-2 flex flex-col gap-1.5">
                {[
                  { value: "relevance", label: "Relevance" },
                  { value: "low", label: "Lowest price" },
                  { value: "high", label: "Highest price" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-2 text-sm text-foreground">
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={sort === option.value}
                      onChange={() => setSort(option.value)}
                      className="h-3.5 w-3.5 accent-[var(--color-primary)]"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Platform</p>
              <div className="mt-2 flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="radio"
                    name="platform"
                    checked={platform === ""}
                    onChange={() => setPlatform("")}
                    className="h-3.5 w-3.5 accent-[var(--color-primary)]"
                  />
                  All Platforms
                </label>
                {Object.keys(PLATFORMS).map((p) => (
                  <label key={p} className="flex items-center gap-2 text-sm text-foreground">
                    <input
                      type="radio"
                      name="platform"
                      checked={platform === p}
                      onChange={() => setPlatform(p)}
                      className="h-3.5 w-3.5 accent-[var(--color-primary)]"
                    />
                    {p}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Category</p>
              <div className="mt-2 flex flex-col gap-1.5">
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="radio"
                    name="category"
                    checked={category === ""}
                    onChange={() => setCategory("")}
                    className="h-3.5 w-3.5 accent-[var(--color-primary)]"
                  />
                  All Categories
                </label>
                {CATEGORIES.map((c) => (
                  <label key={c.id} className="flex items-center gap-2 text-sm text-foreground">
                    <input
                      type="radio"
                      name="category"
                      checked={category === c.id}
                      onChange={() => setCategory(c.id)}
                      className="h-3.5 w-3.5 accent-[var(--color-primary)]"
                    />
                    {c.name}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : cards.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface py-24 text-center">
              <p className="text-sm font-semibold text-foreground">No matching products found</p>
              <p className="mt-1 text-sm text-muted">Try a different search term or clear your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map(({ product, listing }) => (
                <ProductCard key={`${product.id}-${listing.platform}`} product={product} listing={listing} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
