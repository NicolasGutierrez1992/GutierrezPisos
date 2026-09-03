const STEPS = [
  {
    step: "1",
    title: "Consulta y presupuesto",
    text: "Nos contás los m² y el estado del piso actual. Cotizamos el mismo día, sin visita si el caso es simple.",
  },
  {
    step: "2",
    title: "Seña y pedido de material",
    text: "La seña cubre el costo real del material. Lo pedimos a nuestro distribuidor con remito a tu nombre.",
  },
  {
    step: "3",
    title: "Entrega e instalación",
    text: "El material llega a tu domicilio en 48–72 hs. Un depto de 2 ambientes queda instalado y transitable en un día.",
  },
  {
    step: "4",
    title: "Saldo final",
    text: "Pagás el saldo recién cuando el piso está terminado y revisado con vos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-trabajamos" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-walnut-900">Cómo trabajamos</h2>
      <p className="mt-2 max-w-2xl text-walnut-600">
        Un proceso simple, pensado para que nunca pongas plata sin ver algo concreto a cambio.
      </p>
      <div className="mt-12 grid gap-10 md:grid-cols-4">
        {STEPS.map(({ step, title, text }) => (
          <div key={step} className="relative">
            <span className="text-5xl font-bold text-walnut-200">{step}</span>
            <h3 className="mt-2 font-semibold text-walnut-900">{title}</h3>
            <p className="mt-2 text-sm text-walnut-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
