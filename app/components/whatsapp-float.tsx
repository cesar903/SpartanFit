import { MessageCircle } from "lucide-react";
import { buildWhatsappUrl, defaultWhatsappMessage, whatsappDisplay } from "../lib/whatsapp";

export function WhatsappFloat() {
  return (
    <a
      href={buildWhatsappUrl(defaultWhatsappMessage)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[70] inline-flex size-14 items-center justify-center border border-accent bg-accent text-white shadow-hard transition duration-150 hover:-translate-y-1 hover:bg-accent-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      aria-label={`Abrir conversa no WhatsApp ${whatsappDisplay}`}
    >
      <MessageCircle aria-hidden="true" className="size-6" strokeWidth={2.5} />
    </a>
  );
}
