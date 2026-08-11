import Link from "next/link";

import type { Plan } from "../../lib/types";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";

interface PlanIndexCardProps {
  plan: Plan;
  position: number;
  basePath?: "/planes" | "/planes-inmediatos";
  categoryLabel?: string;
  hideMonthlyFrom?: boolean;
}

export default function PlanIndexCard({
  plan,
  position,
  basePath = "/planes",
  categoryLabel,
  hideMonthlyFrom = false,
}: PlanIndexCardProps) {
  const isFeatured = plan.featured === true;
  const badgeLabel = isFeatured ? "Plan Premium" : (categoryLabel ?? plan.category);

  return (
    <article
      className={[
        "flex h-full flex-col rounded-[24px] border p-7",
        isFeatured
          ? "border-primaryLight bg-[linear-gradient(135deg,#1E1E6E_0%,#2D2D8F_100%)] shadow-[0_20px_45px_rgba(30,30,110,.2)]"
          : "border-border bg-white",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className="inline-flex items-center rounded-full bg-brand-accent px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-accentDark"
        >
          {badgeLabel}
        </span>
        <span className={isFeatured ? "text-[11px] font-bold text-white/50" : "text-[11px] font-bold text-textSubtle"}>
          Plan {position} de 9
        </span>
      </div>

      <h3 className={isFeatured ? "mt-5 font-heading text-[1.35rem] font-bold text-white" : "mt-5 font-heading text-[1.35rem] font-bold text-primary"}>
        {plan.name}
      </h3>
      <p className={isFeatured ? "mt-3 flex-1 text-[13px] leading-6 text-white/75" : "mt-3 flex-1 text-[13px] leading-6 text-textMuted"}>
        {plan.description}
      </p>

      <div className={isFeatured ? "mt-6 border-t border-white/15 pt-4" : "mt-6 border-t border-borderWarm pt-4"}>
        <div className={isFeatured ? "text-[11px] uppercase tracking-[0.14em] text-white/55" : "text-[11px] uppercase tracking-[0.14em] text-textSubtle"}>
          Desde
        </div>
        <div className={isFeatured ? "mt-1 font-heading text-[1.7rem] font-bold text-accent" : "mt-1 font-heading text-[1.7rem] font-bold text-primary"}>
          {plan.priceFrom}
        </div>
        {!hideMonthlyFrom ? (
          <div className={isFeatured ? "mt-1 text-[11px] text-white/45" : "mt-1 text-[11px] text-textMuted"}>
            o desde {plan.monthlyFrom}
          </div>
        ) : null}
      </div>

      <Link
        href={`${basePath}/${plan.slug}`}
        className={[
          "group mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-heading text-[13px] font-bold transition hover:-translate-y-0.5",
          isFeatured ? "bg-accent text-accentDark" : "bg-primary text-white",
        ].join(" ")}
      >
        Ver {plan.name}
        <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
