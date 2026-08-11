import type { PlanStep } from "../../lib/types";

interface PlanHowItWorksProps {
  steps: PlanStep[];
}

export default function PlanHowItWorks({ steps }: PlanHowItWorksProps) {
  return (
    <section className="rounded-[24px] border border-border bg-white p-6">
      <span className="inline-flex rounded-full bg-bgPage px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
        Proceso
      </span>
      <h2 className="mt-4 font-heading text-[1.5rem] font-bold text-primary">
        Contratar es simple
      </h2>

      <div className="mt-7 space-y-1">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div key={step.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "flex size-9 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold",
                    isLast
                      ? "bg-accent text-accentDark"
                      : "bg-primary text-white",
                  ].join(" ")}
                >
                  {step.step}
                </div>
                {!isLast ? <div className="my-2 h-full w-0.5 bg-border" /> : null}
              </div>
              <div className={isLast ? "pb-2" : "pb-6"}>
                <h3 className="font-heading text-[15px] font-bold text-primary">
                  {step.title}
                </h3>
                <p className="mt-1 text-[13px] leading-6 text-textMuted">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
