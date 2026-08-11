"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Plan } from "../../lib/types";

interface PlanNavPillsProps {
  plans: Plan[];
  currentSlug: string;
  basePath?: "/planes" | "/planes-inmediatos";
}

export default function PlanNavPills({
  plans,
  currentSlug,
  basePath = "/planes",
}: PlanNavPillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateOverflow = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setShowLeftFade(container.scrollLeft > 8);
      setShowRightFade(container.scrollLeft < maxScrollLeft - 8);
    };

    updateOverflow();

    const resizeObserver = new ResizeObserver(updateOverflow);
    resizeObserver.observe(container);
    container.addEventListener("scroll", updateOverflow, { passive: true });
    window.addEventListener("resize", updateOverflow);

    return () => {
      resizeObserver.disconnect();
      container.removeEventListener("scroll", updateOverflow);
      window.removeEventListener("resize", updateOverflow);
    };
  }, []);

  const scrollByDirection = (direction: -1 | 1) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.scrollBy({
      left: direction * 240,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-y-0 left-0 z-[2] w-10 bg-[linear-gradient(to_right,white,transparent)] transition-opacity",
          showLeftFade ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-y-0 right-0 z-[2] w-10 bg-[linear-gradient(to_left,white,transparent)] transition-opacity",
          showRightFade ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <button
        type="button"
        aria-label="Ver planes anteriores"
        onClick={() => scrollByDirection(-1)}
        className={[
          "absolute left-0 top-1/2 z-[3] hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition md:flex",
          showLeftFade ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <span className="text-lg leading-none">‹</span>
      </button>

      <div
        ref={containerRef}
        className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <span className="mr-1 inline-flex shrink-0 items-center font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-textMuted">
          Planes:
        </span>
        {plans.map((plan) => {
          const isActive = plan.slug === currentSlug;

          return (
            <Link
              key={plan.slug}
              href={`${basePath}/${plan.slug}`}
              className={[
                "inline-flex shrink-0 items-center rounded-full border px-4 py-[9px] font-heading text-[13px] font-semibold transition",
                isActive
                  ? "border-primaryLight bg-primaryLight text-white"
                  : "border-border bg-white text-textMuted hover:border-primaryLight hover:bg-primaryBg hover:text-primaryLight",
              ].join(" ")}
            >
              {plan.name}
            </Link>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Ver más planes"
        onClick={() => scrollByDirection(1)}
        className={[
          "absolute right-0 top-1/2 z-[3] hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition md:flex",
          showRightFade ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <span className="text-lg leading-none">›</span>
      </button>
    </div>
  );
}
