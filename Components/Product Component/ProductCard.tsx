import { useState } from "react";
import { Product } from "@/Types/Merchbay";

interface Props {
  product: Product;
}

export default function SingleProductCard({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState(
    product.variants[0].size
  );

  const [imageIndex, setImageIndex] = useState(0);

  const images = [product.images.main, product.images.mockup];

  const selectedVariant = product.variants.find(
    (v) => v.size === selectedSize
  )!;

  const toggleImage = () => {
    setImageIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="w-64 bg-white rounded-2xl shadow-lg p-4 flex flex-col h-full">
      {/* Image container */}
      <div
        className="rounded-xl overflow-hidden cursor-pointer bg-gray-50 flex items-center justify-center h-48"
        onClick={toggleImage}
      >
        <img
          src={images[imageIndex]}
          alt={product.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2 h-14">
        {product.title}
      </h2>

      {/* Size selector with bigger font */}
      <div className="flex gap-6 mt-4 justify-center">
                {product.variants.map((variant) => {
          const isSelected = selectedSize === variant.size;
          
          return (
            <button
              key={variant.size}
              onClick={() => setSelectedSize(variant.size)}
              className={`
                px-4 py-2 rounded-lg font-medium text-sm transition-all
                ${isSelected 
                  ? 'bg-gray-800 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {variant.size}
            </button>
          );
        })}
      </div>

      {/* Price with bigger font */}
      <div className="mt-3 text-2xl font-bold text-gray-800">
        {/* R {selectedVariant.price} */}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-5">
        <button className="flex-1 bg-gray-800 text-white font-semibold py-2.5 text-sm rounded-lg shadow-md hover:opacity-90 transition">
          Buy Now
        </button>

        <button className="w-10 border rounded-lg flex items-center justify-center hover:bg-gray-100 transition text-lg">
          🛒
        </button>
      </div>
    </div>
  );
}