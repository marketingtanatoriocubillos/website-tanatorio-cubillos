import type { ReactNode } from "react";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export default function LegalSection({
  title,
  children,
}: LegalSectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-[1.15rem] font-bold leading-[1.35] text-primary">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-[1.8] text-[#333333]">
        {children}
      </div>
    </section>
  );
}
