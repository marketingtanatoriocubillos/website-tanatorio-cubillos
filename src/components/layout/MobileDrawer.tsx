"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import { MAIN_NAV_LINKS } from "../../data/navigation";
import { ChevronDownIcon } from "../ui/icons/ChevronDownIcon";
import { CloseIcon } from "../ui/icons/CloseIcon";
import { MailIcon } from "../ui/icons/MailIcon";
import { MenuIcon } from "../ui/icons/MenuIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

type OpenSections = Record<string, boolean>;

const WHATSAPP_HELP_URL =
  "https://wa.me/56990511579?text=Hola%2C+quisiera+m%C3%A1s+informaci%C3%B3n";

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openSections, setOpenSections] = useState<OpenSections>({});

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleSection = (label: string) => {
    setOpenSections((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-primary/15 text-brand-primary transition hover:border-brand-primary hover:bg-brand-primary hover:text-white md:hidden"
      >
        <MenuIcon className="size-6" />
      </button>

      {isOpen && mounted
        ? createPortal(
            <div className="md:hidden">
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={closeDrawer}
                className="fixed inset-0 z-[400] bg-black/50"
              />

              <aside className="fixed right-0 top-0 z-[500] flex h-dvh w-[min(300px,85vw)] flex-col overflow-y-auto bg-white px-5 py-6 shadow-[-4px_0_24px_rgba(0,0,0,.15)]">
                <div className="flex justify-end">
                  <button
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={closeDrawer}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-brand-primary/15 text-brand-primary transition hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                  >
                    <CloseIcon className="size-5" />
                  </button>
                </div>

                <nav aria-label="Navegación móvil" className="py-6">
                  <ul>
                    {MAIN_NAV_LINKS.map((item) => {
                      const isExpanded = openSections[item.label] ?? false;
                      const isLastItem = item.label === "Contacto";

                      return (
                        <li
                          key={item.label}
                          className={isLastItem ? "" : "border-b border-borderWarm"}
                        >
                          {item.children?.length ? (
                            <div>
                              <button
                                type="button"
                                onClick={() => toggleSection(item.label)}
                                aria-expanded={isExpanded}
                                className="flex w-full items-center justify-between gap-3 py-[14px] text-left font-heading text-[16px] font-semibold text-text"
                              >
                                <span>{item.label}</span>
                                <ChevronDownIcon
                                  className={`size-5 transition-transform ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              {isExpanded ? (
                                <ul className="space-y-1 pb-3 pl-4">
                                  {item.children.map((child) => (
                                    <li key={child.href}>
                                      <Link
                                        href={child.href}
                                        onClick={closeDrawer}
                                        className="block rounded-[8px] px-3 py-[9px] font-heading text-[13px] font-semibold text-[#4A4A7A] transition hover:bg-primaryBg hover:text-primaryLight"
                                      >
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={closeDrawer}
                              className="block py-[14px] font-heading text-[16px] font-semibold text-text transition hover:text-brand-primary"
                            >
                              {item.label}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="border-t border-borderWarm pt-5">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+56990511579"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-4 py-3 font-heading text-sm font-bold text-accentDark transition hover:brightness-95"
                    >
                      <PhoneIcon className="size-4" />
                      Llamar
                    </a>
                    <a
                      href={WHATSAPP_HELP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-heading text-sm font-bold text-white transition hover:brightness-95"
                    >
                      <WhatsAppIcon className="size-4" />
                      WhatsApp
                    </a>
                  </div>
                  <a
                    href="mailto:info@funerariacubillos.cl"
                    className="mt-4 flex items-center gap-[10px] rounded-[10px] bg-[#F5F4F1] px-[14px] py-[11px] font-heading text-[13px] font-semibold text-primaryLight transition hover:bg-[#EEEEEA]"
                  >
                    <MailIcon className="size-4 shrink-0" />
                    info@funerariacubillos.cl
                  </a>
                </div>
              </aside>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
