// TODO: reemplazar por el número de WhatsApp Business definitivo de la empresa.
// Formato: 549 + característica sin 0 + número sin 15 (todo junto, sin espacios ni "+").
// Por ahora usa el número personal de Nicolás como temporal.
export const WHATSAPP_NUMBER = "5491169949939";

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
