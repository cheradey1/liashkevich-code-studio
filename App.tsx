import React, { useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Downloads from './components/Downloads';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const downloadsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const [heroTitleRect, setHeroTitleRect] = useState<DOMRect | null>(null);

  const pricingRef = useRef<HTMLDivElement>(null);
  
  const sections = {
    home: homeRef,
    gallery: galleryRef,
    downloads: downloadsRef,
    about: aboutRef,
    pricing: pricingRef,
    contact: contactRef,
  };

  const scrollToSection = (section: React.RefObject<HTMLDivElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0D1117] text-gray-200 min-h-screen">
      <ParticleBackground heroTitleRect={heroTitleRect} />
      <div className="relative z-10">
        <Header scrollToSection={scrollToSection} sections={sections} />
        <main>
          <div ref={homeRef}>
            <Hero 
              scrollToGallery={() => scrollToSection(galleryRef)}
              setHeroTitleRect={setHeroTitleRect}
            />
          </div>
          <div ref={galleryRef}>
            <Gallery />
          </div>
          <div ref={downloadsRef}>
            <Downloads />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={pricingRef}>
            <Pricing />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;