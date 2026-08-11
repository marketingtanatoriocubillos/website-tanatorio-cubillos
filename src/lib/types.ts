export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Plan {
  name: string;
  slug: string;
  category?: "Venta Futuro" | "Cremación";
  description: string;
  priceFrom: string;
  tagline: string;
  monthlyFrom: string;
  gallery: {
    type: "crematorio" | "ataud";
    sectionLabel: string;
    title: string;
    images: string[];
    specs?: PlanGallerySpec[];
  };
  servicesIncluded: Array<{
    title: string;
    description: string;
  }>;
  howItWorks: PlanStep[];
  faq: PlanFaqItem[];
  coverageZones: string[];
  sidebar: {
    subtitle?: string;
    priceReferencial: string;
    financing: PlanFinancingRow[];
    cuotas: PlanCuota[];
    locationTitle?: string;
    locations: PlanLocation[];
  };
  inmediata: PlanImmediateContent;
  featured?: boolean;
}

export interface PlanFinancingRow {
  percent: string;
  label: string;
  price: string;
  tooltip?: string;
  highlighted?: boolean;
}

export interface PlanCuota {
  cuotas: number;
  monto: string;
}

export interface PlanFaqItem {
  question: string;
  answer: string;
}

export interface PlanStep {
  step: 1 | 2 | 3;
  title: string;
  description: string;
}

export interface PlanGallerySpec {
  label: string;
  value: string;
}

export interface PlanLocation {
  name: string;
  address: string;
}

export interface PlanPaymentOption {
  icon: "check" | "info";
  label: string;
  tooltip?: string;
}

export interface PlanImmediateContent {
  description: string;
  tagline: string;
  ctaLabel: string;
  priceNote: string;
  servicesIncluded: Array<{
    title: string;
    description: string;
  }>;
  faq: PlanFaqItem[];
  coverageZones: string[];
  gallery: {
    type: "crematorio" | "ataud";
    sectionLabel: string;
    title: string;
    images: string[];
    specs?: PlanGallerySpec[];
  };
  paymentOptions: PlanPaymentOption[];
  location?: PlanLocation;
  whatsappMessage: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface TrustFeature {
  title: string;
  description: string;
  icon: "clock" | "shield" | "people" | "file-check";
}

export interface PlanIndexBenefit {
  title: string;
  description: string;
  icon: "shield" | "heart" | "credit-card" | "transfer";
}

export type SocialPlatform = "facebook" | "instagram" | "whatsapp";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface FooterColumn {
  title: string;
  links?: NavLink[];
  items?: string[];
}

export interface ContactFormPayload {
  nombre: string;
  telefono: string;
  motivo: string;
  origen: string;
  website: string;
  email?: string;
  mensaje?: string;
  sucursal?: string;
}

export interface ServiceDetailSection {
  id: string;
  sectionLabel: string;
  title: string;
  description: string;
  noteCard?: {
    kicker: string;
    lines: string[];
  };
  features: string[];
  media:
    | {
        type: "single";
        src: string;
        alt: string;
      }
    | {
        type: "carousel";
        images: string[];
        alt: string;
      };
  actions: Array<{
    label: string;
    href: string;
    variant: "solid" | "outline";
  }>;
  reverse: boolean;
  bgClass: string;
}

export interface Sucursal {
  name: string;
  cityBadge: string;
  address: string;
  phone: string;
  homeTag?: string;
  images: string[];
  mapEmbedSrc: string;
  mapLinkHref: string;
}
