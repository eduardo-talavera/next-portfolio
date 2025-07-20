'use client';

import React, { useEffect, useRef } from "react";
import { Project } from "@/utils/constants";
import { useOutsideAlerter } from "@/hooks/useOutsideAlerter";
import { FaRegWindowClose } from "react-icons/fa";
import { useGlobalState } from "@/context/GlobalStateContext";
import { TechStack } from "../shared/TechStack";

export interface ModalProps {
  project: Project;
  onClickOutside: () => void;
}

function Modal({ project, onClickOutside }: ModalProps) {

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { closeProject } = useGlobalState()
 
  useOutsideAlerter(wrapperRef, () => onClickOutside());

  return (
      <div id="theme_modal">
        <div className="modal_overlay">
          <div className="modal_content d-flex flex-column align-items-start justify-content-start" ref={wrapperRef}>
            <FaRegWindowClose 
              className="modal_close_icon theme_text" 
              size={30}
              onClick={closeProject}
            />
            <h3 className="theme_text">{ project.title }</h3>
            {/* <div className="modal_image" style={{ backgroundImage: `url(${project.imageSrc.src})` }} /> */}
            <p className="theme_text mt-2">{ project.info }</p>
            <h5 className="theme_text">Tegnologias usadas:</h5>
            <TechStack skills={project.stack} imgSize={40} />
          </div>
        </div>
      </div>
  );
}

export default Modal;
