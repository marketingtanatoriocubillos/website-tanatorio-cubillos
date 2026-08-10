import type { ComponentType, SVGProps } from "react";

import Link from "next/link";

import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { CheckIcon } from "../ui/icons/CheckIcon";
import { CreditCardIcon } from "../ui/icons/CreditCardIcon";
import { PeopleIcon } from "../ui/icons/PeopleIcon";
import { ShieldIcon } from "../ui/icons/ShieldIcon";

interface BenefitItem {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

interface StepItem {
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const BENEFITS: BenefitItem[] = [
  {
    title: "Precio congelado",
    description: "Pagas el valor actual. Sin reajustes ni sorpresas.",
    icon: ShieldIcon,
  },
  {
    title: "Hasta 36 cuotas",
    description: "Financiamiento flexible adaptado a tu presupuesto.",
    icon: CreditCardIcon,
  },
  {
    title: "Transferible a familiares directos",
    description: "Valido para conyuge, hijos, padres y hermanos.",
    icon: PeopleIcon,
  },
];

const STEPS: StepItem[] = [
  {
    number: "1",
    title: "Elige tu plan",
    description:
      "Selecciona el plan que se adapte a tu presupuesto y necesidades. Tenemos opciones desde $900.000.",
  },
  {
    number: "2",
    title: "Firmas el contrato",
    description:
      "Sin tramites complicados. Te asesoramos en persona o por telefono en cualquiera de nuestras sucursales.",
  },
  {
    number: "3",
    title: "Tu familia queda protegida",
    description:
      "El plan se activa desde el primer dia. Precio congelado, sin reajustes, sin sorpresas.",
    highlighted: true,
  },
];

export default function PrevisionSection() {
  return (
    <section className="bg-bgPage px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Prevision Funeraria
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-primary">
            Protege a tu familia hoy, con precio congelado
          </h2>
          <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-textMuted">
            Contratar un plan de prevision funeraria es la decision mas
            tranquilizadora que puedes tomar hoy. Tu familia no tendra que
            enfrentar gastos inesperados ni tomar decisiones dificiles en un
            momento sensible.
          </p>

          <div className="mt-6 space-y-[14px]">
            {BENEFITS.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primaryBg text-primaryLight">
                  <Icon className="size-[15px]" />
                </div>
                <div>
                  <h3 className="font-heading text-[14px] font-bold text-primary">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-[13px] leading-6 text-textMuted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/planes"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-primary px-7 py-3 font-heading text-[14px] font-bold text-white transition hover:bg-primaryLight"
            >
              <span>Ver planes y precios</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <article className="rounded-[20px] border border-border bg-white p-8">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-textMuted">
            Como funciona
          </p>

          <div className="mt-7">
            {STEPS.map(({ number, title, description, highlighted }, index) => (
              <div
                key={number}
                className={index === STEPS.length - 1 ? "flex gap-5" : "flex gap-5 pb-7"}
              >
                <div className="flex shrink-0 flex-col items-center">
                  <div
                    className={[
                      "flex size-10 items-center justify-center rounded-full font-heading text-[16px] font-bold",
                      highlighted
                        ? "bg-accent text-accentDark"
                        : "bg-brand-primary text-accent",
                    ].join(" ")}
                  >
                    {number}
                  </div>
                  {index !== STEPS.length - 1 ? (
                    <div className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
                  ) : null}
                </div>

                <div className="pt-2">
                  <h3 className="font-heading text-[15px] font-bold text-primary">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-textMuted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-2 border-t border-border pt-5">
            <CheckIcon className="size-[15px] text-primaryLight" />
            <p className="text-[13px] text-textMuted">
              Todo el proceso toma menos de 30 minutos.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
