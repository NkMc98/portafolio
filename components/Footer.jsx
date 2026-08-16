// src/components/Footer.jsx
// QUÉ ES: pie de página con copyright y stack usado.
import { T, RETRO, PIXEL } from "../theme";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${T.wallDim}` }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "2rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.8rem" }}>
        <span style={{ fontFamily: RETRO, fontSize: "1rem", color: T.textFaint }}>© 2026 Nicolás Cárdenas Caro</span>
        <span style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: T.textFaint }}>PRESS START TO CONTINUE</span>
      </div>
    </footer>
  );
}
