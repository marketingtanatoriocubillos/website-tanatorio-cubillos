"use client";

import Link from "next/link";

import type { Plan } from "../../lib/types";

export type PlanesTab = "inmediata" | "futuro";

interface PlanCardProps {
  plan: Plan;
  activeTab: PlanesTab;
}

function getPlanLabel(name: string) {
  return name.replace(/^Plan\s+/, "");
}

export default function PlanCard({ plan, activeTab }: PlanCardProps) {
  const hrefBase = activeTab === "futuro" ? "/planes" : "/planes-inmediatos";
  const href = `${hrefBase}/${plan.slug}`;
  const isFeatured = plan.featured === true;
  const badgeLabel =
    activeTab === "inmediata"
      ? "Atencion Inmediata"
      : isFeatured
        ? "Plan Premium"
        : plan.category;
  const badgeClassName =
    activeTab === "inmediata"
      ? "bg-successBg text-successText"
      : isFeatured
        ? "bg-accent text-accentDark"
        : "bg-primaryBg text-primaryLight";

  if (isFeatured) {
    return (
      <Link
        href={href}
        className="col-span-full flex flex-col gap-6 rounded-[24px] bg-linear-to-br from-brand-primary to-primaryLight px-5 py-6 shadow-[0_18px_42px_rgba(30,30,110,.22)] transition duration-200 hover:-translate-y-[2px] sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-7"
      >
        <div className="max-w-3xl">
          <span
            className={`inline-flex rounded-full px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] ${badgeClassName}`}
          >
            {badgeLabel}
          </span>
          <h3 className="mt-4 font-heading text-[18px] font-bold text-white">
            {getPlanLabel(plan.name)}
          </h3>
          <p className="mt-2 max-w-2xl text-[13px] leading-[1.6] text-white/75">
            {plan.description}
          </p>
        </div>

        <div className="shrink-0">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
            Desde
          </div>
          <div className="mt-1 font-heading text-[18px] font-bold text-accent">
            {plan.priceFrom}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="flex min-h-[214px] flex-col rounded-[20px] border border-border bg-white px-4 py-4 transition duration-200 hover:-translate-y-[2px] hover:border-primaryLight"
    >
      <div>
        <span
          className={`inline-flex rounded-full px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] ${badgeClassName}`}
        >
          {badgeLabel}
        </span>
      </div>

      <h3 className="mt-4 font-heading text-[16px] font-bold text-primary">
        {getPlanLabel(plan.name)}
      </h3>

      <p className="mt-2 flex-1 text-[12px] leading-[1.65] text-textMuted">
        {plan.description}
      </p>

      <p className="mt-4 font-heading text-[13px] font-bold text-primaryLight">
        Desde {plan.priceFrom}
      </p>
    </Link>
  );
}
