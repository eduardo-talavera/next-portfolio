'use client';

import React from "react";
import { useSpring, animated } from '@react-spring/web';
import { projects } from "@/utils/constants";
import CardProject from "./CardProject";

export default function Portfolio() {

  const fade_animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
      <animated.section id="portfolio" style={fade_animation}>
          <div className="area" >
            <div className="content_area pt-5">
              <div className="wrapper container">
                <div>
                 <div className="container-sm">
                  <h2 className="theme_title mb-5 text-center text-md-left">
                    Mi portafolio
                  </h2>
                  <div className="row row-projects justify-content-center">
                      {projects.map((project, i) => (
                        <CardProject key={i} project={project} />
                      ))}
                    </div>
                 </div>
                </div>
              </div>
            </div>
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div >
      </animated.section>
  );
}
