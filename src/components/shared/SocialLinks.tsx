'use client';

import { FaGithub, FaLinkedin, FaLinkedinIn  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function SocialLinks({ mini = false }) {
  return (
    <ul className={mini ? 'social-mini list-inline' : 'social list-inline'}>
      <li className="list-inline-item">
        <a
          href="https://twitter.com/ed_talavera"
          rel="noreferrer"
          target="blank"
          data-toggle="tooltip"
          data-placement="bottom"
          title="X"
        >
          <i className="fab fa-twitter"></i>
          <BsTwitterX size={25} />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          href="https://www.linkedin.com/in/devtaed/"
          rel="noreferrer"
          target="_blank"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Linkedin"
        >
        <FaLinkedinIn  size={25} />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          href="https://github.com/eduardo-talavera"
          data-toggle="tooltip"
          data-placement="bottom"
          title="GitHub"
          rel="noreferrer"
          target="_blank"
        >
         <FaGithub size={25} />
        </a>
      </li>
    </ul>
  );
}

