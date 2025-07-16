'use client';

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import profile from "@/static/img/profile-hacker-alpha.png";
import Image from "next/image";

export default function AboutMe() {
  const fade_animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div id="about" style={fade_animation}>
      <div className="container-sm">
        <div className="row justify-content-around mt-5 mt-lg-0 pt-5 pt-md-2">
          <div className="col-10 col-lg-4">
            <div className="avatar-efect">
               <Image
                  className="about-img shadow"
                  src={profile}
                  alt="profile img"
                  width={300}
                  height={300}
                  style={{ height: 'auto' }}
              />
              <div className="box"></div>
            </div>
          </div>
          <div className="col-11 col-lg-6">
            <div className="mt-5 pt-5 pt-lg-0 mt-lg-0"></div>
            <h2 className="text-white mt-2 mt-md-0 text-center text-md-left">
              Soy un Frontend Developer
            </h2>
           <div className="text-center text-md-left mb-5 mb-md-0">
              <p className="mt-5">
                Hola que tal, soy <strong>Eduardo Talavera</strong> un <strong>Frontend Developer</strong> al que
                le apasiona transformar el código en soluciones creativas. 
              </p>
              <p>
                Entusiasta de aprender
                nuevas tecnologías y aplicar mis conocimientos en proyectos
                desafiantes.
              </p>
           </div>

            <div className="py-2"></div> 

            <div id="terminal" className="mt-5 d-none d-sm-block">
              <div id="header">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div id="body">
                <div className="body__item">
                  <span className="body__item_title">$ contact --email</span>
                  <span className="body__item_info_box">talaverae4@gmail.com</span>
                </div>

                <div className="body__item">
                  <span className="body__item_title">$ cat resume.pdf</span>
                  <button className="body__item_info_box">Download Resume</button>
                </div>

                 <div className="body__item">
                  <span className="body__item_title">$ ls ./social-links</span> <br />
                  
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
