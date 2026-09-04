import { HardHat, User } from "lucide-react";

// TODO: completar el nombre real del hermano y sumar fotos reales de los
// dos socios (reemplazar los círculos de ícono por <Image>). No usar fotos
// generadas por IA acá: son personas reales, no un producto genérico.
const FOUNDERS = [
  {
    icon: User,
    name: "Nicolás Gutiérrez",
    role: "Atención al cliente y presupuestos",
    bio: "Coordina cada obra de punta a punta: primer contacto, presupuesto y seguimiento hasta la entrega.",
  },
  {
    icon: HardHat,
    name: "Su hermano",
    role: "Maestro mayor de obra",
    bio: "A cargo de la parte técnica: visita de obra en los casos que lo requieren, selección de colocadores y control de calidad de cada instalación.",
  },
];

export default function AboutUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-walnut-900">Quiénes somos</h2>
      <p className="mt-2 max-w-2xl text-walnut-600">
        Una empresa familiar de Buenos Aires: dos hermanos, un mismo estándar de trabajo en cada
        obra.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {FOUNDERS.map(({ icon: Icon, name, role, bio }) => (
          <div key={name} className="flex gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-walnut-200 text-walnut-700">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <div>
              <p className="font-semibold text-walnut-900">{name}</p>
              <p className="text-sm font-medium text-walnut-600">{role}</p>
              <p className="mt-2 text-sm text-walnut-600">{bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
