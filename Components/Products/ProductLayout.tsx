"use client";
import { Product, ProductLayoutProps } from "@/Types/Merchbay";
import { useEffect, useState, useRef } from "react";
import Title from "../Headers/Title";
import { getProducts } from "@/api/Products";
import ProductCard from "../Product Component/ProductCard";

export default function ProductsLayout({ title,products }: ProductLayoutProps) {
  // const [products, setProducts] = useState<Product[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

 

  // Optional: Add scroll buttons functionality
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust as needed
      const container = scrollContainerRef.current;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="product-container mt-2 bg-amber-50 text-blue-950">
          <div className="header">
            <Title headingTitle={title} />
          </div>

          {/* Products carousel */}
          <div className="products relative">
            {/* Optional scroll buttons */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hidden md:block"
              aria-label="Scroll left"
            >
              ←
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hidden md:block"
              aria-label="Scroll right"
            >
              →
            </button>

            {/* Horizontal scroll container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pb-4"
              style={{ scrollbarWidth: 'thin' }}
            >
              <div className="flex gap-6 p-4">
                {products.map((product) => (
                  <div key={product.plid} className="flex-shrink-0">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}