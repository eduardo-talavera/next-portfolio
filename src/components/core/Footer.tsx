'use client';

import React from 'react';
import SocialLinks from '../shared/SocialLinks';


export default function Footer() {
  const now = new Date().getFullYear();

  return (
  <footer className="footer">
      <div className="container-sm">
      <div className="row justify-content-around">
        
        <div className="col-12 col-md-6">
          <div className="text-center text-md-left mb-4 mt-5 mt-md-0">
            <h3 className='mb-4 theme_title'>Contáctame!</h3>
            
            <p className='theme_text d-none d-md-block'>¿Tienes un proyecto en mente? Envíame un correo electrónico a edgar.developer.talavera77@gmail.com</p>
            <p className='theme_text d-block d-md-none'>¿Tienes un proyecto en mente?</p> <br />
            <p className='theme_text d-block d-md-none'>Envíame un correo electrónico a edgar.developer.talavera77@gmail.com</p>
            <p className="theme_text mt-5 d-none d-md-block">&#169; Copyright { now } Edgar Eduardo Talavera Contreras</p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="text-center mb-4 mt-5 mt-md-0">
            <h3 className='mb-4 theme_title'>Mis redes sociales</h3>
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
