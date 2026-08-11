import Link from "next/link";
import type { SVGProps } from "react";

import {
  PLANES,
  PLANES_IMMEDIATE_INDEX_FINAL_CTA,
  PLANES_IMMEDIATE_INDEX_HERO_DESCRIPTION,
} from "../../data/planes";
import { ArrowRightIcon } from "../../components/ui/icons/ArrowRightIcon";
import { PhoneIcon } from "../../components/ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../../components/ui/icons/WhatsAppIcon";
import PlanIndexCard from "../../components/planes/PlanIndexCard";

function ImmediateClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ImmediateShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ImmediatePeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ImmediateFileCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

const immediateBenefitIcons = {
  clock: ImmediateClockIcon,
  shield: ImmediateShieldIcon,
  people: ImmediatePeopleIcon,
  "file-check": ImmediateFileCheckIcon,
} as const;

const immediateBenefits = [
  {
    icon: "clock",
    title: "Atención inmediata 24/7",
    description:
      "Te acompañamos desde el primer llamado, los 365 días del año, a cualquier hora.",
  },
  {
    icon: "shield",
    title: "Precio transparente",
    description:
      "El valor del servicio se informa desde el primer momento. Sin cobros ocultos ni sorpresas.",
  },
  {
    icon: "people",
    title: "Equipo profesional y humano",
    description:
      "Personal capacitado que acompaña a tu familia con respeto, cercanía y dignidad en cada momento.",
  },
  {
    icon: "file-check",
    title: "Tramitación integral",
    description:
      "Nosotros gestionamos todos los trámites legales y administrativos, para que tu familia no se preocupe de nada.",
  },
] as const;

const immediatePlans = PLANES.map((plan) => ({
  ...plan,
  description: plan.inmediata.description,
}));

export default function PlanesInmediatosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1E1E6E_0%,#2a2a88_60%,#1E1E6E_100%)] px-4 py-16 sm:px-6 md:px-8">
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,transparent,#F5A623_30%,#F5A623_70%,transparent)]" />

        <div className="relative mx-auto max-w-[1200px] text-center">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-white/72">
            Atención Inmediata
          </span>
          <h1 className="mt-5 font-heading text-[clamp(2.2rem,4vw,3rem)] font-bold leading-[1.05] text-white">
            Atención <span className="text-accent">inmediata</span> para su familia
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-white/72 md:text-base">
            {PLANES_IMMEDIATE_INDEX_HERO_DESCRIPTION}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="tel:+56990511579"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-heading text-sm font-bold text-accentDark transition hover:-translate-y-0.5"
            >
              <PhoneIcon className="h-4 w-4" />
              Llamar ahora — 24/7
              <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://wa.me/56990511579?text=Hola%2C+quisiera+informaci%C3%B3n+sobre+los+planes+de+previsi%C3%B3n"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-heading text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Consultar por WhatsApp
              <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <span className="block text-center font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
            Nuestra atención
          </span>
          <h2 className="mt-4 text-center font-heading text-[clamp(1.7rem,3vw,2.2rem)] font-bold text-primary">
            Por qué elegir atención inmediata
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {immediateBenefits.map((benefit) => {
              const Icon = immediateBenefitIcons[benefit.icon];

              return (
                <article
                  key={benefit.title}
                  className="rounded-[16px] bg-bgSoft px-6 py-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-primaryBg text-primaryLight">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-[15px] font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-textMuted">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bgPage px-4 py-14 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <span className="block text-center font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
            Nuestros planes
          </span>
          <h2 className="mt-4 text-center font-heading text-[clamp(1.7rem,3vw,2.2rem)] font-bold text-primary">
            Elige el plan para tu familia
          </h2>
          <p className="mt-2 text-center text-sm text-textMuted">
            Ordenados de menor a mayor precio. Todos incluyen atención 24/7 y
            tramitación integral.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {immediatePlans.map((plan, index) => (
              <PlanIndexCard
                key={plan.slug}
                plan={plan}
                position={index + 1}
                basePath="/planes-inmediatos"
                categoryLabel="Atención Inmediata"
                hideMonthlyFrom
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-14 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-heading text-[clamp(1.6rem,3vw,2rem)] font-bold text-white">
            {PLANES_IMMEDIATE_INDEX_FINAL_CTA.title}
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-white/72">
            {PLANES_IMMEDIATE_INDEX_FINAL_CTA.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="tel:+56990511579"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-heading text-sm font-bold text-accentDark transition hover:-translate-y-0.5"
            >
              <PhoneIcon className="h-4 w-4" />
              Llamar ahora — 24/7
              <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href={PLANES_IMMEDIATE_INDEX_FINAL_CTA.whatsappHref}
              className="group inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-heading text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Consultar por WhatsApp
              <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
