import { CREMATORIO_ANFORA_OPTIONS } from "./crematorioData";

export default function CrematorioAnforaSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Opciones de ánfora
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.15] text-primary">
            Elija la ánfora que mejor honre su memoria
          </h2>
        </div>

        <div className="mt-11 grid gap-4 lg:grid-cols-3">
          {CREMATORIO_ANFORA_OPTIONS.map((option) => (
            <article
              key={option.title}
              className="rounded-3xl border border-border bg-white p-7 shadow-[0_12px_30px_rgba(23,20,14,0.04)]"
            >
              <span
                className={[
                  "inline-flex rounded-full px-3 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.08em]",
                  option.badgeClassName,
                ].join(" ")}
              >
                {option.badge}
              </span>
              <h3 className="mt-4 font-heading text-[18px] font-bold text-primary">
                {option.title}
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-textMuted">
                {option.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-[13px] leading-6 text-textMuted">
          Para conocer todos los modelos disponibles, contáctenos directamente
          por teléfono o WhatsApp.
        </p>
      </div>
    </section>
  );
}
