export type ConversionOrigin = "hero" | "header" | "cotizador" | "footer" | "boton_flotante";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(origin: ConversionOrigin) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead", { content_name: origin });
  window.gtag?.("event", "generate_lead", { event_category: "whatsapp", event_label: origin });
}
