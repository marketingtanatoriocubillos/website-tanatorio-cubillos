"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { MAIN_NAV_LINKS } from "../../data/navigation";
import DropdownNav from "./DropdownNav";

export default function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!openDropdown) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown]);

  return (
    <nav ref={navRef} aria-label="Navegación principal" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {MAIN_NAV_LINKS.map((item) => (
          <li key={item.label}>
            {item.children?.length ? (
              <DropdownNav
                item={item}
                isOpen={openDropdown === item.label}
                onToggle={() =>
                  setOpenDropdown((current) => (current === item.label ? null : item.label))
                }
                onNavigate={() => setOpenDropdown(null)}
              />
            ) : (
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 font-heading text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/5"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
