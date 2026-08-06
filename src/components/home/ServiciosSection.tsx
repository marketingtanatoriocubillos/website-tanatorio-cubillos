import type { ComponentType, SVGProps } from "react";

import Link from "next/link";

import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { FileCheckIcon } from "../ui/icons/FileCheckIcon";
import { FlameIcon } from "../ui/icons/FlameIcon";
import { HeartIcon } from "../ui/icons/HeartIcon";
import { HomeIcon } from "../ui/icons/HomeIcon";
import { PeopleIcon } from "../ui/icons/PeopleIcon";
import { PlaneIcon } from "../ui/icons/PlaneIcon";

interface ServiceCard {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  featured?: boolean;
}

const serviceCards: ServiceCard[] = [
  {
    title: "Servicio Funerario",
    description:
      "Atencion completa y personalizada para honrar la memoria de su ser querido con acompanamiento en cada etapa del proceso.",
    href: "/servicios",
    linkLabel: "Conocer mas",
    icon: PeopleIcon,
    featured: true,
  },
  {
    title: "Cremacion",
    description:
      "Instalaciones apropiadas para despedir en el ultimo adios, con un proceso digno y transparente, respetando la memoria de su ser querido.",
    href: "/crematorio",
    linkLabel: "Ver mas",
    icon: FlameIcon,
  },
  {
    title: "Salas Velatorias",
    description:
      "Espacios acogedores y tranquilos disenados para el recogimiento familiar y el encuentro.",
    href: "/servicios#salas",
    linkLabel: "Ver mas",
    icon: HomeIcon,
  },
  {
    title: "Repatriacion y Traslados",
    description:
      "Coordinacion nacional e internacional con acompanamiento en cada etapa del proceso.",
    href: "/servicios#traslados",
    linkLabel: "Ver mas",
    icon: PlaneIcon,
  },
  {
    title: "Exhumacion y Reduccion",
    description:
      "Personal calificado para el traslado de restos con gestion legal completa. Cotizacion segun distancia.",
    href: "/servicios",
    linkLabel: "Consultar",
    icon: FileCheckIcon,
  },
  {
    title: "Prevision Funeraria",
    description:
      "Planifique con anticipacion y proteja a los suyos de decisiones dificiles en el futuro, con planes flexibles y a su medida.",
    href: "/planes",
    linkLabel: "Ver planes",
    icon: HeartIcon,
  },
];

export default function ServiciosSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Nuestros servicios
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-primaryLight">
            Acompanamiento integral,
            <br />
            desde el primer momento
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-textMuted">
            Contamos con la infraestructura y el equipo para acompanarlo en cada
            etapa con dignidad y profesionalismo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
          {serviceCards.map(
            ({ title, description, href, linkLabel, icon: Icon, featured }) => (
              <article
                key={title}
                className={[
                  "grid min-h-[260px] grid-rows-[auto_auto_1fr_auto] gap-3 rounded-xl px-[18px] py-[20px] transition duration-200",
                  featured
                    ? "cursor-pointer bg-brand-primary text-white hover:bg-primaryLight md:hover:-translate-y-[3px]"
                    : "border border-border border-l-[3px] border-l-primaryLight bg-white text-text hover:shadow-[0_8px_24px_rgba(30,30,110,.08)] md:hover:-translate-y-[3px]",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex size-11 items-center justify-center rounded-[10px]",
                    featured
                      ? "bg-white/12 text-brand-accent"
                      : "bg-primaryBg text-primaryLight",
                  ].join(" ")}
                >
                  <Icon className="size-[22px]" />
                </div>
                <h3
                  className={[
                    "font-heading text-[14px] font-bold",
                    featured ? "text-white" : "text-primary",
                  ].join(" ")}
                >
                  {title}
                </h3>
                <p
                  className={[
                    "text-[13px] leading-[1.55]",
                    featured ? "text-white/70" : "text-textMuted",
                  ].join(" ")}
                >
                  {description}
                </p>
                <Link
                  href={href}
                  className={[
                    "group mt-1 inline-flex items-center gap-2 self-end font-heading text-[12px] font-bold transition-colors",
                    featured
                      ? "text-brand-accent hover:text-brand-accent/85"
                      : "text-primaryLight hover:text-primary",
                  ].join(" ")}
                >
                  <span>{linkLabel}</span>
                  <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </article>
            ),
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/servicios"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full border-[1.5px] border-primaryLight px-7 py-3 font-heading text-[14px] font-bold text-primaryLight transition hover:bg-primaryBg"
          >
            <span>Ver todos los servicios</span>
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
