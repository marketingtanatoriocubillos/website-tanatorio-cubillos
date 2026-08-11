import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { CREMATORIO_HERO_STATS } from "./crematorioData";

const PRIMARY_BUTTON_CLASSNAME =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-heading text-[14px] font-bold text-accentDark transition hover:brightness-95";

const OUTLINE_BUTTON_CLASSNAME =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/45 px-6 py-3 font-heading text-[14px] font-bold text-white transition hover:border-white/70 hover:bg-white/10";

export default function CrematorioHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative min-h-[560px]">
        <Image
          src="/assets/img/crematorio-pozo-almonte.jpg"
          alt="Crematorio Cubillos en Pozo Almonte"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,28,0.28)_0%,rgba(10,10,28,0.64)_55%,rgba(10,10,28,0.82)_100%)]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:14px_14px]"
        />

        <div className="relative z-[1] mx-auto flex min-h-[560px] max-w-[1200px] flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:px-8">
          <span className="inline-flex rounded-full bg-accent px-4 py-2 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-accentDark">
            Único crematorio en Tarapacá
          </span>

          <h1 className="mt-5 font-heading text-[clamp(2.2rem,5vw,3.2rem)] font-bold leading-[1.08] text-white">
            Crematorio Cubillos
            <br />
            Pozo Almonte
          </h1>

          <p className="mt-4 max-w-[700px] text-[17px] leading-7 text-white/72">
            Instalaciones propias en La Huayca, con tecnología de última
            generación y el acompañamiento que su familia merece. Disponible 24
            horas, los 365 días del año.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+56990511579" className={PRIMARY_BUTTON_CLASSNAME}>
              <PhoneIcon className="size-[15px]" />
              <span>Llamar ahora — 24/7</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <Link href="/planes/huella" className={OUTLINE_BUTTON_CLASSNAME}>
              <span>Ver Plan Huella (Cremación)</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 grid w-full max-w-[760px] gap-4 rounded-[20px] border border-white/[0.12] bg-white/[0.06] px-5 py-5 backdrop-blur-[2px] sm:grid-cols-3 sm:gap-6 sm:px-7">
            {CREMATORIO_HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-[20px] font-bold text-accent">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
