import Link from "next/link";

import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { CheckIcon } from "../ui/icons/CheckIcon";
import { CREMATORIO_PLAN_HUELLA_CHECKS } from "./crematorioData";

export default function CrematorioPlanHuellaSection() {
  return (
    <section className="bg-primaryLight px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Previsión Funeraria
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.1] text-white">
            Planifique con anticipación y proteja a su familia
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-white/72">
            El Plan Huella es nuestro plan de cremación anticipada. Congele el
            precio de hoy, elija el servicio con calma y asegúrese de que todo
            esté preparado cuando su familia lo necesite.
          </p>

          <div className="mt-6 space-y-3">
            {CREMATORIO_PLAN_HUELLA_CHECKS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-[18px] shrink-0 text-accent" />
                <p className="text-[14px] leading-6 text-white/80">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/planes/huella"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-heading text-[14px] font-bold text-accentDark transition hover:brightness-95"
            >
              <span>Ver Plan Huella</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contacto"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-heading text-[14px] font-semibold text-white transition hover:border-white/45 hover:bg-white/10"
            >
              <span>Consultar con un ejecutivo</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <article className="rounded-3xl border border-white/[0.15] bg-white/[0.08] p-7 shadow-[0_18px_40px_rgba(7,7,34,0.16)]">
          <h3 className="font-heading text-[20px] font-bold text-white">
            Plan Huella
          </h3>
          <p className="mt-3 font-heading text-[36px] font-bold leading-none text-accent">
            $1.290.000
          </p>

          <div className="mt-5 space-y-3">
            {CREMATORIO_PLAN_HUELLA_CHECKS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                <p className="text-[13px] leading-6 text-white/80">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[11px] leading-5 text-white/45">
            *Precio de referencia. Consulte condiciones vigentes.
          </p>
        </article>
      </div>
    </section>
  );
}
