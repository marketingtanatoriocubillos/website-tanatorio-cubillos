import {
  PLANES_IMMEDIATE_TRUST_FEATURES,
  PLANES_TRUST_FEATURES,
  PLANES_TRUST_STATS,
} from "../../data/planes";
import { ClockIcon } from "../ui/icons/ClockIcon";
import { FileCheckIcon } from "../ui/icons/FileCheckIcon";
import { PeopleIcon } from "../ui/icons/PeopleIcon";
import { ShieldIcon } from "../ui/icons/ShieldIcon";

const featureIcons = {
  clock: ClockIcon,
  shield: ShieldIcon,
  people: PeopleIcon,
  "file-check": FileCheckIcon,
} as const;

interface TrustSectionProps {
  variant?: "futuro" | "inmediata";
}

export default function TrustSection({
  variant = "futuro",
}: TrustSectionProps) {
  const features =
    variant === "inmediata"
      ? PLANES_IMMEDIATE_TRUST_FEATURES
      : PLANES_TRUST_FEATURES;

  return (
    <section className="rounded-[24px] border border-border bg-white p-6">
      <span className="inline-flex rounded-full bg-bgPage px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-primaryLight">
        Por qué elegirnos
      </span>
      <h2 className="mt-4 font-heading text-[1.5rem] font-bold text-primary">
        Familias que confían en Cubillos
      </h2>

      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        {PLANES_TRUST_STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[16px] bg-bgSoft px-4 py-5 text-center"
          >
            <div className="font-heading text-[2rem] font-bold text-primary">
              {stat.value}
            </div>
            <div className="mt-1 text-xs leading-5 text-textMuted">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-7 space-y-4">
        {features.map((feature) => {
          const Icon = featureIcons[feature.icon];

          return (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-primaryBg text-primaryLight">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-heading text-[14px] font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[13px] leading-6 text-textMuted">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
