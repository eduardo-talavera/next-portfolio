"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { CircularProgress } from "tropix-ui";
//import profile from "@/static/img/profile-gray-scale-2.webp";
import profile from "@/static/img/avatar-3.webp";
import lego from "@/static/img/logo-avatar-5-br.webp";
import Image from "next/image";
import { Terminal } from "../shared/Terminal";
import TechStack from "../shared/TechStack";
import { skills } from "@/utils/constants";
import { FaMapMarkerAlt } from "react-icons/fa";
import { runActionByScroll } from "@/utils/helpers";
import {useTranslations} from 'next-intl';

export default function AboutMe() {
  const t = useTranslations("about");

  const fade_animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const [percents, setPercents] = useState({
    architecture: 0,
    algorithms: 0,
    devOps: 0,
    AI: 0,
  });

  const skillSet = [
    {
      name: t("architecture"),
      percent: percents.architecture,
      colors: ["#25b7fa", "#1b6a8eff"],
    },
    {
      name: t("algorithms"),
      percent: percents.algorithms,
      colors: ["#17cee6ff", "#0c6971ff"],
    },
    {
      name: t("devOps"),
      percent: percents.devOps,
      colors: ["#17e678ff", "#146e10ff"],
    },
    {
      name: t("AI"),
      percent: percents.AI,
      colors: ["#a14cecff", "#641b83ff"],
    },
  ];

  const imageRef = useRef<HTMLDivElement | null>(null);
  const textAboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    runActionByScroll(900, () => {
      setPercents({
        architecture: 90,
        algorithms: 80,
        devOps: 70,
        AI: 60,
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
           <div className="d-flex align-items-center mt-5 mt-md-0 justify-content-center justify-content-md-start">
            <h2 className="theme_title text-center text-md-left">
                { t("title") } 
              </h2> <span className="d-none d-md-block h1 ml-3">👽</span>
           </div>

            <div className="text-center text-md-left mb-4 mb-md-0">
              <p className="mt-3 theme_text paragraph_text">
                {t.rich('description', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
                <br /><br />
                  {t.rich('description_2', {
                    strong: (chunks) => <strong>{chunks}</strong>
                  })}
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mt-md-5">
          <div className="col-11 col-md-8">
            <div className="py-1 py-md-2"></div>
            <div className="mt-5 skills">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <h2 className="theme_title text-center text-md-left">
                  { t("skills") }
                </h2> <span className="h1 d-none ml-3 d-md-inline-block">🧠</span>
              </div>
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
           <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            <h2 className="theme_title text-center text-md-left">
                { t("stack") }
              </h2> <span className="h1 d-none d-md-inline-block ml-3">🚀</span>
           </div>
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
              <span className="body__item_title">$ display roles</span>
              <div className="d-flex align-items-center justify-content-between">
                <span className="body__item_info_box">
                  Frontend Developer, Backend Developer, Fullstack Developer
                </span>
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
