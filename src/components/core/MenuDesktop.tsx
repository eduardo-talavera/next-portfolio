'use client';

function MenuDesktop() {
  return (
    <div>
      <ul id="menuDesktop">
        <li>
          <a className="link-menu"
            href="#intro"
          >
            Inicio
          </a>
        </li>
        <li>
          <a className="link-menu"
            href="#about"
           >
            Sobre mi
          </a>
        </li>
        <li>
          <a className="link-menu"
            href="#portfolio"
          >
           Portafolio
          </a>
        </li>
        {/* <li>
          <a className="link-menu"
            style={isActive(history, "/cv-eduardo-talavera.pdf")}
            href="/cv-eduardo-talavera.pdf"
            rel="noreferrer"
            target="_blank"
            >
           📋{" "} Hoja de vida
          </a>
        </li> */}
      </ul>
    </div>
  )
}

export default MenuDesktop;
