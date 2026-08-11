import Link from "next/link";

import { SUCURSALES } from "../../data/sucursales";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { MailIcon } from "../ui/icons/MailIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { PinIcon } from "../ui/icons/PinIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

const CONTACT_METHODS = [
  {
    title: "Llámenos directamente",
    description:
      "Respuesta inmediata. Disponibles 24/7 los 365 días del año.",
    href: "tel:+56990511579",
    label: "+56 9 90511579",
    icon: PhoneIcon,
    iconClassName: "bg-primaryBg text-primaryLight",
    isExternal: false,
  },
  {
    title: "WhatsApp",
    description:
      "Escríbanos en cualquier momento. Respondemos en menos de 10 minutos.",
    href: "https://wa.me/56990511579?text=Hola%2C+quisiera+m%C3%A1s+informaci%C3%B3n",
    label: "Abrir WhatsApp",
    icon: WhatsAppIcon,
    iconClassName: "bg-whatsapp text-white",
    isExternal: true,
  },
  {
    title: "Correo electrónico",
    description:
      "Para consultas no urgentes. Respondemos dentro de las 24 horas hábiles.",
    href: "mailto:info@funerariacubillos.cl",
    label: "info@funerariacubillos.cl",
    icon: MailIcon,
    iconClassName: "bg-primaryBg text-primaryLight",
    isExternal: false,
  },
] as const;

export default function ContactMethodCards() {
  return (
    <div className="max-w-[620px]">
      <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        Hablemos
      </p>
      <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-primaryLight">
        ¿Cómo podemos ayudarle?
      </h2>
      <p className="mt-4 text-[16px] leading-7 text-textMuted">
        Nuestro equipo está disponible las 24 horas para acompañarle en este
        momento. No dude en contactarnos por el medio que le sea más cómodo.
      </p>

      <div className="mt-8 space-y-4">
        {CONTACT_METHODS.map((method) => {
          const Icon = method.icon;

          return (
            <article
              key={method.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-[0_14px_34px_rgba(12,16,58,.08)]"
            >
              <div className="flex gap-4">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${method.iconClassName}`}
                >
                  <Icon className="size-[20px]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-[20px] font-bold text-primaryLight">
                    {method.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-textMuted">
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    target={method.isExternal ? "_blank" : undefined}
                    rel={method.isExternal ? "noreferrer" : undefined}
                    className="group mt-4 inline-flex items-center gap-2 font-heading text-[14px] font-bold text-primary transition hover:text-primaryLight"
                  >
                    <span>{method.label}</span>
                    <ArrowRightIcon className="size-[14px] transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <article className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-[0_14px_34px_rgba(12,16,58,.08)]">
        <h3 className="font-heading text-[20px] font-bold text-primaryLight">
          Nuestras sucursales
        </h3>

        <div className="mt-5 space-y-4">
          {SUCURSALES.map((sucursal) => (
            <div
              key={`${sucursal.name}-${sucursal.address}`}
              className="flex gap-3 rounded-[14px] bg-primaryBg/55 px-4 py-3"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-primaryLight shadow-sm">
                <PinIcon className="size-[15px]" />
              </div>
              <div>
                <p className="font-heading text-[15px] font-bold text-primaryLight">
                  {sucursal.name} - {sucursal.cityBadge}
                </p>
                <p className="mt-1 text-[14px] leading-6 text-textMuted">
                  {sucursal.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/sucursales"
          className="group mt-5 inline-flex items-center gap-2 font-heading text-[14px] font-bold text-primary transition hover:text-primaryLight"
        >
          <span>Ver sucursales</span>
          <ArrowRightIcon className="size-[14px] transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </article>
    </div>
  );
}
