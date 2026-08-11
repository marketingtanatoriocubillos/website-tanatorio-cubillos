import type { Metadata } from "next";

import ServiceDetailSection from "../../components/servicios/ServiceDetailSection";
import ScrollSpyNav from "../../components/servicios/ScrollSpyNav";
import ServiciosFinalCta from "../../components/servicios/ServiciosFinalCta";
import ServiciosHero from "../../components/servicios/ServiciosHero";
import { SERVICE_DETAIL_SECTIONS } from "../../data/servicios";

export const metadata: Metadata = {
  title: "Servicios Funerarios | Funeraria Cubillos",
  description:
    "Conoce todos los servicios funerarios de Cubillos: servicio funerario integral, cremación, traslados, salas velatorias, carrozas exclusivas y más.",
};

export default function ServiciosPage() {
  let carouselIndex = 0;

  return (
    <>
      <ServiciosHero />
      <ScrollSpyNav />
      <div>
        {SERVICE_DETAIL_SECTIONS.map((section) => {
          const autoPlayStartDelay =
            section.media.type === "carousel" ? carouselIndex++ * 1000 : 0;

          return (
            <ServiceDetailSection
              key={section.id}
              section={section}
              carouselAutoPlayStartDelay={autoPlayStartDelay}
            />
          );
        })}
      </div>
      <ServiciosFinalCta />
    </>
  );
}
