"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { PLANES } from "../../data/planes";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import PlanCard, { type PlanesTab } from "./PlanCard";

const COPY_BY_TAB: Record<
  PlanesTab,
  { eyebrow: string; title: string; subtitle: string; ctaHref: string }
> = {
  futuro: {
    eyebrow: "Prevision Funeraria",
    title: "Un plan para cada familia",
    subtitle:
      "Elige el plan que mejor se adapte a tu situacion. Todos incluyen atencion 24/7 y tramitacion integral.",
    ctaHref: "/planes",
  },
  inmediata: {
    eyebrow: "Acompanamiento Inmediato",
    title: "Estamos contigo en este momento",
    subtitle:
      "Planes disponibles para atencion inmediata, con equipo 24/7 acompanandote desde el primer llamado.",
    ctaHref: "/planes-inmediatos",
  },
};

export default function PlanesSection() {
  const [activeTab, setActiveTab] = useState<PlanesTab>("futuro");
  const segmentedRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const futureButtonRef = useRef<HTMLButtonElement>(null);
  const immediateButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const segmented = segmentedRef.current;
    const pill = pillRef.current;
    const activeButton =
      activeTab === "futuro" ? futureButtonRef.current : immediateButtonRef.current;

    if (!segmented || !pill || !activeButton) {
      return;
    }

    const updatePillPosition = () => {
      const segmentedRect = segmented.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      pill.style.width = `${buttonRect.width}px`;
      pill.style.left = `${buttonRect.left - segmentedRect.left}px`;
      pill.style.opacity = "1";
    };

    updatePillPosition();

    const resizeObserver = new ResizeObserver(updatePillPosition);
    resizeObserver.observe(segmented);
    resizeObserver.observe(activeButton);

    window.addEventListener("resize", updatePillPosition);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePillPosition);
    };
  }, [activeTab]);

  const copy = COPY_BY_TAB[activeTab];

  return (
    <section className="bg-bgPage px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <div
            ref={segmentedRef}
            className="relative inline-grid grid-cols-2 overflow-hidden rounded-full border border-primaryBg bg-primaryBg p-1 shadow-[inset_0_0_0_1px_rgba(217,221,242,1)]"
          >
            <div
              ref={pillRef}
              className="absolute top-1 bottom-1 left-1 rounded-full bg-brand-primary opacity-0 shadow-[0_8px_24px_rgba(30,30,110,.18)] transition-[left,width,opacity] duration-250 ease-in-out"
              aria-hidden="true"
            />

            <button
              ref={immediateButtonRef}
              type="button"
              onClick={() => setActiveTab("inmediata")}
              className={`relative z-10 min-w-[148px] rounded-full px-5 py-3 font-heading text-[13px] font-bold transition-colors sm:min-w-[190px] ${
                activeTab === "inmediata" ? "text-white" : "text-primaryLight"
              }`}
            >
              Atencion Inmediata
            </button>

            <button
              ref={futureButtonRef}
              type="button"
              onClick={() => setActiveTab("futuro")}
              className={`relative z-10 min-w-[148px] rounded-full px-5 py-3 font-heading text-[13px] font-bold transition-colors sm:min-w-[190px] ${
                activeTab === "futuro" ? "text-white" : "text-primaryLight"
              }`}
            >
              Venta Futuro
            </button>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[760px] text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-primaryLight">
            {copy.title}
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-textMuted">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-[10px] md:grid-cols-4 md:gap-4">
          {PLANES.map((plan) => (
            <PlanCard key={plan.slug} plan={plan} activeTab={activeTab} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={copy.ctaHref}
            className="group inline-flex min-h-12 items-center gap-2 rounded-full border-[1.5px] border-primaryLight px-7 py-3 font-heading text-[14px] font-bold text-primaryLight transition hover:bg-primaryBg"
          >
            <span>Ver todos los planes y precios</span>
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
