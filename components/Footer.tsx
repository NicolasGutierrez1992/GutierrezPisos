import { SITE } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-walnut-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-walnut-500 md:flex-row">
        <span>
          © {new Date().getFullYear()} {SITE.name} · {SITE.zone}, Argentina
        </span>
        <span>{SITE.domain}</span>
      </div>
    </footer>
  );
}
