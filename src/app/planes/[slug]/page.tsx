import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import PlanCoverageZones from "../../../components/planes/PlanCoverageZones";
import PlanFaq from "../../../components/planes/PlanFaq";
import PlanGallery from "../../../components/planes/PlanGallery";
import PlanHero from "../../../components/planes/PlanHero";
import PlanHowItWorks from "../../../components/planes/PlanHowItWorks";
import PlanNavPills from "../../../components/planes/PlanNavPills";
import PlanOtherPlans from "../../../components/planes/PlanOtherPlans";
import PlanServicesIncluded from "../../../components/planes/PlanServicesIncluded";
import PlanSidebar from "../../../components/planes/PlanSidebar";
import TrustSection from "../../../components/planes/TrustSection";
import { PLANES, getPlanBySlug } from "../../../data/planes";

interface PlanPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PLANES.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({
  params,
}: PlanPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    return {};
  }

  return {
    title: `${plan.name} — Previsión Funeraria | Funeraria Cubillos`,
    description: plan.tagline,
  };
}

export default async function PlanPage({ params }: PlanPageProps) {
  const { slug } = await params;
  const plan = getPlanBySlug(slug);

  if (!plan) {
    notFound();
  }

  const otherPlans = PLANES.filter((item) => item.slug !== plan.slug);

  return (
    <>
      <section className="border-b border-border bg-white px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-center gap-2 pt-4 text-[12px] text-textSubtle">
            <Link href="/" className="transition hover:text-primaryLight">
              Inicio
            </Link>
            <span>›</span>
            <Link href="/planes" className="transition hover:text-primaryLight">
              Previsión Funeraria
            </Link>
            <span>›</span>
            <span className="font-semibold text-primaryLight">{plan.name}</span>
          </div>
          <PlanNavPills plans={PLANES} currentSlug={plan.slug} basePath="/planes" />
        </div>
      </section>

      <PlanHero
        category={plan.category ?? "Previsión Funeraria"}
        name={plan.name.replace(/^Plan\s+/, "")}
        tagline={plan.tagline}
        priceReferencial={plan.sidebar.priceReferencial}
      />

      <section className="bg-bgPage px-4 py-12 sm:px-6 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
          <div className="space-y-7">
            <PlanGallery gallery={plan.gallery} alt={plan.gallery.title} />
            <PlanServicesIncluded
              planName={plan.name}
              services={plan.servicesIncluded}
            />
            <PlanHowItWorks steps={plan.howItWorks} />
            <TrustSection variant="futuro" />
            <PlanFaq items={plan.faq} />
            <PlanCoverageZones zones={plan.coverageZones} />
            <PlanOtherPlans plans={otherPlans} basePath="/planes" />
          </div>

          <div className="self-start lg:sticky lg:top-[104px]">
            <PlanSidebar plan={plan} />
          </div>
        </div>
      </section>
    </>
  );
}
