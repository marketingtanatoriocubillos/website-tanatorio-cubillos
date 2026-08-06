import Image from "next/image";
import Link from "next/link";

import { LEGAL_LINKS, SERVICE_LINKS, SOCIAL_LINKS } from "../../data/navigation";
import { PLANES } from "../../data/planes";
import type { FooterColumn, SocialLink } from "../../lib/types";
import { FacebookIcon } from "../ui/icons/FacebookIcon";
import { InstagramIcon } from "../ui/icons/InstagramIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

const BRANCH_DETAILS = [
  {
    name: "Tanatorio Cubillos – Iquique",
    address: "Caleta Río Seco 2155, esq. Francisco Bilbao",
  },
  {
    name: "Funeraria Cubillos – Iquique",
    address: "Serrano 999, esq. Juan Martínez",
  },
  {
    name: "Funeraria Cubillos – Alto Hospicio",
    address: "Cerro Esmeralda 3636, Alto Hospicio",
  },
  {
    name: "Crematorio Cubillos – Pozo Almonte",
    address: "Aguada de Canchones s/n, Sitio 35, La Huayca",
  },
];

const footerColumns: FooterColumn[] = [
  {
    title: "Servicios",
    links: [
      ...SERVICE_LINKS,
      { label: "Carrozas Exclusivas", href: "/servicios#carrozas" },
    ],
  },
  {
    title: "Planes",
    links: PLANES.map((plan) => ({
      label: plan.name,
      href: `/planes/${plan.slug}`,
    })),
  },
];

function SocialIcon({ platform }: Pick<SocialLink, "platform">) {
  switch (platform) {
    case "facebook":
      return <FacebookIcon className="size-4" />;
    case "instagram":
      return <InstagramIcon className="size-4" />;
    case "whatsapp":
      return <WhatsAppIcon className="size-4" />;
    default:
      return null;
  }
}

const footerHeadingClassName =
  "font-heading text-lg font-bold after:mt-1.5 after:block after:h-[2px] after:w-[28px] after:content-[''] after:bg-brand-accent";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.9fr_1fr_1.15fr] lg:px-8">
        <div className="space-y-5">
          <div className="space-y-4">
            <Image
              src="/assets/img/logo-cubillos-blanco.svg"
              alt="Funeraria Cubillos"
              width={220}
              height={70}
              className="h-auto w-full max-w-[220px]"
            />
            <div>
              <p className="font-body text-sm text-white/75">
                Dignidad y respeto en cada servicio
              </p>
            </div>
          </div>

          <div className="space-y-3 font-body text-sm text-white/80">
            <p>Caleta Río Seco 2155, esq. Francisco Bilbao</p>
            <a href="tel:+56990511579" className="block transition hover:text-brand-accent">
              +56 9 90511579
            </a>
            <a
              href="mailto:info@funerariacubillos.cl"
              className="block transition hover:text-brand-accent"
            >
              info@funerariacubillos.cl
            </a>
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.platform}
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-brand-accent hover:bg-brand-accent hover:text-brand-primary"
              >
                <SocialIcon platform={link.platform} />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className={footerHeadingClassName}>{column.title}</h2>
            {column.links?.length ? (
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/80 transition hover:text-brand-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            {column.items?.length ? (
              <ul className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <li key={item} className="font-body text-sm leading-6 text-white/80">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}

        <div>
          <h2 className={footerHeadingClassName}>Sucursales</h2>
          <ul className="mt-4 space-y-3">
            {BRANCH_DETAILS.map((branch) => (
              <li key={branch.name} className="space-y-1">
                <p className="font-heading text-[13px] font-bold text-white">
                  {branch.name}
                </p>
                <p className="font-body text-[12px] leading-5 text-white/[.55]">
                  {branch.address}
                </p>
              </li>
            ))}
          </ul>

          <h2 className={`${footerHeadingClassName} mt-8`}>Legal</h2>
          <ul className="mt-4 space-y-3">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-white/80 transition hover:text-brand-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 font-body text-sm text-white/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © Copyright 2026 - Representante legal: Jorge Mario Cubillos
            Quezada Rut: 10.981.883-6 - Funeraria Cubillos
          </p>
          <p className="font-body italic">
            Diseñado con cuidado para las familias de Tarapacá
          </p>
        </div>
      </div>
    </footer>
  );
}
