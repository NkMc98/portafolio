// src/hooks/useTyped.js
// -----------------------------------------------------------------------
// QUÉ ES: hook que "escribe" un texto letra por letra en pantalla.
// PARA QUÉ SIRVE: efecto usado en el hero para el titular.
// POR QUÉ setTimeout recursivo y no setInterval: setInterval sigue
// disparando aunque el navegador esté atrasado (ej. pestaña en segundo
// plano) y los timers se acumulan. setTimeout recursivo solo agenda el
// SIGUIENTE paso cuando el anterior ya terminó, así que se autorregula.
// La flag `cancelled` + el cleanup evita el warning de React por
// actualizar estado de un componente que ya fue desmontado.
// -----------------------------------------------------------------------
import { useState, useEffect } from "react";

export function useTyped(text, speed = 30, delay = 300) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const start = setTimeout(function step() {
      if (cancelled) return;
      i++;
      setShown(text.slice(0, i));
      if (i < text.length) setTimeout(step, speed);
    }, delay);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, delay]);

  return shown;
}
