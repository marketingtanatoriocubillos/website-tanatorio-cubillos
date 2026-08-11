import { CREMATORIO_DIFERENCIADORES } from "./crematorioData";

export default function CrematorioDiferenciadoresSection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:14px_14px]"
      />

      <div className="relative z-[1] mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Nuestra ventaja
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.15] text-white">
            El único crematorio propio en Tarapacá
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-white/70">
            Mientras otros servicios funerarios deben trasladar los restos fuera
            de la región, nosotros operamos nuestro propio crematorio en La
            Huayca. Eso significa mayor control, menor tiempo de espera y total
            transparencia para su familia.
          </p>
        </div>

        <div className="mt-11 grid gap-4 lg:grid-cols-3">
          {CREMATORIO_DIFERENCIADORES.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-[0_18px_40px_rgba(7,7,34,0.16)]"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="size-[22px]" />
              </div>
              <h3 className="mt-5 font-heading text-[18px] font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-7 text-white/72">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
