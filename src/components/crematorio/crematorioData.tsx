import type { ComponentType, SVGProps } from "react";

import { CheckIcon } from "../ui/icons/CheckIcon";
import { ClockIcon } from "../ui/icons/ClockIcon";
import { FileCheckIcon } from "../ui/icons/FileCheckIcon";
import { FlameIcon } from "../ui/icons/FlameIcon";
import { HeartIcon } from "../ui/icons/HeartIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { PinIcon } from "../ui/icons/PinIcon";
import { UrnIcon } from "../ui/icons/UrnIcon";

interface CrematorioStat {
  value: string;
  label: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

interface Diferenciador {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

interface AnforaOption {
  badge: string;
  badgeClassName: string;
  title: string;
  description: string;
}

interface ExhumacionFeature {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconWrapperClassName: string;
  iconClassName: string;
}

interface ContactDetail {
  label: string;
  href?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

function PackageBoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21.25V11.75"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M20.25 8.5L12 11.75L3.75 8.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 15.4V8.6C20.25 7.91 19.88 7.28 19.28 6.95L13 3.49C12.39 3.16 11.61 3.16 11 3.49L4.72 6.95C4.12 7.28 3.75 7.91 3.75 8.6V15.4C3.75 16.09 4.12 16.72 4.72 17.05L11 20.51C11.61 20.84 12.39 20.84 13 20.51L19.28 17.05C19.88 16.72 20.25 16.09 20.25 15.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 5.05L16.5 9.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const CREMATORIO_HERO_STATS: CrematorioStat[] = [
  {
    value: "1",
    label: "Único crematorio propio en Tarapacá",
  },
  {
    value: "24/7",
    label: "Disponibilidad los 365 días del año",
  },
  {
    value: "+30",
    label: "Años de trayectoria en la región",
  },
];

export const CREMATORIO_INTRO_CHECKS = [
  "Proceso certificado y supervisado",
  "Privacidad y respeto en cada etapa",
  "Ánfora estándar incluida — opciones premium disponibles",
  "Entrega de cenizas a la familia con protocolo de dignidad",
  "Disponible para servicio inmediato o previsión funeraria",
] as const;

export const CREMATORIO_PROCESS_STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "Recepción y documentación",
    description:
      "Coordinamos el traslado del fallecido y verificamos toda la documentación legal requerida por el Registro Civil.",
    icon: FileCheckIcon,
  },
  {
    number: "2",
    title: "Preparación",
    description:
      "El cuerpo es tratado con respeto y dignidad antes del proceso. La familia puede solicitar una última visita.",
    icon: HeartIcon,
  },
  {
    number: "3",
    title: "Cremación",
    description:
      "El proceso se realiza en nuestras instalaciones en La Huayca, Pozo Almonte, con equipos de última generación y total privacidad.",
    icon: FlameIcon,
  },
  {
    number: "4",
    title: "Entrega de cenizas",
    description:
      "Las cenizas son entregadas a la familia en ánfora estándar incluida, o en la ánfora de su elección (costo adicional), con acta de entrega.",
    icon: PackageBoxIcon,
  },
];

export const CREMATORIO_DIFERENCIADORES: Diferenciador[] = [
  {
    title: "Instalaciones propias",
    description:
      "Crematorio ubicado en Aguada de Canchones s/n, Sitio 35, La Huayca, Pozo Almonte. Propio, sin intermediarios.",
    icon: PinIcon,
  },
  {
    title: "Tiempos garantizados",
    description:
      "Sin depender de terceros, podemos gestionar el proceso en los tiempos acordados, respetando los plazos legales y las necesidades de la familia.",
    icon: ClockIcon,
  },
  {
    title: "Trazabilidad total",
    description:
      "Cada cremación cuenta con registro, identificación y acta de entrega. La familia tiene certeza de que las cenizas recibidas corresponden a su ser querido.",
    icon: CheckIcon,
  },
];

export const CREMATORIO_ANFORA_OPTIONS: AnforaOption[] = [
  {
    badge: "Incluida en el plan",
    badgeClassName: "bg-primaryBg text-primaryLight",
    title: "Ánfora Estándar",
    description:
      "Ánfora de material resistente, de acabado sobrio y digno. Incluida sin costo adicional en todos los servicios de cremación.",
  },
  {
    badge: "Opción premium",
    badgeClassName: "bg-[#FFF3DC] text-[#B97A00]",
    title: "Ánfora Premium",
    description:
      "Materiales de mayor calidad y diseño más elaborado. Consulte disponibilidad y modelos directamente con nuestro equipo.",
  },
  {
    badge: "A pedido",
    badgeClassName: "bg-bgSoft text-textMuted",
    title: "Urna personalizada",
    description:
      "Si la familia desea un ánfora específico — urna de madera, mármol u otro material — podemos orientarlos en la elección.",
  },
];

export const CREMATORIO_EXHUMACION_FEATURES: ExhumacionFeature[] = [
  {
    title: "Tramitación integral",
    description: "Gestionamos la resolución sanitaria correspondiente.",
    icon: FileCheckIcon,
    iconWrapperClassName: "bg-primaryBg text-primaryLight",
    iconClassName: "size-5",
  },
  {
    title: "Proceso de cremación",
    description: "Incluido en el valor único del servicio.",
    icon: FlameIcon,
    iconWrapperClassName: "bg-[#FFF3DC] text-[#B97A00]",
    iconClassName: "size-5",
  },
  {
    title: "Ánfora estándar metálica",
    description: "Incluida sin costo adicional.",
    icon: UrnIcon,
    iconWrapperClassName: "bg-bgSoft text-textMuted",
    iconClassName: "size-5",
  },
  {
    title: "Uso inmediato o futuro",
    description: "Puede utilizarse cuando la familia lo requiera.",
    icon: ClockIcon,
    iconWrapperClassName: "bg-primaryBg text-primaryLight",
    iconClassName: "size-5",
  },
];

export const CREMATORIO_PLAN_HUELLA_CHECKS = [
  "Atención inmediata 24/7",
  "Precio garantizado",
  "Equipo profesional",
  "Tramitación integral",
] as const;

export const CREMATORIO_CONTACT_DETAILS: ContactDetail[] = [
  {
    label: "Aguada de Canchones s/n, Sitio 35, La Huayca, Pozo Almonte",
    icon: PinIcon,
  },
  {
    label: "+56 9 90511579",
    href: "tel:+56990511579",
    icon: PhoneIcon,
  },
  {
    label: "Atención 24/7 — 365 días del año",
    icon: ClockIcon,
  },
];
