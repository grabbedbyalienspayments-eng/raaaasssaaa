
import { useEffect, useRef } from 'react';

export default function Benefits() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      num: '01',
      title: 'Training pentru modele aflate la început',
      description: 'Ghidare pas cu pas pentru a înțelege industria și a începe corect.',
    },
    {
      num: '02',
      title: 'Ghidare pentru content premium & chatting',
      description: 'Strategii eficiente pentru crearea de conținut și comunicare cu audiența.',
    },
    {
      num: '03',
      title: 'Strategie de creștere personalizată',
      description: 'Plan adaptat obiectivelor tale și ritmului tău de dezvoltare.',
    },
    {
      num: '04',
      title: 'Suport constant și feedback clar',
      description: 'Comunicare deschisă și răspunsuri rapide la întrebările tale.',
    },
    {
      num: '05',
      title: 'Optimizare profil și poziționare',
      description: 'Ajustări continue pentru a maximiza vizibilitatea și rezultatele.',
    },
  ];

  return (
    <section id="beneficii" ref={sectionRef} className="relative bg-black overflow-hidden">
      {/* Background texture image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/benefits-bg-v2.webp"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-28 md:py-36">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="w-6 h-px bg-white/30"></div>
              <span className="text-xs tracking-[0.25em] uppercase text-white/30">Ce primești</span>
            </div>
            <h2 className="font-serif text-white leading-[1.05] reveal reveal-delay-1"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              Sprijin real,<br />
              <em style={{ fontStyle: 'italic' }}>nu doar sfaturi.</em>
            </h2>
          </div>
          <p className="text-sm text-white/35 max-w-xs leading-relaxed reveal reveal-delay-2 md:text-right">
            Fiecare element este gândit pentru a-ți oferi claritate și direcție reală.
          </p>
        </div>

        {/* Benefits list */}
        <div className="space-y-0">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-8 border-t border-white/10 hover:border-white/25 transition-all duration-500 cursor-default reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              {/* Number */}
              <span className="text-white/15 font-serif group-hover:text-white/25 transition-colors duration-500 flex-shrink-0 w-12"
                style={{ fontSize: '1.1rem', fontWeight: 300 }}>
                {b.num}
              </span>

              {/* Title */}
              <h3 className="font-serif text-white/70 group-hover:text-white transition-colors duration-400 flex-1"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 300 }}>
                {b.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/35 group-hover:text-white/55 transition-colors duration-400 max-w-xs leading-relaxed">
                {b.description}
              </p>

              {/* Arrow */}
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <i className="ri-arrow-right-line text-white/50 text-sm"></i>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </section>
  );
}
