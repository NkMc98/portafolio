// src/components/StatsStrip.jsx
// QUÉ ES: franja de 4 números clave (proyectos, experiencia, stack, tiempo
// de respuesta) justo debajo del hero.
// PARA QUÉ SIRVE: refuerza credibilidad rápido, antes de que el visitante
// tenga que leer nada — números se procesan más rápido que texto.
import { T, RETRO, PIXEL } from "../theme";

const STATS = [
  { label: "PROYECTOS", value: "04" },
  { label: "EXPERIENCIA", value: "02+ AÑOS" },
  { label: "STACK BASE", value: "REACT" },
  { label: "RESPUESTA", value: "< 24H" },
];

export default function StatsStrip() {
  return (
    <section style={{ borderTop: `1px solid ${T.wallDim}`, borderBottom: `1px solid ${T.wallDim}`, background: T.panel }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "1.6rem 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "1rem", textAlign: "center" }}>
        {STATS.map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: RETRO, fontSize: "1.9rem", color: T.yellow }}>{s.value}</div>
            <div style={{ fontFamily: PIXEL, fontSize: "0.55rem", color: T.textFaint, marginTop: "0.3rem", letterSpacing: "0.04em" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
