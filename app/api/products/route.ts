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
    title: "SK Brook Poster",
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
    title: "Trafalgar Law Poster",
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
    title: "Vista Poster",
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
  {
    plid: 8,
    title: "Franky Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/franky_wanted_poster_8_main.jpg",
      mockup: "/images/anime/one-piece/franky_wanted_poster_8_mockup.png"
    }
  },
  {
    plid: 9,
    title: "Portgas D Ace Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/ace_wanted_poster_9_main.jpg",
      mockup: "/images/anime/one-piece/ace_wanted_poster_9_mockup.png"
    }
  },
  
  
  
  
  
];

export async function GET() {
  return NextResponse.json(products);
}
