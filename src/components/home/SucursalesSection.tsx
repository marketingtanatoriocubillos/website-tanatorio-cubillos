import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { BranchTagIcon } from "../ui/icons/BranchTagIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { PinIcon } from "../ui/icons/PinIcon";
import { SUCURSALES } from "../../data/sucursales";

function getMapUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export default function SucursalesSection() {
  return (
    <section id="sucursales" className="bg-white px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Nuestras sucursales
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-primaryLight">
            Cerca de usted, siempre
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-textMuted">
            Contamos con 4 ubicaciones en la región de Tarapacá para atenderle
            donde nos necesite.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SUCURSALES.map(({ cityBadge, name, address, phone, homeTag }) => (
            <article
              key={`${name}-${cityBadge}`}
              className="overflow-hidden rounded-xl border border-border bg-white transition duration-200 hover:-translate-y-[2px] hover:border-primaryLight"
            >
              <div className="h-1 bg-primaryLight" />

              <div className="flex h-full flex-col p-[22px]">
                <span className="inline-flex w-fit rounded-full bg-primaryBg px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
                  {cityBadge}
                </span>

                <h3 className="mt-[10px] font-heading text-[16px] font-bold text-primaryLight">
                  {name}
                </h3>

                <div className="mt-3 flex flex-1 flex-col gap-2 text-textMuted">
                  <div className="flex items-start gap-2 text-[12px] leading-[1.55]">
                    <PinIcon className="mt-[1px] size-[14px] shrink-0 text-info" />
                    <p>{address}</p>
                  </div>

                  <div className="flex items-center gap-2 text-[12px] leading-[1.55]">
                    <PhoneIcon className="size-[14px] shrink-0 text-info" />
                    <p>{phone}</p>
                  </div>

                  {homeTag ? (
                    <div className="flex items-center gap-2 text-[11px] leading-[1.55]">
                      <BranchTagIcon className="size-[14px] shrink-0 text-info" />
                      <p>{homeTag}</p>
                    </div>
                  ) : null}
                </div>

                <div className="mt-[14px] border-t border-border pt-3">
                  <a
                    href={getMapUrl(address)}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-[5px] font-heading text-[12px] font-bold text-info transition hover:text-primaryLight"
                  >
                    <span>Ver en mapa</span>
                    <ArrowRightIcon className="size-[13px] transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
