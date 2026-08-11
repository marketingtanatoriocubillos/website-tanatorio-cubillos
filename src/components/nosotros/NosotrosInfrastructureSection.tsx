import { NOSOTROS_INFRASTRUCTURE_ITEMS } from "./nosotrosData";

export default function NosotrosInfrastructureSection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:14px_14px]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
            Infraestructura propia
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-white">
            Todo bajo nuestro control para garantizar calidad
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {NOSOTROS_INFRASTRUCTURE_ITEMS.map(
            ({ title, description, icon: Icon, iconClassName }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/12 bg-white/[0.07] p-7"
              >
                <div className="flex h-10 items-center text-accent">
                  <Icon className={iconClassName ?? "size-8"} />
                </div>
                <h3 className="mt-4 font-heading text-[15px] font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-white/65">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
