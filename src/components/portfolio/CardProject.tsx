'use client';

import { FaCode, FaEye, FaSearchPlus} from "react-icons/fa";

import React from "react";
// import Modal from "./Modal";
import { Project } from "@/utils/constants";

export interface CardProjectProps {
  project: Project;
}

const CardProject = ({ project }: CardProjectProps) => {
  // const [open, setOpen] = useState(false);

  // const CustomButton = () => (
  //   <a
  //     onClick={(e) => {
  //       e.preventDefault();
  //       setOpen((o) => !o);
  //     }}
  //     className="button item"
  //   >
  //     <i className="fas fa-plus"></i>
  //   </a>
  // );

  return (
    <div className="col-10 col-sm-8 col-md-6 col-xl-4 item_project">
      <div 
        className="box mt-5"
        // onClick={() => {
        //   setOpen((o) => !o);
        // }}
      >
        <div className="content-image-area">
          <div
            className="img-area"
            style={{ backgroundImage: `url(${project.imageSrc.src})` }}
          >
            <div className="overlay">
              <div className="actions text-center">

                {/* <CustomButton /> */}
                {/* <Modal project={project} open={open} setOpen={setOpen} /> */}
                {/* <i className="fas fa-plus item" style={{fontSize: '100px'}}></i> */}
                {project.liveDemoSrc && (
                  <a
                    href={project.liveDemoSrc}
                    rel="noreferrer"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Ver Proyecto"
                    className="item"
                  >
                  <FaEye size={50}/>
                  </a>
                )}

                {project.sourceCodeSrc && (
                  <a
                    href={project.sourceCodeSrc}
                    rel="noreferrer"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Ir al codigo"
                    className="item"
                  >
                    <FaCode size={50} />
                  </a>
                )}   

                {
                  project.info && <>
                     <a
                    href={project.sourceCodeSrc}
                    rel="noreferrer"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Info"
                    className="item"
                  >
                    <FaSearchPlus size={50} />
                  </a>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="content mt-4 mb-4">{project.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
