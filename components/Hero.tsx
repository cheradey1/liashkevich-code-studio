import React, { useRef, useEffect } from 'react';

interface HeroProps {
  scrollToGallery: () => void;
  setHeroTitleRect: (rect: DOMRect | null) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToGallery, setHeroTitleRect }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const updateRect = () => {
      if (titleRef.current) {
        setHeroTitleRect(titleRef.current.getBoundingClientRect());
      }
    };

    const observer = new ResizeObserver(updateRect);

    const currentTitleRef = titleRef.current;
    if (currentTitleRef) {
      observer.observe(currentTitleRef);
      updateRect(); // Initial position update
    }

    // Listen for window resize to catch positional changes of the centered element
    window.addEventListener('resize', updateRect);

    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
      window.removeEventListener('resize', updateRect);
    };
  }, [setHeroTitleRect]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center px-4 z-10">
        <h2 ref={titleRef} className="text-5xl md:text-7xl font-black uppercase tracking-widest animate-text-reveal">
          <span className="text-white forge-glow">Liashkevich</span>
          <span className="block text-transparent bg-clip-text forge-glow-gradient">
            Code Studio
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto my-8 animate-text-reveal delay-200">
          Кузня ваших додатків.
        </p>
        <button
          onClick={scrollToGallery}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white/20 hover:shadow-lg hover:shadow-[#00BFFF]/50 animate-text-reveal delay-400"
        >
          Переглянути проекти
        </button>
      </div>
    </section>
  );
};

export default Hero;