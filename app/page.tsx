'use client'
import { useEffect, useState } from "react";
import Hero from "@/Components/Hero/Hero"
import ProductsLayout from "@/Components/Products/ProductLayout"
import SearchSection from "@/Components/search/SearchBar"
import { getProducts } from "@/api/Products";
import { Product } from "@/Types/Merchbay";
import { useRouter } from "next/navigation";

export default function Home(){
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
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
  
  return(
    <>
    <SearchSection onSearch={handleSearch} />
    <Hero/>
    <ProductsLayout
      title = "Just Arrived"
      products={products}
    />
    {/* <ProductsLayout 
      title="Another title"
      products={[]}
    /> */}
    {/* <ProductsLayout 
      title="Musiek"
    />
    <ProductsLayout 
      title="Musiek"
    /> */}
    
    </>
  )
}

