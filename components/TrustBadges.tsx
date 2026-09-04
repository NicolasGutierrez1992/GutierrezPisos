import { Clock3, FileText, ShieldCheck, Truck } from "lucide-react";
import { FEATURES } from "@/lib/config";

const BADGES = [
  {
    icon: Clock3,
    title: "Presupuesto en el día",
    text: "Te respondemos y cotizamos el mismo día que nos escribís.",
  },
  {
    icon: Truck,
    title: "Material a domicilio",
    text: "El distribuidor entrega en tu casa antes de que empecemos la obra.",
  },
  {
    icon: FileText,
    title: FEATURES.facturaAFIP ? "Presupuesto y factura" : "Presupuesto por escrito",
    text: FEATURES.facturaAFIP
      ? "Todo por escrito: presupuesto en PDF y factura, nada de WhatsApp suelto."
      : "Presupuesto en PDF con el detalle de la obra, nada de WhatsApp suelto.",
  },
  {
    icon: ShieldCheck,
    title: FEATURES.seguroResponsabilidadCivil ? "Garantía y seguro" : "Garantía por escrito",
    text: FEATURES.seguroResponsabilidadCivil
      ? "Garantía por escrito y seguro de responsabilidad civil para entrar a cualquier edificio."
      : "Garantía por escrito sobre cada instalación que realizamos.",
  },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-walnut-200/60 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {BADGES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col gap-3">
            <Icon className="h-8 w-8 text-walnut-600" strokeWidth={1.75} />
            <h3 className="font-semibold text-walnut-900">{title}</h3>
            <p className="text-sm text-walnut-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
