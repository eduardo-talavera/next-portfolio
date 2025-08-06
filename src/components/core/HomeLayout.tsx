'use client';

import { ReactNode, FC, useEffect, useState } from "react";
import Menu from "./Menu";
import MenuDesktop from "./MenuDesktop";
import Footer from "./Footer";
import logo from "@/static/img/et-dev-logo.webp";
import { useThemeMode } from "tropix-ui";
import logoLightTheme from '@/static/img/logo-dev-2-removebg.webp'
import SocialLinks from "../shared/SocialLinks";
import Image from "next/image";
import { ThemeToggle } from "../shared/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import dynamic from "next/dynamic";
import { useGlobalState } from "@/context/GlobalStateContext";
import { Project } from "@/utils/constants";

const Modal = dynamic(() => import("../portfolio/Modal"));

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

function scrollEfect(setHeaderFixed: (value: boolean) => void) {
  const header = document.getElementById('intro');

  window.onscroll = function() {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll > 105 && header && window.screen.width > 799) {
     header.classList.add('header_fixed');
     setHeaderFixed(true)
    } else if (header && header.classList.contains('header_fixed')) {
      header.classList.remove('header_fixed');
      setHeaderFixed(false);
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

  const [headerFixed, setHeaderFixed] = useState(false);

  const { theme } = useTheme();
  const { state, closeProject } = useGlobalState();
  const { currentProject, showProject } = state;
  const { setIsDark } = useThemeMode();

  useEffect(() => {
    scrollEfect(setHeaderFixed);
    smothScroll();
    if (theme === 'dark') setIsDark(true)
    else setIsDark(false)  
  }, []);

  return (
    <>
      {
        showProject && <>
          <Modal 
            project={currentProject as Project} 
            onClickOutside={closeProject}
          />
        </>
      }
{/* 
      <Image
        src="/city-day.webp"
        alt="background preload light"
        width={0}
        height={0}
        priority
        style={{ display: 'none' }}
      />
      
      <Image
        src="/city-night-2.webp"
        alt="background preload light"
        width={0}
        height={0}
        priority
        style={{ display: 'none' }}
      /> */}

      <div 
        id="hero"
        // style={{
        //   backgroundImage: theme === 'light' ? 'url("/city-day.webp")' : 'url("/city-night-2.webp")',
        //   backgroundSize: 'cover',
        //   width: '100vw',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center center',
        //   minHeight: '90vh'
        // }}
      >
        <div id="capa">
          <div className="d-md-none">
            <Menu />
          </div>
          <header id="intro" className="header pl-xl-5">
            <div className="clearfix mt-xl-0">
              <Image
                className="logo float-left mb-5 mt-5 pt-5 pt-md-1 mt-md-0 mr-md-3"
                src={(theme === 'light' && headerFixed) ? logoLightTheme : logo}
                alt="logo"
                width={135}
                height={52.18}
                style={{ height: 'auto' }}
                priority
              />
             
            </div>
            <div className="d-none d-md-block">
              <div className="d-flex">
                <MenuDesktop />
                <ThemeToggle className='ml-5' />
              </div>
            </div>
            <ThemeToggle className='d-md-none d-block theme_toggle_mobile' />
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
