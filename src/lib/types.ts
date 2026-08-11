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
  featured?: boolean;
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
