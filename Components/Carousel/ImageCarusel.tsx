import { ImageCarouselProps } from "@/Types/Merchbay";
import { ChevronLeft, ChevronRight, Divide } from "lucide-react"
import { useState } from "react";

export default function ImageCarusel({images, productTitle}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex);
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
    prevIndex === 0? images.length - 1 : prevIndex - 1);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if(images.length <= 1 ){
    return(
      <div className="relative w-full h-full">
        <img src={images[0]} alt={productTitle} className="w-full h-full object-cover rounded-lg" 
        />
      </div>
    )
  };

  return (
    <div className="relative w-full h-full-group">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={images[currentIndex]} 
          alt={`${productTitle} - Image ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  )

};
