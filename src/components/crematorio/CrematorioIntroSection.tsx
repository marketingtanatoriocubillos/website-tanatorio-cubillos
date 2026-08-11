import Image from "next/image";

import { CheckIcon } from "../ui/icons/CheckIcon";
import { CREMATORIO_INTRO_CHECKS } from "./crematorioData";

export default function CrematorioIntroSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-[60px]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primaryBg">
          <Image
            src="/assets/img/crematorio-pozo-almonte.jpg"
            alt="Crematorio Cubillos, instalaciones en Pozo Almonte"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            ¿Qué es la cremación?
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.15] text-primary">
            Un proceso digno, respetuoso y seguro
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-textMuted">
            La cremación es un método de disposición final del cuerpo que
            transforma los restos mortales en cenizas mediante calor. Es una
            opción elegida cada vez más por familias que valoran la simplicidad,
            la dignidad y la flexibilidad para honrar a sus seres queridos.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-textMuted">
            En Cubillos contamos con el único crematorio de instalación propia
            en la Región de Tarapacá, lo que nos permite ofrecer tiempos de
            respuesta, privacidad y control de calidad que no están disponibles
            en ningún otro servicio de la zona.
          </p>

          <div className="mt-6 space-y-3">
            {CREMATORIO_INTRO_CHECKS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-[18px] shrink-0 text-accent" />
                <p className="text-[14px] leading-6 text-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
