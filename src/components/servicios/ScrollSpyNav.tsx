"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { SERVICES_SCROLL_NAV_ITEMS } from "../../data/servicios";

type ScrollNavItem = (typeof SERVICES_SCROLL_NAV_ITEMS)[number];

function isSectionItem(
  item: ScrollNavItem,
): item is ScrollNavItem & { targetId: string } {
  return "targetId" in item;
}

export default function ScrollSpyNav() {
  const [activeId, setActiveId] = useState("servicio-funerario");
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sectionItems = SERVICES_SCROLL_NAV_ITEMS.filter(isSectionItem);
    const sections = sectionItems
      .map(({ targetId }) => document.getElementById(targetId))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          );

        if (visibleEntries.length === 0) {
          return;
        }

        setActiveId(visibleEntries[0].target.id);
      },
      {
        rootMargin: "-120px 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activePill = pillRefs.current[activeId];

    if (!activePill) {
      return;
    }

    activePill.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateFades = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      setShowLeftFade(container.scrollLeft > 8);
      setShowRightFade(container.scrollLeft < maxScrollLeft - 8);
    };

    updateFades();

    const resizeObserver = new ResizeObserver(() => {
      updateFades();
    });

    resizeObserver.observe(container);
    window.addEventListener("resize", updateFades);
    container.addEventListener("scroll", updateFades, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateFades);
      container.removeEventListener("scroll", updateFades);
    };
  }, []);

  return (
    <div className="sticky top-[60px] z-[90] border-b border-border bg-white lg:top-[88px]">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
        <div
          aria-hidden="true"
          className={[
            "pointer-events-none absolute bottom-0 left-4 top-0 z-[2] w-10 bg-[linear-gradient(to_right,white,transparent)] transition-opacity sm:left-6 md:left-8",
            showLeftFade ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
        <div
          aria-hidden="true"
          className={[
            "pointer-events-none absolute bottom-0 right-4 top-0 z-[2] w-10 bg-[linear-gradient(to_left,white,transparent)] transition-opacity sm:right-6 md:right-8",
            showRightFade ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {SERVICES_SCROLL_NAV_ITEMS.map((item) => {
            if (isSectionItem(item)) {
              const isActive = item.targetId === activeId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  ref={(element) => {
                    pillRefs.current[item.targetId] = element;
                  }}
                  className={[
                    "inline-flex shrink-0 items-center rounded-full border px-4 py-[9px] font-heading text-[13px] font-semibold transition",
                    isActive
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-border bg-transparent text-textMuted hover:border-primaryLight hover:bg-primaryBg hover:text-primaryLight",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex shrink-0 items-center rounded-full border border-border bg-transparent px-4 py-[9px] font-heading text-[13px] font-semibold text-textMuted transition hover:border-primaryLight hover:bg-primaryBg hover:text-primaryLight"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
