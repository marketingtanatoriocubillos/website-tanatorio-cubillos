import type { Metadata } from "next";

import ContactMethodCards from "../../components/contacto/ContactMethodCards";
import ContactoBreadcrumb from "../../components/contacto/ContactoBreadcrumb";
import ContactoFormCard from "../../components/contacto/ContactoFormCard";
import ContactoHero from "../../components/contacto/ContactoHero";
import ContactoUrgentCta from "../../components/contacto/ContactoUrgentCta";

export const metadata: Metadata = {
  title: "Contacto | Funeraria Cubillos",
  description:
    "Contáctenos para atención inmediata o para cotizar un plan de previsión funeraria. Disponibles 24/7 los 365 días del año.",
};

export default function ContactoPage() {
  return (
    <>
      <ContactoHero />
      <ContactoBreadcrumb />

      <section className="bg-bgPage px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <ContactMethodCards />
          <ContactoFormCard />
        </div>
      </section>

      <ContactoUrgentCta />
    </>
  );
}
