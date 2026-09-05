"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <section className="bg-walnut-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-walnut-900">Mirá la transformación</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-walnut-600">
          Deslizá para comparar el antes y el después de un piso.
        </p>

        <div className="relative mt-8 aspect-video w-full select-none overflow-hidden rounded-3xl border border-walnut-200 shadow-xl">
          <Image
            src="/images/before-after/despues.png"
            alt="Ambiente con piso vinílico nuevo instalado"
            fill
            sizes="(min-width: 1024px) 800px, 90vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              src="/images/before-after/antes.png"
              alt="Mismo ambiente con el piso de cerámica viejo, antes de la obra"
              fill
              sizes="(min-width: 1024px) 800px, 90vw"
              className="object-cover"
            />
          </div>
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
          Imagen ilustrativa generada digitalmente — no corresponde a una obra real de la empresa.
        </p>
      </div>
    </section>
  );
}
