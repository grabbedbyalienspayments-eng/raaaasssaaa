
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import ForWho from './components/ForWho';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-white">
      <Header isScrolled={isScrolled} />
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <ForWho />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />

      {/* WhatsApp Sticky Button */}
      <a
        href="https://wa.me/40775134887"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
        aria-label="Contact WhatsApp"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>
    </div>
  );
}
