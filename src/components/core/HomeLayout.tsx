'use client';

import { ReactNode, FC, useEffect, useState } from "react";
import Menu from "./Menu";
import MenuDesktop from "./MenuDesktop";
import Footer from "./Footer";
import logo from "@/static/img/et-dev-logo.png";
import SocialLinks from "../shared/SocialLinks";
import Image from "next/image";

interface HomeLayoutProps {
  children: ReactNode | ReactNode[]
}

function clickHandler(e: Event) {
  e.preventDefault();

  const target = e.currentTarget as HTMLAnchorElement;
  const href = target.getAttribute("href");

  if (!href || !href.startsWith("#")) return;

  const section = document.querySelector(href) as HTMLElement | null;

  if (!section) return;

  section.scrollIntoView({ behavior: "smooth" });
}

function scrollEfect(setHFixed: (value: boolean) => void) {
  const header = document.getElementById('intro');

  window.onscroll = function() {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll > 105 && header && window.screen.width > 799) {
     header.classList.add('header_fixed');
     setHFixed(true)
    } else if (header && header.classList.contains('header_fixed')) {
      header.classList.remove('header_fixed');
      setHFixed(false);
    }
  }
}

function smothScroll() {
  const links = document.querySelectorAll("#menuDesktop li a");
  const linksM = document.querySelectorAll("#menu li a"); 
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
  for (const linkM of linksM) {
    linkM.addEventListener("click", clickHandler);
  }
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {

  const [, setHFixed] = useState(false);

  useEffect(() => {
    scrollEfect(setHFixed);
    smothScroll();
  }, []);


  return (
    <>
      <div id="hero">
        <div id="capa">
          <div className="d-md-none">
            <Menu />
          </div>
          <header id="intro" className="header pl-xl-5">
            <div className="clearfix mt-xl-0">
              <Image
                className="logo float-left mb-5 mt-5 pt-5 pt-md-1 mt-md-0 mr-md-3"
                src={logo}
                alt="logo"
                width={135}
                height={52.18}
                style={{ height: 'auto' }}
              />
             
            </div>
            <div className="d-none d-md-block">
              <MenuDesktop />
            </div>
          </header>

          <section
            id="welcome"
            className="animate__animated animate__fadeIn container"
          >
            <div className="container">
              <div className="row justify-content-center align-items center">
                <div className="col-12 col-md-10">
                  <div className="text-center">
                    <h1 className="mt-4 pt-5 pt-md-0 welcome__name text-white bold">Edgar Eduardo Talavera</h1>
                    <div id="text-welcome" className="mt-3"></div>
                    <div className="mt-3">
                      <SocialLinks mini />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>{children}</div>
     <div style={{ position: 'relative' }}>
      <div className="wave-footer"></div>
      <Footer />
     </div>
    </>
  );
};

export default HomeLayout;
