import Link from "next/link";

import type { Plan } from "../../lib/types";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";

interface PlanOtherPlansProps {
  plans: Plan[];
  basePath?: "/planes" | "/planes-inmediatos";
}

export default function PlanOtherPlans({
  plans,
  basePath = "/planes",
}: PlanOtherPlansProps) {
  return (
    <section className="rounded-[24px] border border-border bg-white p-6">
      <span className="inline-flex rounded-full bg-bgPage px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
        Compare planes
      </span>
      <h2 className="mt-4 font-heading text-[1.5rem] font-bold text-primary">
        Otros planes disponibles
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => (
          <Link
            key={plan.slug}
            href={`${basePath}/${plan.slug}`}
            className="rounded-[12px] border-[1.5px] border-border p-[18px] transition hover:-translate-y-[2px] hover:border-info"
          >
            <h3 className="font-heading text-[14px] font-bold text-primaryLight">
              {plan.name}
            </h3>
            <p className="mt-2 text-[12px] leading-normal text-textMuted">
              {plan.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-info">
              Ver plan
              <ArrowRightIcon className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
