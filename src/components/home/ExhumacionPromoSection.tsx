import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { CheckIcon } from "../ui/icons/CheckIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

const EXHUMACION_FEATURES = [
  "Proceso de cremación incluido",
  "Tramitación integral (gestión de la resolución de cremación)",
  "Ánfora estándar metálica incluida",
  "Uso inmediato o futuro",
] as const;

const WHATSAPP_LINK =
  "https://wa.me/56990511579?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20promoci%C3%B3n%20de%20Cremaci%C3%B3n%20para%20Exhumaci%C3%B3n.%20%C2%BFNos%20compartes%20tu%20n%C3%BAmero%20de%20contacto%3F%20As%C3%AD%20nuestro%20equipo%20te%20llama%20y%20te%20explica%20el%20proceso%20paso%20a%20paso.";

export default function ExhumacionPromoSection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary px-4 pb-16 sm:px-6 md:px-8 md:pb-[72px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:14px_14px]"
      />

      <div className="relative z-[1] mx-auto grid max-w-[1200px] items-stretch gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <article className="rounded-[28px] border border-white/12 bg-white/[0.06] p-8 shadow-[0_18px_40px_rgba(7,7,34,.18)] md:px-9 md:py-[38px]">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Promoción especial
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.6rem)] font-bold leading-[1.12] text-white">
            Cremación para Exhumación
          </h2>
          <p className="mt-3 max-w-[640px] text-[16px] leading-7 text-white/70">
            Una alternativa clara y acompañada para resolver el proceso de
            exhumación con tramitación integral y cremación incluida.
          </p>

          <div className="mt-7 grid gap-[14px] sm:grid-cols-2 sm:gap-x-[18px] sm:gap-y-[14px]">
            {EXHUMACION_FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                <p className="text-[14px] leading-6 text-white/80">{feature}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] leading-6 text-white/65">
            No incluye gastos de cementerio ni traslado de familiares al
            crematorio.
          </p>
        </article>

        <article className="flex flex-col justify-between rounded-[28px] border border-accent/30 bg-[linear-gradient(180deg,rgba(245,166,35,0.16)_0%,rgba(255,255,255,0.08)_100%)] p-8 shadow-[0_18px_40px_rgba(7,7,34,.18)] md:px-8 md:py-[38px]">
          <div>
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-white/[0.72]">
            Valor único
          </p>
            <p className="mt-2 font-heading text-[clamp(3rem,5vw,3.5rem)] font-bold leading-none text-accent">
              $1.000.000
            </p>
            <p className="mt-3 text-[15px] leading-7 text-white/[0.72]">
              Contáctanos para recibir información sobre la promoción y
              resolver cada paso del proceso con nuestro equipo.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <PhoneIcon className="size-4 shrink-0 text-accent" />
              <a
                href="tel:+56990511579"
                className="font-heading text-[18px] font-bold text-white transition hover:text-accent"
              >
                +56 9 9051 1579
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="tel:+56990511579"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-heading text-[14px] font-bold text-accentDark transition hover:brightness-95"
            >
              <PhoneIcon className="size-[14px]" />
              <span>Llamar ahora</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-heading text-[14px] font-bold text-white transition hover:bg-whatsapp/90"
            >
              <WhatsAppIcon className="size-[14px]" />
              <span>Pedir información por WhatsApp</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
