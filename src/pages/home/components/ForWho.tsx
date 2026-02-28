
import { useEffect, useRef } from 'react';

export default function ForWho() {
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

  const criteria = [
    { text: 'Vrei să începi dar nu știi de unde', num: '01' },
    { text: 'Ai nevoie de structură și disciplină', num: '02' },
    { text: 'Cauți un studio mai prietenos', num: '03' },
    { text: 'Vrei să înțelegi ce faci, nu doar să execuți', num: '04' },
  ];

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left — content */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-24 lg:py-32">
          <div className="flex items-center gap-4 mb-10 reveal">
            <div className="w-6 h-px bg-black/40"></div>
            <span className="text-xs tracking-[0.25em] uppercase text-black/40">Potrivire</span>
          </div>

          <h2 className="font-serif text-black leading-[1.05] mb-14 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300 }}>
            Este potrivit<br />
            <em style={{ fontStyle: 'italic' }}>pentru tine dacă…</em>
          </h2>

          <div className="space-y-0 reveal reveal-delay-2">
            {criteria.map((c, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 py-5 border-b border-black/8 hover:border-black/20 transition-all duration-400 cursor-default"
              >
                <span className="text-black/20 font-serif text-xs mt-1 flex-shrink-0 group-hover:text-black/40 transition-colors duration-300">
                  {c.num}
                </span>
                <p className="text-sm text-black/60 group-hover:text-black leading-relaxed transition-colors duration-400">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="relative h-72 lg:h-auto img-zoom-wrap overflow-hidden">
          <img
            src="/images/forwho-right-v3.webp"
            alt="Pentru cine este"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
