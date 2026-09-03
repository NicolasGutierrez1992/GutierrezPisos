import { buildWhatsAppLink, SITE } from "@/lib/config";

const NAV_LINKS = [
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#zona", label: "Zona de cobertura" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-walnut-200/60 bg-walnut-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold tracking-tight text-walnut-800">{SITE.name}</span>
        <nav className="hidden gap-6 whitespace-nowrap text-sm font-medium text-walnut-700 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-walnut-900">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full bg-walnut-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-walnut-800"
        >
          Pedí tu presupuesto
        </a>
      </div>
    </header>
  );
}
