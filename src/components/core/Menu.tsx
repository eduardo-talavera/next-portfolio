'use client';

import React from "react";

const Menu = () => (
  <div id="menu_h">
    
    <input type="checkbox" id="menu-toggle" />
    <label id="trigger" htmlFor="menu-toggle"></label>
    <label id="burger" htmlFor="menu-toggle"></label>

    <ul id="menu">
      <li>
        <a className="link-menu" 
         href="#intro">
          Inicio
        </a>
      </li>
      <li>
        <a
          className="link-menu"
          href="#about"
        >
          Sobre mi
        </a>
      </li>
      <li>
        <a
          className="link-menu"
          href="#portfolio"
        >
          Portafolio
        </a>
      </li>
    </ul>
  </div>
);

export default Menu;
