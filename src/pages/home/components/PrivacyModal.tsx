
interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between">
          <h2 className="text-xl font-serif text-black">Politică de Confidențialitate</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors cursor-pointer w-8 h-8 flex items-center justify-center">
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
        <div className="px-8 py-8 space-y-6 text-sm text-gray-700 leading-relaxed">
          <p className="text-xs text-gray-400">Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>

          <section>
            <h3 className="font-semibold text-black mb-2">1. Cine suntem</h3>
            <p>BLACK STUDIO este un studio boutique de management pentru modele, cu activitate desfășurată online. Date de contact: <a href="mailto:andreibojici@gmail.com" className="underline">andreibojici@gmail.com</a> / 0775 134 887.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">2. Ce date colectăm</h3>
            <p>Prin formularul de contact colectăm: nume, număr de telefon și mesajul transmis. Nu colectăm date sensibile fără consimțământ explicit.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">3. Scopul prelucrării</h3>
            <p>Datele sunt utilizate exclusiv pentru a răspunde solicitărilor primite prin formularul de contact și pentru comunicare ulterioară legată de serviciile noastre.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">4. Temeiul legal</h3>
            <p>Prelucrarea se bazează pe consimțământul dumneavoastră explicit, acordat prin bifarea căsuței GDPR din formularul de contact (Art. 6 alin. 1 lit. a din RGPD).</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">5. Durata stocării</h3>
            <p>Datele sunt păstrate pe durata necesară soluționării solicitării, dar nu mai mult de 12 luni, după care sunt șterse.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">6. Drepturile dumneavoastră</h3>
            <p>Aveți dreptul de acces, rectificare, ștergere, restricționare a prelucrării, portabilitate și opoziție. Pentru exercitarea acestor drepturi, ne puteți contacta la <a href="mailto:andreibojici@gmail.com" className="underline">andreibojici@gmail.com</a>.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">7. Securitate</h3>
            <p>Aplicăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor dumneavoastră împotriva accesului neautorizat, pierderii sau divulgării.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">8. Politica privind Cookie-urile</h3>
            <p className="mb-2">Acest website utilizează un număr minim de cookie-uri, strict necesare funcționării tehnice a paginii:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Cookie-uri tehnice esențiale</strong> – necesare pentru funcționarea corectă a site-ului (sesiune, preferințe de bază). Nu pot fi dezactivate.</li>
            </ul>
            <p className="mt-2">Nu utilizăm cookie-uri de analiză, marketing, tracking sau pixeli publicitari. Nu există scripturi third-party de urmărire pe acest site.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">9. Transferuri internaționale</h3>
            <p>Nu transferăm datele dumneavoastră în afara Spațiului Economic European.</p>
          </section>

          <section>
            <h3 className="font-semibold text-black mb-2">10. Contact și reclamații</h3>
            <p>Pentru orice întrebare legată de prelucrarea datelor, ne puteți contacta la <a href="mailto:andreibojici@gmail.com" className="underline">andreibojici@gmail.com</a>. Aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).</p>
          </section>
        </div>
      </div>
    </div>
  );
}
