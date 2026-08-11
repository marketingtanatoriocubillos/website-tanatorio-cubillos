import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { CREMATORIO_EXHUMACION_FEATURES } from "./crematorioData";

export default function CrematorioExhumacionSection() {
  return (
    <section className="bg-bgSoft px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Servicio especial
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.15] text-primary">
            Cremación para Exhumación
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-textMuted">
            Servicio disponible para Iquique, Alto Hospicio, Pozo Almonte,
            Huara, La Tirana, Pica, Matilla y La Huayca.
          </p>
        </div>

        <div className="mt-11 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {CREMATORIO_EXHUMACION_FEATURES.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-border bg-white p-6"
                >
                  <div
                    className={[
                      "flex size-11 items-center justify-center rounded-[10px]",
                      feature.iconWrapperClassName,
                    ].join(" ")}
                  >
                    <Icon className={feature.iconClassName} />
                  </div>
                  <h3 className="mt-4 font-heading text-[15px] font-bold text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-textMuted">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          <article className="rounded-3xl bg-brand-primary p-8 text-center shadow-[0_20px_46px_rgba(7,7,34,0.18)]">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.08em] text-white/55">
              Valor único
            </p>
            <p className="mt-2 font-heading text-[clamp(2.8rem,5vw,3.2rem)] font-bold leading-none text-accent">
              $1.000.000
            </p>
            <a
              href="tel:+56990511579"
              className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-heading text-[14px] font-bold text-accentDark transition hover:brightness-95"
            >
              <span>Consultar por este servicio</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-[12px] leading-6 text-white/55">
              ⚠️ No incluye gastos de cementerio ni traslado de familiares al
              crematorio.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
