import Link from "next/link";

import {
  PLANES,
  PLANES_INDEX_BENEFITS,
  PLANES_INDEX_FINAL_CTA,
  PLANES_INDEX_HERO_DESCRIPTION,
} from "../../data/planes";
import { ArrowRightIcon } from "../../components/ui/icons/ArrowRightIcon";
import { FilledHeartIcon } from "../../components/ui/icons/FilledHeartIcon";
import { LockIcon } from "../../components/ui/icons/LockIcon";
import { PlanCreditCardIcon } from "../../components/ui/icons/PlanCreditCardIcon";
import { PhoneIcon } from "../../components/ui/icons/PhoneIcon";
import { SwapArrowsIcon } from "../../components/ui/icons/SwapArrowsIcon";
import { WhatsAppIcon } from "../../components/ui/icons/WhatsAppIcon";
import PlanIndexCard from "../../components/planes/PlanIndexCard";

const benefitIcons = {
  shield: LockIcon,
  heart: FilledHeartIcon,
  "credit-card": PlanCreditCardIcon,
  transfer: SwapArrowsIcon,
} as const;

export default function PlanesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1E1E6E_0%,#2a2a88_60%,#1E1E6E_100%)] px-4 py-16 sm:px-6 md:px-8">
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,transparent,#F5A623_30%,#F5A623_70%,transparent)]" />

        <div className="relative mx-auto max-w-[1200px] text-center">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-white/72">
            Previsión Funeraria
          </span>
          <h1 className="mt-5 font-heading text-[clamp(2.2rem,4vw,3rem)] font-bold leading-[1.05] text-white">
            Planes para <span className="text-accent">cada familia</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-white/72 md:text-base">
            {PLANES_INDEX_HERO_DESCRIPTION}
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
            Por qué prever
          </span>
          <h2 className="mt-4 text-center font-heading text-[clamp(1.7rem,3vw,2.2rem)] font-bold text-primary">
            Beneficios de contratar anticipado
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PLANES_INDEX_BENEFITS.map((benefit) => {
              const Icon = benefitIcons[benefit.icon];

              return (
                <article
                  key={benefit.title}
                  className="rounded-[24px] bg-bgSoft px-6 py-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-primaryBg text-primaryLight">
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
            {PLANES.map((plan, index) => (
              <PlanIndexCard key={plan.slug} plan={plan} position={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-14 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-heading text-[clamp(1.6rem,3vw,2rem)] font-bold text-white">
            {PLANES_INDEX_FINAL_CTA.title}
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-white/72">
            {PLANES_INDEX_FINAL_CTA.description}
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
              href={PLANES_INDEX_FINAL_CTA.whatsappHref}
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
