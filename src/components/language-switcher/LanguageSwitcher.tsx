"use client";

import {useState} from "react";
import {useRouter, usePathname} from '@/i18n/navigation';
import './language-switcher.scss';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    const cleanPath = pathname.replace(/^\/(es|en)/, '') || '/';
    router.replace(cleanPath, {locale});
    setOpen(false);
  };

  const currentLocale = pathname.startsWith('/en') ? 'en' : 'es';

  const localeItems = {
    'es': { label: 'Español', flag: '🇲🇽' },
    'en': { label: 'English', flag: '🇺🇸' }
  }

  return (
    <div className="position-relative d-inline-block language-container">
      <button
        className="btn btn-md btn-language d-flex align-items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="flag">
          {localeItems[currentLocale].flag}
        </span> 
        { localeItems[currentLocale].label }
      </button>

      {open && (
        <div
          className="language-options position-absolute rounded shadow-lg p-2"
          style={{minWidth: '160px', zIndex: 1000}}
        >
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={() => changeLanguage('es')}
          >
            <span className="flag">🇲🇽</span> Español
          </button>
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={() => changeLanguage('en')}
          >
            <span className="flag">🇺🇸</span> English
          </button>
        </div>
      )}
    </div>
  );
}