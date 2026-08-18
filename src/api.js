const API_URL = "http://localhost:5000/api";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProduct(id) {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}

export async function searchProducts(query, category, platform) {
  const params = new URLSearchParams();

  if (query) params.set("q", query);
  if (category) params.set("category", category);
  if (platform) params.set("platform", platform);

  const response = await fetch(
    `${API_URL}/products/search?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to search products");
  }

  return response.json();
}

export async function getComparison(id) {
  const response = await fetch(
    `${API_URL}/products/${id}/comparisons`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch comparison");
  }

  return response.json();
}

export async function getAnalytics(id) {
  const response = await fetch(
    `${API_URL}/products/${id}/analytics`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch analytics");
  }

  return response.json();
}