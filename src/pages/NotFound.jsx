import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">404</p>
      <h1 className="mt-3 font-heading text-3xl font-bold text-foreground">Page not found</h1>
      <p className="mt-2 max-w-md text-sm text-muted">
        The page you are looking for does not exist. Try searching for a product instead.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-strong"
      >
        Back to Home
      </Link>
    </div>
  )
}
