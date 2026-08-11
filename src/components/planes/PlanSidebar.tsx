"use client";

import Link from "next/link";

import type { Plan } from "../../lib/types";
import PlanImmediatePaymentOptions from "./PlanImmediatePaymentOptions";
import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { PinIcon } from "../ui/icons/PinIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

interface PlanSidebarProps {
  plan: Plan;
  variant?: "futuro" | "inmediata";
}

export default function PlanSidebar({
  plan,
  variant = "futuro",
}: PlanSidebarProps) {
  const isImmediate = variant === "inmediata";
  const whatsappHref = `https://wa.me/56990511579?text=${encodeURIComponent(
    isImmediate
      ? plan.inmediata.whatsappMessage
      : `Hola, quisiera información sobre el Plan ${plan.name.replace(/^Plan\s+/, "")}`,
  )}`;
  const locations = isImmediate
    ? plan.inmediata.location
      ? [plan.inmediata.location]
      : []
    : plan.sidebar.locations;
  const locationTitle = isImmediate ? "Lugar de Velación" : plan.sidebar.locationTitle;

  return (
    <aside className="rounded-[24px] border border-border bg-white p-6 shadow-[0_20px_45px_rgba(30,30,110,.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-[1.25rem] font-bold leading-7 text-primary">
            {plan.name}
          </h2>
          {plan.sidebar.subtitle ? (
            <div className="mt-1 text-[13px] font-semibold text-textMuted">
              {plan.sidebar.subtitle}
            </div>
          ) : null}
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-successBg px-3 py-1 text-[11px] font-bold text-successText">
          <span className="h-2 w-2 rounded-full bg-successText" />
          Disponible
        </span>
      </div>

      <div className="mt-5 border-y border-borderWarm py-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-textMuted">
          Precio referencial
        </div>
        <div className="mt-2 font-heading text-[2rem] font-bold leading-none text-primary">
          {plan.sidebar.priceReferencial}
        </div>
        <div className="mt-2 text-[11px] text-textSubtle">
          {isImmediate ? "Valor a pagar por el servicio" : "Valor base del plan"}
        </div>
      </div>

      {isImmediate ? (
        <PlanImmediatePaymentOptions options={plan.inmediata.paymentOptions} />
      ) : (
        <div className="mt-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-textMuted">
            Financiamiento
          </div>

          <div className="mt-3 space-y-2">
            {plan.sidebar.financing.map((row) => (
              <div
                key={`${row.label}-${row.percent}`}
                className={[
                  "grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-[12px] border px-3 py-2.5",
                  row.highlighted
                    ? "border-info bg-[#EEF6FD]"
                    : "border-border bg-white",
                ].join(" ")}
              >
                <span
                  className={[
                    "rounded-full px-2 py-1 text-[11px] font-bold",
                    row.highlighted
                      ? "bg-[#EAF3DE] text-[#3B6D11]"
                      : "bg-primaryBg text-primaryLight",
                  ].join(" ")}
                >
                  {row.percent}
                </span>
                <span
                  className={[
                    "flex items-center gap-1 text-[12px]",
                    row.highlighted ? "font-semibold text-[#185FA5]" : "text-textMuted",
                  ].join(" ")}
                >
                  {row.label}
                </span>
                <span
                  className={[
                    "font-heading text-[13px] font-bold whitespace-nowrap",
                    row.highlighted ? "text-[#0C447C]" : "text-primary",
                  ].join(" ")}
                >
                  {row.price}
                </span>
              </div>
            ))}
          </div>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <div className="font-heading text-[12px] font-bold text-primary">
              O paga en cuotas
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="text-[12px] text-textMuted">
            Pie desde <strong className="text-primary">$60.000</strong> + cuotas mensuales
            desde:
          </div>

          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {plan.sidebar.cuotas.map((cuota) => (
              <div
                key={cuota.cuotas}
                className="rounded-[8px] bg-bgSoft px-1 py-[7px] text-center"
              >
                <div className="text-[10px] font-normal text-textSubtle">
                  {cuota.cuotas} cuotas
                </div>
                <div className="mt-1 font-heading text-[12px] font-bold text-primary">
                  {cuota.monto}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {locations.length > 0 && locationTitle ? (
        <div className="mt-5 border-t border-borderWarm pt-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-textMuted">
            {locationTitle}
          </div>
          <div className="mt-3 space-y-3">
            {locations.map((location) => (
              <div key={location.name} className="flex items-start gap-2">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primaryLight" />
                <div>
                  <div className="text-[13px] font-bold text-primary">{location.name}</div>
                  <div className="text-[12px] leading-5 text-textMuted">
                    {location.address}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-6 space-y-3">
        <Link
          href="tel:+56990511579"
          className="group flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-heading text-sm font-bold text-accentDark transition hover:-translate-y-0.5"
        >
          <PhoneIcon className="h-4 w-4" />
          Llamar ahora — 24/7
          <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
        </Link>
        <Link
          href={whatsappHref}
          className="group flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-heading text-sm font-bold text-white transition hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Consultar por WhatsApp
          <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </aside>
  );
}
