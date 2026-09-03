import { Building2, MapPin } from "lucide-react";
import { SITE } from "@/lib/config";

export default function ServiceArea() {
  return (
    <section id="zona" className="bg-walnut-800 py-20 text-walnut-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold">Zona de cobertura</h2>
          <p className="mt-4 flex items-center gap-2 text-walnut-100">
            <MapPin className="h-5 w-5 shrink-0" /> Trabajamos en toda {SITE.zone}.
          </p>
          <p className="mt-4 flex items-start gap-2 text-walnut-100">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0" />
            <span>
              Contamos con seguro de responsabilidad civil, un requisito habitual de los consorcios
              para autorizar el ingreso a trabajar en el edificio.
            </span>
          </p>
        </div>
        <div className="rounded-2xl border border-walnut-600 bg-walnut-700/40 p-8 text-sm text-walnut-100">
          <p>
            ¿No estás seguro si tu zona entra dentro de la cobertura? Escribinos por WhatsApp con tu
            dirección y te confirmamos al toque.
          </p>
        </div>
      </div>
    </section>
  );
}
