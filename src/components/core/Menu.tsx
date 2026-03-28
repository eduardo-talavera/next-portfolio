'use client';

import { useTranslations } from "next-intl";
import React from "react";

const Menu = () => {
  const t = useTranslations("menu");
  return  (
    <div id="menu_h">
      
      <input type="checkbox" id="menu-toggle" />
      <label id="trigger" htmlFor="menu-toggle"></label>
      <label id="burger" htmlFor="menu-toggle"></label>
  
      <ul id="menu">
        <li>
          <a className="link-menu" 
           href="#capa">
            { t("home") }
          </a>
        </li>
        <li>
          <a
            className="link-menu"
            href="#about"
          >
            { t("about") }
          </a>
        </li>
        <li>
          <a
            className="link-menu"
            href="#portfolio"
          >
            { t("projects") }
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
