import ContactoSection from "../components/home/ContactoSection";
import CrematorioSection from "../components/home/CrematorioSection";
import DiferenciadoresSection from "../components/home/DiferenciadoresSection";
import ExhumacionPromoSection from "../components/home/ExhumacionPromoSection";
import FinalCtaBand from "../components/home/FinalCtaBand";
import Hero from "../components/home/Hero";
import NosotrosSection from "../components/home/NosotrosSection";
import PlanesSection from "../components/home/PlanesSection";
import PrevisionSection from "../components/home/PrevisionSection";
import QuickAccessBar from "../components/home/QuickAccessBar";
import ServiciosSection from "../components/home/ServiciosSection";
import SucursalesSection from "../components/home/SucursalesSection";
import UrgentCtaBand from "../components/home/UrgentCtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccessBar />
      <ServiciosSection />
      <UrgentCtaBand />
      <PlanesSection />
      <PrevisionSection />
      <DiferenciadoresSection />
      <NosotrosSection />
      <CrematorioSection />
      <ExhumacionPromoSection />
      <SucursalesSection />
      <ContactoSection />
      <FinalCtaBand />
    </>
  );
}
