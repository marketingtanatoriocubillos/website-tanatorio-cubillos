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
}
