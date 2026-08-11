export default function NosotrosHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1E1E6E_0%,#2A2A88_60%,#1E1E6E_100%)] px-4 py-[72px] sm:px-6 md:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:14px_14px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
      />

      <div className="relative mx-auto max-w-[1200px] text-center">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
          Funeraria y Crematorio Cubillos
        </p>
        <h1 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.15rem)] font-bold leading-[1.08] text-white">
          Más de 30 años{" "}
          <span className="text-accent">cuidando a las familias</span>
          <br />
          del norte de Chile
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-7 text-white/72">
          Nacimos con el compromiso de brindar un servicio funerario digno,
          cálido y profesional para las familias de la Región de Tarapacá.
        </p>
      </div>
    </section>
  );
}
