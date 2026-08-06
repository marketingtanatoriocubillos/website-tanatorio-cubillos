import type { Plan } from "../lib/types";

export const PLANES: Plan[] = [
  {
    name: "Plan Homenaje Integral",
    slug: "homenaje-integral",
    category: "Venta Futuro",
    description:
      "Cobertura integral con traslado, capilla a domicilio e incineracion incluida.",
    priceFrom: "$2.190.000",
  },
  {
    name: "Plan Huella",
    slug: "huella",
    category: "Cremación",
    description:
      "Cremacion digna con tramitacion integral e incineracion incluida.",
    priceFrom: "$1.290.000",
  },
  {
    name: "Plan Tributo",
    slug: "tributo",
    category: "Venta Futuro",
    description: "Cobertura esencial con traslado, sala de velacion y vehiculo.",
    priceFrom: "$900.000",
  },
  {
    name: "Plan Recuerdo",
    slug: "recuerdo",
    category: "Venta Futuro",
    description:
      "Proteccion completa con ataud Mackeley y vehiculo de acompanamiento.",
    priceFrom: "$1.350.000",
  },
  {
    name: "Plan Recuerdo Especial",
    slug: "recuerdo-especial",
    category: "Venta Futuro",
    description:
      "Una alternativa especial y accesible para honrar su memoria.",
    priceFrom: "$1.590.000",
  },
  {
    name: "Plan Memoria",
    slug: "memoria",
    category: "Venta Futuro",
    description: "Plan con ataud Canciller y todos los servicios esenciales.",
    priceFrom: "$1.890.000",
  },
  {
    name: "Plan Legado",
    slug: "legado",
    category: "Venta Futuro",
    description:
      "Premium con ataud Espanola, arreglo floral y atencion personalizada.",
    priceFrom: "$2.690.000",
  },
  {
    name: "Plan Honor",
    slug: "honor",
    category: "Venta Futuro",
    description:
      "Nuestra propuesta de mayor distincion. Ataud Espanola o Canciller en madera nativa, arreglo floral y todos los servicios.",
    priceFrom: "$3.650.000",
  },
  {
    name: "Plan Presidencial",
    slug: "presidencial",
    description:
      "Nuestra propuesta de maxima distincion y exclusividad. Cobertura premium superior, atencion personalizada y todos los servicios incluidos.",
    priceFrom: "$4.390.000",
    featured: true,
  },
];
