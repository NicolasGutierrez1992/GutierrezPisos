import { buildWhatsAppLink } from "@/lib/config";

export default function CTASection() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-walnut-900 md:text-4xl">
        ¿Le damos una vuelta de página a tu piso?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-walnut-600">
        Contanos los metros cuadrados y el estado del piso actual, y te respondemos con tu
        presupuesto en el día.
      </p>
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-walnut-700 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-walnut-700/20 transition hover:bg-walnut-800"
      >
        Escribinos por WhatsApp
      </a>
    </section>
  );
}
