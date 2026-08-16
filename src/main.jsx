// src/main.jsx
// QUÉ ES: punto de entrada de la aplicación — donde React "engancha" tu
// App al DOM real (el <div id="root"> de index.html).
// NO necesitas tocar este archivo casi nunca.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
