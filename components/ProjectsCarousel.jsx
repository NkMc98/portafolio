// src/components/ProjectsCarousel.jsx
// QUÉ ES: carrusel 3D (rotateY + translateZ en CSS) donde cada tarjeta
// que gira es uno de tus proyectos reales — imagen, nombre, stack y
// botones de acción, sincronizados con un panel de detalle debajo.
// PARA QUÉ SIRVE: es la sección de portafolio propiamente dicha. Rota
// automático cada 4s, se pausa al pasar el cursor, y se navega con
// flechas o con los puntos indicadores.
import { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import { T, PIXEL, RETRO } from "../theme";
import { PROJECTS } from "../data/content";
import GhostIcon from "./icons/GhostIcon";

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = PROJECTS;
  const n = items.length;
  const radius = 260;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), 4000);
    return () => clearInterval(t);
  }, [paused, n]);

  const active = items[index];
  const go = (dir) => setIndex((i) => (i + dir + n) % n);

  return (
    <section id="proyectos" style={{ maxWidth: "1120px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <div style={{ fontFamily: PIXEL, fontSize: "0.65rem", color: T.orange, letterSpacing: "0.05em", marginBottom: "1.2rem" }}>
        SELECT YOUR GAME
      </div>
      <h2 style={{ fontFamily: PIXEL, fontSize: "1.3rem", marginBottom: "2.8rem" }}>Proyectos</h2>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ position: "relative", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", perspective: "1200px" }}
      >
        <button onClick={() => go(-1)} aria-label="Proyecto anterior"
          style={{ position: "absolute", left: 0, zIndex: 5, background: T.panel2, border: `1px solid ${T.wallDim}`, color: T.text, borderRadius: "50%", width: 36, height: 36, cursor: "pointer" }}>
          ‹
        </button>
        <button onClick={() => go(1)} aria-label="Siguiente proyecto"
          style={{ position: "absolute", right: 0, zIndex: 5, background: T.panel2, border: `1px solid ${T.wallDim}`, color: T.text, borderRadius: "50%", width: 36, height: 36, cursor: "pointer" }}>
          ›
        </button>

        <div style={{
          position: "relative", width: "230px", height: "150px", transformStyle: "preserve-3d",
          transform: `rotateY(${-(360 / n) * index}deg)`, transition: "transform 0.7s cubic-bezier(.22,.9,.35,1)",
        }}>
          {items.map((p, i) => (
            <div key={p.name} style={{
              position: "absolute", inset: 0, borderRadius: "10px", overflow: "hidden",
              background: T.panel, border: `2px solid ${i === index ? p.ghost : T.wallDim}`,
              transform: `rotateY(${(360 / n) * i}deg) translateZ(${radius}px)`,
              boxShadow: i === index ? `0 0 24px ${p.ghost}55` : "none",
              opacity: i === index ? 1 : 0.55, transition: "opacity 0.5s, border-color 0.5s",
            }}>
              {p.hasRealShot ? (
                <img src={p.image} alt={p.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: `repeating-linear-gradient(45deg, ${T.panel} 0 8px, #000 8px 16px)` }}>
                  <GhostIcon size={26} color={p.ghost} />
                </div>
              )}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.75)", padding: "0.35rem 0.5rem" }}>
                <span style={{ fontFamily: PIXEL, fontSize: "0.4rem", color: p.ghost }}>{p.name.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", marginTop: "1.2rem" }}>
        {items.map((p, i) => (
          <button key={p.name} onClick={() => setIndex(i)} aria-label={`Ver proyecto ${p.name}`}
            style={{ width: 9, height: 9, borderRadius: "50%", border: "none", cursor: "pointer", background: i === index ? p.ghost : T.wallDim }} />
        ))}
      </div>

      <div style={{ maxWidth: "620px", margin: "2.2rem auto 0", textAlign: "center" }}>
        <h3 style={{ fontFamily: PIXEL, fontSize: "0.75rem", color: active.ghost, marginBottom: "0.8rem" }}>
          {active.name.toUpperCase()}
        </h3>
        <p style={{ color: T.textMuted, fontSize: "0.92rem", lineHeight: 1.6 }}>{active.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.4rem", margin: "1rem 0 1.4rem" }}>
          {active.stack.map((t) => (
            <span key={t} style={{ fontFamily: RETRO, fontSize: "0.95rem", color: T.text, background: T.panel2, padding: "0.15rem 0.6rem", borderRadius: "4px", border: `1px solid ${T.wallDim}` }}>{t}</span>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem" }}>
          {active.demo ? (
            <a href={active.demo} target="_blank" rel="noopener noreferrer" style={{ fontFamily: PIXEL, fontSize: "0.55rem", background: active.ghost, color: "#0a0a0a", padding: "0.7rem 1rem", borderRadius: "4px", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              JUGAR <ExternalLink size={12} />
            </a>
          ) : (
            <span style={{ fontFamily: PIXEL, fontSize: "0.55rem", border: `1px solid ${T.wallDim}`, color: T.textFaint, padding: "0.7rem 1rem", borderRadius: "4px" }}>
              PRÓXIMAMENTE
            </span>
          )}
          {active.repo && (
            <a href={active.repo} target="_blank" rel="noopener noreferrer" style={{ fontFamily: PIXEL, fontSize: "0.55rem", border: `1px solid ${T.wallDim}`, color: T.text, padding: "0.7rem 1rem", borderRadius: "4px", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Github size={12} /> CODE
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
