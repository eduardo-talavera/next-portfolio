'use client';

import React from 'react';
import SocialLinks from '../shared/SocialLinks';


export default function Footer() {
  const now = new Date().getFullYear();

  return (
  <footer className="footer">
      <div className="container-sm">
      <div className="row justify-content-around">
        
        <div className="col-md-4">
          <div className="text-center text-md-left mb-4 mt-5 mt-md-0">
            <h3 className='mb-4 theme_text'>Contáctame!</h3>
            
            <p className='theme_text'>¿Tienes un proyecto en el que quieres que trabajemos juntos? Envíame un correo electrónico a edtavera3@gmail.com</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="text-center text-md-left mb-4 mt-5 mt-md-0">
            <h3 className='mb-4 theme_text'>Mis redes sociales</h3>
           
            <SocialLinks/>
          </div>
        </div>

        <div className="col-12">
         <div className="text-center mt-5">
          <div className="p-2">
            <p className="theme_text text-center mt-3">&#169; Copyright { now } Eduardo Talavera </p>
          </div>
         </div>
        </div>
      </div>
    </div>
    </footer>
  )
}
