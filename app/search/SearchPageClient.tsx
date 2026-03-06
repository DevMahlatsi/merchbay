'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchSection from "@/Components/search/SearchBar";
import { getProducts } from "@/api/Products";
import { Product } from "@/Types/Merchbay";
import ProductCard from "@/Components/Product Component/ProductCard";

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    if (!query.trim() || allProducts.length === 0) {
      setFilteredProducts([]);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    
    const filtered = allProducts.filter((product: Product) => {
      if (product.title?.toLowerCase().includes(searchTerm)) return true;
      if (product.artist?.toLowerCase().includes(searchTerm)) return true;
      if (product.genre?.toLowerCase().includes(searchTerm)) return true;
      if (product.tags?.some(tag => tag.toLowerCase().includes(searchTerm))) return true;
      return false;
    });

    setFilteredProducts(filtered);
  }, [query, allProducts]);

  const handleSearch = (term: string) => {
    if (term.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(term.trim())}`;
    }
  };

  if (isLoading) {
    return (
      <>
        <SearchSection onSearch={handleSearch} />
        <div className="p-4">Loading...</div>
      </>
    );
  }

  if (!query) {
    return (
      <>
        <SearchSection onSearch={handleSearch} />
        <div className="p-4 text-center">Enter a search term</div>
      </>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SearchSection onSearch={handleSearch} />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-500 text-lg">No products found for "{query}"</p>
          <p className="text-gray-400 mt-2">Try searching by:</p>
          <ul className="text-gray-400 mt-1">
            <li>• Product title</li>
            <li>• Artist name (e.g., "Kelvin Momo")</li>
            <li>• Genre (e.g., "amapiano")</li>
            <li>• Tags</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <SearchSection onSearch={handleSearch} />
      <div className="p-4">
        <h1 className="text-xl mb-4">Search Results for "{query}"</h1>
        <p className="mb-4">{filteredProducts.length} products found</p>
        
        <div className="flex flex-wrap gap-4">
          {filteredProducts.map((product) => (
            <div key={product.plid} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}