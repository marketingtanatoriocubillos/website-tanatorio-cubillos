import { NOSOTROS_VALUES } from "./nosotrosData";

export default function NosotrosValuesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Nuestros valores
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-primaryLight">
            Lo que nos guía en cada servicio
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {NOSOTROS_VALUES.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl bg-bgSoft p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primaryBg text-primaryLight">
                <Icon className="size-[22px]" />
              </div>
              <h3 className="mt-5 font-heading text-[18px] font-bold text-primaryLight">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-textMuted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
