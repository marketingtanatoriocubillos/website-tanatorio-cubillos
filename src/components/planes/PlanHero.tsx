import Link from "next/link";

import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";

interface PlanHeroProps {
  category: string;
  name: string;
  tagline: string;
  priceReferencial: string;
  ctaLabel?: string;
  priceNote?: string;
}

export default function PlanHero({
  category,
  name,
  tagline,
  priceReferencial,
  ctaLabel = "Contratar este plan",
  priceNote = "Consulte por financiamiento",
}: PlanHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1E1E6E_0%,#2a2a88_60%,#1E1E6E_100%)] px-4 py-12 sm:px-6 md:px-10 md:py-14 md:pb-12">
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,transparent,#F5A623_30%,#F5A623_70%,transparent)]" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-[520px]">
          <span className="inline-flex items-center rounded-full bg-brand-accent px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-accentDark">
            {category}
          </span>
          <h1 className="mt-4 font-heading text-[clamp(2rem,4vw,2.8rem)] font-bold leading-[1.05] text-white">
            Plan <span className="text-accent">{name}</span>
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-white/72 md:text-base">{tagline}</p>
        </div>

        <div className="lg:min-w-[320px] lg:text-right">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
            Precio referencial
          </div>
          <div className="mt-2 font-heading text-[2.4rem] font-bold leading-none text-accent">
            {priceReferencial}
          </div>
          <div className="mt-2 text-[11px] text-white/45">{priceNote}</div>

          <Link
            href="tel:+56990511579"
            className="group mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-heading text-sm font-bold text-accentDark transition hover:-translate-y-0.5"
          >
            <PhoneIcon className="h-4 w-4" />
            {ctaLabel}
            <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
