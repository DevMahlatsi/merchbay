"use client";
import { ProductLayoutProps } from "@/Types/Merchbay";
import { useEffect } from "react";
import Title from "../Headers/Title";
import HeadingTitle from "../Headers/Title";

export default function ProductsLayout({title}: ProductLayoutProps){
  useEffect(() => {
    if(!(title.length === 0)){
      
    }
  }, [title]);
  return(
    <>
    <div className="main-container">
      <div className="sub-container">
        <div className="product-container mt-2 bg-amber-50  text-blue-950">
          <div className="header">
            <Title
              headingTitle={title}
            />  
        </div>
        {/* to be made it's own component */}
        <div className="products">
          <br /><br />
          Here it will be the categories and this time we hope to put it in a carosel
        </div>
      </div>
      <div className="sub-container">
        <div className="product-container mt-2 bg-amber-50  text-blue-950">
          <div className="header">
            <Title
              headingTitle={title}
            />  
        </div>
        {/* to be made it's own component */}
        <div className="products">
          <br /><br />
          Here it will be the categories and this time we hope to put it in a carosel
        </div>
      </div>
      
    </div>
      
    </div>
      
    </>
  )

}