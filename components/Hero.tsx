import Image from "next/image";
import { buildWhatsAppLink, SITE } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-walnut-100">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-walnut-700/10 px-4 py-1 text-sm font-semibold text-walnut-800">
            Colocación de pisos flotantes en {SITE.zone}
          </span>
          <h1 className="max-w-xl text-4xl font-bold leading-tight text-walnut-900 md:text-5xl">
            Piso nuevo en un día, sin romper nada.
          </h1>
          <p className="max-w-xl text-lg text-walnut-700">
            Se coloca directamente sobre el piso existente: sin obra húmeda ni escombros.
            Presupuesto el mismo día, material que llega a tu casa antes de empezar y garantía por
            escrito.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-walnut-700 px-8 py-3 text-center text-base font-semibold text-white shadow-lg shadow-walnut-700/20 transition hover:bg-walnut-800"
            >
              Pedí tu presupuesto por WhatsApp
            </a>
            <a
              href="#como-trabajamos"
              className="whitespace-nowrap rounded-full border border-walnut-300 px-8 py-3 text-center text-base font-semibold text-walnut-800 transition hover:bg-walnut-200/60"
            >
              Cómo trabajamos
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-walnut-900/20 lg:aspect-square">
          <Image
            src="/images/hero-texture.png"
            alt="Piso flotante de madera recién instalado"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
