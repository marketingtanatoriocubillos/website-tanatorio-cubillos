import Link from "next/link";

import ImageCarousel from "../ui/ImageCarousel";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import TestimoniosCarousel from "./TestimoniosCarousel";

interface StatItem {
  value: string;
  label: string;
  highlighted?: boolean;
}

const NOSOTROS_IMAGES = [
  // TODO: confirmar que el usuario copió las imágenes al proyecto.
  {
    src: "/assets/img/quienes-somos.png",
    alt: "Tanatorio Cubillos, instalaciones principales",
  },
  {
    src: "/assets/img/quienes-somos-2.jpg",
    alt: "Espacios interiores de Funeraria Cubillos",
  },
  {
    src: "/assets/img/quienes-somos-3.jpg",
    alt: "Atención y acompañamiento en Funeraria Cubillos",
  },
] as const;

const STATS: StatItem[] = [
  { value: "+70", label: "años de experiencia" },
  { value: "4", label: "sucursales" },
  { value: "+40.000", label: "familias atendidas" },
  { value: "1°", label: "crematorio en Tarapacá", highlighted: true },
];

export default function NosotrosSection() {
  return (
    <section
      id="nosotros"
      className="bg-[#F5F0E8] px-4 py-[72px] sm:px-6 md:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[60px]">
          <ImageCarousel
            images={[...NOSOTROS_IMAGES]}
            autoPlay={true}
            autoPlayInterval={5000}
            autoPlayStartDelay={0}
          />

          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
              Quiénes somos
            </p>
            <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.15] text-primaryLight">
              Más de 70 años cuidando a las familias del norte de Chile
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-textMuted">
              Funeraria Cubillos nació con el compromiso de brindar un servicio
              funerario digno, cálido y profesional para las familias de la
              región de Tarapacá.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-textMuted">
              Contamos con instalaciones propias, flota exclusiva Mercedes Benz
              y un crematorio en Pozo Almonte - todo pensado para acompañarlo
              en el momento más difícil.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {STATS.map(({ value, label, highlighted }) => (
                <article
                  key={label}
                  className="rounded-xl bg-white px-[14px] py-[14px] text-center"
                >
                  <p
                    className={[
                      "font-heading text-[22px] font-bold",
                      highlighted ? "text-accent" : "text-primaryLight",
                    ].join(" ")}
                  >
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-textMuted">
                    {label}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 font-heading text-[14px] font-bold text-info transition hover:text-primaryLight"
              >
                <span>Conocer nuestra historia</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <TestimoniosCarousel />
      </div>
    </section>
  );
}
