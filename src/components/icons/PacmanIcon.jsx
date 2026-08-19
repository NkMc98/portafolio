// src/components/icons/PacmanIcon.jsx
// QUÉ ES: ícono SVG de Pac-Man con animación de "mordisco".
// PARA QUÉ SIRVE: se usa en el header (logo) y el hero. Componente propio
// para no repetir el mismo bloque de SVG cada vez que se necesita.
import { T } from "../../theme";

export default function PacmanIcon({ size = 22, color = T.yellow, chomp = true }) {
  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <path
          d="M50 50 L95 25 A50 50 0 1 0 95 75 Z"
          fill={color}
          style={chomp ? { transformOrigin: "50px 50px", animation: "chomp 0.4s infinite steps(2)" } : {}}
        />
      </svg>
    </div>
  );
}
