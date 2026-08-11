export default function ServiciosHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1E1E6E_0%,#2A2A88_60%,#1E1E6E_100%)] px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:14px_14px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,transparent,theme(colors.accent)_30%,theme(colors.accent)_70%,transparent)]"
      />

      <div className="relative z-[1] mx-auto max-w-[1200px] text-center">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
          Acompañamiento integral
        </p>
        <h1 className="mt-4 font-heading text-[clamp(2.1rem,4vw,3rem)] font-bold leading-[1.08] text-white">
          Todos nuestros{" "}
          <span className="text-brand-accent">servicios funerarios</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-7 text-white/72">
          Contamos con la infraestructura y el equipo para acompañarlo en cada
          etapa con dignidad, respeto y profesionalismo. Atención 24/7 los 365
          días del año.
        </p>
      </div>
    </section>
  );
}
