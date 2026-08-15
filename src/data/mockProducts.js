// Mock data layer for GeM Price Compare.
//
// This module intentionally mirrors the shape of the eventual Spring Boot
// REST responses so it can be swapped for real API calls later:
//   GET /api/products
//   GET /api/products/search?q=
//   GET /api/products/{id}
//   GET /api/products/{id}/comparisons
//   GET /api/products/{id}/analytics

export const CATEGORIES = [
  { id: "computers", name: "Computers & Laptops", icon: "Laptop" },
  { id: "office", name: "Office Equipment", icon: "Printer" },
  { id: "electronics", name: "Electronics", icon: "Monitor" },
  { id: "furniture", name: "Furniture", icon: "Armchair" },
  { id: "appliances", name: "Appliances", icon: "AirVent" },
]

export const PLATFORMS = {
  GeM: { label: "GeM", color: "var(--color-gem)" },
  Amazon: { label: "Amazon", color: "var(--color-amazon)" },
  Flipkart: { label: "Flipkart", color: "var(--color-flipkart)" },
}

// Each "product" groups one GeM listing with matched listings on other
// platforms so a search result / comparison view can be built from one record.
export const PRODUCTS = [
  {
    id: "dell-i5-16gb",
    name: "Dell Business Laptop",
    brand: "Dell",
    category: "computers",
    image: "/products/dell-laptop.png",
    specs: ["Intel Core i5 (12th Gen)", "16GB RAM", "512GB SSD", "15.6\" FHD Display"],
    listings: [
      {
        platform: "GeM",
        productName: "Dell Business Laptop 15.6\" i5 16GB/512GB",
        price: 52000,
        rating: 4.5,
        reviews: 128,
        match: 100,
      },
      {
        platform: "Amazon",
        productName: "Dell Vostro 15 Laptop, i5-1235U, 16GB, 512GB SSD",
        price: 48500,
        rating: 4.4,
        reviews: 3120,
        match: 94,
      },
      {
        platform: "Flipkart",
        productName: "Dell Vostro Intel Core i5 12th Gen Laptop",
        price: 50200,
        rating: 4.3,
        reviews: 2140,
        match: 91,
      },
    ],
  },
  {
    id: "hp-i5-8gb",
    name: "HP ProBook Laptop",
    brand: "HP",
    category: "computers",
    image: "/products/hp-laptop.png",
    specs: ["Intel Core i5 (11th Gen)", "8GB RAM", "256GB SSD", "14\" FHD Display"],
    listings: [
      {
        platform: "GeM",
        productName: "HP ProBook 440 G8 i5 8GB/256GB",
        price: 61500,
        rating: 4.6,
        reviews: 96,
        match: 100,
      },
      {
        platform: "Amazon",
        productName: "HP ProBook 440 G8 Business Laptop",
        price: 57990,
        rating: 4.5,
        reviews: 1840,
        match: 96,
      },
      {
        platform: "Flipkart",
        productName: "HP ProBook 14 inch Business Laptop",
        price: 59200,
        rating: 4.4,
        reviews: 1210,
        match: 89,
      },
    ],
  },
  {
    id: "desktop-i7-16gb",
    name: "HP Desktop Computer",
    brand: "HP",
    category: "computers",
    image: "/products/desktop.png",
    specs: ["Intel Core i7 (12th Gen)", "16GB RAM", "1TB HDD + 256GB SSD", "Tower Form Factor"],
    listings: [
      {
        platform: "GeM",
        productName: "HP Desktop 280 Pro G9 i7 16GB",
        price: 68000,
        rating: 4.4,
        reviews: 54,
        match: 100,
      },
      {
        platform: "Amazon",
        productName: "HP 280 Pro G9 Microtower Desktop PC",
        price: 63500,
        rating: 4.3,
        reviews: 680,
        match: 93,
      },
      {
        platform: "Flipkart",
        productName: "HP Pro Tower Desktop i7 12th Gen",
        price: 65900,
        rating: 4.2,
        reviews: 410,
        match: 88,
      },
    ],
  },
  {
    id: "canon-laser-printer",
    name: "Canon LBP Laser Printer",
    brand: "Canon",
    category: "office",
    image: "/products/printer.png",
    specs: ["Monochrome Laser", "18 ppm", "USB Connectivity", "A4 Paper Size"],
    listings: [
      {
        platform: "GeM",
        productName: "Canon imageCLASS LBP223dw Laser Printer",
        price: 14500,
        rating: 4.3,
        reviews: 210,
        match: 100,
      },
      {
        platform: "Amazon",
        productName: "Canon LBP223dw Monochrome Laser Printer",
        price: 13290,
        rating: 4.4,
        reviews: 1560,
        match: 97,
      },
      {
        platform: "Flipkart",
        productName: "Canon LBP 223dw Duplex Laser Printer",
        price: 13750,
        rating: 4.2,
        reviews: 980,
        match: 95,
      },
    ],
  },
  {
    id: "hp-laserjet-printer",
    name: "HP LaserJet Printer",
    brand: "HP",
    category: "office",
    image: "/products/printer-hp.png",
    specs: ["Monochrome Laser", "22 ppm", "Wi-Fi + USB", "A4 Paper Size"],
    listings: [
      {
        platform: "GeM",
        productName: "HP LaserJet M15w Printer",
        price: 9800,
        rating: 4.2,
        reviews: 174,
        match: 100,
      },
      {
        platform: "Amazon",
        productName: "HP LaserJet M15w Compact Printer",
        price: 8990,
        rating: 4.3,
        reviews: 4210,
        match: 98,
      },
      {
        platform: "Flipkart",
        productName: "HP LaserJet M15w Wireless Printer",
        price: 9250,
        rating: 4.1,
        reviews: 2680,
        match: 96,
      },
    ],
  },
  {
    id: "office-chair-ergo",
    name: "Ergonomic Office Chair",
    brand: "Featherlite",
    category: "furniture",
    image: "/products/office-chair.png",
    specs: ["Mesh Back", "Adjustable Height", "Lumbar Support", "Armrests"],
    listings: [
      {
        platform: "GeM",
        productName: "Featherlite Ergonomic Mesh Office Chair",
        price: 12800,
        rating: 4.1,
        reviews: 88,
        match: 100,
      },
      {
        platform: "Amazon",
        productName: "Featherlite High Back Ergonomic Chair",
        price: 11400,
        rating: 4.2,
        reviews: 940,
        match: 92,
      },
      {
        platform: "Flipkart",
        productName: "Featherlite Mesh Back Executive Chair",
        price: 11950,
        rating: 4.0,
        reviews: 610,
        match: 90,
      },
    ],
  },
  {
    id: "monitor-24-fhd",
    name: "Dell 24-inch Monitor",
    brand: "Dell",
    category: "electronics",
    image: "/products/monitor.png",
    specs: ["24-inch FHD", "IPS Panel", "75Hz Refresh Rate", "HDMI + VGA"],
    listings: [
      {
        platform: "GeM",
        productName: "Dell E2422H 24-inch Monitor",
        price: 11200,
        rating: 4.4,
        reviews: 140,
        match: 100,
      },
      {
        platform: "Amazon",
        productName: "Dell E-Series E2422H FHD Monitor",
        price: 10390,
        rating: 4.5,
        reviews: 3860,
        match: 97,
      },
      {
        platform: "Flipkart",
        productName: "Dell 24 inch FHD IPS Monitor",
        price: 10750,
        rating: 4.3,
        reviews: 2190,
        match: 94,
      },
    ],
  },
  {
    id: "ac-1.5ton-split",
    name: "1.5 Ton Split Air Conditioner",
    brand: "Voltas",
    category: "appliances",
    image: "/products/ac.png",
    specs: ["1.5 Ton Capacity", "3 Star Rating", "Split Type", "Copper Condenser"],
    listings: [
      {
        platform: "GeM",
        productName: "Voltas 1.5 Ton 3 Star Split AC",
        price: 38500,
        rating: 4.2,
        reviews: 320,
        match: 100,
      },
      {
        platform: "Amazon",
        productName: "Voltas 1.5 Ton 3 Star Inverter Split AC",
        price: 34990,
        rating: 4.3,
        reviews: 5240,
        match: 95,
      },
      {
        platform: "Flipkart",
        productName: "Voltas 1.5 Ton Split AC, Copper Condenser",
        price: 35990,
        rating: 4.1,
        reviews: 3980,
        match: 92,
      },
    ],
  },
]

export function getAllProducts() {
  return PRODUCTS
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) ?? null
}

export function searchProducts(query, { category, platform } = {}) {
  const q = (query ?? "").trim().toLowerCase()

  let results = PRODUCTS

  if (q) {
    results = results.filter((p) => {
      const haystack = [p.name, p.brand, ...p.specs].join(" ").toLowerCase()
      return haystack.includes(q)
    })
  }

  if (category) {
    results = results.filter((p) => p.category === category)
  }

  if (platform) {
    results = results.filter((p) => p.listings.some((l) => l.platform === platform))
  }

  return results
}

export function getComparison(id) {
  const product = getProductById(id)
  if (!product) return null

  const gemListing = product.listings.find((l) => l.platform === "GeM")
  const marketListings = product.listings.filter((l) => l.platform !== "GeM")
  const prices = marketListings.map((l) => l.price)

  const marketAverage = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
  const lowest = Math.min(...prices)
  const highest = Math.max(...prices)
  const lowestListing = marketListings.find((l) => l.price === lowest)
  const fairPrice = Math.round((marketAverage + lowest) / 2)

  const priceDifference = gemListing.price - lowest
  const percentDifference = (priceDifference / lowest) * 100
  const vsAveragePercent = ((gemListing.price - marketAverage) / marketAverage) * 100

  return {
    product,
    gemListing,
    marketListings,
    marketAverage,
    lowest,
    highest,
    lowestListing,
    fairPrice,
    priceDifference,
    percentDifference,
    vsAveragePercent,
    potentialSaving: Math.max(priceDifference, 0),
  }
}

export const MATCHING_FACTORS = ["Brand", "Model", "Specifications", "Capacity", "Size", "Features"]
