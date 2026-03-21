'use client'
import { useEffect, useState } from "react";
import Hero from "@/Components/Hero/Hero"
import ProductsLayout from "@/Components/Products/ProductLayout"
const response = await fetch('/api/products/collection?franchise=One Piece');
import SearchSection from "@/Components/search/SearchBar"
import { getProducts } from "@/api/Products";
import { Product } from "@/Types/Merchbay";
import { useRouter } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";

export default function Home(){
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [animeCollection, setAnimeCollection] = useState<Product[]>([]);
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

  const handleSearch = (term: string) => {
    if (term.trim()) {
      // Navigate to search page with the query
      router.push(`/search?q=${encodeURIComponent(term.trim())}`);
    }
  };
  // const [searchTerm, setSearchTerm] = useState<string>("");
  const onePieceProducts = products.filter(p => p.franchise === "One Piece");
  
  return(
    <>
    <Analytics/>
    <SearchSection onSearch={handleSearch} />
    <Hero/>
    <ProductsLayout
      title = "Just Arrived"
      products={products}
    />
    <ProductsLayout 
      title="The Grand Line Wanted Collection"
      products={onePieceProducts}
    />
    {/* <ProductsLayout 
      title="Musiek"
    />
    <ProductsLayout 
      title="Musiek"
    /> */}
    
    </>
  )
}

