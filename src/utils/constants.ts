import tropixUiThumbnail from '../static/img/tropix-ui-thubnail.png'
import ipTracker from '../static/img/ip-tracker.png';
import twitterClone from '../static/img/twitter-clone.png';
import { StaticImageData } from 'next/image';

export type Project = {
  id: number
  imageSrc: StaticImageData
  sourceCodeSrc?: string
  liveDemoSrc?: string
  info?: string
  title: string
  stack: string[]
}

 export const skills: string[] = [
    'javascript',
    'typescript',
    'react',
    'redux',
    'vue',
    'vite',
    'vitest',
    'tailwind',
    'css',
    'sass',
    'bootstrap',
    'materialui',
    'emotion',
    'styledcomponents',
    'next',
    'aws',
    'prisma',
    'nodejs',
    'express',
    'firebase',
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
    'npm',
    'bash',
    'postman',
    'powershell'
  ]

export const projects: Project[] = [
    {
    id: 1,
    imageSrc: tropixUiThumbnail,
    sourceCodeSrc: 'https://github.com/eduardo-talavera/tropix-ui',
    liveDemoSrc: "https://tropix-ui-docs.vercel.app/",
    info: "Una libreria de componentes de código abierto con soporte para temas claro y obscuro lista para instalar en proyectos de React mediante gestores de paquetes como yarn y npm.",
    title: "Tropix UI",
    stack: ['react', 'typescript', 'vite', 'vitest', 'styledcomponents', 'emotion', 'npm']
  },
  {
    id: 2,
    imageSrc: twitterClone,
    sourceCodeSrc: 'https://github.com/eduardo-talavera/twitter-clone',
    liveDemoSrc: "https://twitter-clone-3e2df.web.app/",
    info: "Este proyecto es un clon de la pagina de inicio de Twitter, esta construido con React, Material UI y Firebase.",
    title: "Twitter clone",
    stack: ['react', 'javascript', 'css', 'materialui', 'firebase']
  },
  {
    id: 3,
    imageSrc: ipTracker,
    sourceCodeSrc: 'https://github.com/eduardo-talavera/ip-tracker',
    liveDemoSrc: "https://ip-tracker64.netlify.app/",
    info: "Una aplicación que detecta la ubicación en base a la dirección ip, esta construida con Vanilla js y hace uso de la libreria Leaflet js para pintar el mapa.",
    title: "Ip Tracker",
    stack: ['html', 'css', 'javascript']
  },
  // {
  //   imageSrc: taskapi,
  //   sourceCodeSrc: 'https://github.com/eduardo-talavera',
  //   liveDemoSrc: "https://taskapi.netlify.app/",
  //   info: "Taskapi es una aplicación para administrar tareas, esta construida con el PERN stack (PostgreSQL, Express, React, Node) y Redux para el manejo del estado global, aun esta en desarrollo, por lo que ire añadiendo nuevas funcionalidades.",
  //   title: "Taskapi"
  // },
  // {
  //   imageSrc: imgFC,
  //   sourceCodeSrc: 'https://github.com/eduardo-talavera',
  //   liveDemoSrc: "https://facebook-clone-8c167.web.app/",
  //   info: "Este proyecto es un clon de la pagina de inicio de facebook, cuenta con la funcionalidad para hecer publicaciones y esta construido con las tecnologias: React js, Material-UI y Firebase.",
  //   title: "Facebook clone"
  // }
];


