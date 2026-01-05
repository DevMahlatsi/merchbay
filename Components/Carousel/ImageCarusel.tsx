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
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
      </div>
      <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white" />
      <button 
      onClick={goToPrevious}
      className="hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100" 
      aria-label="Previous image">
        <ChevronLeft size={24}/>
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next Imge">

        <ChevronRight size={24}/>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/60 hovering:bg-white/80"}`}
            aria-label={`Go to image ${index + 1}`}
          />
      ))}
      </div>

      <div className="absolute top-2 right-2 bg-black" />
      <div className="text-white text-xs px-2 py-1 rounded">
        {currentIndex + 1} / {images.length}
      </div>

      

    </div>
  )

};
