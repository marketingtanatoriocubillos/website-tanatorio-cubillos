import type { Metadata } from "next";

import CrematorioAnforaSection from "../../components/crematorio/CrematorioAnforaSection";
import CrematorioBreadcrumb from "../../components/crematorio/CrematorioBreadcrumb";
import CrematorioDiferenciadoresSection from "../../components/crematorio/CrematorioDiferenciadoresSection";
import CrematorioExhumacionSection from "../../components/crematorio/CrematorioExhumacionSection";
import CrematorioHero from "../../components/crematorio/CrematorioHero";
import CrematorioIntroSection from "../../components/crematorio/CrematorioIntroSection";
import CrematorioPlanHuellaSection from "../../components/crematorio/CrematorioPlanHuellaSection";
import CrematorioProcesoSection from "../../components/crematorio/CrematorioProcesoSection";
import CrematorioUbicacionSection from "../../components/crematorio/CrematorioUbicacionSection";

export const metadata: Metadata = {
  title: "Crematorio Cubillos | Pozo Almonte",
  description:
    "Único crematorio propio en Tarapacá. Instalaciones en La Huayca, Pozo Almonte, con atención 24/7, acompañamiento integral y opción de previsión funeraria.",
};

export default function CrematorioPage() {
  return (
    <>
      <CrematorioHero />
      <CrematorioBreadcrumb />
      <CrematorioIntroSection />
      <CrematorioProcesoSection />
      <CrematorioDiferenciadoresSection />
      <CrematorioAnforaSection />
      <CrematorioExhumacionSection />
      <CrematorioPlanHuellaSection />
      <CrematorioUbicacionSection />
    </>
  );
}
