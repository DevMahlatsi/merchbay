import { ProductCardProps } from "@/Types/Merchbay";

export default function ProductCard({products}: ProductCardProps){
  if(!(products.length === 0)){
    <p>Looks like it's going to work</p>
  }
  return(
    <div
      className="flex flex-wrap"
      >{products.map((product) => (
      <div className="product-card h-60 max-w-55 mb-1 p-1 cursor-pointer mr-20" key={product.id}>
        <div className="top-half flex justify-center">
          <img
            className="h-35" loading="lazy" src={product.image} alt={product.description} />
        </div>
        <div className="bottom-half">
          <div className="title">
            <h1 className="text-2xl">
              {product.title}
            </h1>
          </div>
          <div className="price-section text-xl">
            <h1>
              <span className="currency">R</span>
              <span className="price">{product.price}</span>
            </h1>
          </div>
        </div>
      </div>
    ))}</div>
  )
}