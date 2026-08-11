"use client";

import { useState } from "react";

import type { PlanPaymentOption } from "../../lib/types";
import { CheckIcon } from "../ui/icons/CheckIcon";
import { HelpCircleIcon } from "../ui/icons/HelpCircleIcon";

interface PlanImmediatePaymentOptionsProps {
  options: PlanPaymentOption[];
}

export default function PlanImmediatePaymentOptions({
  options,
}: PlanImmediatePaymentOptionsProps) {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);

  return (
    <div className="mt-5">
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-textMuted">
        Forma de pago
      </div>

      <div className="mt-3 space-y-2">
        {options.map((option) => {
          const isTooltipOpen = openTooltip === option.label;

          return (
            <div
              key={option.label}
              className="flex items-center gap-3 rounded-[12px] border border-border bg-white px-3 py-3"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-primaryBg text-primaryLight">
                <CheckIcon className="h-3.5 w-3.5" />
              </div>

              <div className="flex items-center gap-1 text-[13px] font-semibold text-[#4A4A7A]">
                <span>{option.label}</span>
                {option.tooltip ? (
                  <span className="relative">
                    <button
                      type="button"
                      aria-label="Ver detalle de la cuota mortuoria"
                      onClick={() =>
                        setOpenTooltip((current) =>
                          current === option.label ? null : option.label,
                        )
                      }
                      className="inline-flex text-info"
                    >
                      <HelpCircleIcon className="h-3.5 w-3.5" />
                    </button>
                    {isTooltipOpen ? (
                      <span className="absolute bottom-[calc(100%+8px)] left-1/2 z-[4] -translate-x-1/2 rounded-lg bg-primary px-3 py-2 text-[11px] font-semibold whitespace-nowrap text-white">
                        {option.tooltip}
                      </span>
                    ) : null}
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
