// src/components/Experience.jsx
// QUÉ ES: trayectoria profesional, presentada como "niveles" superados.
// PARA QUÉ SIRVE: le muestra a un cliente dónde has trabajado y qué
// hiciste en cada lugar — la parte que más revisan los recruiters.
import { Download } from "lucide-react";
import { T, PIXEL, BODY, RETRO } from "../theme";
import { LEVELS } from "../data/content";
import GhostIcon from "./icons/GhostIcon";

export default function Experience() {
  return (
    <section id="niveles" style={{ maxWidth: "1120px", margin: "0 auto", padding: "5rem 1.5rem" }}>
      <div style={{ fontFamily: PIXEL, fontSize: "0.65rem", color: T.cyan, letterSpacing: "0.05em", marginBottom: "1.2rem" }}>
        NIVELES SUPERADOS
      </div>
      <h2 style={{ fontFamily: PIXEL, fontSize: "1.3rem", marginBottom: "2.8rem" }}>Trayectoria profesional</h2>

      <div>
        {LEVELS.map((lv, i) => (
          <div key={lv.level} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "1.4rem", paddingBottom: "2.4rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                width: 48, height: 48, borderRadius: "10px", background: T.panel2,
                border: `2px solid ${lv.ghost}`, display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <GhostIcon size={24} color={lv.ghost} />
              </div>
              {i < LEVELS.length - 1 && (
                <div style={{ flex: 1, width: 2, background: `repeating-linear-gradient(${T.wallDim}, ${T.wallDim} 4px, transparent 4px, transparent 8px)`, marginTop: "0.5rem" }} />
              )}
            </div>
            <div>
              <div style={{ fontFamily: PIXEL, fontSize: "0.6rem", color: lv.ghost, marginBottom: "0.5rem" }}>
                LEVEL {lv.level} · {lv.period}
              </div>
              <h3 style={{ fontFamily: BODY, fontWeight: 700, fontSize: "1.15rem", color: T.text }}>{lv.role}</h3>
              <div style={{ fontFamily: RETRO, fontSize: "1.15rem", color: T.textMuted, marginTop: "0.1rem" }}>{lv.org}</div>
              <p style={{ marginTop: "0.6rem", color: T.textMuted, fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "38rem" }}>{lv.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ajusta el href al PDF real que subas a /public/docs */}
      <a
        href="/docs/CV-Nicolas-Cardenas-Caro.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: PIXEL, fontSize: "0.65rem", color: T.text, borderBottom: `2px solid ${T.yellow}`, paddingBottom: "0.3rem" }}
      >
        <Download size={14} /> DESCARGAR CV
      </a>
    </section>
  );
}
