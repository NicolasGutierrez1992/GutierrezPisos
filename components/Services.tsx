import Image from "next/image";
import { Layers, Ruler, SquareStack, Wrench } from "lucide-react";

const SERVICES = [
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

export default function Services() {
  return (
    <section id="servicios" className="bg-walnut-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-walnut-900">Servicios</h2>
        <p className="mt-2 max-w-2xl text-walnut-600">
          Material y colocación llave en mano: vos elegís el piso, nosotros nos ocupamos del resto.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, image, title, text }) => (
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
      </div>
    </section>
  );
}
