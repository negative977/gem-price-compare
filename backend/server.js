import express from "express";
import cors from "cors";

import {
    CATEGORIES,
    PLATFORMS,
    getAllProducts,
    getProductById,
    searchProducts,
    getComparison,
} from "../src/data/mockProducts.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test backend
app.get("/", (req, res) => {
    res.json({
        message: "GeM Price Compare Backend is running!",
        status: "ok",
    });
});

// Get all products
app.get("/api/products", (req, res) => {
    const { category, platform } = req.query;

    const products =
        category || platform
            ? searchProducts("", { category, platform })
            : getAllProducts();

    res.json(products);
});

// Search products
app.get("/api/products/search", (req, res) => {
    const { q = "", category, platform } = req.query;

    const products = searchProducts(q, {
        category,
        platform,
    });

    res.json(products);
});

// Get one product
app.get("/api/products/:id", (req, res) => {
    const product = getProductById(req.params.id);

    if (!product) {
        return res.status(404).json({
            error: "Product not found",
        });
    }

    res.json(product);
});

// Get price comparison
app.get("/api/products/:id/comparisons", (req, res) => {
    const comparison = getComparison(req.params.id);

    if (!comparison) {
        return res.status(404).json({
            error: "Product not found",
        });
    }

    res.json(comparison);
});

// Get analytics
app.get("/api/products/:id/analytics", (req, res) => {
    const comparison = getComparison(req.params.id);

    if (!comparison) {
        return res.status(404).json({
            error: "Product not found",
        });
    }

    const {
        product,
        gemListing,
        marketListings,
        marketAverage,
        lowest,
        highest,
        fairPrice,
        priceDifference,
        percentDifference,
        vsAveragePercent,
        potentialSaving,
    } = comparison;

    res.json({
        productId: product.id,
        productName: product.name,
        gemPrice: gemListing.price,
        marketAverage,
        lowestMarketPrice: lowest,
        highestMarketPrice: highest,
        fairPrice,
        priceDifference,
        percentDifference: Number(percentDifference.toFixed(2)),
        vsAveragePercent: Number(vsAveragePercent.toFixed(2)),
        potentialSaving,
        marketPrices: marketListings.map((listing) => ({
            platform: listing.platform,
            price: listing.price,
        })),
    });
});

// Categories
app.get("/api/categories", (req, res) => {
    res.json(CATEGORIES);
});

// Platforms
app.get("/api/platforms", (req, res) => {
    res.json(PLATFORMS);
});

// Unknown route
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});