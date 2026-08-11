# PROGRESS.md — Estado del proyecto

Última actualización: 2026-08-11

Este archivo es el "resumen ejecutivo" del proyecto. Pégalo al inicio de cualquier chat nuevo
(Claude o Codex) para que tenga contexto inmediato de qué está hecho, qué falta, y qué
decisiones ya se tomaron.

## ✅ Completado

### Setup base
- Proyecto Next.js (App Router) + TypeScript estricto + Tailwind configurado
- Tokens de color y tipografía en `tailwind.config.ts`
- Fuentes Quicksand/Open Sans vía `next/font/google`

### Layout global (`src/components/layout/`)
- `Topbar.tsx` — franja superior con email, ubicación, redes sociales
- `Header.tsx` + `DesktopNav.tsx` + `DropdownNav.tsx` — nav desktop con dropdowns click-based
  (Servicios, Planes Inmediatos, Previsión Funeraria — 9 planes cada uno, sin el link "Ver X" de
  más que se había agregado por error)
- `MobileDrawer.tsx` — drawer mobile con acordeones, montado vía Portal de React
  (`createPortal`) para evitar bugs de stacking context
- `MobileCtaBar.tsx` — barra fija inferior (Llamar/WhatsApp), solo visible en mobile
- `FloatingButtons.tsx` — botones flotantes WhatsApp + Urgencias 24/7, solo visibles en desktop
- `Footer.tsx` — 4 columnas (marca, Servicios, Planes, Sucursales+Legal)
- Íconos reutilizables en `src/components/ui/icons/`
- Data centralizada: `src/data/navigation.ts`, `src/data/planes.ts` (9 planes, fuente única de
  verdad para header/drawer/footer/home)

**Bugs resueltos en el layout**: dropdown que se cerraba con hover, error de hidratación, drawer
tapado por otros elementos (fix: Portal), z-index de header/drawer/cta-bar, favicon pisado por
`app/favicon.ico`, warnings de aspect-ratio en `<Image>` del logo.

### Home (`src/components/home/`) — `src/app/page.tsx`
- `Hero.tsx` — video de fondo (desktop/mobile), h1, botones, barra de estadísticas
- `QuickAccessBar.tsx` — 3 accesos rápidos (título oculto en mobile por decisión de diseño)
- `ServiciosSection.tsx` — 6 cards de servicios (1 destacada + 5 secundarias), hover sin cambio
  de color en el borde (decisión de diseño, difiere del original a propósito)
- `UrgentCtaBand.tsx` — banda azul angosta "Atención Inmediata 24/7"
- `PlanesSection.tsx` — sección con tabs (Atención Inmediata / Venta Futuro), selector animado,
  grid de 9 cards de planes + card destacada (Plan Presidencial)
- `PrevisionSection.tsx` — bloque de beneficios + timeline "Cómo funciona"
- `DiferenciadoresSection.tsx` — 4 diferenciadores, incluyendo `FleetIcon` y `CrematoriumIcon`
  como íconos SVG complejos reutilizables
- `NosotrosSection.tsx` — bloque "Quiénes somos" con estadísticas, CTA e `ImageCarousel`
  reutilizable con autoplay (`autoPlayStartDelay={0}`)
- `TestimoniosCarousel.tsx` — carrusel deslizante de 6 testimonios (3 desktop / 1 mobile),
  autoplay con delay inicial de 1000ms
- `CrematorioSection.tsx` — bloque promocional del crematorio con `ImageCarousel`
- `ExhumacionPromoSection.tsx` — promo de cremación para exhumación con CTA de llamada y WhatsApp
- `SucursalesSection.tsx` — grid de 4 sucursales con badges, datos de contacto y links a Google Maps
- `ContactoSection.tsx` — bloque de contacto del Home con CTA inmediata y formulario funcional
  que envía a `/api/contacto`
- `FinalCtaBand.tsx` — banda CTA final antes del footer con acceso rápido a llamada y ancla a
  contacto
- `ImageCarousel.tsx` — componente UI reutilizable para carruseles de imágenes, con soporte de
  autoplay opcional (`autoPlay`, `autoPlayInterval`, `autoPlayStartDelay`)
- `src/app/api/contacto/route.ts` — API Route que reenvía formularios a Google Sheets
  (Apps Script) usando `GOOGLE_SHEETS_WEBHOOK_URL`
- Animación de flecha (`group-hover:translate-x-1`) aplicada a todos los botones tipo `btn-arrow`

### Página interior `/servicios`
- `src/app/servicios/page.tsx` — página completa de servicios
- `src/components/servicios/ServiciosHero.tsx` — hero interior con copy exacto de la referencia
- `src/components/servicios/ScrollSpyNav.tsx` — nav sticky con scroll horizontal, fades laterales e
  IntersectionObserver para resaltar la sección activa
- `src/components/servicios/ServiceDetailSection.tsx` — componente reutilizable que renderiza las
  12 secciones desde data tipada
- `src/components/servicios/ServiciosFinalCta.tsx` — CTA final de orientación
- `src/data/servicios.ts` — fuente única de verdad para pills + 12 secciones de contenido
- Varios `ImageCarousel` con autoplay escalonado (`0ms`, `1000ms`, `2000ms`, etc.) para evitar
  que todos avancen sincronizados

### Página interior `/crematorio`
- `src/app/crematorio/page.tsx` — página completa del crematorio
- `src/components/crematorio/` — secciones modulares del hero, proceso, diferenciadores, ánforas,
  exhumación, CTA de Plan Huella y ubicación/contacto
- `src/components/crematorio/crematorioData.tsx` — arrays tipados para stats, checks, pasos,
  diferenciadores y cards repetidas

### Página interior `/nosotros`
- `src/app/nosotros/page.tsx` — página completa de nosotros
- `src/components/nosotros/` — hero, barra de stats, historia, valores, infraestructura, equipo y
  CTA final en componentes modulares
- `src/components/nosotros/nosotrosData.tsx` — arrays tipados para stats, valores e infraestructura
- Nota pendiente: Historia y Equipo quedaron con placeholders internos controlados hasta que el
  cliente entregue más texto y fotos reales

## 🚧 En progreso

Nada en curso.

## ✅ Home completado

Todas las secciones del Home ya están migradas:
- `Hero`
- `QuickAccessBar`
- `ServiciosSection`
- `UrgentCtaBand`
- `PlanesSection`
- `PrevisionSection`
- `DiferenciadoresSection`
- `NosotrosSection`
- `TestimoniosCarousel`
- `CrematorioSection`
- `ExhumacionPromoSection`
- `SucursalesSection`
- `ContactoSection`
- `FinalCtaBand`

## ⏳ Pendiente (páginas interiores)

Faltan por migrar:
- `/contacto`
- `/planes/[slug]` y `/planes-inmediatos/[slug]` — 9 slugs cada una (páginas dinámicas)
- `/planes` y `/planes-inmediatos` — landings índice de cada categoría (el archivo de
  `_legacy-reference/` para la de "Previsión Funeraria" ya está identificado)
- `/terminos-y-condiciones`, `/politica-privacidad`

## 📌 Decisiones de diseño (difieren del sitio original a propósito)

- Cards de servicios: sin cambio de color de borde en hover, solo movimiento
- Dropdowns del nav: sin el link "Ver todos los X" arriba de la lista (se accede a las landings
  vía breadcrumb dentro de cada página de plan individual, no desde el dropdown)
- Título "Accesos rápidos" oculto en mobile

## Archivos de referencia

- `_legacy-reference/` — HTML/CSS del sitio viejo (en `.gitignore`, no se sube a GitHub)
- `AGENTS.md` — reglas de código y convenciones fijas del proyecto
