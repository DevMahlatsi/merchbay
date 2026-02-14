// app/api/products/route.ts


import { NextResponse } from "next/server";

const products = [
  {
    plid: 1,
    title: "Luffy Wanted Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/luffy_wanted_poster_1_main.jpg",
      mockup: "/images/anime/one-piece/luffy_wanted_poster_1_mockup.png"
    }
  }
];

export async function GET() {
  return NextResponse.json(products);
}
