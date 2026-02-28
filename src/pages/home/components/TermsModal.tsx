
interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between">
          <h2 className="text-xl font-serif text-black">Termeni și Condiții</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors cursor-pointer w-8 h-8 flex items-center justify-center">
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
        <div className="px-8 py-8 space-y-6 text-sm text-gray-700 leading-relaxed">
          <p className="text-xs text-gray-400">Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>

          <section>
            <h3 className="font-semibold text-black mb-2">1. Informații generale</h3>
            <p>Prezentul website aparține BLACK STUDIO, studio boutique de management pentru modele cu activitate desfășurată online. Prin accesarea acestui website, acceptați în mod implicit termenii și condițiile de mai jos.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">2. Scopul website-ului</h3>
            <p>Website-ul are caracter informativ și de prezentare a serviciilor oferite de BLACK STUDIO. Informațiile publicate nu constituie o ofertă contractuală fermă, ci o invitație la negociere.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">3. Serviciile oferite</h3>
            <p>BLACK STUDIO oferă servicii de management, training și strategie pentru modele care activează în zona de content premium online. Detaliile colaborării se stabilesc individual, în urma discuției inițiale.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">4. Proprietate intelectuală</h3>
            <p>Toate elementele de conținut ale acestui website (texte, imagini, design, structură) sunt proprietatea BLACK STUDIO și sunt protejate de legislația privind drepturile de autor. Reproducerea parțială sau integrală fără acordul scris al proprietarului este interzisă.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">5. Limitarea răspunderii</h3>
            <p>BLACK STUDIO nu garantează că informațiile de pe website sunt complete, exacte sau actualizate în orice moment. Ne rezervăm dreptul de a modifica conținutul fără notificare prealabilă. Nu ne asumăm răspunderea pentru decizii luate exclusiv pe baza informațiilor prezentate pe acest site.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">6. Link-uri externe</h3>
            <p>Website-ul poate conține link-uri către resurse externe (ex: WhatsApp). BLACK STUDIO nu este responsabil pentru conținutul sau politicile de confidențialitate ale acestor platforme terțe.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">7. Modificarea termenilor</h3>
            <p>Ne rezervăm dreptul de a actualiza acești termeni în orice moment. Versiunea actualizată va fi disponibilă pe această pagină, cu data ultimei modificări.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">8. Legislație aplicabilă</h3>
            <p>Prezentele condiții sunt guvernate de legislația română în vigoare. Orice litigiu va fi soluționat pe cale amiabilă sau, în caz contrar, de instanțele competente din România.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">9. Contact</h3>
            <p>Pentru orice întrebare legată de acești termeni, ne puteți contacta la <a href="mailto:andreibojici@gmail.com" className="underline">andreibojici@gmail.com</a> sau la numărul 0775 134 887.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
