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
      <div className="container bg-amber-50  text-blue-950">
        <div className="header">
          <Title
            headingTitle={title}
            />  
        </div>
        {/* It is probably a good idea to make this product a component of it's own. It can be used in so many other places so it's only fair if it is like that and it would make the code shorter to read  */}
        <div className="products">
          <br /><br /><br />
          Here it will be the categories and this time we hope to put it in a carosel
        </div>
      </div>
    </>
  )

}