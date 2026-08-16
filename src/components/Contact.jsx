// src/components/Contact.jsx
// QUÉ ES: formulario de contacto + datos directos (email, teléfono, ubicación).
// PARA QUÉ SIRVE: es el único mecanismo real de conversión del portafolio
// — donde un cliente potencial te escribe.
//
// CÓMO ENVÍA EL MENSAJE: arma un link mailto: con asunto y cuerpo ya
// completados y lo abre en pestaña nueva — el navegador delega el envío
// al cliente de correo del visitante (Gmail, Outlook, etc).
// LIMITACIÓN: si el visitante no tiene cliente de correo configurado en
// su dispositivo (común en celulares), no pasa nada visible. Para no
// depender de esto, considera integrar Formspree o EmailJS más adelante
// (formularios que entregan el mensaje sin backend propio).
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { T, PIXEL, RETRO, BODY } from "../theme";

const CONTACT_INFO = [
  { icon: Mail, label: "EMAIL", value: "nicolascardenascaro@gmail.com" },
  { icon: Phone, label: "TELÉFONO", value: "+57 305 880 1930" },
  { icon: MapPin, label: "UBICACIÓN", value: "Bogotá, Colombia" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    const subject = encodeURIComponent(`Contacto desde portafolio — ${formState.name}`);
    const body = encodeURIComponent(`${formState.message}\n\n—\n${formState.name}\n${formState.email}`);
    window.open(`mailto:nicolascardenascaro@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" style={{ background: T.panel, borderTop: `1px solid ${T.wallDim}` }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ fontFamily: PIXEL, fontSize: "0.65rem", color: T.yellow, letterSpacing: "0.05em", marginBottom: "0.6rem" }}>
          GAME OVER?
        </div>
        <h2 style={{ fontFamily: PIXEL, fontSize: "1.3rem", marginBottom: "0.6rem" }}>Continuar la partida</h2>
        <p style={{ color: T.textMuted, fontSize: "0.95rem", marginBottom: "2.6rem" }}>
          Cuéntame de tu proyecto y te respondo en menos de 24 horas.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "2.5rem" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label htmlFor="name" style={{ fontFamily: RETRO, fontSize: "1rem", color: T.textMuted }}>Nombre</label>
              <input id="name" type="text" autoComplete="name" value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                style={{ width: "100%", marginTop: "0.3rem", padding: "0.7rem 0.9rem", borderRadius: "6px", background: T.bg, border: `1px solid ${T.wallDim}`, color: T.text, fontFamily: BODY }} />
            </div>
            <div>
              <label htmlFor="email" style={{ fontFamily: RETRO, fontSize: "1rem", color: T.textMuted }}>Email</label>
              <input id="email" type="email" autoComplete="email" value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                style={{ width: "100%", marginTop: "0.3rem", padding: "0.7rem 0.9rem", borderRadius: "6px", background: T.bg, border: `1px solid ${T.wallDim}`, color: T.text, fontFamily: BODY }} />
            </div>
            <div>
              <label htmlFor="message" style={{ fontFamily: RETRO, fontSize: "1rem", color: T.textMuted }}>Mensaje</label>
              <textarea id="message" rows={5} value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                style={{ width: "100%", marginTop: "0.3rem", padding: "0.7rem 0.9rem", borderRadius: "6px", background: T.bg, border: `1px solid ${T.wallDim}`, color: T.text, fontFamily: BODY, resize: "none" }} />
            </div>
            <button type="submit" style={{ fontFamily: PIXEL, fontSize: "0.65rem", background: T.yellow, color: "#1a1400", padding: "0.9rem", borderRadius: "6px", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <Send size={14} /> ENVIAR MENSAJE
            </button>
            {sent && <p style={{ color: T.yellow, fontFamily: RETRO, fontSize: "1rem" }}>Se abrió tu cliente de correo con el mensaje listo.</p>}
          </form>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
            {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <div style={{ padding: "0.5rem", borderRadius: "6px", background: T.panel2, border: `1px solid ${T.wallDim}` }}>
                  <Icon size={15} style={{ color: T.yellow }} />
                </div>
                <div>
                  <div style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: T.textFaint }}>{label}</div>
                  <div style={{ fontSize: "0.92rem", color: T.text, marginTop: "0.2rem" }}>{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
