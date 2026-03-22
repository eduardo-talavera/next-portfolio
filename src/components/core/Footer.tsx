'use client';

import React from 'react';
import SocialLinks from '../shared/SocialLinks';

function IconArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Footer() {
  const now = new Date().getFullYear();
  const handleEmail = () => {
    window.location.href = "mailto:edgar.developer.talavera77@gmail.com?subject=Contacto&body=Hola quiero contactarte para hablar sobre un proyecto.";
  };
  

  return (
  <footer className="footer">
      <div className="container-sm">
      <div className="row justify-content-around">
        
        <div className="col-12 col-md-6">
          <div className="text-center text-md-left mb-4 mt-5 mt-md-0">
            <h4 className='mb-4 theme_title'>Contacto</h4>
            
              {/* Footer CTA */}
              <div className="portfolio__cta">
              <p className="portfolio__cta-text">
                ¿Interesado en trabajar juntos?
              </p>
              <button className="portfolio__cta-btn" onClick={handleEmail}>
                Contáctame <IconArrowUpRight />
              </button>
            </div>
            
            {/* <p className='theme_text d-none d-md-block'>¿Tienes un proyecto en mente? Envíame un correo electrónico a edgar.developer.talavera77@gmail.com</p>
            <p className='theme_text d-block d-md-none'>¿Tienes un proyecto en mente?</p> <br />
            <p className='theme_text d-block d-md-none'>Envíame un correo electrónico a edgar.developer.talavera77@gmail.com</p> */}
            <p className="theme_text mt-5 d-none d-md-block">&#169; Copyright { now } Edgar Eduardo Talavera Contreras</p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="text-center mb-4 mt-5 mt-md-0">
            <h4 className='mb-4 theme_title'>Mis redes sociales</h4>
            <SocialLinks/>
          </div>
        </div>

        <div className="col-12 d-md-none">
         <div className="text-center mt-5">
          <div className="p-2">
            <p className="theme_text text-center mt-3">&#169; Copyright { now } Edgar Eduardo Talavera Contreras</p>
          </div>
         </div>
        </div>
      </div>
    </div>
    </footer>
  )
}
