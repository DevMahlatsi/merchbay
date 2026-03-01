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
    },
    search_param: "One Piece, Monkey D Luffy"
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
    },
    search_param: "One Piece, Roronoa Zoro"
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
    },
    search_param: "One Piece, God Usopp"
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
    },
    search_param: "One Piece, SK Brook"
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
    },
    search_param: "One Piece, Trafalgar Law"
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
    },
    search_param: "One Piece, Dracule Mihawk"
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
    },
    search_param: "One Piece, Vista"
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
    },
    search_param: "One Piece, Franky"
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
    },
    search_param: "One Piece, Portgas D Ace"
  },
  {
    plid: 10,
    title: "Whitebeard Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/newgate_wanted_poster_10_main.jpg",
      mockup: "/images/anime/one-piece/newgate_wanted_poster_10_mockup.png"
    },
    search_param: "One Piece, Whitebeard"
  },
  {
    plid: 11,
    title: "Vinsmoke Sanji Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/sanji_wanted_poster_11_main.jpg",
      mockup: "/images/anime/one-piece/sanji_wanted_poster_11_mockup.png"
    },
    search_param: "One Piece, Vinsmoke Sanji"
  },
  {
    plid: 12,
    title: "Gol D Roger Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/roger_wanted_poster_12_main.jpg",
      mockup: "/images/anime/one-piece/roger_wanted_poster_12_mockup.png"
    },
    search_param: "One Piece, Gol D Roger"
  },
  {
    plid: 13,
    title: "Chopper Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/anime/one-piece/chopper_wanted_poster_13_main.jpg",
      mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "One Piece, Chopper"
  },
  {
    plid: 14,
    title: "BAB' MOTHA Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/music/hiphop/bab_motha_kabza_de_small_poster_5_main.jpg",
      // mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "Kabza De Small, BAB' MOTHA"
  },
  {
    plid: 15,
    title: "GNX Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/music/hiphop/gnx_kendrick_lamar_poster_8_main.jpg",
      // mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "Kendrick Lamar, GNX"
  },
  {
    plid: 16,
    title: "ISIBUKO Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/music/hiphop/isibuko_sjava_poster_6_main.jpg",
      // mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "Sjava, ISIBUKO"
  },
  {
    plid: 17,
    title: "IVY LEAGUE Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/music/hiphop/ivy_league_kelvin_momo_poster_7_main.jpg",
      // mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "Kelvin Momo, IVY LEAGUE"
  },
  {
    plid: 18,
    title: "MORE LIFE Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/music/hiphop/more_life_drake_poster_1_main.jpg",
      // mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "Drake, MORE LIFE"
  },
  {
    plid: 19,
    title: "N'WANA WA MUTSONGA Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/music/hiphop/n'wana_wa_mutsonga_kelvin_momo_poster_3_main.jpg",
      // mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "Kelvin Momo, N'WANA WA MUTSONGA"
  },
  {
    plid: 20,
    title: "STARBOY Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/music/hiphop/starboy_the_weeknd_poster_2_main.jpg",
      // mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "The Weeknd, STARBOY"
  },
  {
    plid: 21,
    title: "Take Care Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/music/hiphop/take_care_drake_poster_9_main.jpg",
      // mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "Drake, Take Care"
  },
  {
    plid: 22,
    title: "Thato Yo Modimo Poster",
    variants: [
      {size: "A2", price: 30.00},
      {size: "A3", price: 20.00},
      {size: "A4", price: 10.00},
      
    ],
    images: {
      main: "/images/music/hiphop/thato_ya_modimo_kelvin_momo_poster_4_main.jpg",
      // mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    search_param: "Kelvin Momo, Thato Yo Modimo"
  },
];

export async function GET() {
  return NextResponse.json(products);
}
