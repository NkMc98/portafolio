// src/components/icons/GhostIcon.jsx
// QUÉ ES: ícono SVG de fantasma, color configurable por prop.
// PARA QUÉ SIRVE: se reutiliza 10+ veces (niveles de experiencia,
// proyectos, elementos decorativos) con distinto color cada vez —
// por eso vive en su propio componente en vez de repetirse.
export default function GhostIcon({ size = 22, color = "#FF4D4D", style = {} }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={style}>
      <path
        d="M10 90 L10 45 A40 40 0 0 1 90 45 L90 90 L78 78 L66 90 L54 78 L42 90 L30 78 L18 90 Z"
        fill={color}
      />
      <circle cx="38" cy="45" r="8" fill="white" />
      <circle cx="66" cy="45" r="8" fill="white" />
      <circle cx="40" cy="47" r="4" fill="#1a1a2e" />
      <circle cx="68" cy="47" r="4" fill="#1a1a2e" />
    </svg>
  );
}
