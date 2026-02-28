
import { useState, useEffect, useRef } from 'react';
import PrivacyModal from './PrivacyModal';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    gdprConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [gdprError, setGdprError] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) { setGdprError(true); return; }
    setGdprError(false);
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const formBody = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        gdprConsent: formData.gdprConsent ? 'Da' : 'Nu',
      });
      const response = await fetch('https://readdy.ai/api/form/d6h3vh2u8ojn6g516mp0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '', gdprConsent: false });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" ref={sectionRef} className="relative bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Left — info column */}
          <div className="relative flex flex-col justify-center px-10 md:px-16 lg:px-24 py-24 lg:py-32 bg-white">
            <div className="flex items-center gap-4 mb-10 reveal">
              <div className="w-6 h-px bg-black/40"></div>
              <span className="text-xs tracking-[0.25em] uppercase text-black/40">Contact</span>
            </div>
            <h2 className="font-serif text-black leading-[1.05] mb-8 reveal reveal-delay-1"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300 }}>
              Hai să<br />
              <em style={{ fontStyle: 'italic' }}>vorbim.</em>
            </h2>
            <p className="text-sm text-black/45 leading-[1.9] max-w-xs mb-14 reveal reveal-delay-2">
              Trimite-ne un mesaj și stabilim împreună dacă suntem potriviți.
            </p>

            <div className="space-y-6 reveal reveal-delay-3">
              <a
                href="tel:0775134887"
                className="group flex items-center gap-5 cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-black/10 group-hover:border-black/40 transition-colors duration-300">
                  <i className="ri-phone-line text-sm text-black/40 group-hover:text-black transition-colors duration-300"></i>
                </div>
                <div>
                  <span className="block text-xs text-black/30 tracking-[0.15em] uppercase mb-0.5">Telefon</span>
                  <span className="text-sm text-black/70 group-hover:text-black transition-colors duration-300">0775 134 887</span>
                </div>
              </a>
              <a
                href="mailto:andreibojici@gmail.com"
                className="group flex items-center gap-5 cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-black/10 group-hover:border-black/40 transition-colors duration-300">
                  <i className="ri-mail-line text-sm text-black/40 group-hover:text-black transition-colors duration-300"></i>
                </div>
                <div>
                  <span className="block text-xs text-black/30 tracking-[0.15em] uppercase mb-0.5">Email</span>
                  <span className="text-sm text-black/70 group-hover:text-black transition-colors duration-300">andreibojici@gmail.com</span>
                </div>
              </a>
              <a
                href="https://wa.me/40775134887"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-black/10 group-hover:border-black/40 transition-colors duration-300">
                  <i className="ri-whatsapp-line text-sm text-black/40 group-hover:text-black transition-colors duration-300"></i>
                </div>
                <div>
                  <span className="block text-xs text-black/30 tracking-[0.15em] uppercase mb-0.5">WhatsApp</span>
                  <span className="text-sm text-black/70 group-hover:text-black transition-colors duration-300">Scrie direct</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form column */}
          <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 lg:py-32 bg-black/[0.02]">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-7 reveal reveal-delay-2"
              data-readdy-form
            >
              {/* Name */}
              <div className="group">
                <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-black/35 mb-3">
                  Nume *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-black/15 focus:border-black focus:outline-none transition-colors duration-300 text-sm text-black placeholder-black/20"
                  placeholder="Numele tău"
                />
              </div>

              {/* Phone */}
              <div className="group">
                <label htmlFor="phone" className="block text-xs tracking-[0.15em] uppercase text-black/35 mb-3">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-black/15 focus:border-black focus:outline-none transition-colors duration-300 text-sm text-black placeholder-black/20"
                  placeholder="07xx xxx xxx"
                />
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-black/35 mb-3">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setFormData({ ...formData, message: e.target.value });
                    }
                  }}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-0 py-3 bg-transparent border-b border-black/15 focus:border-black focus:outline-none transition-colors duration-300 resize-none text-sm text-black placeholder-black/20"
                  placeholder="Spune-ne câteva cuvinte despre tine..."
                ></textarea>
                <p className="text-xs text-black/25 mt-1">{formData.message.length}/500</p>
              </div>

              {/* GDPR */}
              <div className="space-y-1">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="gdprConsent"
                    name="gdprConsent"
                    checked={formData.gdprConsent}
                    onChange={(e) => {
                      setFormData({ ...formData, gdprConsent: e.target.checked });
                      if (e.target.checked) setGdprError(false);
                    }}
                    className="mt-1 cursor-pointer accent-black"
                  />
                  <label htmlFor="gdprConsent" className="text-xs text-black/40 leading-relaxed cursor-pointer">
                    Sunt de acord cu prelucrarea datelor mele conform{' '}
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(true)}
                      className="underline hover:text-black transition-colors cursor-pointer"
                    >
                      Politicii de Confidențialitate
                    </button>. *
                  </label>
                </div>
                {gdprError && (
                  <p className="text-xs text-red-500 pl-6">
                    Trebuie să accepți politica de confidențialitate.
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-black text-white text-xs tracking-[0.18em] uppercase overflow-hidden transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>

              {submitStatus === 'success' && (
                <div className="py-4 border-t border-black/10 text-xs text-black/60 text-center tracking-wide">
                  Mesajul a fost trimis. Vă vom contacta în curând.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="py-4 border-t border-red-200 text-xs text-red-500 text-center tracking-wide">
                  A apărut o eroare. Încercați din nou sau contactați-ne direct.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </>
  );
}
