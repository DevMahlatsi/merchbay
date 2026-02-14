import { Product } from "@/Types/Merchbay";

export async function getProducts(): Promise<Product[]>{
    // Your async logic here
    try {
      const response = await fetch(`api/products`);
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      // console.log(data);
      return data;

    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
    
    
    // console.log(result);
}