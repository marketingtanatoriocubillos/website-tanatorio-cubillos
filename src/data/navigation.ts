import { PLANES } from "./planes";
import type { NavLink, SocialLink } from "../lib/types";

export const SERVICE_LINKS: NavLink[] = [
  { label: "Servicio Funerario", href: "/servicios" },
  { label: "Cremación", href: "/crematorio" },
  {
    label: "Traslados Nacionales e Internacionales",
    href: "/servicios#traslados",
  },
  { label: "Salas Velatorias", href: "/servicios#salas" },
];

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios", children: SERVICE_LINKS },
  {
    label: "Planes Inmediatos",
    href: "/planes-inmediatos",
    children: PLANES.map((plan) => ({
      label: plan.name,
      href: `/planes-inmediatos/${plan.slug}`,
    })),
  },
  {
    label: "Previsión Funeraria",
    href: "/planes",
    children: PLANES.map((plan) => ({
      label: plan.name,
      href: `/planes/${plan.slug}`,
    })),
  },
  { label: "Sucursales", href: "/sucursales" },
  { label: "Contacto", href: "/contacto" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "facebook",
    url: "https://www.facebook.com/funeralescubillos",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/cubillostanatorio/",
  },
  { platform: "whatsapp", url: "https://wa.me/56990511579" },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Sobre Nosotros", href: "/nosotros" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  { label: "Política de privacidad", href: "/politica-privacidad" },
];
