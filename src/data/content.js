// src/data/content.js
// -----------------------------------------------------------------------
// QUÉ ES: toda la información editable del portafolio (skills, experiencia,
// proyectos) en un solo lugar, separada de los componentes que la dibujan.
// PARA QUÉ SIRVE: cuando termines un proyecto nuevo o cambies de trabajo,
// editas ESTE archivo — nunca tienes que tocar JSX ni estilos para
// actualizar contenido. Importa las imágenes reales de los proyectos.
// -----------------------------------------------------------------------
import { T } from "../theme";
import ecommerceImg from "../assets/images/ecommerce.jpg";
import aiAssistantImg from "../assets/images/ai-assistant.jpg";

export const SKILLS = [
  { group: "Frontend", color: T.yellow, items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5 / CSS3"] },
  { group: "Backend", color: T.red, items: ["Node.js", "Express.js", "REST APIs", "Python (Flask)"] },
  { group: "Data", color: T.cyan, items: ["MongoDB", "MySQL", "SQL Server"] },
  { group: "Workflow", color: T.pink, items: ["Git / GitHub", "Figma", "QA & Testing", "Vercel"] },
];

export const LEVELS = [
  {
    level: "01",
    period: "2022 — 2023",
    role: "Junior Web Developer",
    org: "Andes Digitales",
    ghost: T.cyan,
    detail: "Construí interfaces React escalables con consumo de REST APIs y manejo de estado, trabajando bajo flujo Git en equipo.",
  },
  {
    level: "02",
    period: "2023 — 2024",
    role: "Junior Web Developer",
    org: "Estudio Codifica",
    ghost: T.pink,
    detail: "Implementé diseños de Figma con fidelidad visual para e-commerce, optimizando rendimiento de carga y experiencia de usuario.",
  },
  {
    level: "03",
    period: "2023",
    role: "Frontend & Corporate Web",
    org: "Aggreko Colombia",
    ghost: T.orange,
    detail: "Participé en el desarrollo del sitio corporativo, reforzando identidad de marca y funcionalidades clave.",
  },
];

// NOTA sobre las imágenes: TechStore y AI Assistant tienen captura real
// (hasRealShot: true). Shopping Cart y Aggreko todavía no — cuando tengas
// esas capturas, agrégalas a src/assets/images/, impórtalas arriba como
// las otras dos, y cambia hasRealShot a true + asigna la imagen.
export const PROJECTS = [
  {
    name: "TechStore E-commerce",
    ghost: T.red,
    image: ecommerceImg,
    hasRealShot: true,
    desc: "Plataforma e-commerce completa: catálogo, filtros, autenticación de usuarios y panel de administración.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    demo: "https://e-comerce-xi-beryl.vercel.app/",
    repo: "https://github.com/NkMc98/E-Comerce",
  },
  {
    name: "AI Personal Assistant",
    ghost: T.cyan,
    image: aiAssistantImg,
    hasRealShot: true,
    desc: "Asistente con IA integrada: chat inteligente, gestión de tareas y análisis de texto en tiempo real.",
    stack: ["React", "TypeScript", "AI APIs", "REST"],
    demo: "https://ai-enhanced-web-app.vercel.app/",
    repo: "https://github.com/NkMc98/AI-Enhanced-Web-App",
  },
  {
    name: "Shopping Cart",
    ghost: T.orange,
    image: null,
    hasRealShot: false,
    desc: "Carrito de compras con arquitectura basada en componentes, estado predecible y persistencia.",
    stack: ["React", "TypeScript", "Vercel"],
    demo: "https://carro-de-compras-one.vercel.app/",
    repo: "https://github.com/NkMc98/CarroDeCompras",
  },
  {
    name: "Aggreko Corporate Web",
    ghost: T.pink,
    image: null,
    hasRealShot: false,
    desc: "Sitio corporativo enfocado en identidad de marca, rendimiento y experiencia de usuario.",
    stack: ["React", "JavaScript", "MySQL", "Azure"],
    demo: "https://www.aggreko.com/es-co",
    repo: null,
  },
];
