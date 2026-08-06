import type { ComponentType, SVGProps } from "react";

import { DocumentIcon } from "../ui/icons/DocumentIcon";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { VehicleIcon } from "../ui/icons/VehicleIcon";

type HeroStat = {
  value?: string;
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

const heroStats: HeroStat[] = [
  { value: "+70", label: "anos de experiencia" },
  { value: "4", label: "sucursales" },
  { value: "24/7", label: "atencion inmediata" },
  { label: "Flota Exclusiva", icon: VehicleIcon },
];

const heroButtons = [
  {
    href: "tel:+56990511579",
    label: "Llamar ahora - 24h",
    variant: "primary" as const,
    icon: PhoneIcon,
  },
  {
    href: "#planes",
    label: "Ver nuestros planes",
    variant: "secondary" as const,
    icon: DocumentIcon,
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-primary">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/img/hero-home-poster.jpg"
          className="h-full w-full object-cover"
        >
          {/* TODO: confirmar que el usuario haya copiado los archivos de video */}
          <source
            src="/assets/img/hero-home-mobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
          <source src="/assets/img/hero-home.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:14px_14px] opacity-[0.06]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-40 pt-24 text-center sm:px-8 md:pb-36 md:pt-28">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-accent">
          Iquique · Alto Hospicio · Pozo Almonte
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-[clamp(2.2rem,5vw,3.2rem)] font-bold leading-[1.1] text-white">
          La despedida que
          <br className="hidden md:block" /> su familia merece
        </h1>
        <p className="mt-4 max-w-[520px] text-[17px] leading-7 text-white">
          Servicio funerario, cremacion y traslados con atencion personalizada
          las 24 horas del dia, los 365 dias del ano.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {heroButtons.map(({ href, label, variant, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className={[
                "group inline-flex min-h-12 items-center gap-2 rounded-full px-7 py-3 font-heading text-[15px] font-bold transition duration-200 hover:scale-[1.02]",
                variant === "primary"
                  ? "bg-brand-accent text-accentDark hover:brightness-95"
                  : "border-2 border-white/50 bg-transparent text-white hover:bg-white/10",
              ].join(" ")}
            >
              <Icon className="size-[17px]" />
              <span>{label}</span>
              <ArrowRightIcon className="size-[17px] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {heroStats.map(({ value, label, icon: Icon }, index) => (
            <div
              key={label}
              className={[
                "flex min-h-24 flex-col items-center justify-center px-4 py-4 text-center",
                index > 0 ? "border-l border-white/10" : "",
              ].join(" ")}
            >
              {Icon ? (
                <Icon className="mb-1 size-6 text-brand-accent" />
              ) : (
                <span className="font-heading text-[20px] font-bold text-brand-accent">
                  {value}
                </span>
              )}
              <span className="mt-1 font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
