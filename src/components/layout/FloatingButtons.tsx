import { ClockIcon } from "../ui/icons/ClockIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

const WHATSAPP_HELP_URL =
  "https://wa.me/56990511579?text=Hola%2C+quisiera+m%C3%A1s+informaci%C3%B3n";

export default function FloatingButtons() {
  return (
    <>
      <a
        href={WHATSAPP_HELP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_4px_16px_rgba(0,0,0,.2)] transition duration-200 hover:scale-110 md:inline-flex"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      <a
        href="tel:+56990511579"
        className="fixed bottom-6 left-6 z-50 hidden items-center gap-[7px] rounded-full bg-brand-accent px-5 py-3 font-heading text-[13px] font-bold text-accentDark shadow-[0_4px_16px_rgba(0,0,0,.2)] transition duration-200 hover:scale-105 md:inline-flex"
      >
        <ClockIcon className="size-4" />
        Urgencias 24/7
      </a>
    </>
  );
}
