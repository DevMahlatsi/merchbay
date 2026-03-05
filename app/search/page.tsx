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

  // Filter products based on search query
  useEffect(() => {
    if (!query.trim() || allProducts.length === 0) {
      setFilteredProducts([]);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    
    // Create multiple variations of the search term for better matching
    const searchVariations = [
      searchTerm,
      searchTerm.replace(/\s+/g, '-'), // "kelvin momo" -> "kelvin-momo"
      searchTerm.replace(/\s+/g, ''),   // "kelvin momo" -> "kelvinmomo"
      ...searchTerm.split(/\s+/)         // ["kelvin", "momo"]
    ];
    
    const filtered = allProducts.filter((product: Product) => {
      
      // 1. Search in title
      if (product.title?.toLowerCase().includes(searchTerm)) {
        return true;
      }
      
      // 2. Search in artist (if exists)
      if (product.artist?.toLowerCase().includes(searchTerm)) {
        return true;
      }
      
      // 3. Search in genre
      if (product.genre?.toLowerCase().includes(searchTerm)) {
        return true;
      }
      
      // 4. Search in album
      if (product.album?.toLowerCase().includes(searchTerm)) {
        return true;
      }
      
      // 5. Search in type
      if (product.type?.toLowerCase().includes(searchTerm)) {
        return true;
      }
      
      // 6. Search in tags - IMPROVED VERSION
      if (product.tags && Array.isArray(product.tags)) {
        // Check if any tag matches any variation of the search term
        const tagMatch = product.tags.some(tag => {
          const tagLower = tag.toLowerCase();
          
          // Direct match
          if (tagLower.includes(searchTerm)) {
            return true;
          }
          
          // Check against all variations
          return searchVariations.some(variation => 
            tagLower.includes(variation) || variation.includes(tagLower)
          );
        });
        
        if (tagMatch) {
          return true;
        }
      }
      
      return false;
    });

    setFilteredProducts(filtered);
  }, [query, allProducts]);

  const handleSearch = (term: string) => {
    if (term.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(term.trim())}`;
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SearchSection onSearch={handleSearch} />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Searching...</h1>
          <ProductsLayout 
            title="Loading..." 
            products={[]} 
            isLoading={true}
          />
        </div>
      </div>
    );
  }

  // No search query yet
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

  // No results found
  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SearchSection onSearch={handleSearch} />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-500 text-lg">No products found for "{query}"</p>
          <p className="text-gray-400 mt-2">Try searching by:</p>
          <ul className="text-gray-400 mt-1">
            <li>• Product title (e.g., "Poster")</li>
            <li>• Artist name (e.g., "Kelvin Momo")</li>
            <li>• Genre (e.g., "amapiano")</li>
            <li>• Tags (e.g., "spiritual", "south african")</li>
          </ul>
        </div>
      </div>
    );
  }

  // Results found
  return (
    <div className="min-h-screen bg-gray-50">
      <SearchSection onSearch={handleSearch} />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Search Results
          </h1>
          <p className="text-gray-600 mt-1">
            Found {filteredProducts.length} product{filteredProducts.length > 1 ? 's' : ''} for "{query}"
          </p>
        </div>
        
        <ProductsLayout
          title={`Results for "${query}"`}
          products={filteredProducts}
          isLoading={false}
        />
      </div>
    </div>
  );
}