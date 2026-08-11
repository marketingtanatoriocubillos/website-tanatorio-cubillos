import { CREMATORIO_PROCESS_STEPS } from "./crematorioData";

export default function CrematorioProcesoSection() {
  return (
    <section className="bg-bgPage px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Cómo funciona
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.15] text-primary">
            El proceso, paso a paso
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-textMuted">
            Acompañamos a la familia en cada etapa con transparencia y cuidado.
          </p>
        </div>

        <div className="mt-11 grid gap-4 lg:grid-cols-2">
          {CREMATORIO_PROCESS_STEPS.map(({ number, title, description, icon: Icon }) => (
            <article
              key={number}
              className="rounded-3xl border border-borderWarm bg-white p-6 shadow-[0_12px_30px_rgba(23,20,14,0.05)] sm:p-7"
            >
              <div className="flex gap-5">
                <div className="flex size-[52px] shrink-0 items-center justify-center rounded-2xl bg-primaryBg text-primaryLight">
                  <Icon className="size-7" />
                </div>
                <div className="flex-1">
                  <p className="font-heading text-[46px] font-bold leading-none text-accent">
                    {number}
                  </p>
                  <div className="mt-2 h-0.5 w-8 bg-accent" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-[17px] font-bold text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-textMuted">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
