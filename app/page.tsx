'use client'
import { useEffect, useState } from "react";
import Hero from "@/Components/Hero/Hero"
import ProductsLayout from "@/Components/Products/ProductLayout"
import SearchSection from "@/Components/search/SearchBar"
import { getProducts } from "@/api/Products";
import { Product } from "@/Types/Merchbay";
import { useRouter } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";

export default function Home(){
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [onePieceCollection, setOnePieceCollection] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // If you need to fetch from a different endpoint
  useEffect(() => {
    const fetchOnePieceCollection = async () => {
      try {
        const response = await fetch('/api/products/collection?franchise=One%20Piece');
        const data = await response.json();
        setOnePieceCollection(data);
      } catch (error) {
        console.error('Error fetching One Piece collection:', error);
      }
    };

    fetchOnePieceCollection();
  }, []);

  const handleSearch = (term: string) => {
    if (term.trim()) {
      router.push(`/search?q=${encodeURIComponent(term.trim())}`);
    }
  };
  
  // Use either the filtered products or the fetched collection
  const onePieceProducts = onePieceCollection.length > 0 
    ? onePieceCollection 
    : products.filter(p => p.franchise === "One Piece");
  
  return(
    <>
      <Analytics/>
      <SearchSection onSearch={handleSearch} />
      <Hero/>
      <ProductsLayout
        title="Just Arrived"
        products={products}
      />
      <ProductsLayout 
        title="The Grand Line Wanted Collection"
        products={onePieceProducts}
      />
    </>
  )
}