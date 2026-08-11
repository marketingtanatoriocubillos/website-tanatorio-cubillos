import Link from "next/link";

import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

const PHONE_HREF = "tel:+56990511579";
const WHATSAPP_HREF =
  "https://wa.me/56990511579?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n";

const SOLID_BUTTON_CLASSNAME =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 font-heading text-[14px] font-bold text-white transition hover:bg-primaryLight";

const OUTLINE_BUTTON_CLASSNAME =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-[1.5px] border-primaryLight/30 px-6 py-3 font-heading text-[14px] font-bold text-primaryLight transition hover:bg-primaryBg";

export default function NosotrosFinalCta() {
  return (
    <section className="bg-bgPage px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[700px] text-center">
        <h2 className="font-heading text-[clamp(1.9rem,4vw,2.4rem)] font-bold leading-[1.12] text-primaryLight">
          ¿Necesita orientación o tiene alguna consulta?
        </h2>
        <p className="mt-4 text-[16px] leading-7 text-textMuted">
          Nuestro equipo está disponible las 24 horas. Llámenos o escríbanos y
          con gusto lo atendemos.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={PHONE_HREF} className={SOLID_BUTTON_CLASSNAME}>
            <PhoneIcon className="size-[15px]" />
            <span>Llamar ahora</span>
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-heading text-[14px] font-bold text-white transition hover:brightness-95"
          >
            <WhatsAppIcon className="size-[15px]" />
            <span>WhatsApp</span>
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <Link href="/contacto" className={OUTLINE_BUTTON_CLASSNAME}>
            <span>Formulario de contacto</span>
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
