import Image from "next/image";

import { NOSOTROS_HISTORY_PARAGRAPHS } from "./nosotrosData";

export default function NosotrosHistorySection() {
  return (
    <section className="bg-bgPage px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center lg:gap-16">
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Nuestra historia
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-primaryLight">
            Fundada con vocación de servicio
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-7 text-textMuted">
            {NOSOTROS_HISTORY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {/* TODO: agregar más historia cuando el cliente entregue contenido adicional. */}
        </div>

        <div className="overflow-hidden rounded-[20px] border border-border bg-white">
          <div className="relative h-[320px]">
            <Image
              src="/assets/img/instalaciones-iquique.jpg"
              alt="Instalaciones Funeraria Cubillos Iquique"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
