// app/api/products/route.ts


import { NextResponse } from "next/server";

const products = [
  {
    plid: 1,
    title: "Monkey D Luffy Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/luffy_wanted_poster_1_main.jpg",
      mockup: "/images/anime/one-piece/luffy_wanted_poster_1_mockup.png"
    }
  },
  {
    plid: 2,
    title: "Roronoa Zoro Wanted Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/zoro_wanted_poster_2_main.jpg",
      mockup: "/images/anime/one-piece/zoro_wanted_poster_2_mockup.png"
    }
  },
  {
    plid: 3,
    title: "God Usopp Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/usopp_wanted_poster_3_main.jpg",
      mockup: "/images/anime/one-piece/usopp_wanted_poster_3_mockup.png"
    }
  },
  {
    plid: 4,
    title: "SK Brook Wanted Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/brook_wanted_poster_4_main.jpg",
      mockup: "/images/anime/one-piece/brook_wanted_poster_4_mockup.png"
    }
  },
  {
    plid: 5,
    title: "Trafalgar Law Wanted Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/trafalgar_wanted_poster_5_main.jpg",
      mockup: "/images/anime/one-piece/trafalgar_wanted_poster_5_mockup.png"
    }
  },
    {
    plid: 6,
    title: "Dracule Mihawk Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/mihawk_wanted_poster_6_main.jpg",
      mockup: "/images/anime/one-piece/mihawk_wanted_poster_6_mockup.png"
    }
  },
  {
    plid: 7,
    title: "Vista Wanted Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/vista_wanted_poster_7_main.jpg",
      mockup: "/images/anime/one-piece/vista_wanted_poster_7_mockup.png"
    }
  },
  
  
  
  
];

export async function GET() {
  return NextResponse.json(products);
}
