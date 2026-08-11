import type { Metadata } from "next";

import LegalPageLayout from "../../components/legal/LegalPageLayout";
import LegalSection from "../../components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Política de Privacidad | Funeraria Cubillos",
  description:
    "Conoce cómo Funeraria Cubillos trata, protege y conserva tus datos personales en este sitio web y sus campañas publicitarias.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPageLayout
      eyebrow="Información legal"
      title="Política de Privacidad"
      lastUpdated="junio 2026"
    >
      <LegalSection title="1. Responsable del tratamiento de datos">
        <p>
          Tanatorio Cubillos SpA, RUT 77.722.385-2, representada legalmente por
          Jorge Mario Cubillos Quezada, con domicilio en Caleta Río Seco 2155
          esq. Francisco Bilbao, Iquique, es responsable del tratamiento de los
          datos personales recolectados a través de este sitio web y de sus
          campañas publicitarias.
        </p>
      </LegalSection>

      <LegalSection title="2. Datos que recopilamos">
        <p>
          Recopilamos datos como nombre, RUT, número de teléfono, correo
          electrónico y, en algunos casos, información relacionada con el
          servicio funerario o plan de previsión solicitado, ya sea a través de
          formularios del sitio web, formularios de clientes potenciales en
          Meta (Facebook/Instagram), WhatsApp o contacto telefónico directo.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalidad del tratamiento de datos">
        <p>
          Los datos se utilizan para: contactar al usuario respecto de su
          consulta o solicitud; gestionar la contratación y administración de
          planes de previsión funeraria; fines comerciales y de marketing,
          incluyendo el seguimiento de campañas publicitarias en Meta y la
          medición de su efectividad.
        </p>
      </LegalSection>

      <LegalSection title="4. Base legal">
        <p>
          El tratamiento de los datos se realiza conforme a la Ley N° 19.628
          sobre Protección de la Vida Privada de Chile, y en base al
          consentimiento que el usuario otorga al completar voluntariamente un
          formulario de contacto.
        </p>
      </LegalSection>

      <LegalSection title="5. Tecnologías de seguimiento (cookies y píxeles)">
        <p>
          Este sitio utiliza Meta Pixel y Google Analytics para medir el
          rendimiento de nuestras campañas publicitarias y mejorar la
          experiencia de navegación. Estas herramientas pueden recopilar
          información sobre la navegación del usuario en el sitio con fines
          estadísticos y de remarketing. El usuario puede gestionar o
          desactivar estas tecnologías desde la configuración de su propio
          navegador.
        </p>
      </LegalSection>

      <LegalSection title="6. Compartición de datos con terceros">
        <p>
          Los datos pueden ser procesados por plataformas de terceros
          utilizadas para la operación del negocio, tales como Meta
          (Facebook/Instagram) para la gestión de campañas y formularios de
          contacto, y Google Analytics para estadísticas de navegación. No
          vendemos ni comercializamos los datos personales de nuestros usuarios
          con fines distintos a los aquí descritos.
        </p>
      </LegalSection>

      <LegalSection title="7. Derechos del usuario">
        <p>
          El usuario tiene derecho a acceder, rectificar o solicitar la
          eliminación de sus datos personales en cualquier momento, escribiendo
          a info@funerariacubillos.cl indicando su solicitud.
        </p>
      </LegalSection>

      <LegalSection title="8. Conservación de los datos">
        <p>
          Los datos se conservarán por el tiempo necesario para cumplir con la
          finalidad para la cual fueron recolectados, o mientras exista una
          relación comercial vigente (por ejemplo, un plan de previsión
          activo).
        </p>
      </LegalSection>

      <LegalSection title="9. Cambios a esta política">
        <p>
          Esta política de privacidad puede actualizarse periódicamente. La
          fecha de última actualización se encuentra al inicio de este
          documento.
        </p>
      </LegalSection>

      <LegalSection title="10. Contacto">
        <p>
          Para consultas sobre el tratamiento de tus datos personales:
          info@funerariacubillos.cl o al teléfono +56 9 90511579.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
