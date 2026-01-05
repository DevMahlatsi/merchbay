import { ImageCarouselProps } from "@/Types/Merchbay";
import { ChevronLeft, ChevronRight } from "lucide-react"
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
    setCurrentIndex
  }

};
