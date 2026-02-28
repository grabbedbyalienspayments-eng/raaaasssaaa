
import { useState } from 'react';
import PrivacyModal from './PrivacyModal';
import TermsModal from './TermsModal';

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white border-t border-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; Black Studio {year}
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-xs text-gray-500 hover:text-black transition-colors cursor-pointer whitespace-nowrap"
            >
              Politică de Confidențialitate
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="text-xs text-gray-500 hover:text-black transition-colors cursor-pointer whitespace-nowrap"
            >
              Termeni și Condiții
            </button>
            <a
              href="https://websiteon.ro/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-xs text-gray-500 hover:text-black transition-colors cursor-pointer whitespace-nowrap"
            >
              Website creat de WebsiteON
            </a>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </>
  );
}
