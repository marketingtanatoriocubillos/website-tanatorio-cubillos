import Image from "next/image";
import Link from "next/link";

import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import { PhoneIcon } from "../ui/icons/PhoneIcon";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-white shadow-[0_1px_4px_rgba(0,0,0,.05)]">
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-3 px-4 lg:h-[88px] lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/img/logo-cubillos-color.svg"
            alt="Funeraria Cubillos"
            width={220}
            height={60}
            priority
            className="h-10 w-auto lg:h-[60px] lg:w-auto"
          />
        </Link>

        <div className="flex items-center gap-2 lg:gap-3">
          <DesktopNav />
          <a
            href="tel:+56990511579"
            className="inline-flex items-center gap-[7px] rounded-full bg-brand-accent px-4 py-2 font-heading text-[12px] font-bold text-accentDark transition hover:brightness-95 md:px-[22px] md:py-[10px] md:text-[13px]"
          >
            <PhoneIcon className="size-4" />
            <span className="hidden md:inline">+56 9 90511579</span>
            <span aria-hidden="true" className="text-base leading-none">
              →
            </span>
          </a>
          <MobileDrawer />
        </div>
      </div>
    </header>
  );
}
