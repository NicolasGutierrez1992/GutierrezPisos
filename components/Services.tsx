import Image from "next/image";
import {
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

type Service = {
  icon: LucideIcon;
  image: string;
  title: string;
  text: string;
};

const FLOOR_SERVICES: Service[] = [
  {
    icon: Layers,
    image: "/images/services/laminado.png",
    title: "Pisos laminados",
    text: "Resistentes y con terminación de madera natural, ideales para living y dormitorios.",
  },
  {
    icon: SquareStack,
    image: "/images/services/vinilico.png",
    title: "Pisos vinílicos SPC / click",
    text: "100% resistentes al agua, aptos para cocina y baño, con instalación flotante.",
  },
  {
    icon: Ruler,
    image: "/images/services/zocalos.png",
    title: "Zócalos y perfiles",
    text: "Terminación prolija en cada ambiente, con perfiles de unión y guardacantos a medida.",
  },
  {
    icon: Wrench,
    image: "/images/services/nivelacion.png",
    title: "Nivelación de contrapiso",
    text: "Cuando el piso existente lo necesita, nivelamos antes de instalar para un resultado sin fallas.",
  },
];

const CEILING_SERVICES: Service[] = [
  {
    icon: PanelTop,
    image: "/images/ceilings/liso.png",
    title: "Paneles PVC lisos",
    text: "Terminación blanca prolija, 100% resistente a la humedad: ideal para baños, cocinas y lavaderos.",
  },
  {
    icon: TreePine,
    image: "/images/ceilings/madera.png",
    title: "Paneles PVC símil madera",
    text: "El look cálido de la madera, sin su mantenimiento ni el riesgo de humedad.",
  },
  {
    icon: Thermometer,
    image: "/images/ceilings/aislacion.png",
    title: "Aislación térmica y acústica",
    text: "La estructura interna del panel mejora el aislamiento del ambiente frente al techo original.",
  },
  {
    icon: Hammer,
    image: "/images/ceilings/instalacion.png",
    title: "Instalación sin demolición",
    text: "Se coloca sobre el techo existente con una estructura liviana, sin escombros ni obra húmeda.",
  },
];

function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map(({ icon: Icon, image, title, text }) => (
        <div
          key={title}
          className="overflow-hidden rounded-2xl border border-walnut-200 bg-white shadow-sm"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <Icon className="h-7 w-7 text-walnut-600" strokeWidth={1.75} />
            <h3 className="mt-4 font-semibold text-walnut-900">{title}</h3>
            <p className="mt-2 text-sm text-walnut-600">{text}</p>
          </div>
        </div>
      ))}
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

        <h3 className="mt-12 text-xl font-semibold text-walnut-900">Pisos flotantes y vinílicos</h3>
        <div className="mt-6">
          <ServiceGrid services={FLOOR_SERVICES} />
        </div>

        <h3 className="mt-16 text-xl font-semibold text-walnut-900">Techos en PVC</h3>
        <div className="mt-6">
          <ServiceGrid services={CEILING_SERVICES} />
        </div>
      </div>
    </section>
  );
}
