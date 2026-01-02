"use client";
import { ProductLayoutProps } from "@/Types/Merchbay";
import { useEffect } from "react";

export default function ProductsLayout({title}: ProductLayoutProps){
  useEffect(() => {
    if(!(title.length === 0)){
      
    }
  }, [title]);
  return(
    <>
      <div className="container bg-amber-50">
        <div className="header">
          <h1 className="text-3xl text-blue-950">{title}</h1>
        </div>
        {/* It is probably a good idea to make this product a component of it's own. It can be used in so many other places so it's only fair if it is like that and it would make the code shorter to read  */}
        <div className="products">

        </div>
      </div>
    </>
  )

}