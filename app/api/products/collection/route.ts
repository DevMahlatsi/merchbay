import { getProducts } from "@/api/Products";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const products = await getProducts();
  const { searchParams } = new URL(request.url);
  
  // Get the keys from the URL
  const franchise = searchParams.get("franchise");
  const type = searchParams.get("type");
  const genre = searchParams.get("genre");

  let filteredProducts = products;

  if (franchise) {
    filteredProducts = filteredProducts.filter(
      (p) => p.franchise?.toLowerCase() === franchise.toLowerCase()
    );
  }

  if (type) {
    filteredProducts = filteredProducts.filter(
      (p) => p.type?.toLowerCase() === type.toLowerCase()
    );
  }

  if (genre) {
    filteredProducts = filteredProducts.filter(
      (p) => p.genre?.toLowerCase() === genre.toLowerCase()
    );
  }

  return NextResponse.json(filteredProducts);
}