import type { ServiceDetailSection } from "../lib/types";

export const SERVICE_DETAIL_SECTIONS: ServiceDetailSection[] = [
  {
    id: "servicio-funerario",
    sectionLabel: "Servicio principal",
    title: "Servicio Funerario",
    description:
      "Nuestros planes se caracterizan por un servicio de calidad con el más alto profesionalismo, respeto, sentido humano y social, brindando acompañamiento oportuno que lo guíe y alivie en el proceso de duelo.",
    features: [
      "Asesoría 24/7",
      "Tramitación Integral",
      "Carrozas Exclusivas",
      "Salas Velatorias",
      "Servicio de Cafetería",
      "Libro y Tarjetas de Condolencias",
      "Portarretrato de Recuerdo",
      "Servicio Nacional e Internacional",
    ],
    media: {
      type: "single",
      src: "/assets/img/servicios-funerarios.jpg",
      alt: "Servicio Funerario Cubillos",
    },
    actions: [
      {
        label: "Ver planes inmediatos",
        href: "/planes-inmediatos",
        variant: "solid",
      },
      {
        label: "Ver planes futuros",
        href: "/planes",
        variant: "outline",
      },
    ],
    reverse: false,
    bgClass: "bg-white",
  },
  {
    id: "cremacion",
    sectionLabel: "Crematorio propio",
    title: "Cremación",
    description:
      "Nuestro crematorio en Pozo Almonte es el único de propiedad privada en la Región de Tarapacá. Ubicado en un lugar privilegiado por la naturaleza, ofrece comodidad, tranquilidad y los mejores estándares de servicio. Servicio disponible para adultos, párvulos, exhumaciones y reducciones.",
    noteCard: {
      kicker: "Razón Social",
      lines: [
        "Crematorio Cubillos SpA — R.U.T. 76.787.553-3",
        "Dirección: Aguada de Canchones s/n, Sitio 35, La Huayca, Pozo Almonte",
        "Representante Legal: Jorge Mario Cubillos Quezada",
      ],
    },
    features: [
      "Proceso de cremación",
      "Ánfora estándar incluida",
      "Tramitación Integral",
      "Sala para despedida",
      "Servicio de Cafetería",
      "Música Ambiental",
      "Estacionamientos",
    ],
    media: {
      type: "carousel",
      images: [
        "/assets/img/crematorio-pozo-almonte.jpg",
        "/assets/img/crematorio-pozo-almonte-2.jpg",
        "/assets/img/crematorio-pozo-almonte-3.jpg",
      ],
      alt: "Crematorio Cubillos Pozo Almonte",
    },
    actions: [
      {
        label: "Ver Plan Huella",
        href: "/planes/huella",
        variant: "solid",
      },
      {
        label: "Consultar",
        href: "tel:+56990511579",
        variant: "outline",
      },
    ],
    reverse: true,
    bgClass: "bg-bgPage",
  },
  {
    id: "exhumacion",
    sectionLabel: "Gestión profesional",
    title: "Exhumación y/o Reducción",
    description:
      "Contamos con personal calificado y experimentado para apoyarle en el traslado de los restos de su familiar. Gestionamos el proceso cumpliendo toda la normativa legal vigente. Los precios varían de acuerdo a las distancias de traslado. Contáctenos para orientarle según su situación particular.",
    features: [],
    media: {
      type: "single",
      src: "/assets/img/exhumacion-reduccion.jpg",
      alt: "Exhumación y reducción Cubillos",
    },
    actions: [
      {
        label: "Consultar precio",
        href: "tel:+56990511579",
        variant: "solid",
      },
    ],
    reverse: false,
    bgClass: "bg-white",
  },
  {
    id: "traslados",
    sectionLabel: "Nacional e Internacional",
    title: "Traslados Nacionales e Internacionales",
    description:
      "Coordinamos traslados nacionales e internacionales gracias a nuestros convenios con empresas especializadas en todo el país y en el extranjero. Gestionamos toda la logística y documentación necesaria. Los precios varían según la distancia y el plan de servicio funerario. Consúltenos al +56 9 90511579.",
    features: [
      "Repatriaciones hacia el extranjero",
      "Traslados entre regiones de Chile",
      "Coordinación de documentación",
      "Asesoría permanente 24/7",
    ],
    media: {
      type: "single",
      src: "/assets/img/traslados-nacionales.png",
      alt: "Traslados nacionales e internacionales Cubillos",
    },
    actions: [
      {
        label: "Consultar",
        href: "tel:+56990511579",
        variant: "solid",
      },
    ],
    reverse: true,
    bgClass: "bg-bgPage",
  },
  {
    id: "carrozas",
    sectionLabel: "Flota propia",
    title: "Carrozas Exclusivas",
    description:
      "Contamos con una flota de carrozas modernas Mercedes Benz de última generación para rendir un homenaje digno y elegante a su ser querido. Cada traslado es realizado con la solemnidad y el respeto que el momento merece.",
    features: [],
    media: {
      type: "carousel",
      images: [
        "/assets/img/carroza-mercedes-1.jpg",
        "/assets/img/carroza-mercedes-2.jpg",
        "/assets/img/carroza-mercedes-3.jpg",
      ],
      alt: "Carrozas Exclusivas Maserati y Mercedes Benz Cubillos",
    },
    actions: [
      {
        label: "Ver planes inmediatos",
        href: "/planes-inmediatos",
        variant: "solid",
      },
      {
        label: "Ver planes futuros",
        href: "/planes",
        variant: "outline",
      },
    ],
    reverse: false,
    bgClass: "bg-white",
  },
  {
    id: "vehiculo",
    sectionLabel: "Confort familiar",
    title: "Vehículo de Acompañamiento",
    description:
      "Nuestro servicio funerario cuenta con vehículo de acompañamiento para la familia durante el cortejo fúnebre (excluye traslado al crematorio), brindando comodidad y privacidad en un momento tan sensible. Disponible solo para funerales en las comunas de Iquique y Alto Hospicio. Incluido en los planes de Servicio Funerario.",
    features: [],
    media: {
      type: "carousel",
      images: [
        "/assets/img/vehiculo-acompanamiento-1.png",
        "/assets/img/vehiculo-acompanamiento-2.png",
        "/assets/img/vehiculo-acompanamiento-3.png",
      ],
      alt: "Vehículo de acompañamiento Cubillos",
    },
    actions: [
      {
        label: "Ver planes inmediatos",
        href: "/planes-inmediatos",
        variant: "solid",
      },
      {
        label: "Ver planes futuros",
        href: "/planes",
        variant: "outline",
      },
    ],
    reverse: true,
    bgClass: "bg-bgPage",
  },
  {
    id: "salas",
    sectionLabel: "Instalaciones propias",
    title: "Salas Velatorias",
    description:
      "Nuestras salas velatorias son espacios cómodos, acogedores y privados diseñados para que la familia pueda despedirse de su ser querido con tranquilidad y recogimiento. Contamos con instalaciones modernas en Tanatorio Bilbao (5 Salas velatorias) y Funeraria Serrano (3 salas velatorias).",
    features: [
      "Privacidad garantizada",
      "Climatización",
      "Servicio de cafetería incluido",
      "Servicio de cafetería incluido",
      "Estacionamiento disponible",
    ],
    media: {
      type: "carousel",
      images: [
        "/assets/img/sala-velatorias-tanatorio-sala-1.jpg",
        "/assets/img/sala-velatorias-tanatorio-sala-2.png",
        "/assets/img/sala-velatorias-tanatorio-sala-3.jpg",
        "/assets/img/sala-velatorias-tanatorio-sala-4.jpg",
        "/assets/img/sala-velatorias-tanatorio-sala-5.jpg",
        "/assets/img/sala-ceremonia-tanatorio.jpg",
        "/assets/img/sala-velatorias-serrano-sala-1.jpg",
        "/assets/img/sala-velatorias-serrano-sala-2.jpg",
        "/assets/img/sala-velatorias-serrano-sala-3.jpg",
      ],
      alt: "Salas Velatorias Cubillos",
    },
    actions: [
      {
        label: "Ver planes inmediatos",
        href: "/planes-inmediatos",
        variant: "solid",
      },
      {
        label: "Ver planes futuros",
        href: "/planes",
        variant: "outline",
      },
    ],
    reverse: false,
    bgClass: "bg-white",
  },
  {
    id: "cafeteria-premium",
    sectionLabel: "Atención a la familia · Premium",
    title: "Cafetería Premium",
    description:
      "En nuestra sede de calle Bilbao ofrecemos un servicio de cafetería premium para acompañar a sus familiares durante la velación: selección de bebestibles, repostería y una atención más detallista en cada momento. Un espacio pensado para que la familia se sienta cuidada de principio a fin. Tanatorio Cubillos – Sucursal Bilbao. Este servicio de cafetería premium está disponible únicamente en Caleta Río Seco 2155, esq. Francisco Bilbao, Iquique. Horario de atención: de 17:00 a 22:00 horas.",
    features: [],
    media: {
      type: "carousel",
      images: [
        "/assets/img/cafeteria-velatoria-1.jpg",
        "/assets/img/cafeteria-velatoria-2.jpg",
        "/assets/img/cafeteria-velatoria-3.jpg",
        "/assets/img/cafeteria-velatoria-4.jpg",
        "/assets/img/cafeteria-velatoria-5.jpg",
      ],
      alt: "Cafetería Premium Sucursal Bilbao",
    },
    actions: [
      {
        label: "Ver planes inmediatos",
        href: "/planes-inmediatos",
        variant: "solid",
      },
      {
        label: "Ver planes futuros",
        href: "/planes",
        variant: "outline",
      },
    ],
    reverse: true,
    bgClass: "bg-bgPage",
  },
  {
    id: "cafeteria",
    sectionLabel: "Atención a la familia",
    title: "Cafetería",
    description:
      "Nuestros servicios funerarios incluyen cafetería para brindar a sus familiares y seres queridos la atención que se merecen durante el proceso de velación. Un pequeño gesto que marca la diferencia en un momento difícil. Disponible en Sucursal Serrano y a domicilio. Servicio de cafetería incluido en los planes de Servicio Funerario para velaciones en Serrano 999 y atenciones a domicilio dentro de la Región de Tarapacá.",
    features: [],
    media: {
      type: "carousel",
      images: [
        "/assets/img/cafeteria-afuera-1.png",
        "/assets/img/cafeteria-afuera-2.png",
        "/assets/img/cafeteria-afuera-3.png",
      ],
      alt: "Cafetería Sucursal Serrano",
    },
    actions: [
      {
        label: "Ver planes inmediatos",
        href: "/planes-inmediatos",
        variant: "solid",
      },
      {
        label: "Ver planes futuros",
        href: "/planes",
        variant: "outline",
      },
    ],
    reverse: false,
    bgClass: "bg-white",
  },
  {
    id: "condolencias",
    sectionLabel: "Recuerdo permanente",
    title: "Libro de Condolencias",
    description:
      "Nuestros servicios funerarios incluyen libros de condolencias, tarjetas de condolencias, cinta impresa con el nombre de su ser querido y portarretrato de recuerdo. Elementos que la familia podrá guardar como un recuerdo tangible.",
    features: [
      "Libro de condolencias",
      "Tarjetas de condolencias",
      "Cinta Inmemorial impresa",
      "Portarretrato de recuerdo",
    ],
    media: {
      type: "single",
      src: "/assets/img/libro-condolencias.jpg",
      alt: "Libro de condolencias Cubillos",
    },
    actions: [
      {
        label: "Ver planes inmediatos",
        href: "/planes-inmediatos",
        variant: "solid",
      },
      {
        label: "Ver planes futuros",
        href: "/planes",
        variant: "outline",
      },
    ],
    reverse: true,
    bgClass: "bg-bgPage",
  },
  {
    id: "tramites",
    sectionLabel: "Sin preocupaciones",
    title: "Trámites Funerarios",
    description:
      "Nos encargamos de todos los certificados y trámites legales necesarios para que usted solo se ocupe de acompañar a su familia. Desde el certificado de defunción hasta los permisos de sepultación o cremación. Incluido en todos los planes de Servicio Funerario y Cremación.",
    features: [
      "Certificado de defunción",
      "Permiso de sepultación",
      "Trámites de cremación",
      "Coordinación con Registro Civil",
    ],
    media: {
      type: "single",
      src: "/assets/img/tramites-funerarios.jpg",
      alt: "Tramitación integral Cubillos",
    },
    actions: [
      {
        label: "Ver planes inmediatos",
        href: "/planes-inmediatos",
        variant: "solid",
      },
      {
        label: "Ver planes futuros",
        href: "/planes",
        variant: "outline",
      },
    ],
    reverse: true,
    bgClass: "bg-white",
  },
  {
    id: "tellmebye",
    sectionLabel: "Tecnología al servicio del duelo",
    title: "Condolencias Virtuales Tellmebye",
    description:
      "A través de nuestra plataforma digital Tellmebye, amigos y familiares que no pueden estar presentes pueden dejar sus mensajes de condolencia de manera virtual. Un espacio digital para honrar la memoria de su ser querido. Solo disponible en nuestras salas velatorias de Bilbao y Serrano.",
    features: [
      "Mensajes virtuales de condolencia",
      "Accesible desde cualquier dispositivo",
      "Recuerdo digital permanente",
      "Incluido en planes seleccionados",
    ],
    media: {
      type: "carousel",
      images: [
        "/assets/img/tellmebye-01.png",
        "/assets/img/tellmebye-02.png",
        "/assets/img/tellmebye-03.png",
      ],
      alt: "Condolencias virtuales Tellmebye Cubillos",
    },
    actions: [
      {
        label: "Ver planes inmediatos",
        href: "/planes-inmediatos",
        variant: "solid",
      },
      {
        label: "Ver planes futuros",
        href: "/planes",
        variant: "outline",
      },
    ],
    reverse: false,
    bgClass: "bg-bgPage",
  },
];

export const SERVICES_SCROLL_NAV_ITEMS = [
  { label: "Servicio Funerario", href: "#servicio-funerario", targetId: "servicio-funerario" },
  { label: "Cremación", href: "#cremacion", targetId: "cremacion" },
  { label: "Exhumación y Reducción", href: "#exhumacion", targetId: "exhumacion" },
  { label: "Traslados", href: "#traslados", targetId: "traslados" },
  { label: "Carrozas Exclusivas", href: "#carrozas", targetId: "carrozas" },
  { label: "Vehículo Acompañamiento", href: "#vehiculo", targetId: "vehiculo" },
  { label: "Salas Velatorias", href: "#salas", targetId: "salas" },
  { label: "Cafetería Premium", href: "#cafeteria-premium", targetId: "cafeteria-premium" },
  { label: "Cafetería", href: "#cafeteria", targetId: "cafeteria" },
  { label: "Libro de Condolencias", href: "#condolencias", targetId: "condolencias" },
  { label: "Previsión Funeraria", href: "/planes" },
  { label: "Trámites Funerarios", href: "#tramites", targetId: "tramites" },
  { label: "Condolencias Virtuales", href: "#tellmebye", targetId: "tellmebye" },
] as const;
