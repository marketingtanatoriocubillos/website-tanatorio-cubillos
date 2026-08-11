import type { Metadata } from "next";

import FinalCtaBand from "../../components/home/FinalCtaBand";
import SucursalBreadcrumb from "../../components/sucursales/SucursalBreadcrumb";
import SucursalCard from "../../components/sucursales/SucursalCard";
import SucursalHero from "../../components/sucursales/SucursalHero";
import { SUCURSALES } from "../../data/sucursales";

export const metadata: Metadata = {
  title: "Sucursales | Funeraria Cubillos",
  description:
    "Encuentra nuestras 4 sucursales en Iquique, Alto Hospicio y Pozo Almonte, con atención 24/7 los 365 días del año.",
};

export default function SucursalesPage() {
  return (
    <>
      <SucursalHero />
      <SucursalBreadcrumb />
      <main className="bg-bgPage px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SUCURSALES.map((sucursal) => (
              <SucursalCard
                key={`${sucursal.name}-${sucursal.cityBadge}`}
                sucursal={sucursal}
              />
            ))}
          </div>
        </div>
      </main>
      <FinalCtaBand requestCallHref="/#contacto" />
    </>
  );
}
