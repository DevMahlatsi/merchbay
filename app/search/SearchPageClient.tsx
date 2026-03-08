'use client'

import { useEffect, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchSection from "@/Components/search/SearchBar";
import { getProducts } from "@/api/Products";
import { Product } from "@/Types/Merchbay";
import ProductCard from "@/Components/Product Component/ProductCard";

export default function SearchPage() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!query.trim() || products.length === 0) return [];

    const words = query
      .toLowerCase()
      .trim()
      .split(/\s+/);

    return products.filter((product) => {

      const searchableText = [
        product.title,
        product.artist,
        product.genre,
        ...(product.tags || [])
      ]
        .join(" ")
        .toLowerCase();

      return words.some(word => searchableText.includes(word));

    });

  }, [query, products]);

  const handleSearch = (term: string) => {
    if (!term.trim()) return;
    router.push(`/search?q=${encodeURIComponent(term.trim())}`);
  };

  if (loading) {
    return (
      <>
        <SearchSection onSearch={handleSearch} />
        <div className="p-6 text-center">Loading products...</div>
      </>
    );
  }

  if (!query) {
    return (
      <>
        <SearchSection onSearch={handleSearch} />
        <div className="p-6 text-center text-gray-500">
          Start typing to search for posters
        </div>
      </>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <>
        <SearchSection onSearch={handleSearch} />
        <div className="p-6 text-center text-gray-500">
          No products found for "<strong>{query}</strong>"
        </div>
      </>
    );
  }

  return (
    <>
      <SearchSection onSearch={handleSearch} />
      
      <div className="p-4">

        <h1 className="text-xl font-semibold mb-2">
          Results for "{query}"
        </h1>

        <p className="text-gray-500 mb-6">
          {filteredProducts.length} products found
        </p>
        
        <div className="flex flex-wrap gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.plid}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </>
  );
}