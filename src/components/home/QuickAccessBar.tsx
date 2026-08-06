import type { ComponentType, SVGProps } from "react";

import { DocumentIcon } from "../ui/icons/DocumentIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { PinIcon } from "../ui/icons/PinIcon";

type QuickAccessItem = {
  href: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tileClassName: string;
  iconClassName: string;
  titleClassName: string;
};

const quickAccessItems: QuickAccessItem[] = [
  {
    href: "tel:+56990511579",
    title: "Necesito atencion ahora",
    description: "Te comunicamos con un ejecutivo en minutos",
    icon: PhoneIcon,
    tileClassName: "bg-[#FFF8EE]",
    iconClassName: "bg-brand-accent text-accentDark",
    titleClassName: "text-accentDark",
  },
  {
    href: "#planes",
    title: "Cotizar un plan",
    description: "Prevision Funeraria",
    icon: DocumentIcon,
    tileClassName: "bg-white hover:bg-bgSoft",
    iconClassName: "bg-primaryBg text-primaryLight",
    titleClassName: "text-primaryLight",
  },
  {
    href: "#sucursales",
    title: "Encontrar sucursal",
    description: "Iquique · Alto Hospicio · Pozo Almonte",
    icon: PinIcon,
    tileClassName: "bg-white hover:bg-bgSoft",
    iconClassName: "bg-primaryBg text-primaryLight",
    titleClassName: "text-primaryLight",
  },
];

export default function QuickAccessBar() {
  return (
    <section className="border-b border-border bg-white shadow-[0_4px_12px_rgba(0,0,0,.05)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden md:grid-cols-[160px_minmax(0,1fr)]">
        <div className="hidden items-center justify-center border-b border-border px-6 py-5 md:flex md:justify-start md:border-b-0 md:border-r-2">
          <span className="font-heading text-[12px] font-bold uppercase leading-[1.3] tracking-[0.1em] text-primaryLight md:text-left">
            Accesos
            <br />
            rapidos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {quickAccessItems.map(
            ({
              href,
              title,
              description,
              icon: Icon,
              tileClassName,
              iconClassName,
              titleClassName,
            }) => (
              <a
                key={title}
                href={href}
                className={[
                  "flex items-center gap-4 border-b border-border px-6 py-5 transition last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0",
                  tileClassName,
                ].join(" ")}
              >
                <span
                  className={[
                    "flex size-11 shrink-0 items-center justify-center rounded-[10px]",
                    iconClassName,
                  ].join(" ")}
                >
                  <Icon className="size-[22px]" />
                </span>
                <span className="min-w-0">
                  <span
                    className={[
                      "block font-heading text-[13px] font-bold",
                      titleClassName,
                    ].join(" ")}
                  >
                    {title}
                  </span>
                  <span className="mt-1 block text-[11px] leading-4 text-textMuted">
                    {description}
                  </span>
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
