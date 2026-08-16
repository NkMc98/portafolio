// src/components/Hero.jsx
// QUÉ ES: primera sección visible — titular con efecto de escritura,
// descripción, CTAs y links sociales.
// PARA QUÉ SIRVE: es tu "elevator pitch" visual — lo primero que lee
// un cliente de Upwork o un recruiter.
import { Linkedin, Github, Mail } from "lucide-react";
import { T, PIXEL } from "../theme";
import { useTyped } from "../hooks/useTyped";
import PacmanIcon from "./icons/PacmanIcon";

const SOCIALS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/nicolas-c%C3%A1rdenas-caro-ba04ab199" },
  { icon: Github, href: "https://github.com/NkMc98" },
  { icon: Mail, href: "mailto:nicolascardenascaro@gmail.com" },
];

export default function Hero() {
  const typed = useTyped("REACT & NEXT.JS DEVELOPER", 45, 500);

  return (
    <section id="inicio" style={{ maxWidth: "1120px", margin: "0 auto", padding: "4.5rem 1.5rem 5rem", position: "relative", zIndex: 1 }}>
      <div style={{ fontFamily: PIXEL, fontSize: "0.65rem", color: T.yellow, letterSpacing: "0.05em", marginBottom: "1.2rem" }}>
        ~ PLAYER ONE / PORTAFOLIO 2026
      </div>

      <h1 style={{ fontFamily: PIXEL, fontSize: "clamp(1.4rem, 4vw, 2.3rem)", lineHeight: 1.6, color: T.text, minHeight: "2.4em" }}>
        {typed}
        <span style={{ animation: "blink 0.8s infinite" }}>_</span>
      </h1>

      <p style={{ marginTop: "1.3rem", color: T.textMuted, fontSize: "1.08rem", lineHeight: 1.7, maxWidth: "38rem" }}>
        Desarrollador Frontend especializado en React, Next.js e integración de APIs.
        Cazo bugs difíciles de rastrear y hago QA con el mismo rigor con el que escribo código.
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "2.2rem" }}>
        <PacmanIcon size={26} />
        <div style={{ display: "flex", gap: "10px" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: T.dot, opacity: 0.7 }} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", marginTop: "2rem" }}>
        <a href="#proyectos" style={{ fontFamily: PIXEL, fontSize: "0.7rem", background: T.yellow, color: "#1a1400", padding: "0.9rem 1.4rem", borderRadius: "4px" }}>
          VER PROYECTOS
        </a>
        <a href="#contacto" style={{ fontFamily: PIXEL, fontSize: "0.7rem", border: `2px solid ${T.wall}`, color: T.text, padding: "0.9rem 1.4rem", borderRadius: "4px" }}>
          CONTACTO
        </a>
      </div>

      <div style={{ display: "flex", gap: "1.3rem", marginTop: "2.2rem" }}>
        {SOCIALS.map(({ icon: Icon, href }, i) => (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label="social link" style={{ color: T.textMuted }}>
            <Icon size={19} />
          </a>
        ))}
      </div>
    </section>
  );
}
