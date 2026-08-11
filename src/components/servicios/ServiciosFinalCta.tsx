import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { HelpCircleIcon } from "../ui/icons/HelpCircleIcon";

const WHATSAPP_HREF =
  "https://wa.me/56990511579?text=Hola%2C+quisiera+orientaci%C3%B3n+sobre+los+servicios";

export default function ServiciosFinalCta() {
  return (
    <section className="bg-brand-primary px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-[1200px] py-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center overflow-visible rounded-full border border-brand-accent/40 bg-brand-accent/15 text-brand-accent">
              <HelpCircleIcon className="size-6" />
            </div>

            <div>
              <p className="font-heading text-[18px] font-bold text-white">
                ¿No sabe qué servicio necesita?
              </p>
              <p className="mt-1 text-[14px] text-white/65">
                Llámenos y lo orientamos sin compromiso. Estamos disponibles
                24/7.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+56990511579"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-heading text-[14px] font-bold text-accentDark transition hover:brightness-95"
            >
              <PhoneIcon className="size-4" />
              <span>Llamar ahora</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-heading text-[14px] font-bold text-white transition hover:brightness-95"
            >
              <WhatsAppIcon className="size-4" />
              <span>WhatsApp</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
