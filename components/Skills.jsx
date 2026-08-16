// src/components/Skills.jsx
// QUÉ ES: tabla de habilidades técnicas agrupadas por categoría.
// PARA QUÉ SIRVE: le da al visitante un escaneo rápido de tu stack sin
// tener que leer los proyectos uno por uno.
import { T, PIXEL, RETRO } from "../theme";
import { SKILLS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" style={{ background: T.panel, borderTop: `1px solid ${T.wallDim}`, borderBottom: `1px solid ${T.wallDim}` }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ fontFamily: PIXEL, fontSize: "0.65rem", color: T.pink, letterSpacing: "0.05em", marginBottom: "1.2rem" }}>
          HIGH SCORE TABLE
        </div>
        <h2 style={{ fontFamily: PIXEL, fontSize: "1.3rem", marginBottom: "2.8rem" }}>Con qué trabajo</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "1.2rem" }}>
          {SKILLS.map((s) => (
            <div key={s.group} style={{ background: T.panel2, border: `1px solid ${T.wallDim}`, borderRadius: "8px", padding: "1.4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color }} />
                <h3 style={{ fontFamily: PIXEL, fontSize: "0.62rem", color: s.color, letterSpacing: "0.03em" }}>{s.group.toUpperCase()}</h3>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                {s.items.map((it) => (
                  <li key={it} style={{ fontFamily: RETRO, fontSize: "1.08rem", color: T.text, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: s.color }}>»</span> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
