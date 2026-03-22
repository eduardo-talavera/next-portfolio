"use client";

import { useState } from "react";
import "../../scss/portfolioGrid.scss";
import ticketsAppImg from "@/static/img/tickets-app.webp";
import tropixUiImg from "@/static/img/tropix-ui-thubnail.webp";
import twitterCloneImg from "@/static/img/twitter-clone.webp";
import ipTrackerImg from "@/static/img/ip-tracker.webp";
import Image, { StaticImageData } from "next/image";

/* ── Icons ────────────────────────────────────────────── */
function IconGithub() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

/* ── Types ────────────────────────────────────────────── */
interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  accentTags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

type FilterType =
  | "All"
  | "Full Stack"
 // | "Mobile"
  | "UI Library"
 // | "AI / ML"
  | "Creative"
 // | "Real-time"
 // | "CLI Tool";

/* ── Data ─────────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    title: "Tickets App",
    description:
      "Aplicación de gestión de tickets con panel de control y sistema de notificaciones.",
    image: ticketsAppImg,
    tags: ["React", "TypeScript", "Node.js", "Docker", "MongoDB", "Tailwindcss"],
    accentTags: ["Full Stack"],
    liveUrl: "https://tickets-app-by-eduardo-talavera.vercel.app/issues",
    githubUrl: "https://github.com/eduardo-talavera/issues-app-frontend",
    featured: true,
  },
  {
    id: 2,
    title: "Tropix UI",
    description:
      "Biblioteca de componentes UI para React con diseño moderno, accesibilidad y personalización fácil.",
    image: tropixUiImg,
    tags: ["React", "Typescript", "Storybook", "CI/CD", "CSS-in-JS", "Testing Library"],
    accentTags: ["UI Library"],
    liveUrl: "https://tropix-ui-docs.vercel.app/",
    githubUrl: "https://github.com/eduardo-talavera/tropix-ui",
    featured: true,
  },
  {
    id: 3,
    title: "Twitter Clone",
    description:
      "Clon de Twitter con funcionalidades básicas: feed, publicaciones, perfiles y sistema de autenticación.",
    image: twitterCloneImg,
    tags: ["React", "Node.js", "Firebase", "OAuth 2.0"],
    accentTags: ["Full Stack"],
    liveUrl: "https://twitter-clone-3e2df.web.app/",
    githubUrl: '',
    featured: false,
  },
  {
    id: 4,
    title: "IP Tracker",
    description:
      "Aplicación de seguimiento de IP con visualización de ubicación en mapa",
    image: ipTrackerImg,
    tags: ["React", "TypeScript", "Leaflet", "OpenStreetMap"],
    accentTags: ["Creative"],
    liveUrl: "https://ip-tracker64.netlify.app/",
    githubUrl: "",
  },
  // {
  //   id: 1,
  //   title: "Analytics Dashboard",
  //   description: "Panel de control con visualización de datos en tiempo real, métricas avanzadas y reportes interactivos.",
  //   image: dashboardImg,
  //   tags: ["React", "TypeScript", "Recharts"],
  //   accentTags: ["Full Stack"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: true,
  // },
  // {
  //   id: 2,
  //   title: "E-Commerce App",
  //   description: "Aplicación móvil de compras con carrito, pagos integrados y catálogo de productos.",
  //   image: ecommerceImg,
  //   tags: ["React Native", "Stripe"],
  //   accentTags: ["Mobile"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 3,
  //   title: "AI Assistant",
  //   description: "Chatbot inteligente con procesamiento de lenguaje natural y respuestas contextuales.",
  //   image: aiImg,
  //   tags: ["Python", "OpenAI", "FastAPI"],
  //   accentTags: ["AI / ML"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: true,
  // },
  // {
  //   id: 4,
  //   title: "Agency Landing Page",
  //   description: "Landing page creativa para agencia de diseño con animaciones 3D y scroll storytelling.",
  //   image: landingImg,
  //   tags: ["Next.js", "GSAP", "Three.js"],
  //   accentTags: ["Creative"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 5,
  //   title: "Social Media App",
  //   description: "Red social con feed dinámico, stories, mensajes directos y sistema de notificaciones.",
  //   image: socialImg,
  //   tags: ["React", "Node.js", "Socket.io"],
  //   accentTags: ["Real-time"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 6,
  //   title: "Dev Tools CLI",
  //   description: "Suite de herramientas CLI para desarrolladores: scaffolding, linting y deployment automatizado.",
  //   image: devtoolsImg,
  //   tags: ["Node.js", "TypeScript", "Shell"],
  //   accentTags: ["CLI Tool"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
];

const filters: FilterType[] = [
  "All",
  "Full Stack",
 // "Mobile",
 // "AI / ML",
  "Creative",
  "UI Library"
//"Real-time",
 // "CLI Tool",
];

/* ── ProjectCard ──────────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {/* Image */}
      <div className="project-card__image-wrap">
        <Image
          src={project.image}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__overlay" />

        {/* Action buttons */}
        <div className="project-card__actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-card__action-link"
              aria-label="Ver código en GitHub"
            >
              <IconGithub />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="project-card__action-link project-card__action-link--live"
              aria-label="Ver proyecto en vivo"
            >
              <IconExternalLink />
            </a>
          )}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="project-card__badge">✦ Destacado</span>
        )}
      </div>

      {/* Content */}
      <div className="project-card__content">
        <div className="project-card__title-row">
         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="project-card__title">{project.title}</h3>
         </a>
          <span className="project-card__arrow">
            <IconArrowUpRight />
          </span>
        </div>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tags">
          {project.accentTags.map((tag) => (
            <span
              key={tag}
              className="project-card__tag project-card__tag--accent"
            >
              {tag}
            </span>
          ))}
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ── PortfolioGrid ────────────────────────────────────── */
export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.accentTags.includes(activeFilter));

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <div className="area">
          <div className="content_area">
            {/* Header */}
            <header className="portfolio__header">
              <span className="portfolio__eyebrow">Portafolio</span>
              <h2 className="portfolio__title">
                Proyectos{" "}
                <span className="portfolio__title-gradient">Recientes</span>
              </h2>
              {/* <p className="portfolio__subtitle">
                Una selección de mis trabajos más recientes en desarrollo web,
                móvil e inteligencia artificial.
              </p> */}
               <p className="portfolio__subtitle">
                Una selección de mis trabajos más recientes en desarrollo web
              </p>
            </header>

            {/* Filters */}
            <div
              className="portfolio__filters"
              role="group"
              aria-label="Filtros de proyectos"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`portfolio__filter-btn${
                    activeFilter === filter
                      ? " portfolio__filter-btn--active"
                      : ""
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="portfolio__grid">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

          
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
