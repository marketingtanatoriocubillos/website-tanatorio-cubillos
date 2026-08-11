"use client";

import Image from "next/image";
import { useState } from "react";

import type { Plan } from "../../lib/types";

interface PlanGalleryProps {
  gallery: Plan["gallery"];
  alt: string;
}

export default function PlanGallery({ gallery, alt }: PlanGalleryProps) {
  const [activeImage, setActiveImage] = useState(gallery.images[0]);

  return (
    <section className="rounded-[24px] border border-border bg-white p-6">
      <span className="inline-flex rounded-full bg-bgPage px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
        {gallery.sectionLabel}
      </span>
      <h2 className="mt-4 font-heading text-[1.5rem] font-bold text-primary">
        {gallery.title}
      </h2>

      <div className="mt-6">
        <div className="relative aspect-[3/2] overflow-hidden rounded-[18px] border border-borderWarm bg-bgPage">
          <Image
            src={activeImage}
            alt={alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 760px, 100vw"
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold text-white">
            Foto referencial
          </span>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {gallery.images.map((image, index) => {
            const isActive = image === activeImage;

            return (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(image)}
                className={[
                  "relative h-[68px] w-[92px] shrink-0 overflow-hidden rounded-xl border-2 transition",
                  isActive ? "border-accent" : "border-transparent",
                ].join(" ")}
              >
                <Image
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="92px"
                />
              </button>
            );
          })}
        </div>
      </div>

      {gallery.type === "ataud" && gallery.specs ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.specs.map((spec) => (
            <div
              key={`${spec.label}-${spec.value}`}
              className="rounded-[16px] border border-borderWarm bg-bgPage p-4"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-textSubtle">
                {spec.label}
              </div>
              <div className="mt-1 font-heading text-[15px] font-bold text-primary">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
