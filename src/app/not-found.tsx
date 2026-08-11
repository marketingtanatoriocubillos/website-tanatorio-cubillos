import Link from "next/link";

import { ArrowRightIcon } from "../components/ui/icons/ArrowRightIcon";
import { HomeIcon } from "../components/ui/icons/HomeIcon";
import { PhoneIcon } from "../components/ui/icons/PhoneIcon";
import { ShieldIcon } from "../components/ui/icons/ShieldIcon";

const quickLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/planes", label: "Planes" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/sucursales", label: "Sucursales" },
] as const;

const primaryButtonClassName =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-heading text-[14px] font-bold transition";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-bgPage px-4 py-16 sm:px-6 md:px-8">
      <div className="max-w-[560px] text-center">
        <div className="relative mb-2 font-heading text-[7rem] font-bold leading-none text-primaryBg">
          404
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-primaryLight/40">
            <ShieldIcon className="size-16" />
          </div>
        </div>

        <h1 className="font-heading text-[1.6rem] font-bold text-primary">
          Página no encontrada
        </h1>
        <p className="mt-3 text-[15px] leading-[1.6] text-textMuted">
          La página que estás buscando no existe o fue movida. Si necesitas
          ayuda, estamos disponibles 24/7.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <Link
            href="/"
            className={`${primaryButtonClassName} bg-primary text-white hover:bg-primaryLight`}
          >
            <HomeIcon className="size-[14px]" />
            <span>Ir al inicio</span>
            <ArrowRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+56990511579"
            className={`${primaryButtonClassName} bg-accent text-accentDark hover:brightness-95`}
          >
            <PhoneIcon className="size-[14px]" />
            <span>Llamar ahora</span>
          </a>
        </div>

        <nav
          aria-label="Accesos utiles"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {quickLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-heading text-[13px] font-semibold text-primaryLight transition hover:underline"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
