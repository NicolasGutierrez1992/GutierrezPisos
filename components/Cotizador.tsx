"use client";

import { useState } from "react";
import { PRICING, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/config";
import WhatsAppLink from "@/components/WhatsAppLink";

type ProductKey = keyof typeof PRICING.perM2;

function formatARS(value: number) {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
}

export default function Cotizador() {
  const [m2, setM2] = useState("");
  const [product, setProduct] = useState<ProductKey>("laminado");
  const [nivelacion, setNivelacion] = useState(false);

  const m2Num = Number(m2) || 0;
  const hasEstimate = m2Num > 0;
  const { min, max, label } = PRICING.perM2[product];
  const nivelacionExtra = nivelacion ? PRICING.nivelacionPerM2 : 0;
  const totalMin = m2Num * (min + nivelacionExtra);
  const totalMax = m2Num * (max + nivelacionExtra);

  const message = hasEstimate
    ? `Hola! Coticé ${m2Num} m² en ${label.toLowerCase()}${
        nivelacion ? " con nivelación de contrapiso" : ""
      } y me dio aprox. ${formatARS(totalMin)} - ${formatARS(totalMax)}. Quiero el presupuesto exacto.`
    : WHATSAPP_DEFAULT_MESSAGE;

  return (
    <section id="cotizador" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-walnut-900">Cotizá tu piso al instante</h2>
        <p className="mt-2 max-w-2xl text-walnut-600">
          Un estimado orientativo en segundos — el presupuesto exacto lo confirmamos según el estado
          real del piso.
        </p>

        <div className="mt-10 grid gap-6 rounded-2xl border border-walnut-200 bg-walnut-50 p-6 sm:grid-cols-2 sm:p-8">
          <label className="flex flex-col gap-2 text-sm font-medium text-walnut-800">
            Metros cuadrados
            <input
              type="number"
              min={1}
              inputMode="numeric"
              value={m2}
              onChange={(e) => setM2(e.target.value)}
              placeholder="Ej: 38"
              className="rounded-lg border border-walnut-300 bg-white px-4 py-3 text-base text-walnut-900 outline-none focus:border-walnut-600"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-walnut-800">
            Tipo de piso
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value as ProductKey)}
              className="rounded-lg border border-walnut-300 bg-white px-4 py-3 text-base text-walnut-900 outline-none focus:border-walnut-600"
            >
              {(Object.entries(PRICING.perM2) as [ProductKey, (typeof PRICING.perM2)[ProductKey]][]).map(
                ([key, p]) => (
                  <option key={key} value={key}>
                    {p.label}
                  </option>
                )
              )}
            </select>
          </label>

          <label className="flex items-center gap-3 text-sm font-medium text-walnut-800 sm:col-span-2">
            <input
              type="checkbox"
              checked={nivelacion}
              onChange={(e) => setNivelacion(e.target.checked)}
              className="h-5 w-5 rounded border-walnut-400 text-walnut-700 focus:ring-walnut-500"
            />
            Necesito nivelar el contrapiso
          </label>

          <div className="sm:col-span-2">
            {hasEstimate ? (
              <div className="rounded-xl bg-white p-6 text-center">
                <p className="text-sm text-walnut-600">Estimado orientativo</p>
                <p className="mt-1 text-3xl font-bold text-walnut-900">
                  {formatARS(totalMin)} – {formatARS(totalMax)}
                </p>
                <p className="mt-2 text-xs text-walnut-500">
                  Precio orientativo, sujeto a confirmación según el estado real del piso.
                  {PRICING.isPlaceholder && " Valores de ejemplo, a confirmar."}
                </p>
              </div>
            ) : (
              <p className="text-center text-sm text-walnut-500">
                Ingresá los metros cuadrados para ver un estimado.
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <WhatsAppLink
            origin="cotizador"
            message={message}
            className="whitespace-nowrap rounded-full bg-walnut-700 px-8 py-3 text-center text-base font-semibold text-white shadow-lg shadow-walnut-700/20 transition hover:bg-walnut-800"
          >
            {hasEstimate ? "Confirmar por WhatsApp" : "Consultar por WhatsApp"}
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
