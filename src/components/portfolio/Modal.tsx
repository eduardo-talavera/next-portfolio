'use client';

import React, { useEffect, useRef, useState } from "react";
import { Project } from "@/utils/constants";
import { useOutsideAlerter } from "@/hooks/useOutsideAlerter";
import { FaRegWindowClose } from "react-icons/fa";
import { useGlobalState } from "@/context/GlobalStateContext";
import TechStack from "../shared/TechStack";
import { ModalSkeleton } from "./ModalSkeleton";
import { FaGithub, FaGlobe } from "react-icons/fa";

export interface ModalProps {
  project: Project;
  onClickOutside: () => void;
}

function Modal({ project, onClickOutside }: ModalProps) {
  const [hiddeSkeleton, setHiddeSkeleton] = useState(false)

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { closeProject } = useGlobalState()
 
  useOutsideAlerter(wrapperRef, () => onClickOutside());

  useEffect(() => {
    setTimeout(() => {
      setHiddeSkeleton(true)
    }, 1000)
  }, [])

  return (
      <div id="theme_modal">
        <div className="modal_overlay">
          <div className="modal_content d-flex flex-column align-items-start justify-content-start" ref={wrapperRef}>
            <FaRegWindowClose 
              className="modal_close_icon theme_text" 
              size={30}
              onClick={closeProject}
            />
            {
              !hiddeSkeleton &&  <ModalSkeleton />
            }
          
         
            <h3 className="theme_title">{ project.title }</h3>
            <p className="theme_text mt-2">{ project.info }</p>
            <h5 className="theme_title">Tegnologias usadas:</h5>
            <TechStack skills={project.stack} imgSize={30} align="start" />
            <ul style={{ paddingLeft: '1rem' }} className="mt-3">
            {
              project.functionalities.map(item => 
                <li key={item} className="theme_text">{ item }</li>
              )
            }
            </ul>

            <div className="actions d-flex flex-wrap">
                <a 
                  href={project.liveDemoSrc} 
                  rel="noreferrer" 
                  target="_blank" 
                  className="mr-2 d-flex justify-content-center align-items-center mb-2 mb-md-0"
                >
                  <span className="mr-2">{ project.haveDocs ? 'Documentación' : 'Demostración' }</span>
                  <FaGlobe />
                </a>
                <a 
                  href={project.sourceCodeSrc} 
                  rel="noreferrer" 
                  target="_blank" 
                  className="d-flex justify-content-center align-items-center"
                >
                  <span className="mr-2">Ver código</span>
                  <FaGithub />      
                </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Modal;
