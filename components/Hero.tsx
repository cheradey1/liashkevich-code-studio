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
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-black uppercase tracking-widest animate-text-reveal" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="text-white forge-glow">Ляшкевич Андрій</span>
          <span className="block text-transparent bg-clip-text forge-glow-gradient">
            Frontend Developer
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto my-6 animate-text-reveal delay-200">
          Frontend Developer для SaaS, MVP та PWA
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-text-reveal delay-300">
          Створюю швидкі, адаптивні та масштабовані веб-додатки, які виглядають як мобільні апки і реально працюють на бізнес-результат.
        </p>
        <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-8 animate-text-reveal delay-300">
          SaaS • MVP • PWA • Web Apps
        </p>
        <button
          onClick={scrollToGallery}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white/20 hover:shadow-lg hover:shadow-[#00BFFF]/50 animate-text-reveal delay-400"
        >
          Зв'язатися →
        </button>
      </div>
    </section>
  );
};

export default Hero;