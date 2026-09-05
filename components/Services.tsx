"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Hammer,
  Layers,
  PanelTop,
  Ruler,
  SquareStack,
  Thermometer,
  TreePine,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

type Service = {
  icon: LucideIcon;
  image: string;
  alt: string;
  title: string;
  text: string;
  details: string;
};

const FLOOR_SERVICES: Service[] = [
  {
    icon: Layers,
    image: "/images/services/vinilico-click.png",
    alt: "Piso vinílico click gris claro instalado en un ambiente luminoso",
    title: "Piso vinílico click",
    text: "Terminación símil madera, instalación flotante rápida y muy buena resistencia a la humedad diaria.",
    details:
      "Piso 100% sintético con sistema de encastre a presión (click), sin pegamento ni clavos. La superficie tiene un estampado de alta definición que imita la veta de la madera, con una capa de protección que resiste el uso diario. Se apoya flotante sobre el piso existente y es ideal para living, dormitorios y pasillos.",
  },
  {
    icon: SquareStack,
    image: "/images/services/vinilico.png",
    alt: "Piso vinílico SPC rígido resistente al agua, con gotas sobre la superficie",
    title: "Piso vinílico SPC rígido",
    text: "100% resistente al agua, ideal para cocina y baño, con núcleo rígido de mayor durabilidad.",
    details:
      "Variante con núcleo rígido (Stone Plastic Composite: piedra caliza + PVC), más denso y estable que el vinílico tradicional. Es 100% impermeable —soporta encharques temporales sin dañarse— y tiene mayor resistencia a golpes e impactos. Por eso es la opción recomendada para cocinas, baños, lavaderos y ambientes con mascotas.",
  },
  {
    icon: Ruler,
    image: "/images/services/zocalos.png",
    alt: "Zócalo blanco de terminación en la unión entre pared y piso",
    title: "Zócalos y perfiles",
    text: "Terminación prolija en cada ambiente, con perfiles de unión y guardacantos a medida.",
    details:
      "Perfiles que rematan la unión entre el piso y la pared, y guardacantos para las esquinas y uniones entre ambientes. Se eligen a juego con el color del piso para una terminación prolija, sin espacios ni bordes visibles.",
  },
  {
    icon: Wrench,
    image: "/images/services/nivelacion.png",
    alt: "Nivelación de contrapiso con pasta autonivelante antes de instalar el piso",
    title: "Nivelación de contrapiso",
    text: "Cuando el piso existente lo necesita, nivelamos antes de instalar para un resultado sin fallas.",
    details:
      "Pasta autonivelante que se aplica sobre el contrapiso existente cuando tiene desniveles, grietas o restos de un piso anterior. Es un paso previo indispensable para que el piso flotante quede sin ondulaciones ni ruidos al pisar, y se cotiza aparte porque depende del estado real de cada superficie.",
  },
];

const CEILING_SERVICES: Service[] = [
  {
    icon: PanelTop,
    image: "/images/ceilings/liso.png",
    alt: "Techo revestido con paneles PVC lisos color blanco",
    title: "Paneles PVC lisos",
    text: "Terminación blanca prolija, 100% resistente a la humedad: ideal para baños, cocinas y lavaderos.",
    details:
      "Láminas de PVC extruido, livianas y con sistema de encastre, que se atornillan sobre una estructura de listones sin necesidad de demoler el techo existente. Son 100% resistentes a la humedad y no se abomban ni manchan con el vapor, por lo que son la opción recomendada para baños, cocinas y lavaderos.",
  },
  {
    icon: TreePine,
    image: "/images/ceilings/madera.png",
    alt: "Techo revestido con paneles PVC símil madera clara",
    title: "Paneles PVC símil madera",
    text: "El look cálido de la madera, sin su mantenimiento ni el riesgo de humedad.",
    details:
      "Mismo sistema constructivo que el panel liso, pero con una lámina impresa que reproduce la veta y el color de la madera natural. Suma calidez visual a livings y dormitorios sin el mantenimiento ni el riesgo de humedad de la madera real.",
  },
  {
    icon: Thermometer,
    image: "/images/ceilings/aislacion.png",
    alt: "Detalle de la estructura interna aislante de un panel de PVC para techo",
    title: "Aislación térmica y acústica",
    text: "La estructura interna del panel mejora el aislamiento del ambiente frente al techo original.",
    details:
      "La estructura interna hueca y nervada del panel genera una cámara de aire entre el techo original y la nueva superficie. Eso mejora el aislamiento térmico y reduce la transmisión de ruido entre ambientes, comparado con un techo sin revestir.",
  },
  {
    icon: Hammer,
    image: "/images/ceilings/instalacion.png",
    alt: "Instalación de un panel de PVC en un techo, sin demolición",
    title: "Instalación sin demolición",
    text: "Se coloca sobre el techo existente con una estructura liviana, sin escombros ni obra húmeda.",
    details:
      "El sistema se fija con una estructura liviana de listones atornillada al techo existente, sin necesidad de picar ni retirar material. Eso significa una obra más rápida, sin escombros y con mucha menos suciedad que una obra tradicional de albañilería.",
  },
];

function ServiceGrid({ services }: { services: Service[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map(({ icon: Icon, image, alt, title, text, details }) => {
        const isOpen = !!open[title];
        return (
          <div
            key={title}
            className="overflow-hidden rounded-2xl border border-walnut-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Icon className="h-7 w-7 text-walnut-600" strokeWidth={1.75} />
              <h3 className="mt-4 font-semibold text-walnut-900">{title}</h3>
              <p className="mt-2 text-sm text-walnut-600">{text}</p>
              <button
                type="button"
                onClick={() => setOpen((prev) => ({ ...prev, [title]: !prev[title] }))}
                aria-expanded={isOpen}
                className="mt-3 flex items-center gap-1 text-sm font-semibold text-walnut-700"
              >
                {isOpen ? "Ver menos" : "Conocer más"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && <p className="mt-3 text-sm text-walnut-600">{details}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="bg-walnut-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-walnut-900">Servicios</h2>
        <p className="mt-2 max-w-2xl text-walnut-600">
          Material y colocación llave en mano: vos elegís el material, nosotros nos ocupamos del
          resto.
        </p>

        <h3 className="mt-12 text-xl font-semibold text-walnut-900">
          Pisos flotantes de PVC y vinílico
        </h3>
        <div className="mt-6">
          <ServiceGrid services={FLOOR_SERVICES} />
        </div>

        <h3 className="mt-16 text-xl font-semibold text-walnut-900">Techos en PVC</h3>
        <div className="mt-6">
          <ServiceGrid services={CEILING_SERVICES} />
        </div>

        <div className="mt-16 rounded-2xl border border-walnut-300 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-walnut-900">¿Buscás otro revestimiento?</h3>
          <p className="mx-auto mt-2 max-w-xl text-walnut-600">
            Además de pisos y techos en PVC, realizamos cualquier tipo de revestimiento interno
            —paredes, placas decorativas, paneles símil piedra o madera. Contanos tu proyecto y te
            asesoramos.
          </p>
          <WhatsAppLink
            origin="servicios"
            message="Hola! Quiero consultar por un revestimiento interno que no vi en la web."
            className="mt-4 inline-block rounded-full bg-walnut-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-walnut-800"
          >
            Consultar por WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
