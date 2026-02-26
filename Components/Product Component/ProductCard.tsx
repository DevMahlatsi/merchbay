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

  const lowestPrice = Math.min(
    ...product.variants.map((v) => v.price)
  );

  const toggleImage = () => {
    setImageIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="w-80 bg-white rounded-3xl shadow-xl p-5">
      <div
        className="rounded-2xl overflow-hidden cursor-pointer"
        onClick={toggleImage}
      >
        <img
          src={images[imageIndex]}
          alt={product.title}
          className="w-full object-cover"
        />
      </div>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        {product.title}
      </h2>

      <p className="text-gray-500 text-lg mt-1">
        From <span className="font-semibold text-gray-700">R {lowestPrice}</span>
      </p>

      <div className="flex gap-6 mt-4">
        {product.variants.map((variant) => (
          <label
            key={variant.size}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={`size-${product.plid}`}
              value={variant.size}
              checked={selectedSize === variant.size}
              onChange={() => setSelectedSize(variant.size)}
              className="accent-yellow-500"
            />
            <span className="text-gray-700 font-medium">
              {variant.size}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-4 text-xl font-bold text-gray-800">
        R {selectedVariant.price}
      </div>

      <div className="flex gap-3 mt-5">
        <button className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-3 rounded-xl shadow-md hover:opacity-90 transition">
          Buy Now
        </button>

        <button className="w-14 border rounded-xl flex items-center justify-center hover:bg-gray-100 transition">
          🛒
        </button>
      </div>
    </div>
  );
}