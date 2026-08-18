export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface">
      <div className="h-44 animate-pulse bg-muted-surface" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <div className="h-5 w-14 animate-pulse rounded-full bg-muted-surface" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-16 animate-pulse rounded bg-muted-surface" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-muted-surface" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-5 w-16 animate-pulse rounded-md bg-muted-surface" />
          <div className="h-5 w-16 animate-pulse rounded-md bg-muted-surface" />
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="h-6 w-20 animate-pulse rounded bg-muted-surface" />
          <div className="h-8 w-24 animate-pulse rounded-md bg-muted-surface" />
        </div>
      </div>
    </div>
  )
}
