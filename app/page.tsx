"use client";
import { useEffect, useState } from "react";
import Hero from "@/Components/Hero/Hero"
import ProductsLayout from "@/Components/Products/ProductLayout"
import SearchSection from "@/Components/Search/SearchSection"
import { getProducts } from "@/api/Products";
import { Product } from "@/Types/Merchbay";

export default function Home(){
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  return(
    <>
    <SearchSection onSearch={setSearchTerm} />
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