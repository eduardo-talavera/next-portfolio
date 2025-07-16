'use client';

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
          title="mi twitter"
        >
          <i className="fab fa-twitter"></i>
          <FaTwitter size={25} />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          href="https://www.linkedin.com/in/devtaed/"
          rel="noreferrer"
          target="_blank"
          data-toggle="tooltip"
          data-placement="bottom"
          title="mi linkedin"
        >
        <FaLinkedin size={25} />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          href="https://github.com/eduardo-talavera"
          data-toggle="tooltip"
          data-placement="bottom"
          title="mi github"
          rel="noreferrer"
          target="_blank"
        >
         <FaGithub size={25} />
        </a>
      </li>
    </ul>
  );
}

