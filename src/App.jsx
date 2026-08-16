// src/App.jsx
// QUÉ ES: componente raíz. Solo importa y ordena las secciones — no
// contiene lógica ni estilos propios.
// PARA QUÉ SIRVE: es el "mapa" del sitio. Si quieres reordenar secciones,
// agregar una nueva, o quitar una temporalmente, se hace aquí, en una
// línea, sin tocar el resto del código.
import { T } from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GhostIcon from "./components/icons/GhostIcon";

export default function App() {
  return (
    <div style={{ background: T.bg, color: T.text, minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
      {/* Fantasmas decorativos de fondo, muy sutiles */}
      <div style={{ position: "fixed", top: "12%", right: "4%", opacity: 0.06, animation: "floaty 7s ease-in-out infinite", pointerEvents: "none", zIndex: 0 }}>
        <GhostIcon size={140} color={T.red} />
      </div>
      <div style={{ position: "fixed", bottom: "8%", left: "3%", opacity: 0.05, animation: "floaty 9s ease-in-out infinite 1s", pointerEvents: "none", zIndex: 0 }}>
        <GhostIcon size={110} color={T.cyan} />
      </div>

      <Header />
      <Hero />
      <StatsStrip />
      <Experience />
      <Skills />
      <ProjectsCarousel />
      <Contact />
      <Footer />
    </div>
  );
}
