
import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">
      {/* Background image subtle */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="/images/finalcta-bg-v3.webp"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-32 md:py-44">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-12 reveal">
            <div className="w-6 h-px bg-white/30"></div>
            <span className="text-xs tracking-[0.25em] uppercase text-white/30">Primul pas</span>
          </div>

          {/* Headline — large, left-aligned, asymmetric */}
          <h2 className="font-serif text-white leading-[1.0] mb-10 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 300 }}>
            Dacă te gândești<br />
            să începi,<br />
            <em style={{ fontStyle: 'italic', opacity: 0.7 }}>începe informat.</em>
          </h2>

          {/* Divider */}
          <div className="w-16 h-px bg-white/20 mb-10 reveal reveal-delay-2"></div>

          {/* Body */}
          <p className="text-sm text-white/45 mb-14 max-w-md leading-[1.9] reveal reveal-delay-2">
            Trimite-ne un mesaj și vedem dacă suntem potriviți pentru tine.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16 reveal reveal-delay-3">
            <a
              href="https://wa.me/40775134887"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-white text-black text-xs tracking-[0.18em] uppercase overflow-hidden transition-all duration-500 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Scrie pe WhatsApp</span>
              <div className="absolute inset-0 bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </a>
            <a
              href="tel:0775134887"
              className="group px-10 py-4 border border-white/25 text-white/60 hover:text-white hover:border-white/60 text-xs tracking-[0.18em] uppercase transition-all duration-400 cursor-pointer whitespace-nowrap"
            >
              Sună acum
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:andreibojici@gmail.com"
            className="underline-hover text-xs text-white/30 hover:text-white/60 transition-colors duration-300 cursor-pointer reveal reveal-delay-4"
          >
            andreibojici@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
