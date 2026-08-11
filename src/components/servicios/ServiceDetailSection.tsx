import Image from "next/image";
import Link from "next/link";

import type { ServiceDetailSection as ServiceDetailSectionType } from "../../lib/types";
import ImageCarousel from "../ui/ImageCarousel";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { CheckIcon } from "../ui/icons/CheckIcon";

interface ServiceDetailSectionProps {
  section: ServiceDetailSectionType;
  carouselAutoPlayStartDelay?: number;
}

function ServiceActionLink({
  href,
  label,
  variant,
}: ServiceDetailSectionType["actions"][number]) {
  const className = [
    "group inline-flex min-h-12 items-center gap-2 rounded-full px-6 py-3 font-heading text-[14px] font-bold transition duration-200",
    variant === "solid"
      ? "bg-brand-accent text-accentDark hover:brightness-95"
      : "border-[1.5px] border-primaryLight text-primaryLight hover:bg-primaryBg",
  ].join(" ");

  const content = (
    <>
      <span>{label}</span>
      <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

export default function ServiceDetailSection({
  section,
  carouselAutoPlayStartDelay = 0,
}: ServiceDetailSectionProps) {
  return (
    <section
      id={section.id}
      className={`${section.bgClass} scroll-mt-[168px] px-4 py-16 sm:px-6 md:px-8 md:py-[72px] lg:scroll-mt-[196px]`}
    >
      <div
        className={[
          "mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16",
          section.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : "",
        ].join(" ")}
      >
        <div className="relative">
          {section.media.type === "single" ? (
            <div className="relative overflow-hidden rounded-[24px] bg-bgSoft shadow-[0_20px_55px_rgba(30,30,110,.08)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={section.media.src}
                  alt={section.media.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-body text-[11px] font-semibold text-text shadow-[0_8px_20px_rgba(30,30,110,.08)]">
                Imagen o foto referencial
              </span>
            </div>
          ) : (
            <ImageCarousel
              images={section.media.images.map((image) => ({
                src: image,
                alt: section.media.alt,
              }))}
              className="rounded-[24px] shadow-[0_20px_55px_rgba(30,30,110,.08)]"
              autoPlay={true}
              autoPlayInterval={5000}
              autoPlayStartDelay={carouselAutoPlayStartDelay}
            />
          )}
        </div>

        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            {section.sectionLabel}
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.1] text-text">
            {section.title}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-textMuted">
            {section.description}
          </p>

          {section.noteCard ? (
            <div className="mt-6 rounded-[22px] border border-border bg-white px-5 py-5 shadow-[0_14px_40px_rgba(30,30,110,.06)]">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-primaryLight">
                {section.noteCard.kicker}
              </p>
              <div className="mt-3 space-y-2">
                {section.noteCard.lines.map((line) => (
                  <p key={line} className="text-[14px] leading-6 text-text">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ) : null}

          {section.features.length > 0 ? (
            <div className="mt-6">
              <p className="font-heading text-[15px] font-bold text-text">
                Incluye
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {section.features.map((feature, index) => (
                  <div key={`${feature}-${index}`} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-primaryLight" />
                    <p className="text-[14px] leading-6 text-textMuted">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {section.actions.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {section.actions.map((action) => (
                <ServiceActionLink key={`${section.id}-${action.label}`} {...action} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
