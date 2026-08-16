// src/components/Header.jsx
// QUÉ ES: barra superior de "disponible para proyectos" + navegación
// sticky con logo, links de sección y menú hamburguesa en móvil.
// PARA QUÉ SIRVE: es lo primero que ve un visitante — navegación y la
// señal de disponibilidad que pediste activar.
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { T, PIXEL, RETRO } from "../theme";
import PacmanIcon from "./icons/PacmanIcon";

const NAV_LINKS = [
  { href: "#inicio", label: "INICIO" },
  { href: "#niveles", label: "NIVELES" },
  { href: "#skills", label: "SKILLS" },
  { href: "#proyectos", label: "PROYECTOS" },
  { href: "#contacto", label: "CONTACTO" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Marquee: señal de disponibilidad */}
      <div style={{ background: T.panel, borderBottom: `2px solid ${T.wall}`, padding: "0.5rem 0" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: T.yellow, animation: "blink 1.4s infinite" }} />
          <span style={{ fontFamily: PIXEL, fontSize: "0.6rem", color: T.yellow, letterSpacing: "0.05em" }}>
            DISPONIBLE PARA NUEVOS PROYECTOS
          </span>
        </div>
      </div>

      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(5,5,7,0.92)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${T.wallDim}` }}>
        <nav style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem" }}>
          <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <PacmanIcon size={24} />
            <span style={{ fontFamily: PIXEL, fontSize: "0.85rem", color: T.text }}>
              NIKO<span style={{ color: T.yellow }}>_</span>DEV
            </span>
          </a>

          <ul className="hidden md:flex" style={{ display: "flex", gap: "1.8rem", listStyle: "none" }}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} style={{ fontFamily: RETRO, fontSize: "1.05rem", color: T.textMuted, letterSpacing: "0.03em" }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{ color: T.text, background: "none", border: "none" }}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div style={{ padding: "0 1.5rem 1.2rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: RETRO, fontSize: "1.1rem", color: T.textMuted }}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
