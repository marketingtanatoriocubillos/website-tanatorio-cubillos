import plansContent from "./planes-content.json";
import type {
  Plan,
  PlanCuota,
  PlanFaqItem,
  PlanFinancingRow,
  PlanGallerySpec,
  PlanImmediateContent,
  PlanIndexBenefit,
  PlanLocation,
  PlanStep,
  TrustFeature,
  TrustStat,
} from "../lib/types";

interface RawPlanContent {
  name: string;
  tagline: string;
  galleryLabel: string;
  galleryTitle: string;
  galleryImages: string[];
  specs: PlanGallerySpec[];
  services: Array<{ title: string; description: string }>;
  steps: PlanStep[];
  faq: PlanFaqItem[];
  coverage: string[];
  financing: PlanFinancingRow[];
  cuotas: PlanCuota[];
  locationTitle: string | null;
  locations: PlanLocation[];
}

interface RawIndexCard {
  name: string;
  description: string;
  price: string;
  monthly: string;
}

interface RawPlanesContent {
  plans: Record<string, RawPlanContent>;
  indexCards: RawIndexCard[];
  benefits: Array<{ title: string; description: string }>;
  finalCta: {
    title: string;
    description: string;
    whatsappHref: string;
  };
  heroDescription: string;
}

const rawContent = plansContent as RawPlanesContent;

const planMeta = {
  tributo: { category: "Venta Futuro", featured: false },
  huella: { category: "Cremación", featured: false },
  recuerdo: { category: "Venta Futuro", featured: false },
  "recuerdo-especial": { category: "Venta Futuro", featured: false },
  memoria: { category: "Venta Futuro", featured: false },
  "homenaje-integral": { category: "Venta Futuro", featured: false },
  legado: { category: "Venta Futuro", featured: false },
  honor: { category: "Venta Futuro", featured: false },
  presidencial: { category: "Venta Futuro", featured: true },
} as const satisfies Record<
  string,
  { category: Plan["category"]; featured: boolean }
>;

const planOrder = [
  "tributo",
  "huella",
  "recuerdo",
  "recuerdo-especial",
  "memoria",
  "homenaje-integral",
  "legado",
  "honor",
  "presidencial",
] as const;

type PlanSlug = (typeof planOrder)[number];

const indexCardsByName = new Map(
  rawContent.indexCards.map((card) => [card.name, card] as const),
);

const immediateSharedFaqIntro =
  "Sí, este plan está diseñado específicamente para atención inmediata. Llámenos y coordinamos el servicio completo de inmediato, las 24 horas del día.";
const immediateSharedPaymentAnswer =
  "El pago es al contado, mediante efectivo, transferencia o tarjeta. También aceptamos el abono con cargo a la cuota mortuoria, que se descuenta directamente del beneficio una vez que este es cobrado. Al ser un servicio de atención inmediata, no manejamos otras alternativas de pago diferido.";
const immediateSharedActivationAnswer =
  "Nuestra atención es inmediata las 24 horas del día, los 365 días del año. Al llamar al +56 9 90511579 un ejecutivo responde de inmediato y coordina todo desde el primer momento.";
const immediateSharedAdjustmentsAnswer =
  "Sí, es posible ajustar algunos detalles según disponibilidad. Coordínelo directamente con el ejecutivo a cargo durante la llamada.";
const immediateSharedRemoteDeathAnswer =
  "Contamos con coordinación para traslados desde otras ciudades y regiones del país. Los costos de traslado a larga distancia se evalúan según el caso. Consúltenos para coordinarlo de inmediato.";

const immediateCoverageZones = [
  "Iquique",
  "Alto Hospicio",
  "Pozo Almonte",
  "Huara",
  "Pica",
];

const immediateDefaultLocations = [
  {
    name: "Tanatorio Cubillos",
    address: "Caleta Río Seco 2155, esq. Francisco Bilbao",
  },
  {
    name: "Funeraria Cubillos",
    address: "Serrano 999, esq. Juan Martínez",
  },
];

const immediateDescriptions = {
  tributo:
    "Cobertura esencial con ataúd Plana, traslado, sala de velación, cafetería y vehículo de acompañamiento.",
  huella:
    "Cremación digna en el Crematorio Cubillos de Pozo Almonte, con asesoramiento, tramitación integral y acompañamiento cercano.",
  recuerdo:
    "Protección completa con ataúd Mackeley, sala de velación, cafetería, condolencias virtuales y vehículo.",
  "recuerdo-especial":
    "Una alternativa especial y accesible, con cobertura completa y acompañamiento cercano para su familia.",
  memoria:
    "Cobertura completa con ataúd Canciller, traslado, sala de velación y acompañamiento para su familia.",
  "homenaje-integral":
    "Cobertura completa con traslado, sala de velación y vehículo de acompañamiento.",
  legado:
    "Cobertura premium con traslado, sala de velación y apoyo integral para su familia.",
  honor:
    "Nuestra propuesta de mayor distinción. Ataúd Española o Canciller en madera nativa, arreglo floral, condolencias virtuales, cafetería y todos los servicios incluidos.",
  presidencial:
    "Nuestra propuesta de máxima distinción, cobertura y exclusividad.",
} as const satisfies Record<PlanSlug, string>;

const immediateTaglines = {
  tributo:
    "Un plan accesible y completo para proteger a su familia cuando más lo necesita.",
  huella:
    "Cremación digna con todos los servicios esenciales incluidos para acompañar a su familia.",
  recuerdo:
    "Protección completa para su familia con un plan accesible y bien equipado.",
  "recuerdo-especial":
    "Protección completa para su familia con un plan accesible y bien equipado.",
  memoria: "Un plan completo para quienes quieren dejar todo resuelto con dignidad.",
  "homenaje-integral":
    "Servicio funerario con cremación y acompañamiento inmediato para su familia.",
  legado:
    "Servicio premium con atención personalizada y todo lo que su familia necesita.",
  honor:
    "Un plan completo y distinguido para proteger a su familia con todo incluido.",
  presidencial:
    "Un plan completo y distinguido para proteger a su familia con todo incluido.",
} as const satisfies Record<PlanSlug, string>;

const immediateFaqBySlug: Record<PlanSlug, PlanFaqItem[]> = {
  tributo: [
    {
      question: "¿Puedo solicitar este plan si el fallecimiento ya ocurrió?",
      answer: immediateSharedFaqIntro,
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: immediateSharedPaymentAnswer,
    },
    {
      question: "¿El servicio cubre traslados fuera de Iquique?",
      answer:
        "El Plan Tributo incluye traslado local. Para traslados nacionales e internacionales contamos con servicios adicionales. Consúltenos y lo orientamos según sus necesidades.",
    },
    {
      question: "¿Cuánto tiempo tarda en activarse el servicio?",
      answer: immediateSharedActivationAnswer,
    },
    {
      question: "¿Puedo ajustar algún detalle del servicio mientras se coordina?",
      answer: immediateSharedAdjustmentsAnswer,
    },
    {
      question: "¿Qué pasa si el fallecimiento ocurrió fuera de Iquique?",
      answer: immediateSharedRemoteDeathAnswer,
    },
  ],
  huella: [
    {
      question: "¿Puedo solicitar este plan si el fallecimiento ya ocurrió?",
      answer: immediateSharedFaqIntro,
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: immediateSharedPaymentAnswer,
    },
    {
      question: "¿El servicio cubre traslados fuera de Iquique?",
      answer:
        "El Plan Huella incluye traslado local. Para traslados nacionales e internacionales contamos con servicios adicionales. Consúltenos y lo orientamos según sus necesidades.",
    },
    {
      question: "¿Cuánto tiempo tarda en activarse el servicio?",
      answer: immediateSharedActivationAnswer,
    },
    {
      question: "¿Puedo ajustar algún detalle del servicio mientras se coordina?",
      answer: immediateSharedAdjustmentsAnswer,
    },
    {
      question: "¿Qué pasa si el fallecimiento ocurrió fuera de Iquique?",
      answer: immediateSharedRemoteDeathAnswer,
    },
  ],
  recuerdo: [
    {
      question: "¿Puedo solicitar este plan si el fallecimiento ya ocurrió?",
      answer: immediateSharedFaqIntro,
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: immediateSharedPaymentAnswer,
    },
    {
      question: "¿El servicio cubre traslados fuera de Iquique?",
      answer:
        "El Plan Recuerdo incluye traslado local. Para traslados nacionales e internacionales contamos con servicios adicionales. Consúltenos y lo orientamos según sus necesidades.",
    },
    {
      question: "¿Cuánto tiempo tarda en activarse el servicio?",
      answer: immediateSharedActivationAnswer,
    },
    {
      question: "¿Puedo ajustar algún detalle del servicio mientras se coordina?",
      answer: immediateSharedAdjustmentsAnswer,
    },
    {
      question: "¿Qué pasa si el fallecimiento ocurrió fuera de Iquique?",
      answer: immediateSharedRemoteDeathAnswer,
    },
  ],
  "recuerdo-especial": [
    {
      question: "¿Puedo solicitar este plan si el fallecimiento ya ocurrió?",
      answer: immediateSharedFaqIntro,
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: immediateSharedPaymentAnswer,
    },
    {
      question: "¿El servicio cubre traslados fuera de Iquique?",
      answer:
        "El Plan Recuerdo Especial incluye traslado local. Para traslados nacionales e internacionales contamos con servicios adicionales. Consúltenos y lo orientamos según sus necesidades.",
    },
    {
      question: "¿Cuánto tiempo tarda en activarse el servicio?",
      answer: immediateSharedActivationAnswer,
    },
    {
      question: "¿Puedo ajustar algún detalle del servicio mientras se coordina?",
      answer: immediateSharedAdjustmentsAnswer,
    },
    {
      question: "¿Qué pasa si el fallecimiento ocurrió fuera de Iquique?",
      answer: immediateSharedRemoteDeathAnswer,
    },
  ],
  memoria: [
    {
      question: "¿Puedo solicitar este plan si el fallecimiento ya ocurrió?",
      answer: immediateSharedFaqIntro,
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: immediateSharedPaymentAnswer,
    },
    {
      question: "¿El servicio cubre traslados fuera de Iquique?",
      answer:
        "El Plan Memoria incluye traslado local. Para traslados nacionales e internacionales contamos con servicios adicionales. Consúltenos y lo orientamos según sus necesidades.",
    },
    {
      question: "¿Cuánto tiempo tarda en activarse el servicio?",
      answer: immediateSharedActivationAnswer,
    },
    {
      question: "¿Puedo ajustar algún detalle del servicio mientras se coordina?",
      answer: immediateSharedAdjustmentsAnswer,
    },
    {
      question: "¿Qué pasa si el fallecimiento ocurrió fuera de Iquique?",
      answer: immediateSharedRemoteDeathAnswer,
    },
  ],
  "homenaje-integral": [
    {
      question: "¿Puedo solicitar este plan si el fallecimiento ya ocurrió?",
      answer: immediateSharedFaqIntro,
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: immediateSharedPaymentAnswer,
    },
    {
      question: "¿El servicio cubre traslados fuera de Iquique?",
      answer:
        "El Plan Homenaje incluye traslado local. Para traslados nacionales e internacionales contamos con servicios adicionales. Consúltenos y lo orientamos según sus necesidades.",
    },
    {
      question: "¿Cuánto tiempo tarda en activarse el servicio?",
      answer: immediateSharedActivationAnswer,
    },
    {
      question: "¿Puedo ajustar algún detalle del servicio mientras se coordina?",
      answer: immediateSharedAdjustmentsAnswer,
    },
    {
      question: "¿Qué pasa si el fallecimiento ocurrió fuera de Iquique?",
      answer: immediateSharedRemoteDeathAnswer,
    },
  ],
  legado: [
    {
      question: "¿Puedo solicitar este plan si el fallecimiento ya ocurrió?",
      answer: immediateSharedFaqIntro,
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: immediateSharedPaymentAnswer,
    },
    {
      question: "¿El servicio cubre traslados fuera de Iquique?",
      answer:
        "El Plan Legado incluye traslado local. Para traslados nacionales e internacionales contamos con servicios adicionales. Consúltenos y lo orientamos según sus necesidades.",
    },
    {
      question: "¿Cuánto tiempo tarda en activarse el servicio?",
      answer: immediateSharedActivationAnswer,
    },
    {
      question: "¿Puedo ajustar algún detalle del servicio mientras se coordina?",
      answer: immediateSharedAdjustmentsAnswer,
    },
    {
      question: "¿Qué pasa si el fallecimiento ocurrió fuera de Iquique?",
      answer: immediateSharedRemoteDeathAnswer,
    },
  ],
  honor: [
    {
      question: "¿Puedo solicitar este plan si el fallecimiento ya ocurrió?",
      answer: immediateSharedFaqIntro,
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: immediateSharedPaymentAnswer,
    },
    {
      question: "¿El servicio cubre traslados fuera de Iquique?",
      answer:
        "El Plan Honor incluye traslado local. Para traslados nacionales e internacionales contamos con servicios adicionales. Consúltenos y lo orientamos según sus necesidades.",
    },
    {
      question: "¿Cuánto tiempo tarda en activarse el servicio?",
      answer: immediateSharedActivationAnswer,
    },
    {
      question: "¿Puedo ajustar algún detalle del servicio mientras se coordina?",
      answer: immediateSharedAdjustmentsAnswer,
    },
    {
      question: "¿Qué pasa si el fallecimiento ocurrió fuera de Iquique?",
      answer: immediateSharedRemoteDeathAnswer,
    },
  ],
  presidencial: [
    {
      question: "¿Puedo solicitar este plan si el fallecimiento ya ocurrió?",
      answer: immediateSharedFaqIntro,
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: immediateSharedPaymentAnswer,
    },
    {
      question: "¿El servicio cubre traslados fuera de Iquique?",
      answer:
        "El Plan Presidencial incluye traslado local. Para traslados nacionales e internacionales contamos con servicios adicionales. Consúltenos y lo orientamos según sus necesidades.",
    },
    {
      question: "¿Cuánto tiempo tarda en activarse el servicio?",
      answer: immediateSharedActivationAnswer,
    },
    {
      question: "¿Puedo ajustar algún detalle del servicio mientras se coordina?",
      answer: immediateSharedAdjustmentsAnswer,
    },
    {
      question: "¿Qué pasa si el fallecimiento ocurrió fuera de Iquique?",
      answer: immediateSharedRemoteDeathAnswer,
    },
  ],
};

const immediateGalleryOverrides = {
  tributo: {
    title: "Modelo Plana Esperanza",
    images: [
      "/assets/planes/tributo-ataud-01.png",
      "/assets/planes/tributo-ataud-02.png",
      "/assets/planes/tributo-ataud-03.png",
    ],
  },
  huella: {
    title: "Crematorio Cubillos — Pozo Almonte",
    images: [
      "/assets/planes/huella-crematorio-01.png",
      "/assets/planes/huella-crematorio-02.png",
      "/assets/planes/huella-crematorio-03.png",
      "/assets/planes/huella-crematorio-04.png",
      "/assets/planes/huella-crematorio-05.png",
      "/assets/planes/huella-crematorio-06.png",
    ],
  },
  recuerdo: {
    title: "Modelo Mackeley",
    images: [
      "/assets/planes/recuerdo-ataud-01.png",
      "/assets/planes/recuerdo-ataud-02.png",
      "/assets/planes/recuerdo-ataud-03.png",
      "/assets/planes/recuerdo-ataud-04.png",
    ],
  },
  "recuerdo-especial": {
    title: "Modelo Mackeley",
    images: [
      "/assets/planes/recuerdo-especial-ataud-01.png",
      "/assets/planes/recuerdo-especial-ataud-02.png",
      "/assets/planes/recuerdo-especial-ataud-03.png",
    ],
  },
  memoria: {
    title: "Modelo Mackeley",
    images: [
      "/assets/planes/memoria-ataud-01.png",
      "/assets/planes/memoria-ataud-02.png",
      "/assets/planes/memoria-ataud-03.png",
      "/assets/planes/memoria-ataud-04.png",
      "/assets/planes/memoria-ataud-05.png",
    ],
  },
  "homenaje-integral": {
    title: "Modelo Plana Esperanza",
    images: [
      "/assets/planes/homenaje-integral-ataud-01.png",
      "/assets/planes/homenaje-integral-ataud-02.png",
      "/assets/planes/homenaje-integral-ataud-03.png",
      "/assets/planes/homenaje-integral-ataud-04.png",
    ],
  },
  legado: {
    title: "Modelo Victor Española",
    images: [
      "/assets/planes/legado-ataud-01.png",
      "/assets/planes/legado-ataud-02.png",
      "/assets/planes/legado-ataud-03.png",
    ],
  },
  honor: {
    title: "Modelo Lincoln",
    images: [
      "/assets/planes/honor-ataud-01.png",
      "/assets/planes/honor-ataud-02.png",
      "/assets/planes/honor-ataud-03.png",
      "/assets/planes/honor-ataud-04.png",
      "/assets/planes/honor-ataud-05.png",
    ],
  },
  presidencial: {
    title: "Modelo Lincoln Española cuerpo entero 3 corazas",
    images: [
      "/assets/planes/presidencial-ataud-01.png",
      "/assets/planes/presidencial-ataud-02.png",
      "/assets/planes/presidencial-ataud-03.png",
      "/assets/planes/presidencial-ataud-04.png",
    ],
  },
} as const satisfies Record<
  PlanSlug,
  { title: string; images: string[] }
>;

function buildImmediateContent(
  slug: PlanSlug,
  content: RawPlanContent,
): PlanImmediateContent {
  const galleryOverride = immediateGalleryOverrides[slug];

  return {
    description: immediateDescriptions[slug],
    tagline: immediateTaglines[slug],
    ctaLabel: "Solicitar atención ahora",
    priceNote: "Pago al contado",
    servicesIncluded: content.services,
    faq: immediateFaqBySlug[slug],
    coverageZones: immediateCoverageZones,
    gallery: {
      type: content.galleryLabel === "Nuestro Crematorio" ? "crematorio" : "ataud",
      sectionLabel: content.galleryLabel,
      title: galleryOverride.title,
      images: galleryOverride.images,
      specs: content.specs.length > 0 ? content.specs : undefined,
    },
    paymentOptions:
      slug === "huella"
        ? [
            {
              icon: "check",
              label: "Pago al contado — efectivo, transferencia o tarjeta",
            },
          ]
        : [
            {
              icon: "check",
              label: "Pago al contado — efectivo, transferencia o tarjeta",
            },
            {
              icon: "info",
              label: "Cuota mortuoria aplicada como abono",
              tooltip:
                "Sujeto a verificación del beneficio previsional al momento del fallecimiento",
            },
          ],
    location:
      slug === "huella"
        ? undefined
        : slug === "tributo"
          ? {
              name: "Funeraria Cubillos",
              address: "Serrano 999, esq. Juan Martínez",
            }
          : immediateDefaultLocations[0],
    whatsappMessage: `Hola, necesito atención inmediata — quisiera información Plan ${content.name}`,
  };
}

export const PLANES: Plan[] = planOrder.map((slug) => {
  const content = rawContent.plans[slug];
  const card = indexCardsByName.get(`Plan ${content.name}`);
  const meta = planMeta[slug];

  if (!card) {
    throw new Error(`Missing index card data for ${content.name}.`);
  }

  return {
    name: `Plan ${content.name}`,
    slug,
    category: meta.category,
    description: card.description,
    priceFrom: card.price,
    tagline: content.tagline,
    monthlyFrom: card.monthly,
    gallery: {
      type: content.galleryLabel === "Nuestro Crematorio" ? "crematorio" : "ataud",
      sectionLabel: content.galleryLabel,
      title: content.galleryTitle,
      images: content.galleryImages,
      specs: content.specs.length > 0 ? content.specs : undefined,
    },
    servicesIncluded: content.services,
    howItWorks: content.steps,
    faq: content.faq,
    coverageZones: content.coverage,
    sidebar: {
      subtitle: slug === "huella" ? "Cremación" : undefined,
      priceReferencial: card.price,
      financing: content.financing,
      cuotas: content.cuotas,
      locationTitle: content.locationTitle ?? undefined,
      locations: content.locations,
    },
    inmediata: buildImmediateContent(slug, content),
    featured: meta.featured,
  };
});

export const PLANES_BY_SLUG = Object.fromEntries(
  PLANES.map((plan) => [plan.slug, plan]),
) as Record<string, Plan>;

export const PLANES_INDEX_HERO_DESCRIPTION = rawContent.heroDescription;

export const PLANES_IMMEDIATE_INDEX_HERO_DESCRIPTION =
  "Cuando la necesidad es hoy, llámenos y coordinamos todo de inmediato. Atención las 24 horas, los 365 días del año, con pago al contado y sin trámites de financiamiento.";

export const PLANES_INDEX_BENEFITS: PlanIndexBenefit[] = rawContent.benefits.map(
  (benefit, index) => ({
    ...benefit,
    icon: ["shield", "heart", "credit-card", "transfer"][index] as PlanIndexBenefit["icon"],
  }),
);

export const PLANES_INDEX_FINAL_CTA = rawContent.finalCta;

export const PLANES_IMMEDIATE_INDEX_FINAL_CTA = {
  title: "¿No sabe qué plan elegir?",
  description:
    "Llámenos o escríbanos por WhatsApp. Un ejecutivo lo orientará sin compromiso para encontrar el plan que mejor se adapta a su situación y presupuesto.",
  whatsappHref:
    "https://wa.me/56990511579?text=Hola%2C+quisiera+m%C3%A1s+informaci%C3%B3n",
};

export const PLANES_TRUST_STATS: TrustStat[] = [
  { value: "+70", label: "Años de trayectoria" },
  { value: "+40.000", label: "Familias atendidas" },
  { value: "4", label: "Sucursales en la región" },
];

export const PLANES_TRUST_FEATURES: TrustFeature[] = [
  {
    icon: "clock",
    title: "Atención inmediata 24/7",
    description:
      "Te acompañamos desde el primer llamado, los 365 días del año, a cualquier hora.",
  },
  {
    icon: "shield",
    title: "Precio garantizado",
    description:
      "El valor pactado queda congelado desde el primer día. Sin reajustes, sin cobros sorpresa.",
  },
  {
    icon: "people",
    title: "Equipo profesional y humano",
    description:
      "Personal capacitado que acompaña a tu familia con respeto, cercanía y dignidad en cada momento.",
  },
  {
    icon: "file-check",
    title: "Tramitación integral",
    description:
      "Nosotros gestionamos todos los trámites legales y administrativos, para que tu familia no se preocupe de nada.",
  },
];

export const PLANES_IMMEDIATE_TRUST_FEATURES: TrustFeature[] = [
  PLANES_TRUST_FEATURES[0],
  {
    icon: "shield",
    title: "Precio transparente",
    description:
      "El valor del servicio se informa desde el primer momento. Sin cobros ocultos ni sorpresas.",
  },
  PLANES_TRUST_FEATURES[2],
  PLANES_TRUST_FEATURES[3],
];

export function getPlanBySlug(slug: string) {
  return PLANES.find((plan) => plan.slug === slug);
}
