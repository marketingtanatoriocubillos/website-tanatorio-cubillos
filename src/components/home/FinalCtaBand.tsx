import Link from "next/link";

const PHONE_HREF = "tel:+56990511579";

export default function FinalCtaBand() {
  return (
    <section className="border-t border-white/10 bg-primaryLight px-4 py-[14px] sm:px-6 md:px-8 lg:px-[100px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
        <p className="text-center font-body text-[14px] text-white sm:text-left">
          ¿Necesita atención inmediata? Estamos disponibles las 24 horas, los 365
          días del año.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[10px] sm:justify-end">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center rounded-full bg-accent px-[18px] py-2 font-heading text-[12px] font-bold text-accentDark transition hover:bg-accent/90"
          >
            Llamar ahora
          </a>

          <Link
            href="#contacto"
            className="inline-flex items-center rounded-full border-[1.5px] border-white/50 px-[18px] py-[7px] font-heading text-[12px] font-semibold text-white transition hover:border-white hover:bg-white/5"
          >
            Solicitar llamada
          </Link>
        </div>
      </div>
    </section>
  );
}
