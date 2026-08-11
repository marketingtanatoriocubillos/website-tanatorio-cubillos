interface PlanCoverageZonesProps {
  zones: string[];
}

export default function PlanCoverageZones({ zones }: PlanCoverageZonesProps) {
  if (zones.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[24px] border border-border bg-white p-6">
      <span className="inline-flex rounded-full bg-bgPage px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
        Zona de cobertura
      </span>
      <h2 className="mt-4 font-heading text-[1.5rem] font-bold text-primary">
        Atendemos en toda la región
      </h2>

      <div className="mt-5 flex flex-wrap gap-2">
        {zones.map((zone) => (
          <span
            key={zone}
            className="rounded-full bg-primaryBg px-4 py-2 text-[12px] font-semibold text-primaryLight"
          >
            {zone}
          </span>
        ))}
      </div>
    </section>
  );
}
