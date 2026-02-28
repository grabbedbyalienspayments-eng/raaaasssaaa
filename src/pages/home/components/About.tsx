
import { useEffect, useRef } from 'react';

export default function About() {
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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    { label: 'Comunicare deschisă', num: '01' },
    { label: 'Strategie personalizată', num: '02' },
    { label: 'Creștere sustenabilă', num: '03' },
    { label: 'Respect și discreție', num: '04' },
  ];

  return (
    <section id="despre" ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Top divider */}
      <div className="w-full h-px bg-black/8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left — image column */}
        <div className="relative h-72 lg:h-auto img-zoom-wrap overflow-hidden">
          <img
            src="/images/about-left-v3.webp"
            alt="Studio"
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay text on image */}
          <div className="absolute bottom-10 left-10 right-10 reveal reveal-left">
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase">Est. 2024</span>
          </div>
        </div>

        {/* Right — content column */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 lg:py-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10 reveal">
            <div className="w-6 h-px bg-black/40"></div>
            <span className="text-xs tracking-[0.25em] uppercase text-black/40">Despre noi</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-black mb-8 reveal reveal-delay-1 leading-[1.1]"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
            Un studio mic.<br />
            <em style={{ fontStyle: 'italic' }}>Atenție reală.</em>
          </h2>

          {/* Body */}
          <div className="space-y-5 mb-14 reveal reveal-delay-2">
            <p className="text-sm text-black/55 leading-[1.9]">
              Nu suntem un studio de volum. Nu lucrăm cu zeci de modele simultan.
            </p>
            <p className="text-sm text-black/55 leading-[1.9]">
              Lucrăm atent. Personal. Cu răbdare.
            </p>
            <p className="text-sm text-black/55 leading-[1.9]">
              Dacă ești la început și ai nevoie de ghidare clară, structură și sprijin real, aici vei găsi un mediu prietenos, organizat și orientat pe rezultate.
            </p>
          </div>

          {/* Pillars */}
          <div className="space-y-0 reveal reveal-delay-3">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="group flex items-center justify-between py-4 border-b border-black/8 cursor-default"
              >
                <span className="text-sm text-black/70 group-hover:text-black transition-colors duration-300 tracking-wide">
                  {p.label}
                </span>
                <span className="text-xs text-black/20 group-hover:text-black/40 transition-colors duration-300 font-serif">
                  {p.num}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
