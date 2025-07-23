'use client';

import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import profile from "@/static/img/logo-avatar-5.webp";
import profileDark from "@/static/img/logo-avatar-6.webp"
import Image from "next/image";
import { Terminal } from "../shared/Terminal";
import TechStack from "../shared/TechStack";
import { runActionByScroll } from "@/utils/helpers";
import { skills } from '@/utils/constants';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";


export default function AboutMe() {
  const fade_animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const profileImgref = useRef<HTMLDivElement | null>(null);
  const textAboutRef = useRef<HTMLDivElement | null>(null);

  const { theme } = useTheme();
  
  useEffect(() => {
    runActionByScroll(100, () => {
      profileImgref.current?.classList.add('animate__fadeInLeft');
      textAboutRef.current?.classList.add('animate__fadeInUp');
    })
  }, [])

  return (
    <animated.div id="about" style={fade_animation}>
      <div className="container">
        <div className="row justify-content-around mt-5 mt-lg-0 pt-5 pt-md-2">

          <div className="col-10 col-lg-4">
            <div className="avatar-efect animate__animated" ref={profileImgref}>
               <Image
                  className="about-img shadow"
                  src={theme === 'light' ? profile : profileDark}
                  alt="profile img"
                  width={400}
                  height={400}
                  priority
                  style={{ height: 'auto' }}
              />
              <div className="box"></div>
            </div>
          </div>

          <div className="col-11 col-lg-6 animate__animated" ref={textAboutRef}>
            <div className="mt-5 pt-5 pt-lg-0 mt-lg-0"></div>
            <h2 className="theme_title mt-5 mt-md-0 text-center text-md-left">
              Sobre mi
            </h2>
           <div className="text-center text-md-left mb-5 mb-md-0">
              <p className="mt-3 theme_text paragraph_text">
                Soy un <strong>desarrollador frontend</strong> con más de 4 años de experiencia creando soluciones escalables y modernas con
                React, Next.js, Vue, TypeScript y Node.js. Me especializo en diseño de sistemas reutilizables,
                automatización con CI/CD, y despliegues en la nube (AWS). Enfocado en eficiencia, calidad de código y
                liderazgo técnico.
              </p>
           </div>

          </div>
        </div>

        <div className="py-5 d-none d-md-block"></div>

        <div className="row justify-content-center mt-5">
          <div className="col-10 col-md-8 mt-5">
            <h2 className="theme_title text-center text-md-left">Pila Tecnológica</h2>
            <TechStack skills={skills} imgSize={50} className="py-5 animate__animated" />
          </div>
        </div>
      
        <Terminal className="mt-3">
          <div className="body__item d-none d-md-block">
            <span className="body__item_title">$ contact --email</span>
            <div className="d-flex align-items-center justify-content-between">
              <span className="body__item_info_box">edgar.developer.talavera77@gmail.com</span>
              <span className="body__item_time d-none d-sm-block">99ms</span>
            </div>
          </div>

          <div className="body__item">
            <span className="body__item_title">$ contact --phone</span>
            <div className="d-flex align-items-center justify-content-between">
              <span className="body__item_info_box">+52 33 1883 1774</span>
              <span className="body__item_time d-none d-sm-block">99ms</span>
            </div>
          </div>

          <div className="body__item">
            <span className="body__item_title">$ download resume.pdf</span>
            <div className="d-flex align-items-center justify-content-between">
              <a 
                href="/pdf/CV_Edgar_Eduardo_Talavera_Desarrollador_Frontend.pdf" 
                className="body__item_info_box"
                target="_blank"
                rel="noopener noreferrer"
              >
                  Descargar CV
              </a>
              <span className="body__item_time d-none d-sm-block">185ms</span>
            </div>
          </div>

          <div className="body__item d-none d-sm-block">
              <span className="body__item_title">$ location --current</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt className="icon_location" />
                  <span className="body__item_location">Michoacán México</span>
                </div>
                <span className="body__item_time d-none d-sm-block">79ms</span>
              </div>
          </div>  
        </Terminal>
      </div>
    </animated.div>
  );
}
