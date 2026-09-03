import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "Marca con seguimiento profesional, no un colocador anónimo de WhatsApp.",
  "Fotos del avance de la obra para que veas el proceso, no solo el resultado.",
  "Nunca cerrás trato directo con el instalador: la empresa responde por el trabajo.",
  "Visita técnica antes de cobrar cuando el caso lo requiere (contrapiso, humedad, superficies grandes).",
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-walnut-900">Por qué elegirnos</h2>
          <p className="mt-4 text-walnut-600">
            El mercado de colocación está lleno de instaladores sueltos que compiten solo por precio.
            Nosotros respondemos con marca, garantía por escrito y un proceso ordenado de punta a
            punta.
          </p>
        </div>
        <ul className="space-y-4">
          {POINTS.map((point) => (
            <li key={point} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-walnut-600" />
              <span className="text-walnut-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
