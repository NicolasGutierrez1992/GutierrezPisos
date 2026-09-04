"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "¿Se puede colocar piso flotante sobre cerámica?",
    a: "Sí, es una de las principales ventajas del piso flotante: se instala directamente sobre la cerámica existente, sin romper ni generar escombros, siempre que la superficie esté nivelada.",
  },
  {
    q: "¿Cuánto tarda la obra?",
    a: "Un departamento de 2 ambientes (40 m² aprox.) se instala en un día y queda transitable de inmediato. Superficies más grandes pueden tomar más de una jornada.",
  },
  {
    q: "¿Qué pasa con las puertas?",
    a: "Recortamos la parte inferior de las puertas que lo necesiten para que abran y cierren normalmente sobre el piso nuevo.",
  },
  {
    q: "¿Aguanta agua y mascotas?",
    a: "El piso vinílico SPC es 100% resistente al agua, ideal para cocinas, baños y hogares con mascotas. El laminado tolera humedad ocasional pero no encharques.",
  },
  {
    q: "¿Y si el piso está desnivelado?",
    a: "Hacemos una nivelación de contrapiso antes de instalar, como un ítem aparte del presupuesto, para garantizar un resultado sin fallas.",
  },
  {
    q: "¿Qué incluye el precio?",
    a: "Material, colocación, zócalos y perfiles de terminación. La nivelación de contrapiso, cuando es necesaria, se cotiza aparte porque depende del estado real de cada piso.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-walnut-900">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-walnut-200 rounded-2xl border border-walnut-200">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-walnut-900">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-walnut-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && <p className="px-6 pb-5 text-sm text-walnut-600">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
