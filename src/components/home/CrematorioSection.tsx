import Link from "next/link";

import ImageCarousel from "../ui/ImageCarousel";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { CheckIcon } from "../ui/icons/CheckIcon";

const CREMATORIO_FEATURES = [
  "Instalaciones propias en La Huayca, Pozo Almonte",
  "Ánfora estándar incluida, opciones premium disponibles",
  "Disponible como servicio inmediato o plan de previsión",
] as const;

const CREMATORIO_IMAGES = [
  {
    src: "/assets/img/crematorio-pozo-almonte.jpg",
    alt: "Crematorio Cubillos en Pozo Almonte, vista exterior",
  },
  {
    src: "/assets/img/crematorio-pozo-almonte-2.jpg",
    alt: "Instalaciones del Crematorio Cubillos en Pozo Almonte",
  },
  {
    src: "/assets/img/crematorio-pozo-almonte-3.jpg",
    alt: "Espacios del Crematorio Cubillos para acompañamiento familiar",
  },
] as const;

export default function CrematorioSection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:14px_14px]"
      />

      <div className="relative z-[1] mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
            Cremación en Tarapacá
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-white">
            El único crematorio propio de la región
          </h2>
          <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-white/70">
            Crematorio Cubillos en Pozo Almonte es la única instalación de
            cremación propia en la Región de Tarapacá. Esto nos permite
            garantizar dignidad, privacidad y tiempos de respuesta que otras
            funerarias no pueden ofrecer.
          </p>

          <div className="mt-6 space-y-3">
            {CREMATORIO_FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                <p className="text-[14px] leading-6 text-white/80">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/crematorio"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-heading text-[14px] font-bold text-accentDark transition hover:brightness-95"
            >
              <span>Conocer el crematorio</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/planes/huella"
              className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-6 py-3 font-heading text-[14px] font-semibold text-white/80 transition hover:border-white/45 hover:text-white"
            >
              Ver Plan Huella
            </Link>
          </div>
        </div>

        <ImageCarousel
          images={[...CREMATORIO_IMAGES]}
          className="rounded-[28px]"
          autoPlay={true}
          autoPlayInterval={5000}
          autoPlayStartDelay={2000}
        />
      </div>
    </section>
  );
}
