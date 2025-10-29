import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';

interface HeaderProps {
  scrollToSection: (section: React.RefObject<HTMLDivElement>) => void;
  sections: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Головна', section: sections.home },
    { name: 'Галерея', section: sections.gallery },
    { name: 'Завантаження', section: sections.downloads },
    { name: 'Про нас', section: sections.about },
    { name: 'Контакти', section: sections.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (section: React.RefObject<HTMLDivElement>) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D1117]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-wider forge-glow">
            LCS
          </h1>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.section)}
                className="text-gray-300 hover:text-[#00FFFF] transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-[#0D1117]/95 backdrop-blur-sm`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.section)}
              className="text-gray-300 hover:text-[#00FFFF] transition-colors duration-300 font-medium text-lg"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;