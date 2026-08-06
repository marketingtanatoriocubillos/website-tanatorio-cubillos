import Hero from "../components/home/Hero";
import PlanesSection from "../components/home/PlanesSection";
import QuickAccessBar from "../components/home/QuickAccessBar";
import ServiciosSection from "../components/home/ServiciosSection";
import UrgentCtaBand from "../components/home/UrgentCtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccessBar />
      <ServiciosSection />
      <UrgentCtaBand />
      <PlanesSection />
    </>
  );
}
