// Components/Products/SearchResultsLayout.tsx
'use client';

import { Product } from "@/Types/Merchbay";
import ProductCard from "../Product Component/ProductCard";

interface SearchResultsLayoutProps {
  products: Product[];
}

export default function SearchResultsLayout({ products }: SearchResultsLayoutProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <div key={product.plid} className="w-[150px] sm:w-[180px] md:w-[200px]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}