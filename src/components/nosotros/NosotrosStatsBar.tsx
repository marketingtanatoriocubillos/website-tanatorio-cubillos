import { NOSOTROS_STATS } from "./nosotrosData";

export default function NosotrosStatsBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 sm:grid-cols-4">
        {NOSOTROS_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={[
              "px-5 py-8 text-center",
              index < NOSOTROS_STATS.length - 1 ? "sm:border-r sm:border-border" : "",
              index === 0 ? "border-b border-border sm:border-b-0" : "",
              index === 1 ? "border-b border-border sm:border-b-0" : "",
            ].join(" ")}
          >
            <p
              className={[
                "font-heading text-[2.25rem] font-bold leading-none",
                stat.accent ? "text-accent" : "text-brand-primary",
              ].join(" ")}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-[13px] text-textMuted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
