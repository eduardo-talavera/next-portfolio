import imgFC from '../static/img/tech-jobs.png';
import zomeClone from '../static/img/miniCRM.png';
import taskapi from '../static/img/twitter-clone.png';
import ipTracker from '../static/img/ip-tracker.png';
import twitterClone from '../static/img/twitter-clone.png';
import { StaticImageData } from 'next/image';

export type Project = {
  imageSrc: StaticImageData
  sourceCodeSrc?: string
  liveDemoSrc?: string
  info?: string
  title: string
}

 export const skills: string[] = [
    'javascript',
    'typescript',
    'react',
    'vue',
    'vite',
    'vitest',
    'tailwind',
    'css',
    'sass',
    'bootstrap',
    'next',
    'aws',
    'prisma',
    'nodejs',
    'express',
    'jest',
    'docker',
    'graphql',
    'html',
    'vscode',
    'webpack',
    'postgresql',
    'mongodb',
    'bun',
    'yarn',
    'npm'
  ]

export const projects: Project[] = [
  {
    imageSrc: twitterClone,
    sourceCodeSrc: 'https://github.com/eduardo-talavera',
    liveDemoSrc: "https://twitter-clone-3e2df.web.app/",
    info: "Este proyecto es un clon de la pagina de inicio de Twitter, esta construido con React, Material UI y Firebase.",
    title: "Twitter clone"
  },
  {
    imageSrc: ipTracker,
    sourceCodeSrc: 'https://github.com/eduardo-talavera',
    liveDemoSrc: "https://ip-tracker64.netlify.app/",
    info: "Una sencilla aplicación que detecta la ubicación en base a la ip, esta construida con Vanilla js y hace uso de la libreria Leaflet js para pintar el mapa.",
    title: "Ip Tracker"
  },
  {
    imageSrc: taskapi,
    sourceCodeSrc: 'https://github.com/eduardo-talavera',
    liveDemoSrc: "https://taskapi.netlify.app/",
    info: "Taskapi es una aplicación para administrar tareas, esta construida con el PERN stack (PostgreSQL, Express, React, Node) y Redux para el manejo del estado global, aun esta en desarrollo, por lo que ire añadiendo nuevas funcionalidades.",
    title: "Taskapi"
  },
  {
    imageSrc: imgFC,
    sourceCodeSrc: 'https://github.com/eduardo-talavera',
    liveDemoSrc: "https://facebook-clone-8c167.web.app/",
    info: "Este proyecto es un clon de la pagina de inicio de facebook, cuenta con la funcionalidad para hecer publicaciones y esta construido con las tecnologias: React js, Material-UI y Firebase.",
    title: "Facebook clone"
  },
  {
    imageSrc: zomeClone,
    sourceCodeSrc: 'https://github.com/eduardo-talavera',
    liveDemoSrc: "https://floating-depths-19968.herokuapp.com",
    info: "Este proyecto es un clon del popular software para hacer videoconferencias, esta construido con Node, Express y Socket.io",
    title: "Zoom clone"
  }
];


