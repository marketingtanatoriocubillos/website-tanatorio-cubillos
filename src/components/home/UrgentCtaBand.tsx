import { ClockIcon } from "../ui/icons/ClockIcon";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

export default function UrgentCtaBand() {
  return (
    <section className="bg-brand-primary px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-center justify-between gap-6 py-7">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-accent/40 bg-accent/15 text-accent">
              <ClockIcon className="size-5" />
            </div>

            <div>
              <h2 className="font-heading text-[16px] font-bold text-white">
                Atención Inmediata 24/7
              </h2>
              <p className="mt-0.5 max-w-[540px] text-[13px] text-white/65">
                Si necesitas ayuda ahora mismo, llámanos o escríbenos. Respondemos de
                inmediato.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="tel:+56990511579"
              className="group inline-flex items-center gap-[7px] rounded-full bg-accent px-6 py-[11px] font-heading text-[13px] font-bold text-accentDark transition hover:bg-accent/90"
            >
              <PhoneIcon className="size-[14px]" />
              <span>Llamar ahora</span>
              <ArrowRightIcon className="size-[14px] transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/56990511579?text=Necesito%20atenci%C3%B3n%20inmediata"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[7px] rounded-full bg-whatsapp px-6 py-[11px] font-heading text-[13px] font-bold text-white transition hover:bg-whatsapp/90"
            >
              <WhatsAppIcon className="size-[14px]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
