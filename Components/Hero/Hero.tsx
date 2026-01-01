export default function Hero() {
  return(
    <>
      <div className="img-container h-55 mt-2 w-full overflow-hidden relative" > 
        <img src="/wp5501421-wide-anime-wallpaper naruto.jpg" 
        alt="Naruto wide anime wallpaper"
        className="hero-img 
        w-full h-full 
        object-cover 
        object-center
        
        " />
        <div 
        className="
          overlay
          absolute
          inset-0
          flex
          flex-col
          justify-center
          items-center
          text-white
          text-center
          bg-[rgba(0,0,0,0.35)]
          ">
          <h1 className="text-2xl m-0">Merchbay</h1>
          <p>Discover anime-inspired merch</p>
        </div>
      </div>
    </>
    
    
  )
};
