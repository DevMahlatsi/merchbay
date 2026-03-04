// app/api/products/route.ts

import { NextResponse } from "next/server";

const products = [
  // ANIME PRODUCTS
  {
    plid: 1,
    title: "Monkey D Luffy Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Monkey D Luffy",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/luffy_wanted_poster_1_main.jpg",
      mockup: "/images/anime/one-piece/luffy_wanted_poster_1_mockup.png"
    },
    tags: ["anime", "one-piece", "straw-hat", "captain", "luffy", "wanted-poster", "monkey-d-luffy", "mugiwara", "gomu-gomu"]
  },
  {
    plid: 2,
    title: "Roronoa Zoro Wanted Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Roronoa Zoro",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/zoro_wanted_poster_2_main.jpg",
      mockup: "/images/anime/one-piece/zoro_wanted_poster_2_mockup.png"
    },
    tags: ["anime", "one-piece", "straw-hat", "swordsman", "zoro", "wanted-poster", "roronoa-zoro", "three-swords", "pirate-hunter"]
  },
  {
    plid: 3,
    title: "God Usopp Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Usopp",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/usopp_wanted_poster_3_main.jpg",
      mockup: "/images/anime/one-piece/usopp_wanted_poster_3_mockup.png"
    },
    tags: ["anime", "one-piece", "straw-hat", "sniper", "usopp", "god-usopp", "wanted-poster", "so-ge-king"]
  },
  {
    plid: 4,
    title: "SK Brook Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Brook",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/brook_wanted_poster_4_main.jpg",
      mockup: "/images/anime/one-piece/brook_wanted_poster_4_mockup.png"
    },
    tags: ["anime", "one-piece", "straw-hat", "musician", "brook", "soul-king", "wanted-poster", "skull-joke"]
  },
  {
    plid: 5,
    title: "Trafalgar Law Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Trafalgar Law",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/trafalgar_wanted_poster_5_main.jpg",
      mockup: "/images/anime/one-piece/trafalgar_wanted_poster_5_mockup.png"
    },
    tags: ["anime", "one-piece", "heart-pirates", "captain", "law", "trafalgar-law", "wanted-poster", "surgeon-of-death", "room"]
  },
  {
    plid: 6,
    title: "Dracule Mihawk Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Dracule Mihawk",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/mihawk_wanted_poster_6_main.jpg",
      mockup: "/images/anime/one-piece/mihawk_wanted_poster_6_mockup.png"
    },
    tags: ["anime", "one-piece", "warlord", "mihawk", "dracule-mihawk", "swordsman", "wanted-poster", "greatest-swordsman", "yoru"]
  },
  {
    plid: 7,
    title: "Vista Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Vista",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/vista_wanted_poster_7_main.jpg",
      mockup: "/images/anime/one-piece/vista_wanted_poster_7_mockup.png"
    },
    tags: ["anime", "one-piece", "whitebeard-pirates", "commander", "vista", "swordsman", "wanted-poster"]
  },
  {
    plid: 8,
    title: "Franky Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Franky",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/franky_wanted_poster_8_main.jpg",
      mockup: "/images/anime/one-piece/franky_wanted_poster_8_mockup.png"
    },
    tags: ["anime", "one-piece", "straw-hat", "shipwright", "franky", "cyborg", "wanted-poster", "super"]
  },
  {
    plid: 9,
    title: "Portgas D Ace Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Portgas D Ace",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/ace_wanted_poster_9_main.jpg",
      mockup: "/images/anime/one-piece/ace_wanted_poster_9_mockup.png"
    },
    tags: ["anime", "one-piece", "whitebeard-pirates", "commander", "ace", "portgas-d-ace", "fire-fist", "wanted-poster", "roger"]
  },
  {
    plid: 10,
    title: "Whitebeard Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Edward Newgate",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/newgate_wanted_poster_10_main.jpg",
      mockup: "/images/anime/one-piece/newgate_wanted_poster_10_mockup.png"
    },
    tags: ["anime", "one-piece", "whitebeard", "edward-newgate", "yonko", "emperor", "wanted-poster", "strongest-man"]
  },
  {
    plid: 11,
    title: "Vinsmoke Sanji Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Sanji",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/sanji_wanted_poster_11_main.jpg",
      mockup: "/images/anime/one-piece/sanji_wanted_poster_11_mockup.png"
    },
    tags: ["anime", "one-piece", "straw-hat", "cook", "sanji", "vinsmoke-sanji", "black-leg", "wanted-poster", "only-alive"]
  },
  {
    plid: 12,
    title: "Gol D Roger Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Gol D Roger",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/roger_wanted_poster_12_main.jpg",
      mockup: "/images/anime/one-piece/roger_wanted_poster_12_mockup.png"
    },
    tags: ["anime", "one-piece", "pirate-king", "roger", "gol-d-roger", "gold-roger", "wanted-poster", "king-of-pirates"]
  },
  {
    plid: 13,
    title: "Chopper Poster",
    type: "anime",
    franchise: "One Piece",
    character: "Tony Tony Chopper",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/anime/one-piece/chopper_wanted_poster_13_main.jpg",
      mockup: "/images/anime/one-piece/chopper_wanted_poster_13_mockup.png"
    },
    tags: ["anime", "one-piece", "straw-hat", "doctor", "chopper", "tony-tony-chopper", "wanted-poster", "reindeer", "cotton-candy"]
  },
  
  // MUSIC PRODUCTS
  {
    plid: 14,
    title: "BAB' MOTHA Poster",
    type: "music",
    genre: "amapiano",
    artist: "Kabza De Small",
    album: "BAB' MOTHA",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/music/hiphop/bab_motha_kabza_de_small_poster_5_main.jpg",
    },
    tags: ["music", "amapiano", "kabza-de-small", "bab-motha", "piano-hub", "south-african", "album-poster"]
  },
  {
    plid: 15,
    title: "GNX Poster",
    type: "music",
    genre: "hip-hop",
    artist: "Kendrick Lamar",
    album: "GNX",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/music/hiphop/gnx_kendrick_lamar_poster_8_main.jpg",
    },
    tags: ["music", "hip-hop", "kendrick-lamar", "gnx", "k-dot", "rap", "album-poster", "pulitzer"]
  },
  {
    plid: 16,
    title: "ISIBUKO Poster",
    type: "music",
    genre: "afro-soul",
    artist: "Sjava",
    album: "ISIBUKO",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/music/hiphop/isibuko_sjava_poster_6_main.jpg",
    },
    tags: ["music", "afro-soul", "sjava", "isibuko", "south-african", "maskandi", "album-poster"]
  },
  {
    plid: 17,
    title: "IVY LEAGUE Poster",
    type: "music",
    genre: "amapiano",
    artist: "Kelvin Momo",
    album: "IVY LEAGUE",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/music/hiphop/ivy_league_kelvin_momo_poster_7_main.jpg",
    },
    tags: ["music", "amapiano", "kelvin-momo", "ivy-league", "private-school", "south-african", "piano", "album-poster"]
  },
  {
    plid: 18,
    title: "MORE LIFE Poster",
    type: "music",
    genre: "hip-hop",
    artist: "Drake",
    album: "More Life",
    releaseYear: 2017,
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/music/hiphop/more_life_drake_poster_1_main.jpg",
    },
    tags: ["music", "hip-hop", "drake", "more-life", "playlist", "ovo", "passionfruit", "album-poster", "2017"]
  },
  {
    plid: 19,
    title: "N'WANA WA MUTSONGA Poster",
    type: "music",
    genre: "amapiano",
    artist: "Kelvin Momo",
    album: "N'WANA WA MUTSONGA",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/music/hiphop/n'wana_wa_mutsonga_kelvin_momo_poster_3_main.jpg",
    },
    tags: ["music", "amapiano", "kelvin-momo", "nwana-wa-mutsonga", "tsonga", "south-african", "album-poster"]
  },
  {
    plid: 20,
    title: "STARBOY Poster",
    type: "music",
    genre: "pop",
    artist: "The Weeknd",
    album: "Starboy",
    releaseYear: 2016,
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/music/hiphop/starboy_the_weeknd_poster_2_main.jpg",
    },
    tags: ["music", "pop", "r&b", "the-weeknd", "starboy", "abel", "album-poster", "2016", "daft-punk"]
  },
  {
    plid: 21,
    title: "Take Care Poster",
    type: "music",
    genre: "hip-hop",
    artist: "Drake",
    album: "Take Care",
    releaseYear: 2011,
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/music/hiphop/take_care_drake_poster_9_main.jpg",
    },
    tags: ["music", "hip-hop", "drake", "take-care", "ovo", "riot", "album-poster", "2011", "classic"]
  },
  {
    plid: 22,
    title: "Thato Yo Modimo Poster",
    type: "music",
    genre: "amapiano",
    artist: "Kelvin Momo",
    album: "Thato Yo Modimo",
    variants: [
      // {size: "A2", price: 30.00, available: false},
      {size: "A3", price: 20.00, available: true},
      {size: "A4", price: 10.00, available: true},
    ],
    images: {
      main: "/images/music/hiphop/thato_ya_modimo_kelvin_momo_poster_4_main.jpg",
    },
    tags: ["music", "amapiano", "kelvin-momo", "thato-ya-modimo", "south-african", "piano", "album-poster", "spiritual"]
  },
];

export async function GET() {
  return NextResponse.json(products);
}