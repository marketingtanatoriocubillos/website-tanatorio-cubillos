import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

const WHATSAPP_HELP_URL =
  "https://wa.me/56990511579?text=Hola%2C+quisiera+m%C3%A1s+informaci%C3%B3n";

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] flex gap-[10px] border-t border-border bg-white px-4 py-[10px] shadow-[0_-4px_16px_rgba(0,0,0,.1)] md:hidden">
      <a
        href="tel:+56990511579"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-[10px] py-3 font-heading text-[13px] font-bold text-accentDark"
      >
        <PhoneIcon className="size-4" />
        Llamar ahora
      </a>
      <a
        href={WHATSAPP_HELP_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-[10px] py-3 font-heading text-[13px] font-bold text-white"
      >
        <WhatsAppIcon className="size-4" />
        WhatsApp
      </a>
    </div>
  );
}
