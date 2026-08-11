import type { Metadata } from "next";

import NosotrosFinalCta from "../../components/nosotros/NosotrosFinalCta";
import NosotrosHero from "../../components/nosotros/NosotrosHero";
import NosotrosHistorySection from "../../components/nosotros/NosotrosHistorySection";
import NosotrosInfrastructureSection from "../../components/nosotros/NosotrosInfrastructureSection";
import NosotrosStatsBar from "../../components/nosotros/NosotrosStatsBar";
import NosotrosTeamSection from "../../components/nosotros/NosotrosTeamSection";
import NosotrosValuesSection from "../../components/nosotros/NosotrosValuesSection";

export const metadata: Metadata = {
  title: "Nosotros | Funeraria Cubillos",
  description:
    "Conoce la historia, valores e infraestructura de Funeraria y Crematorio Cubillos, con más de 30 años acompañando a las familias de Tarapacá.",
};

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <NosotrosStatsBar />
      <NosotrosHistorySection />
      <NosotrosValuesSection />
      <NosotrosInfrastructureSection />
      <NosotrosTeamSection />
      <NosotrosFinalCta />
    </>
  );
}
