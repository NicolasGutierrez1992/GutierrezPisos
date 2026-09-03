export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display tracking-tight ${className}`}>
      <span className="font-semibold text-walnut-900">Gutiérrez</span>{" "}
      <span className="font-medium text-walnut-500">Pisos</span>
    </span>
  );
}
