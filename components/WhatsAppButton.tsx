import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function WhatsAppButton() {
  return (
    <WhatsAppLink
      origin="boton_flotante"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </WhatsAppLink>
  );
}
