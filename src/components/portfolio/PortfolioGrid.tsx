"use client";

import { useState } from "react";
import "../../scss/portfolioGrid.scss";
import ticketsAppImg from "@/static/img/tickets-app.webp";
import tropixUiImg from "@/static/img/tropix-ui-thubnail.webp";
import twitterCloneImg from "@/static/img/twitter-clone.webp";
import ipTrackerImg from "@/static/img/ip-tracker.webp";
import Image, { StaticImageData } from "next/image";
import { _Translator, useTranslations } from "next-intl";
import { useGlobalState } from "@/context/GlobalStateContext";

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

function IconOpenModal() {
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
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v7h-7" />
      <path d="M3 10v11h11" />
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
  previewTags: string[];
  accentTags: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  functionalities: string[];
}

type FilterType =
  | "All"
  | "Todos"
  | "Full Stack"
  | "Pila Completa"
 // | "Mobile"
  | "UI Library"
  | "Biblioteca UI"
 // | "AI / ML"
  | "Creative"
  | "Creativos"
 // | "Real-time"
 // | "CLI Tool";





/* ── ProjectCard ──────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProjectCard({ project, t }: { project: Project, t: _Translator<Record<string, any>, "projects"> }) {
  const { openProject } = useGlobalState();
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
          <a 
            href='#'
            rel="noopener noreferrer"
            onClick={() => openProject(project)}
            className="project-card__action-link"
            aria-label="Ver más detalles"
          >
            <IconOpenModal />
          </a>
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
          <span className="project-card__badge">✦ {t('featured')}</span>
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
          {project.previewTags.map((tag) => (
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
  const t = useTranslations("projects");

  const filters: FilterType[] = [
    t("filters.all") as FilterType,
    t("filters.full_stack") as FilterType,
   // "Mobile",
   // "AI / ML",
    t("filters.creative") as FilterType,
    t("filters.ui_library") as FilterType,
  //"Real-time",
   // "CLI Tool",
  ];

  /* ── Data ─────────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    title: t('tickets_app.name'),
    description: t('tickets_app.description'),
    image: ticketsAppImg,
    previewTags: ["React", "TypeScript", "Node.js"],
    tags: ["React", "TypeScript", "Node.js", "Docker", "MongoDB", "Tailwindcss", "JWT", "react-hook-form"],
    accentTags: [t('filters.full_stack') as string],
    liveUrl: "https://tickets-app-by-eduardo-talavera.vercel.app/issues",
    githubUrl: "https://github.com/eduardo-talavera/issues-app-frontend",
    featured: true,
    functionalities: [
      t('tickets_app.functionalities.a'), 
      t('tickets_app.functionalities.b'),
      t('tickets_app.functionalities.c'),
      t('tickets_app.functionalities.d'),
      t('tickets_app.functionalities.e'),
      t('tickets_app.functionalities.f'),
    ] || [],
  },
  {
    id: 2,
    title: t('tropix_ui.name'),
    description: t('tropix_ui.description'),
    image: tropixUiImg,
    previewTags: ["React", "Typescript", "Storybook"],
    tags: ["React", "Typescript", "Storybook", "CI/CD", "CSS-in-JS", "Testing Library", "Vitest", "Rollup", "TanStack Query"],
    accentTags: [t('filters.ui_library') as string],
    liveUrl: "https://tropix-ui-docs.vercel.app/",
    githubUrl: "https://github.com/eduardo-talavera/tropix-ui",
    featured: true,
    functionalities: [
      t('tropix_ui.functionalities.a'),
      t('tropix_ui.functionalities.b'),
      t('tropix_ui.functionalities.c'),
      t('tropix_ui.functionalities.d'),
      t('tropix_ui.functionalities.e'),
      t('tropix_ui.functionalities.f'),
    ] || [
    ],
  },
  {
    id: 3,
    title: t('twitter_clone.name'),
    description: t('twitter_clone.description'),
    image: twitterCloneImg,
    tags: ["React", "Node.js", "Firebase", "OAuth 2.0", "Material UI"],
    previewTags: ["React", "Node.js", "Firebase"],
    accentTags: [t('filters.full_stack') as string],
    liveUrl: "https://twitter-clone-3e2df.web.app/",
    githubUrl: '',
    featured: false,
    functionalities: [
      t('twitter_clone.functionalities.a'),
      t('twitter_clone.functionalities.b'),
      t('twitter_clone.functionalities.c')
    ] || [
    ],
  },
  {
    id: 4,
    title: t('ip_tracker.name'),
    description: t('ip_tracker.description'),
    image: ipTrackerImg,
    tags: ["React", "TypeScript", "Leaflet", "OpenStreetMap"],
    previewTags: ["React", "TypeScript", "Leaflet"],
    accentTags: [t('filters.creative') as string],
    liveUrl: "https://ip-tracker64.netlify.app/",
    githubUrl: "",
    functionalities: [
      t('ip_tracker.functionalities.a'),
      t('ip_tracker.functionalities.b'),
      t('ip_tracker.functionalities.c')
    ] || [
    ],
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

  const filtered =
    activeFilter === 'All' || activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.accentTags.includes(activeFilter));

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <div className="area">
          <div className="content_area">
            {/* Header */}
            <header className="portfolio__header">
              <span className="portfolio__eyebrow">{t('title')}</span>
              <div className="flex align-items-center">
                <h2 className="portfolio__title">
                  {t('subtitle_1')}{" "}
                  <span className="portfolio__title-gradient">{t('subtitle_2')}</span>
                </h2> <span className="h1 d-block ml-3">🏆</span>
              </div>
              {/* <p className="portfolio__subtitle">
                Una selección de mis trabajos más recientes en desarrollo web,
                móvil e inteligencia artificial.
              </p> */}
               <p className="portfolio__subtitle">
                {t('description')}
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
                <ProjectCard key={project.id} project={project} t={t} />
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
