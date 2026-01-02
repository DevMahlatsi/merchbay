import Hero from "@/Components/Hero/Hero"
import NavBar from "@/Components/Navigation Bar/NavBar"
import ProductsLayout from "@/Components/Products/ProductLayout"

export default function Home(){
  return(
    <>
    <Hero/>
    <ProductsLayout
      title = "Fan Faves That You Can't Miss"
      />
    </>
    
  )
}