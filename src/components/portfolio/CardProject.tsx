'use client';

import React from "react";
import { FaGithub, FaGlobe, FaExpand } from "react-icons/fa";
import { Project } from "@/utils/constants";
import { useGlobalState } from "@/context/GlobalStateContext";
export interface CardProjectProps {
  project: Project;
}

const CardProject = ({ project }: CardProjectProps) => {
  const { openProject } = useGlobalState();

  return (
    <>
      <div className="col-12 col-sm-8 col-md-6 col-xl-4 item_project">
        <div 
          className="box mt-5"
          onClick={() => openProject(project)}
        >
          <div  className="overlay">
          </div>

          <div className="actions-container">
              <div className="actions text-center">
                  {project.liveDemoSrc && (
                    <a
                      href={project.liveDemoSrc}
                      rel="noreferrer"
                      target="_blank"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Demostración en vivo"
                      className="item"
                    >
                    <FaGlobe size={50}/>
                    </a>
                  )}

                  {project.sourceCodeSrc && (
                    <a
                      href={project.sourceCodeSrc}
                      rel="noreferrer"
                      target="_blank"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Ir al código"
                      className="item"
                    >
                      <FaGithub size={50} />
                    </a>
                  )}   

                  {
                    project.info && <>
                    <button
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Obtener mas información"
                      className="item"
                      onClick={() => openProject(project)}
                    >
                      <FaExpand  size={50} />
                    </button>
                    </>
                  }
            </div>
          </div>

          <div className="content-image-area">
            <div
              className="img-area"
              style={{ backgroundImage: `url(${project.imageSrc.src})` }}
            >
            </div>
          </div>
        </div>

      <div>
        <h5 className="content mt-4 mb-4 text-center theme_text">{project.title}</h5>
      </div>
    </div>
    </>
  );
};

export default CardProject;
