import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import PlanCoverageZones from "../../../components/planes/PlanCoverageZones";
import PlanFaq from "../../../components/planes/PlanFaq";
import PlanGallery from "../../../components/planes/PlanGallery";
import PlanHero from "../../../components/planes/PlanHero";
import PlanNavPills from "../../../components/planes/PlanNavPills";
import PlanOtherPlans from "../../../components/planes/PlanOtherPlans";
import PlanServicesIncluded from "../../../components/planes/PlanServicesIncluded";
import PlanSidebar from "../../../components/planes/PlanSidebar";
import TrustSection from "../../../components/planes/TrustSection";
import { PLANES, getPlanBySlug } from "../../../data/planes";

interface PlanImmediatePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PLANES.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({
  params,
}: PlanImmediatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    return {};
  }

  return {
    title: `${plan.name} — Atención Inmediata | Funeraria Cubillos`,
    description: plan.inmediata.tagline,
  };
}

export default async function PlanImmediatePage({
  params,
}: PlanImmediatePageProps) {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    notFound();
  }

  const otherPlans = PLANES.filter((item) => item.slug !== plan.slug).map((item) => ({
    ...item,
    description: item.inmediata.description,
  }));

  return (
    <>
      <section className="border-b border-border bg-white px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-center gap-2 pt-4 text-[12px] text-textSubtle">
            <Link href="/" className="transition hover:text-primaryLight">
              Inicio
            </Link>
            <span>›</span>
            <Link
              href="/planes-inmediatos"
              className="transition hover:text-primaryLight"
            >
              Planes Inmediatos
            </Link>
            <span>›</span>
            <span className="font-semibold text-primaryLight">{plan.name}</span>
          </div>
          <PlanNavPills
            plans={PLANES}
            currentSlug={plan.slug}
            basePath="/planes-inmediatos"
          />
        </div>
      </section>

      <PlanHero
        category="Atención Inmediata"
        name={plan.name.replace(/^Plan\s+/, "")}
        tagline={plan.inmediata.tagline}
        priceReferencial={plan.sidebar.priceReferencial}
        ctaLabel={plan.inmediata.ctaLabel}
        priceNote={plan.inmediata.priceNote}
      />

      <section className="bg-bgPage px-4 py-12 sm:px-6 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
          <div className="space-y-7">
            <PlanGallery
              gallery={plan.inmediata.gallery}
              alt={plan.inmediata.gallery.title}
            />
            <PlanServicesIncluded
              planName={plan.name}
              services={plan.inmediata.servicesIncluded}
            />
            <TrustSection variant="inmediata" />
            <PlanFaq items={plan.inmediata.faq} />
            <PlanCoverageZones zones={plan.inmediata.coverageZones} />
            <PlanOtherPlans plans={otherPlans} basePath="/planes-inmediatos" />
          </div>

          <div className="self-start lg:sticky lg:top-[104px]">
            <PlanSidebar plan={plan} variant="inmediata" />
          </div>
        </div>
      </section>
    </>
  );
}
