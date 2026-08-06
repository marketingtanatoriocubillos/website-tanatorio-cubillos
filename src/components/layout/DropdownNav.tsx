"use client";

import Link from "next/link";
import { useId } from "react";

import { ChevronDownIcon } from "../ui/icons/ChevronDownIcon";
import type { NavLink } from "../../lib/types";

type DropdownNavProps = {
  item: NavLink;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
};

export default function DropdownNav({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: DropdownNavProps) {
  const menuId = useId();

  if (!item.children?.length) {
    return null;
  }

  const dropdownMinWidth = item.label === "Servicios" ? "min-w-[220px]" : "min-w-[200px]";

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        className="flex items-center gap-[3px] rounded-full px-4 py-2 font-heading text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/5"
      >
        <span>{item.label}</span>
        <ChevronDownIcon
          className={`size-4 transition duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={menuId}
        className={`absolute left-0 top-[calc(100%+8px)] z-30 ${dropdownMinWidth} rounded-[12px] border border-border bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,.1)] transition duration-200 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="space-y-1">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block rounded-[8px] px-[14px] py-[10px] font-heading text-sm font-semibold text-text transition hover:bg-primaryBg"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
