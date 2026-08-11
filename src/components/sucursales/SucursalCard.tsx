import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { ClockIcon } from "../ui/icons/ClockIcon";
import ImageCarousel from "../ui/ImageCarousel";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { PinIcon } from "../ui/icons/PinIcon";
import type { Sucursal } from "../../lib/types";

interface SucursalCardProps {
  sucursal: Sucursal;
}

const AVAILABILITY_LABEL = "Atención 24/7 — 365 días del año";

function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export default function SucursalCard({ sucursal }: SucursalCardProps) {
  const carouselImages = sucursal.images.map((src, index) => ({
    src,
    alt: `${sucursal.name} ${sucursal.cityBadge} - imagen ${index + 1}`,
  }));

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-white transition duration-200 hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)]">
      <div className="p-6 pb-5">
        <div className="mb-4 flex flex-col gap-[10px]">
          <span className="inline-flex w-fit rounded-full bg-primaryBg px-3 py-1.5 font-heading text-[12px] font-bold text-primaryLight">
            {sucursal.cityBadge}
          </span>
          <h2 className="font-heading text-[1.35rem] font-bold text-primaryLight">
            {sucursal.name}
          </h2>
        </div>

        <div className="flex flex-col gap-[10px] font-body text-[12.5px] leading-[1.5] text-textMuted">
          <div className="flex items-start gap-2">
            <PinIcon className="mt-[1px] size-[15px] shrink-0 text-info" />
            <span>{sucursal.address}</span>
          </div>

          <div className="flex items-start gap-2">
            <PhoneIcon className="mt-[1px] size-[15px] shrink-0 text-info" />
            <a
              href={formatPhoneHref(sucursal.phone)}
              className="transition hover:text-primaryLight"
            >
              {sucursal.phone}
            </a>
          </div>

          <div className="flex items-start gap-2">
            <ClockIcon className="mt-[1px] size-[15px] shrink-0 text-info" />
            <span>{AVAILABILITY_LABEL}</span>
          </div>
        </div>
      </div>

      <div className="mx-6 mb-5">
        <ImageCarousel images={carouselImages} />
      </div>

      <div className="mx-6 overflow-hidden rounded-xl border border-border">
        <iframe
          title={`Mapa de ${sucursal.name} en ${sucursal.cityBadge}`}
          src={sucursal.mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-[240px] w-full border-0"
        />
      </div>

      <div className="px-6 py-5">
        <a
          href={sucursal.mapLinkHref}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-[5px] font-heading text-[12px] font-bold text-info transition hover:text-primaryLight"
        >
          <span>Cómo llegar</span>
          <ArrowRightIcon className="size-[13px] transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
