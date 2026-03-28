'use client';

import { useTranslations } from "next-intl";

function MenuDesktop() {
  const t = useTranslations("menu");
  return (
    <div>
      <ul id="menuDesktop">
        <li>
          <a className="link-menu"
            href="#capa"
          >
            {t("home")}
          </a>
        </li>
        <li>
          <a className="link-menu"
            href="#about"
           >
            {t("about")}
          </a>
        </li>
        <li>
          <a className="link-menu"
            href="#portfolio"
          >
            {t("projects")}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MenuDesktop;
