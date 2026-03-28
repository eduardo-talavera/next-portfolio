'use client';

import React, { useEffect, useRef, useState } from "react";
import { Project } from "@/utils/constants";
import { useOutsideAlerter } from "@/hooks/useOutsideAlerter";
import { FaRegWindowClose } from "react-icons/fa";
import { useGlobalState } from "@/context/GlobalStateContext";
import { ModalSkeleton } from "./ModalSkeleton";
import { FaGithub, FaGlobe } from "react-icons/fa";

import "./modal.scss";
import { useTranslations } from "next-intl";

export interface ModalProps {
  project: Project;
  onClickOutside: () => void;
}

function Modal({ project, onClickOutside }: ModalProps) {
  const [hiddeSkeleton, setHiddeSkeleton] = useState(false)

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { closeProject } = useGlobalState()
  const t = useTranslations("projects");
 
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
            
            <div className="modal_scrollable_section">
              <p className="theme_text mt-2">{ project.description }</p>
              
              <h5 className="theme_title">{t('modal.functionalities_title')}:</h5>
              <ul style={{ paddingLeft: '1rem' }} className="mt-3 functionalities">
              {
                project.functionalities.map(item => 
                  <li key={item} className="theme_text">{ item }</li>
                )
              }
              </ul>
             <h5 className="theme_title">{t('modal.subtitle')}:</h5>
             <div className="mb-5 mt-3 d-flex flex-wrap">
              {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag m-1">
                    {tag}
                  </span>
                ))}
             </div>
            </div>

            <div className="actions d-flex flex-wrap">
                <a 
                  href={project.liveUrl} 
                  rel="noreferrer" 
                  target="_blank" 
                  className="mr-2 d-flex justify-content-center align-items-center mb-2 mb-md-0"
                >
                  <span className="mr-2">{ project.haveDocs ? t('modal.docs_button') : t('modal.live_button') }</span>
                  <FaGlobe />
                </a>
                <a 
                  href={project.githubUrl} 
                  rel="noreferrer" 
                  target="_blank" 
                  className="d-flex justify-content-center align-items-center"
                >
                  <span className="mr-2">{t('modal.code_button')}</span>
                  <FaGithub />      
                </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Modal;
