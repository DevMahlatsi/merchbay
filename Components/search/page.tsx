'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductsLayout from "@/Components/Products/ProductLayout";
import SearchSection from "@/Components/search/SearchBar";
import { getProducts } from "@/api/Products";
import { Product } from "@/Types/Merchbay";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts();
        setAllProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products when query changes
  useEffect(() => {
    if (!query.trim() || allProducts.length === 0) {
      setFilteredProducts([]);
      return;
    }

    const filtered = allProducts.filter(product => {
      const searchTerm = query.toLowerCase();
      return (
        product.title?.toLowerCase().includes(searchTerm) ||
        // product.description?.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredProducts(filtered);
  }, [query, allProducts]);

  // Handle new searches from the search page
  const handleSearch = (term: string) => {
    if (term.trim()) {
      // Update URL with new search term
      window.location.href = `/search?q=${encodeURIComponent(term.trim())}`;
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SearchSection onSearch={handleSearch} />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Searching...</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show no query state
  if (!query) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SearchSection onSearch={handleSearch} />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-500">Enter a search term to find products</p>
        </div>
      </div>
    );
  }

  // Show no results state
  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SearchSection onSearch={handleSearch} />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-500 text-lg">No products found for "{query}"</p>
          <p className="text-gray-400 mt-2">Try different keywords</p>
        </div>
      </div>
    );
  }

  // Show results
  return (
    <div className="min-h-screen bg-gray-50">
      <SearchSection onSearch={handleSearch} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Search Results
        </h1>
        <p className="text-gray-600 mb-6">
          Found {filteredProducts.length} products for "{query}"
        </p>
        <ProductsLayout
          title={`${filteredProducts.length} Products Found`}
          products={filteredProducts}
        />
      </div>
    </div>
  );
}