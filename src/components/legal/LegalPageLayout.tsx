import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({
  eyebrow,
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <section className="px-4 py-14 sm:px-6 md:px-8 md:py-16">
      <div className="mx-auto max-w-[900px]">
        <article className="rounded-[24px] border border-border bg-white px-7 py-8 shadow-[0_18px_40px_rgba(30,30,110,0.05)] sm:px-10 sm:py-10 md:px-12 md:py-12">
          <p className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-[clamp(2rem,4vw,2.6rem)] font-bold leading-[1.1] text-primary">
            {title}
          </h1>
          <div className="mt-4 h-[3px] w-[72px] rounded-full bg-accent" />
          <p className="mt-[18px] text-[15px] leading-[1.8] text-textMuted">
            Última actualización: {lastUpdated}
          </p>
          <div className="mt-9 space-y-7">{children}</div>
        </article>
      </div>
    </section>
  );
}
