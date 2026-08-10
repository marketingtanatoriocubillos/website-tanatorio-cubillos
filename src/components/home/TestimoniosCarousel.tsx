"use client";

import { useEffect, useRef, useState } from "react";

import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { StarIcon } from "../ui/icons/StarIcon";

interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

interface LayoutState {
  perPage: number;
  maxIndex: number;
  cardWidth: number;
  gap: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"En el momento más difícil, Cubillos estuvo presente en todo momento. Nos orientaron, tramitaron todo y nos acompañaron con mucho respeto."',
    name: "Familia Rodríguez",
    city: "Iquique",
  },
  {
    quote:
      '"Contratamos el plan de previsión hace dos años. Cuando llegó el momento, solo llamamos y ellos se encargaron de absolutamente todo."',
    name: "Familia Tapia",
    city: "Alto Hospicio",
  },
  {
    quote:
      '"El servicio de cremación fue impecable. Profesionales, respetuosos y con instalaciones propias. Sin duda la mejor decisión que tomamos."',
    name: "Familia Morales",
    city: "Pozo Almonte",
  },
  {
    quote:
      '"Nos atendieron a las 3 de la mañana sin ninguna demora. Esa disponibilidad en un momento tan difícil vale más que cualquier cosa."',
    name: "Familia Contreras",
    city: "Iquique",
  },
  {
    quote:
      '"El traslado desde Santiago fue rápido y sin complicaciones. Cubillos coordinó todo y nosotros solo tuvimos que acompañar a nuestra madre."',
    name: "Familia Vega",
    city: "Alto Hospicio",
  },
  {
    quote:
      '"Contraté el plan para mis padres hace tres años. La tranquilidad que eso me da no tiene precio. Gracias por la orientación tan clara."',
    name: "Claudia Fernández",
    city: "Pozo Almonte",
  },
];

export default function TestimoniosCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [layout, setLayout] = useState<LayoutState>({
    perPage: 3,
    maxIndex: Math.max(0, TESTIMONIALS.length - 3),
    cardWidth: 0,
    gap: 20,
  });

  useEffect(() => {
    const updateLayout = () => {
      const container = containerRef.current;
      const track = trackRef.current;

      if (!container || !track) {
        return;
      }

      const isMobile = window.innerWidth < 768;
      const perPage = isMobile ? 1 : 3;
      const gap = isMobile ? 0 : 20;
      const maxIndex = Math.max(0, TESTIMONIALS.length - perPage);
      const containerWidth = container.getBoundingClientRect().width;
      const cardWidth = (containerWidth - gap * (perPage - 1)) / perPage;
      const clampedIndex = Math.max(0, Math.min(activeIndex, maxIndex));
      const cards = Array.from(track.children) as HTMLDivElement[];

      cards.forEach((card, index) => {
        card.style.minWidth = `${cardWidth}px`;
        card.style.marginRight =
          index < TESTIMONIALS.length - 1 ? `${gap}px` : "0px";
      });

      track.style.transform = `translateX(-${clampedIndex * (cardWidth + gap)}px)`;

      setLayout({ perPage, maxIndex, cardWidth, gap });
      setActiveIndex(clampedIndex);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, [activeIndex]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || layout.cardWidth === 0) {
      return;
    }

    track.style.transform = `translateX(-${activeIndex * (layout.cardWidth + layout.gap)}px)`;
  }, [activeIndex, layout.cardWidth, layout.gap]);

  useEffect(() => {
    if (layout.maxIndex === 0 || isPaused) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let intervalId = 0;

    const advance = () => {
      setActiveIndex((currentIndex) =>
        currentIndex >= layout.maxIndex ? 0 : currentIndex + 1,
      );
    };

    const timeoutId = window.setTimeout(() => {
      advance();
      intervalId = window.setInterval(advance, 5000);
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId > 0) {
        window.clearInterval(intervalId);
      }
    };
  }, [isPaused, layout.maxIndex]);

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, layout.maxIndex)));
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      className="mx-auto mt-12 max-w-[1200px]"
    >
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Testimonio anterior"
          disabled={activeIndex === 0}
          className="absolute -left-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-border bg-white text-primary shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition hover:border-primaryLight disabled:cursor-not-allowed disabled:border-border disabled:text-primary/40 md:flex"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Siguiente testimonio"
          disabled={activeIndex === layout.maxIndex}
          className="absolute -right-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-border bg-white text-primary shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition hover:border-primaryLight disabled:cursor-not-allowed disabled:border-border disabled:text-primary/40 md:flex"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>

        <div className="overflow-hidden rounded-2xl">
          <div
            ref={trackRef}
            className="flex transition-transform duration-300 ease-in-out will-change-transform"
          >
            {TESTIMONIALS.map(({ quote, name, city }) => (
              <article
                key={`${name}-${city}`}
                className="rounded-2xl bg-white p-7"
              >
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon key={index} className="h-[14px] w-[14px]" />
                  ))}
                </div>
                <p className="text-[14px] leading-7 text-text">{quote}</p>
                <div className="mt-4">
                  <p className="font-heading text-[13px] font-bold text-primary">
                    {name}
                  </p>
                  <p className="text-[12px] text-textSubtle">{city}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: layout.maxIndex + 1 }, (_, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
                className={[
                  "h-2 w-2 rounded-full transition-colors duration-200",
                  isActive ? "bg-primary" : "bg-[#D0D0D0] hover:bg-textSubtle",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
