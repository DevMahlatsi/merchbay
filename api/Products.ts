async function getProducts() {
    // Your async logic here
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      return data;
      
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
    
    
    // console.log(result);
}