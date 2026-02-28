
import { useEffect, useRef } from 'react';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrollY * 0.12}px)`;
        textRef.current.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToHowItWorks = () => {
    document.getElementById('cum-functioneaza')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ top: '-10%', height: '120%' }}>
        <img
          src="/images/hero-cinematic-v4.webp"
          alt="BLACK STUDIO"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
      </div>

      {/* Vertical text label */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-20">
        <div className="w-px h-16 bg-white/30"></div>
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Management Studio
        </span>
        <div className="w-px h-16 bg-white/30"></div>
      </div>

      {/* Content — asymmetric left-aligned */}
      <div ref={textRef} className="relative z-10 w-full px-8 md:px-16 lg:px-24 pb-24 md:pb-32 will-change-transform">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-white/60"></div>
            <span className="text-white/60 text-xs tracking-[0.25em] uppercase font-light">Boutique · Remote · Premium</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-white leading-[1.05] mb-8" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 300 }}>
            Începe în siguranță.<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Crește cu încredere.</em>
          </h1>

          {/* Subheadline */}
          <p className="text-white/75 mb-12 max-w-xl leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', fontWeight: 300 }}>
            Suntem un studio boutique de management pentru modele care vor să înceapă inteligent în zona de content premium.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-white text-black text-xs tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Vreau să vorbim</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </button>
            <button
              onClick={scrollToHowItWorks}
              className="group px-8 py-4 border border-white/50 text-white/80 hover:text-white hover:border-white text-xs tracking-[0.15em] uppercase transition-all duration-400 cursor-pointer whitespace-nowrap"
            >
              Află cum funcționează
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/70 animate-[scrollLine_1.8s_ease-in-out_infinite]" style={{ height: '40%', animation: 'scrollLine 1.8s ease-in-out infinite' }}></div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
