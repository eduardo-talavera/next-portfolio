"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { CircularProgress } from "tropix-ui";
//import profile from "@/static/img/profile-gray-scale-2.webp";
import profile from "@/static/img/logo-avatar-5-br.webp";
import lego from "@/static/img/logo-avatar-5-br.webp";
import Image from "next/image";
import { Terminal } from "../shared/Terminal";
import TechStack from "../shared/TechStack";
import { skills } from "@/utils/constants";
import { FaMapMarkerAlt } from "react-icons/fa";
import { runActionByScroll } from "@/utils/helpers";

export default function AboutMe() {
  const fade_animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const [percents, setPercents] = useState({
    react: 0,
    typeScrpt: 0,
    next: 0,
    node: 0,
  });

  const skillSet = [
    {
      name: "React",
      percent: percents.react,
      colors: ["#25b7fa", "#1b6a8eff"],
    },
    {
      name: "Typescript",
      percent: percents.typeScrpt,
      colors: ["#17cee6ff", "#0c6971ff"],
    },
    {
      name: "Next",
      percent: percents.next,
      colors: ["#17e678ff", "#146e10ff"],
    },
    {
      name: "Node",
      percent: percents.node,
      colors: ["#a14cecff", "#641b83ff"],
    },
  ];

  const imageRef = useRef<HTMLDivElement | null>(null);
  const textAboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    runActionByScroll(900, () => {
      setPercents({
        react: 90,
        typeScrpt: 90,
        next: 90,
        node: 80,
      });
    });

    runActionByScroll(300, () => {
      imageRef.current?.classList.add("animate__fadeIn", "show-element");
      imageRef.current?.classList.remove("hidde-element");
    });

    runActionByScroll(500, () => {
      textAboutRef.current?.classList.add("animate__fadeIn", "show-element");
      textAboutRef.current?.classList.remove("hidde-element");
    });
  }, []);

  return (
    <animated.div id="about" style={fade_animation}>
      <div className="container">
        <div className="row justify-content-center align-items-center mt-5 mt-lg-0 pt-5">
          <div className="col-10 col-lg-5">
            <div
              className="avatar-efect animate__animated hidde-element"
              ref={imageRef}
            >
              <div className="blob">
                <Image
                  className="about-img"
                  src={profile}
                  alt="profile img"
                  width={300}
                  height={300}
                  priority
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>

          <div
            className="col-11 col-lg-6 animate__animated mt-md-5 hidde-element"
            ref={textAboutRef}
          >
            <div className="py-2 py-md-0"></div>
            <h2 className="theme_title mt-5 mt-md-0 text-center text-md-left">
              Sobre mi
            </h2>

            <div className="text-center text-md-left mb-4 mb-md-0">
              <p className="mt-3 theme_text paragraph_text">
                Soy un <strong>Desarrollador Fullstack </strong>
                con más de <strong>5 años de experiencia</strong> en la
                construcción de aplicaciones web escalables utilizando <strong>React,
                TypeScript y Node.js.</strong> Experiencia en el diseño y desarrollo de
                <strong>APIs REST y GraphQL</strong>, autenticación de usuarios, manejo de bases
                de datos relacionales y no relacionales, así como en la
                implementación de <strong>CI/CD y despliegues en la nube (AWS y Vercel)</strong>.
                <br /><br />
                He participado en proyectos <strong>fintech y ecommerce</strong>, enfocado en
                calidad de código, rendimiento, seguridad y toma de decisiones
                técnicas orientadas al negocio.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mt-md-5">
          <div className="col-11 col-md-8">
            <div className="py-1 py-md-2"></div>
            <div className="mt-5 skills">
              <h2 className="theme_title text-center text-md-left">
                Habilidades
              </h2>
              <div className="d-flex flex-wrap justify-content-center pt-5">
                {skillSet.map((skill) => (
                  <div key={skill.name} style={{ margin: "1rem" }}>
                    <CircularProgress
                      size="sm"
                      initialValue={skill.percent}
                      progressColors={[skill.colors[0], skill.colors[1]]}
                    >
                      <CircularProgress.Circle enableTransition />
                      <CircularProgress.Label text={skill.name} />
                    </CircularProgress>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-md-2 py-2"></div>
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 mt-5">
            <h2 className="theme_title text-center text-md-left">
              Pila Tecnológica
            </h2>
            <TechStack
              skills={skills}
              imgSize={50}
              className="py-3 animate__animated"
            />
          </div>
        </div>

        <div className="terminal-container">
          <Image
            className="about-img lego"
            src={lego}
            alt="lego img"
            width={200}
            height={200}
          />
          <Terminal className="mt-3">
            <div className="body__item d-none d-md-block">
              <span className="body__item_title">$ contact --email</span>
              <div className="d-flex align-items-center justify-content-between">
                <span className="body__item_info_box">
                  edgar.developer.talavera77@gmail.com
                </span>
                <span className="body__item_time d-none d-sm-block">99ms</span>
              </div>
            </div>

            <div className="body__item">
              <span className="body__item_title">$ cat resume.pdf</span>
              <div className="d-flex align-items-center justify-content-between">
                <a
                  href="/pdf/CV_Edgar_Eduardo_Talavera_Desarrollador_Full_Stack.pdf"
                  className="body__item_info_box"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar CV
                </a>
                <span className="body__item_time d-none d-sm-block">185ms</span>
              </div>
            </div>

            <div className="body__item">
              <span className="body__item_title">$ location --current</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt className="icon_location" />
                  <span className="body__item_location">México</span>
                </div>
                <span className="body__item_time d-none d-sm-block">79ms</span>
              </div>
            </div>
          </Terminal>
        </div>
      </div>
    </animated.div>
  );
}
