import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

// TODO: reemplazar por reseñas reales apenas exista el Google Business
// Profile. Se deja vacío a propósito — no inventar reseñas.
const TESTIMONIALS: Testimonial[] = [];

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="bg-walnut-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-walnut-900">Lo que dicen nuestros clientes</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-walnut-200 bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-walnut-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-walnut-700">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-walnut-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
