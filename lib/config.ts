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
  url: "https://gutierrezpisos.com.ar",
  zone: "CABA",
  neighborhoods: [
    "Palermo",
    "Caballito",
    "Belgrano",
    "Villa Urquiza",
    "Almagro",
    "Recoleta",
    "Núñez",
    "Villa Crespo",
    "Colegiales",
    "Flores",
  ],
  // TODO: confirmar usuario real de Instagram cuando esté creado
  instagramUrl: "https://instagram.com/gutierrezpisos",
  // TODO: confirmar horario real de atención
  openingHours: "Lunes a sábados de 9 a 18 hs",
};

// Capacidades legales/operativas que la empresa todavía no tiene activas.
// El sitio oculta cualquier claim que dependa de un flag en false, y lo
// muestra solo cuando pasa a true — sin tocar el resto del código.
export const FEATURES = {
  seguroResponsabilidadCivil: false,
  facturaAFIP: false,
  garantiaEscrita: true,
};

// Analytics: cada script se inyecta solo si existe la variable de entorno
// correspondiente (configurar en Vercel → Project Settings → Environment
// Variables). Sin esas variables, no se carga ningún tracking.
export const ANALYTICS = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID,
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
};

// PRECIOS DE EJEMPLO — todavía no son los precios reales de la empresa.
// Reemplazar por la tabla real antes de lanzar campañas de Ads.
// El cotizador siempre muestra un rango, nunca un precio exacto.
export const PRICING = {
  isPlaceholder: true,
  perM2: {
    laminado: { label: "Piso laminado", min: 50000, max: 70000 },
    vinilico: { label: "Piso vinílico SPC", min: 45000, max: 65000 },
  },
  nivelacionPerM2: 6000,
};
