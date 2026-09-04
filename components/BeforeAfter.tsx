"use client";

import { useState } from "react";

/**
 * Placeholder deliberadamente no fotográfico: hasta que haya fotos reales
 * de obra, mostrar una imagen generada como si fuera un "antes/después"
 * real chocaría contra la estrategia de confianza del sitio (fotos
 * genuinas, no marketing engañoso). Reemplazar los dos bloques de color
 * por <Image> reales apenas existan.
 */
export default function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <section className="bg-walnut-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-walnut-900">Mirá la transformación</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-walnut-600">
          Deslizá para comparar el antes y el después de una obra.
        </p>

        <div className="relative mt-8 aspect-video w-full select-none overflow-hidden rounded-3xl border border-walnut-200 shadow-xl">
          <div className="absolute inset-0 bg-walnut-200" />
          <div
            className="absolute inset-0 overflow-hidden bg-walnut-600"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          />
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-walnut-900/80 px-3 py-1 text-xs font-semibold text-white">
            Antes
          </span>
          <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-walnut-900">
            Después
          </span>
          <div
            className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow"
            style={{ left: `${pos}%` }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Comparar antes y después"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
        <p className="mt-3 text-center text-xs text-walnut-600">
          Imágenes de ejemplo — se reemplazan por fotos reales de obra apenas estén disponibles.
        </p>
      </div>
    </section>
  );
}
