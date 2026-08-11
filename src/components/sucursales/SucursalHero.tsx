export default function SucursalHero() {
  return (
    <section className="overflow-hidden bg-brand-primary px-4 py-16 text-center sm:px-6 md:px-8 md:py-[64px]">
      <div className="mx-auto max-w-[760px]">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Tarapacá · Región
        </p>
        <h1 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.2rem)] font-bold leading-[1.08] text-bgCard">
          Cerca de usted,
          <br />
          siempre
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] font-body text-[17px] leading-[1.6] text-white/70">
          4 sucursales en Iquique, Alto Hospicio y Pozo Almonte. Atención 24
          horas, los 365 días del año.
        </p>
      </div>
    </section>
  );
}
