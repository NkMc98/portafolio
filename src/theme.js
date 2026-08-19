// src/theme.js
// -----------------------------------------------------------------------
// QUÉ ES: objeto único con todos los colores y fuentes del sitio.
// PARA QUÉ SIRVE: si mañana quieres bajar la intensidad del amarillo o
// cambiar el azul de "muro", lo cambias UNA vez aquí y se propaga a
// todos los componentes que lo importan. Evita hex codes sueltos
// repetidos por 10 archivos distintos.
// -----------------------------------------------------------------------
export const T = {
  bg: "#050507",
  panel: "#0C0C14",
  panel2: "#12121E",
  wall: "#2121DE",
  wallDim: "#15158A",
  yellow: "#FFD400",
  yellowDim: "#B89400",
  red: "#FF4D4D",
  pink: "#FFB8DE",
  cyan: "#28E1FF",
  orange: "#FFA641",
  dot: "#FFF3D0",
  text: "#EDEDF6",
  textMuted: "#8E8FB0",
  textFaint: "#5A5B78",
};

export const PIXEL = "'Press Start 2P', monospace";
export const RETRO = "'VT323', monospace";
export const BODY = "'Inter', sans-serif";
