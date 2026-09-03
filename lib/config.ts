// TODO: reemplazar por el número real de WhatsApp Business.
// Formato: 549 + característica sin 0 + número sin 15 (todo junto, sin espacios ni "+").
// Ejemplo CABA: 5491122334455
export const WHATSAPP_NUMBER = "5491100000000";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola! Quiero pedir un presupuesto para colocación de piso flotante.";

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  name: "Gutiérrez Pisos",
  domain: "gutierrezpisos.com.ar",
  zone: "CABA",
  // TODO: confirmar usuario real de Instagram cuando esté creado
  instagramUrl: "https://instagram.com/gutierrezpisos",
};
