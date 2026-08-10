import type { ComponentType, SVGProps } from "react";

import { CrematoriumIcon } from "../ui/icons/CrematoriumIcon";
import { FleetIcon } from "../ui/icons/FleetIcon";

interface DiferenciadorItem {
  title: string;
  description: string;
  badge: string;
  stat?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName?: string;
}

const DIFERENCIADORES: DiferenciadorItem[] = [
  {
    stat: "24/7",
    title: "Atencion inmediata",
    description:
      "Disponibles todos los dias del ano, a cualquier hora. Nuestro equipo responde en minutos.",
    badge: "365 dias al ano",
  },
  {
    icon: FleetIcon,
    iconClassName: "h-[60px] w-[60px]",
    title: "Flota Exclusiva",
    description:
      "Vehiculos de ultima generacion para garantizar un cortejo solemne, elegante y respetuoso.",
    badge: "Flota exclusiva en la region",
  },
  {
    icon: CrematoriumIcon,
    iconClassName: "h-12 w-12",
    title: "Crematorio propio",
    description:
      "Instalaciones propias en Pozo Almonte con tecnologia de ultima generacion y acompanamiento total.",
    badge: "Unico crematorio en Tarapaca",
  },
  {
    stat: "+70",
    title: "Anos de Homenajeria",
    description:
      "Mas de tres decadas acompanando a las familias de Tarapaca con dignidad y compromiso.",
    badge: "Desde 1990 en la region",
  },
];

export default function DiferenciadoresSection() {
  return (
    <section className="bg-brand-primary px-4 py-[72px] sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Por que elegirnos
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-white">
            Lo que nos distingue
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 items-stretch gap-y-8 md:grid-cols-4">
          {DIFERENCIADORES.map(
            ({ title, description, badge, stat, icon: Icon, iconClassName }) => (
              <article
                key={title}
                className="flex flex-col items-center px-4 text-center sm:px-8"
              >
                <div className="flex h-[72px] items-center justify-center text-accent">
                  {stat ? (
                    <span className="font-heading text-[52px] font-bold leading-none">
                      {stat}
                    </span>
                  ) : Icon ? (
                    <Icon className={iconClassName} />
                  ) : null}
                </div>
                <h3 className="mt-2 font-heading text-[18px] font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-white/65">
                  {description}
                </p>
                <span className="mt-[14px] inline-flex rounded-full border border-accent px-[14px] py-1 text-[11px] font-semibold text-accent">
                  {badge}
                </span>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
