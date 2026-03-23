import { useState, useEffect } from 'react';

const slides = [
  {
    id: 'anime',
    image: '/wp5501421-wide-anime-wallpaper naruto.jpg',
    title: 'Legendary Frames', // Focus on the "Poster" aspect
    description: 'Premium Anime prints for your collection',
    overlayColor: 'rgba(0,0,0,0.35)'
  },
  {
    id: 'music',
    image: '/DzEPBA5qjtY-unsplash.jpg',
    title: 'Studio Aesthetics', 
    description: 'Iconic music posters and studio decor',
    overlayColor: 'rgba(0,0,0,0.45)' // Slightly darker for music vibe
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 9000); // 10 second rotation
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <div className="img-container h-64 mt-2 w-full overflow-hidden relative transition-all duration-700"> 
      {/* Key attribute ensures the animation restarts on image swap */}
      <img 
        key={currentSlide.image}
        src={currentSlide.image} 
        alt={currentSlide.title}
        className="hero-img w-full h-full object-cover object-center animate-fade-in transition-opacity duration-1000" 
      />
      
      <div 
        className="overlay absolute inset-0 flex flex-col justify-center items-center text-white text-center transition-colors duration-1000"
        style={{ backgroundColor: currentSlide.overlayColor }}
      >
        <div key={currentSlide.id} className="animate-slide-up">
          <h1 className="text-3xl md:text-4xl font-bold m-0 tracking-tight uppercase italic">
            {currentSlide.title}
          </h1>
          <p className="mt-2 text-lg opacity-90 font-light">
            {currentSlide.description}
          </p>
          
          {/* Added a small Shop button to make it look like a store hero */}
          <button className="mt-4 px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}