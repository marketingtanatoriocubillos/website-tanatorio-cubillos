"use client";

import { useState } from "react";

import type { PlanFaqItem } from "../../lib/types";
import { ChevronDownIcon } from "../ui/icons/ChevronDownIcon";

interface PlanFaqProps {
  items: PlanFaqItem[];
}

export default function PlanFaq({ items }: PlanFaqProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (question: string) => {
    setOpenItems((current) => {
      const next = new Set(current);

      if (next.has(question)) {
        next.delete(question);
      } else {
        next.add(question);
      }

      return next;
    });
  };

  return (
    <section className="rounded-[24px] border border-border bg-white p-6">
      <span className="inline-flex rounded-full bg-bgPage px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
        Preguntas frecuentes
      </span>
      <h2 className="mt-4 font-heading text-[1.5rem] font-bold text-primary">
        Lo que más nos preguntan
      </h2>

      <div className="mt-6 divide-y divide-borderWarm">
        {items.map((item) => {
          const isOpen = openItems.has(item.question);

          return (
            <div key={item.question} className="py-2 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => toggleItem(item.question)}
                className="flex w-full items-start justify-between gap-4 py-3 text-left"
              >
                <span className="font-heading text-[15px] font-bold text-primary">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={[
                    "mt-1 h-5 w-5 shrink-0 text-primaryLight transition",
                    isOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>
              {isOpen ? (
                <p className="pb-3 text-[14px] leading-7 text-textMuted">{item.answer}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
