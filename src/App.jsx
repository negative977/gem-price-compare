import { Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Home from "@/pages/Home"
import SearchResults from "@/pages/SearchResults"
import ProductComparison from "@/pages/ProductComparison"
import Analytics from "@/pages/Analytics"
import About from "@/pages/About"
import NotFound from "@/pages/NotFound"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/compare/:productId" element={<ProductComparison />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
