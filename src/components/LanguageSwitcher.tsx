"use client";

import {useState} from "react";
import {useRouter, usePathname} from '@/i18n/navigation';

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

  return (
    <div className="position-relative d-inline-block">
      <button
        className="btn btn-light btn-md"
        onClick={() => setOpen(!open)}
        style={{ marginTop: -5, marginLeft: 25 }}
      >
        {currentLocale === 'es' ? '🇲🇽 Español' : '🇺🇸 English'}
      </button>

      {open && (
        <div
          className="position-absolute bg-white border rounded shadow-sm mt-2"
          style={{minWidth: '160px', zIndex: 1000}}
        >
          <button
            className="dropdown-item"
            onClick={() => changeLanguage('es')}
          >
            🇲🇽 Español
          </button>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage('en')}
          >
            🇺🇸 English
          </button>
        </div>
      )}
    </div>
  );
}