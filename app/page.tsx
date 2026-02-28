"use client";
import { useState } from "react";
import Hero from "@/Components/Hero/Hero"
import ProductsLayout from "@/Components/Products/ProductLayout"
import SearchSection from "@/Components/Search/SearchSection"

export default function Home(){
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  return(
    <>
    <SearchSection onSearch={setSearchTerm} />
    <Hero/>
    <ProductsLayout
      title = "Fan Faves That You Can't Miss"
    />
    </>
  )
}