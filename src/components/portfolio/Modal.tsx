'use client';

import React, { useEffect, useRef } from "react";
import { Project } from "@/utils/constants";
import Image from "next/image";

export interface ModalProps {
  project: Project;
  open: boolean;
  setOpen: (value: boolean) => void;
}

function Modal({ project, open, setOpen }: ModalProps) {

  const wrapperRef = useRef<HTMLDivElement | null>(null);
 
  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement | null>) {
      useEffect(() => {
      
          function handleClickOutside(event: MouseEvent) {
              if (ref.current && !ref.current.contains(event.target as Node)) {
                  setOpen(false);
              }
          }
    
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              // Unbind the event listener on clean up
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [ref]);
    }

  useOutsideAlerter(wrapperRef);

  return (
      <div ref={wrapperRef} >
        <div className="modal-all">
          <div className="modal-header">
            <h2> {project.title} </h2>
            <div onClick={() => setOpen(!open)}>
              <i
                className="fas fa-times popup__close"
              ></i>
            </div>
          </div>
          <div className="modal-content">
            <div className="row justify-content-center">
              <div className="col-md-10">
                 <Image 
                    src={project.imageSrc}
                    alt={project.title}
                    className="img-fluid"
                  />
                {/* <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="img-fluid"
                /> */}
                <p className="mt-5 text-center">
                 {project.info}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-actions">
            <div className="row justify-content-center mt-5">
              <div className="col-md-10">
                {project.liveDemoSrc && (
                  <a
                    href={project.liveDemoSrc}
                    className="btn btn-info ml-3 mr-3 mb-3"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Ver proyecto
                  </a>
                )}

                {project.sourceCodeSrc && (
                  <a
                    href={project.sourceCodeSrc}
                    className="btn btn-info mb-3"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Ir al codigo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Modal;
