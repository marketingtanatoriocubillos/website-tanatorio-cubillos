import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

export default function ContactoUrgentCta() {
  return (
    <section className="bg-brand-primary px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Atención inmediata
        </p>
        <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.7rem)] font-bold leading-[1.12] text-white">
          Disponibles las 24 horas, los 365 días del año
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-7 text-white/72">
          Si necesita orientación ahora mismo, nuestro equipo está listo para
          responder por llamada o WhatsApp en cualquier momento.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+56990511579"
            className="group inline-flex min-h-[54px] items-center justify-between gap-3 rounded-[10px] bg-accent px-5 py-4 font-heading text-[15px] font-bold text-accentDark transition hover:brightness-95"
          >
            <span className="flex items-center gap-2">
              <PhoneIcon className="size-[17px] shrink-0" />
              <span>Llamar ahora — +56 9 90511579</span>
            </span>
            <ArrowRightIcon className="size-[15px] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="https://wa.me/56990511579?text=Hola%2C+quisiera+m%C3%A1s+informaci%C3%B3n"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-[54px] items-center justify-between gap-3 rounded-[10px] bg-whatsapp px-5 py-4 font-heading text-[15px] font-bold text-white transition hover:bg-whatsapp/90"
          >
            <span className="flex items-center gap-2">
              <WhatsAppIcon className="size-[17px] shrink-0" />
              <span>WhatsApp</span>
            </span>
            <ArrowRightIcon className="size-[15px] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
