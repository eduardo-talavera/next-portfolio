import tropixUiThumbnail from '../static/img/tropix-ui-thubnail.webp';
import ticketsApp from '../static/img/tickets-app.webp';
import ipTracker from '../static/img/ip-tracker.webp';
import twitterClone from '../static/img/twitter-clone.webp';
import { StaticImageData } from 'next/image';

export type Project = {
  id: number
  imageSrc: StaticImageData
  sourceCodeSrc?: string
  liveDemoSrc?: string
  info?: string
  title: string
  stack: string[]
  functionalities: string[]
  haveDocs?: boolean
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
    imageSrc: ticketsApp,
    sourceCodeSrc: 'https://github.com/eduardo-talavera/issues-app-frontend',
    liveDemoSrc: "https://tickets-app-by-eduardo-talavera.vercel.app",
    info: 'Una aplicación de gestión de tickets e incidencias para equipos de desarrollo, construida con una arquitectura de frontend y backend desacoplados utilizando React en el frontend y Node.js con Express en el backend. Puede probar la aplicacion con las siguientes credenciales... correo: usuario.prueba_a@mail.com, contraseña: password123.',
    title: "Tickets App",
    stack: ['react', 'typescript', 'vite', 'vitest', 'tailwind', 'nodejs', 'mongodb', 'express', 'docker'],
    functionalities: [
      'Pruebas unitarias automatizadas', 
      'Autenticación segura mediante JWT cookies only y refreshTokens',
      'Diseño responsivo adaptado a multiples dispositivos',
      'Actualización de estado mediante eventos drag and drop',
      'Gestion de estado y peticiones al servidor con TanStack Query',
      'Validación de formularios con react-hook-form',
    ],
    haveDocs: false
  },
  {
    id: 2,
    imageSrc: tropixUiThumbnail,
    sourceCodeSrc: 'https://github.com/eduardo-talavera/tropix-ui',
    liveDemoSrc: "https://tropix-ui-docs.vercel.app/",
    info: "Una libreria de componentes de código abierto con soporte para temas claro y obscuro lista para instalar en proyectos de React mediante gestores de paquetes como yarn y npm.",
    title: "Tropix UI",
    stack: ['react', 'typescript', 'vite', 'vitest', 'styledcomponents', 'emotion', 'npm'],
    functionalities: [
      'Pruebas unitarias automatizadas', 
      'Integración CI/CD con GitHub Actions y Semantic Release',
      'Diseño responsivo adaptado a multiples dispositivos',
      'Documentación con Storybook',
      "Tree shaking integrado",
      "Soporte para formatos CJS y ESM"
    ],
    haveDocs: true
  },
  {
    id: 3,
    imageSrc: twitterClone,
    sourceCodeSrc: 'https://github.com/eduardo-talavera/twitter-clone',
    liveDemoSrc: "https://twitter-clone-3e2df.web.app/",
    info: "Este proyecto es un clon de la pagina de inicio de Twitter, esta construido con React, Material UI y Firebase.",
    title: "Twitter clone",
    stack: ['react', 'javascript', 'css', 'materialui', 'firebase'],
     functionalities: [
      'Diseño responsivo adaptado a multiples dispositivos',
      'Integración de Inicio de sesión con google',
      'Integración con Firebase',
      'Funcionalidad para hacer publicaciones',
      'Persistencia de datos con Firestore',
      'Integración con Material UI'
    ],
    haveDocs: false
  },
  {
    id: 4,
    imageSrc: ipTracker,
    sourceCodeSrc: 'https://github.com/eduardo-talavera/ip-tracker',
    liveDemoSrc: "https://ip-tracker64.netlify.app/",
    info: "Una aplicación que detecta la ubicación en base a la dirección ip, esta construida con Vanilla js y hace uso de la libreria Leaflet js para pintar el mapa.",
    title: "Ip Tracker",
    stack: ['html', 'css', 'javascript'],
    functionalities: [
      'Diseño responsivo adaptado a multiples dispositivos',
      'Integración con Leaflet.js',
      'Integración con detección automatica de IP',
      'Geocodificación Inversa en base a dirección obtenida mediante la IP'
    ],
    haveDocs: false
  }
];


