
import { useState, useEffect, useRef } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      question: 'Trebuie să am experiență?',
      answer: 'Nu. Lucrăm și cu persoane aflate la început, dacă există seriozitate și dorință de implicare.',
    },
    {
      question: 'Pot începe remote?',
      answer: 'Da. Activitatea poate începe online, într-un mod organizat și sigur.',
    },
    {
      question: 'Este totul confidențial?',
      answer: 'Da. Discreția și respectul sunt prioritare.',
    },
    {
      question: 'Cât de repede pot începe?',
      answer: 'După discuția inițială și stabilirea detaliilor.',
    },
  ];

  return (
    <section id="intrebari" ref={sectionRef} className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 px-8 md:px-16 lg:px-24 py-28 md:py-36 gap-16 lg:gap-24">
        {/* Left label column */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="w-6 h-px bg-black/40"></div>
            <span className="text-xs tracking-[0.25em] uppercase text-black/40">FAQ</span>
          </div>
          <h2 className="font-serif text-black leading-[1.05] reveal reveal-delay-1"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300 }}>
            Întrebări<br />
            <em style={{ fontStyle: 'italic' }}>frecvente</em>
          </h2>
          <p className="text-sm text-black/40 mt-6 leading-relaxed max-w-xs reveal reveal-delay-2">
            Răspunsuri clare, fără ambiguitate.
          </p>
        </div>

        {/* Right accordion column */}
        <div className="lg:col-span-8 reveal reveal-delay-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black/8">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-7 flex items-center justify-between text-left cursor-pointer group"
              >
                <h3
                  className="font-serif text-black/70 group-hover:text-black transition-colors duration-300 pr-8 leading-snug"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontWeight: 300 }}
                >
                  {faq.question}
                </h3>
                <div className={`w-7 h-7 flex items-center justify-center flex-shrink-0 border border-black/15 group-hover:border-black/40 transition-all duration-400 ${openIndex === index ? 'bg-black' : 'bg-transparent'}`}>
                  <i className={`text-sm transition-all duration-400 ${openIndex === index ? 'ri-subtract-line text-white' : 'ri-add-line text-black/50 group-hover:text-black'}`}></i>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-48 pb-7' : 'max-h-0'}`}
              >
                <p className="text-sm text-black/50 leading-[1.9]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
