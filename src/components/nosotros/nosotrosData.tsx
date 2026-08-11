import type { ComponentType, SVGProps } from "react";

import { BriefcaseIcon } from "../ui/icons/BriefcaseIcon";
import { ClockIcon } from "../ui/icons/ClockIcon";
import { FleetIcon } from "../ui/icons/FleetIcon";
import { HeartIcon } from "../ui/icons/HeartIcon";
import { HomeIcon } from "../ui/icons/HomeIcon";
import { PeopleIcon } from "../ui/icons/PeopleIcon";
import { PinIcon } from "../ui/icons/PinIcon";
import { ShieldIcon } from "../ui/icons/ShieldIcon";

export interface NosotrosStat {
  value: string;
  label: string;
  accent?: boolean;
}

export interface NosotrosValue {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface NosotrosInfrastructureItem {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName?: string;
}

export const NOSOTROS_STATS: NosotrosStat[] = [
  { value: "+30", label: "Años de trayectoria" },
  { value: "4", label: "Sucursales en Tarapacá" },
  { value: "+10.000", label: "Familias acompañadas" },
  { value: "24/7", label: "Atención los 365 días", accent: true },
];

export const NOSOTROS_HISTORY_PARAGRAPHS = [
  "Funeraria Cubillos fue fundada por Jorge Mario Cubillos Quezada con el propósito de ofrecer a las familias de Iquique y la región un servicio funerario digno, humano y profesional.",
  "Con el paso de los años, la empresa creció hasta convertirse en la funeraria con mayor presencia en la Región de Tarapacá, extendiendo sus operaciones a Alto Hospicio y Pozo Almonte, donde instalamos el único crematorio propio de la región.",
];

export const NOSOTROS_VALUES: NosotrosValue[] = [
  {
    title: "Dignidad",
    description:
      "Cada servicio es prestado con el máximo respeto hacia el fallecido y su familia. La dignidad no es un valor opcional para nosotros, es la base de todo lo que hacemos.",
    icon: HeartIcon,
  },
  {
    title: "Cercanía",
    description:
      "Entendemos que cada familia vive el duelo de manera única. Nuestro equipo está capacitado para acompañar, orientar y contener en cada etapa del proceso.",
    icon: PeopleIcon,
  },
  {
    title: "Confianza",
    description:
      "Más de 30 años de trayectoria nos respaldan. Las familias de Tarapacá confían en nosotros porque cumplimos lo que prometemos, en el momento más difícil.",
    icon: ShieldIcon,
  },
  {
    title: "Disponibilidad",
    description:
      "Los 365 días del año, las 24 horas del día. Cuando una familia nos necesita, estamos disponibles. Sin excepciones y sin demoras.",
    icon: ClockIcon,
  },
  {
    title: "Profesionalismo",
    description:
      "Contamos con un equipo capacitado, instalaciones propias de última generación y flota exclusiva Mercedes Benz para garantizar un servicio de excelencia.",
    icon: BriefcaseIcon,
  },
  {
    title: "Arraigo regional",
    description:
      "Somos una empresa de Tarapacá, para las familias de Tarapacá. Conocemos la región, su gente y sus necesidades mejor que nadie.",
    icon: PinIcon,
  },
];

export const NOSOTROS_INFRASTRUCTURE_ITEMS: NosotrosInfrastructureItem[] = [
  {
    title: "Tanatorio Iquique",
    description:
      "Instalaciones de última generación para la velación y despedida con el confort que las familias merecen.",
    icon: HomeIcon,
  },
  {
    title: "Funeraria Alto Hospicio",
    description:
      "Presencia en Alto Hospicio para atender a las familias de la zona sin necesidad de trasladarse a Iquique.",
    icon: HomeIcon,
  },
  {
    title: "Crematorio Pozo Almonte",
    description:
      "El único crematorio propio de la Región de Tarapacá. Instalaciones modernas en La Huayca, Pozo Almonte.",
    icon: PinIcon,
  },
  {
    title: "Flota Mercedes Benz",
    description:
      "Vehículos de última generación para garantizar traslados dignos, elegantes y puntuales en toda la región.",
    icon: FleetIcon,
    iconClassName: "h-[28px] w-[72px]",
  },
];
