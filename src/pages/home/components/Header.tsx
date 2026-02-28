
import { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Despre', id: 'despre' },
    { label: 'Cum funcționează', id: 'cum-functioneaza' },
    { label: 'Beneficii', id: 'beneficii' },
    { label: 'Întrebări', id: 'intrebari' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-black/8'
          : 'bg-transparent'
      }`}
    >
      <div className="px-8 md:px-16 py-5 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="cursor-pointer whitespace-nowrap focus:outline-none"
          aria-label="Scroll to top"
        >
          <img
            src="https://public.readdy.ai/ai/img_res/3d8b659f-4c3b-45d2-b3b7-18119f12bf42.png"
            alt="BLACK STUDIO"
            className={`h-10 transition-all duration-500 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`underline-hover text-xs tracking-[0.18em] uppercase transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-black/60 hover:text-black' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}
        >
          <i className={`text-xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-black/8`}
      >
        <nav className="flex flex-col px-8 py-6 gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs tracking-[0.18em] uppercase text-black/60 hover:text-black text-left cursor-pointer whitespace-nowrap transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
