import { CheckIcon } from "../ui/icons/CheckIcon";

interface PlanServicesIncludedProps {
  planName: string;
  services: Array<{ title: string; description: string }>;
}

export default function PlanServicesIncluded({
  planName,
  services,
}: PlanServicesIncludedProps) {
  return (
    <section className="rounded-[24px] border border-border bg-white p-6">
      <span className="inline-flex rounded-full bg-bgPage px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
        Todo incluido
      </span>
      <h2 className="mt-4 font-heading text-[1.5rem] font-bold text-primary">
        Servicios del {planName}
      </h2>
      <p className="mt-2 text-sm leading-6 text-textMuted">
        Cada servicio está pensado para que su familia no tenga que preocuparse por
        ningún detalle.
      </p>

      <div className="mt-6 space-y-4">
        {services.map((service) => (
          <div key={service.title} className="flex gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primaryBg text-primaryLight">
              <CheckIcon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-heading text-[15px] font-bold text-text">
                {service.title}
              </h3>
              <p className="mt-1 text-[13px] leading-6 text-textMuted">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
