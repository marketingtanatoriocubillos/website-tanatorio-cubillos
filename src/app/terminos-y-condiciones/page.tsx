import type { Metadata } from "next";

import LegalPageLayout from "../../components/legal/LegalPageLayout";
import LegalSection from "../../components/legal/LegalSection";

const companies = [
  {
    name: "Funeraria Cubillos",
    details: "(Jorge Mario Cubillos Quezada) — RUT 10.981.883-6",
  },
  {
    name: "Previsión Funeraria Cubillos SpA",
    details: "— RUT 76.796.359-9",
  },
  {
    name: "Tanatorio Cubillos SpA",
    details: "— RUT 77.722.385-2",
  },
  {
    name: "Crematorio Cubillos SpA",
    details: "— RUT 76.787.553-3",
  },
] as const;

export const metadata: Metadata = {
  title: "Términos y Condiciones | Funeraria Cubillos",
  description:
    "Revisa los términos y condiciones de contratación de planes de previsión funeraria y servicios funerarios de Funeraria Cubillos.",
};

export default function TerminosYCondicionesPage() {
  return (
    <LegalPageLayout
      eyebrow="Información legal"
      title="Términos y Condiciones"
      lastUpdated="junio 2026"
    >
      <LegalSection title="1. Identificación del prestador del servicio">
        <p>
          Este sitio y sus servicios son operados por el siguiente grupo de
          empresas:
        </p>
        <ul className="space-y-2.5">
          {companies.map(({ name, details }) => (
            <li
              key={name}
              className="rounded-[10px] border border-borderWarm bg-bgSoft px-4 py-3 leading-[1.6]"
            >
              <strong className="font-heading text-primary">{name}</strong>{" "}
              {details}
            </li>
          ))}
        </ul>
        <p>
          Representante legal: Jorge Mario Cubillos Quezada. Domicilios: Caleta
          Río Seco 2155 esq. Francisco Bilbao (Iquique), Serrano 999 esq. Juan
          Martínez (Iquique), Cerro Esmeralda 3636 (Alto Hospicio), Aguada de
          Canchones s/n Sitio 35, La Huayca (Pozo Almonte). Contacto:
          info@funerariacubillos.cl
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          Estos términos regulan la contratación de planes de previsión
          funeraria y servicios funerarios inmediatos ofrecidos por Tanatorio
          Cubillos SpA, incluyendo traslado, sala de velación, vehículos,
          cremación y prestaciones asociadas según el plan contratado.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de contratación y pago">
        <p>
          El valor del plan queda congelado al momento de contratar la
          previsión funeraria, independiente de su uso futuro. Se ofrecen
          facilidades de pago en 6, 12, 18, 24, 30 y 36 cuotas sin interés. Al
          momento de hacer uso del servicio, este debe tener pagado el costo
          total del plan contratado.
        </p>
      </LegalSection>

      <LegalSection title="4. Transferencia del plan">
        <p>
          Todos los planes son 100% transferibles a familiares directos (padre,
          madre, hermanos, cónyuge e hijos), sin costo adicional por la
          transferencia.
        </p>
      </LegalSection>

      <LegalSection title="5. Uso del servicio y mejoras">
        <p>
          Al momento de hacer uso del servicio es posible mejorar las
          prestaciones contratadas, pagando la diferencia correspondiente. Si
          el usuario cuenta con &quot;Cuota Mortuoria&quot;, puede destinarla
          a mejorar urna, ánfora o solicitar su devolución según corresponda.
        </p>
      </LegalSection>

      <LegalSection title="6. Política de cancelación y devolución">
        <p>
          Los montos pagados por concepto de previsión funeraria no son
          reembolsables bajo ninguna circunstancia.
        </p>
      </LegalSection>

      <LegalSection title="7. Incumplimiento de pago">
        <p>
          El no pago de una o más cuotas puede afectar la vigencia o las
          condiciones del plan contratado. Ante esta situación, el usuario debe
          contactar directamente a Tanatorio Cubillos SpA para regularizar su
          situación.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitación de responsabilidad">
        <p>
          Tanatorio Cubillos SpA se compromete a prestar los servicios
          contratados conforme a las condiciones de cada plan. No será
          responsable por incumplimientos derivados de fuerza mayor o caso
          fortuito.
        </p>
      </LegalSection>

      <LegalSection title="9. Legislación aplicable y jurisdicción">
        <p>
          Estos términos se rigen por las leyes de la República de Chile.
          Cualquier controversia será sometida a los tribunales competentes de
          la ciudad de Iquique.
        </p>
      </LegalSection>

      <LegalSection title="10. Contacto">
        <p>
          Para consultas sobre estos términos: info@funerariacubillos.cl o al
          teléfono +56 9 90511579.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
