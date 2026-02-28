
import { useEffect, useRef } from 'react';

export default function HowItWorks() {
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Discuție inițială',
      description: 'Stabilim obiectivele tale, nivelul tău actual și ce ți se potrivește.',
      image: '/images/how-step-01-v3.webp',
      align: 'left',
    },
    {
      number: '02',
      title: 'Setup & Strategie',
      description: 'Te ajutăm cu structură, poziționare, idei de conținut, organizare și mindset.',
      image: '/images/how-step-02-v3.webp',
      align: 'right',
    },
    {
      number: '03',
      title: 'Optimizare & Creștere',
      description: 'Monitorizăm, ajustăm și optimizăm constant pentru rezultate mai bune.',
      image: '/images/how-step-03-v3.webp',
      align: 'left',
    },
  ];

  return (
    <section id="cum-functioneaza" ref={sectionRef} className="bg-white overflow-hidden">
      {/* Section header */}
      <div className="px-8 md:px-16 lg:px-24 pt-28 pb-20">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="w-6 h-px bg-black/40"></div>
              <span className="text-xs tracking-[0.25em] uppercase text-black/40">Proces</span>
            </div>
            <h2 className="font-serif text-black leading-[1.05] reveal reveal-delay-1"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              Cum funcționează
            </h2>
          </div>
          <p className="text-sm text-black/45 max-w-xs leading-relaxed reveal reveal-delay-2">
            Trei etape clare. Fără promisiuni exagerate.
          </p>
        </div>
        {/* Divider line */}
        <div className="mt-12 h-px bg-black/8 reveal reveal-delay-3">
          <div className="line-draw h-full bg-black/20 visible" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-0">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
          >
            {/* Image */}
            <div className={`relative h-72 md:h-96 lg:h-[520px] img-zoom-wrap overflow-hidden ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover object-top"
              />
              {/* Step number overlay */}
              <div className="absolute top-8 left-8">
                <span className="text-white/20 font-serif" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1 }}>
                  {step.number}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className={`flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16 lg:py-24 bg-white ${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="reveal">
                <span className="text-xs tracking-[0.25em] uppercase text-black/30 mb-6 block">
                  Pasul {step.number}
                </span>
                <h3 className="font-serif text-black mb-6 leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300 }}>
                  {step.title}
                </h3>
                <div className="w-8 h-px bg-black/30 mb-6"></div>
                <p className="text-sm text-black/55 leading-[1.9] max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
