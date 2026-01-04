"use client";
import { Product, ProductLayoutProps } from "@/Types/Merchbay";
import { useEffect, useState } from "react";
import Title from "../Headers/Title";
import { getProducts } from "@/api/Products";
import ProductCard from "../Product Component/ProductCard";

export default function ProductsLayout({title}: ProductLayoutProps){
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

  return(
    <>
    <div className="main-container">
        <div className="product-container mt-2 bg-amber-50  text-blue-950">
          <div className="header">
            <Title headingTitle={title}/>  
          </div>
        
        {/* to be made it's own component */}
        <div className="products">
          <br /><br />
          Here it will be the categories and this time we hope to put it in a carosel
          <ProductCard 
            products={products}         
            />
        </div>
      </div>
      </div>
    </>
  )
}