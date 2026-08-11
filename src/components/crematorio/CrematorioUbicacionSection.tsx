import Link from "next/link";

import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";
import { CREMATORIO_CONTACT_DETAILS } from "./crematorioData";

const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.9867001664006!2d-69.6444674986769!3d-20.385083230538147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9153b3f3abdfa791%3A0xb5241a0ad01a08d!2sCrematorio%20Funeraria%20Cubillos!5e0!3m2!1ses!2scl!4v1784658614973!5m2!1ses!2scl";

const WHATSAPP_LINK =
  "https://wa.me/56990511579?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20cremaci%C3%B3n";

export default function CrematorioUbicacionSection() {
  return (
    <section className="bg-bgPage px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Dónde estamos
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.15] text-primary">
            Crematorio Cubillos
            <br />
            La Huayca, Pozo Almonte
          </h2>

          <div className="mt-6 space-y-3">
            {CREMATORIO_CONTACT_DETAILS.map(({ label, href, icon: Icon }) => (
              <div key={label} className="flex items-start gap-3 text-[14px] text-text">
                <Icon className="mt-0.5 size-[18px] shrink-0 text-primaryLight" />
                {href ? (
                  <a href={href} className="transition hover:text-primary">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-white">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Mapa Crematorio Cubillos en La Huayca, Pozo Almonte"
              className="h-[400px] w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <a
            href="https://maps.app.goo.gl/wvEAmjFXNvfjCK6n9"
            target="_blank"
            rel="noreferrer"
            className="group mt-4 inline-flex items-center gap-2 font-heading text-[14px] font-bold text-info transition hover:text-primaryLight"
          >
            <span>Ver en Google Maps</span>
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <article className="rounded-3xl border border-border bg-white p-8 shadow-[0_18px_40px_rgba(23,20,14,0.06)]">
          <h3 className="font-heading text-[22px] font-bold text-primary">
            ¿Necesita más información?
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-textMuted">
            Nuestro equipo está disponible para orientarle sobre el proceso de
            cremación, costos y opciones disponibles. Sin compromisos.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:+56990511579"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-heading text-[14px] font-bold text-accentDark transition hover:brightness-95"
            >
              <PhoneIcon className="size-[15px]" />
              <span>Llamar ahora — +56 9 90511579</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-heading text-[14px] font-bold text-white transition hover:bg-whatsapp/90"
            >
              <WhatsAppIcon className="size-[15px]" />
              <span>Consultar por WhatsApp</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <Link
              href="/contacto"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 font-heading text-[14px] font-bold text-primary transition hover:bg-primaryBg"
            >
              <span>Enviar un mensaje</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
