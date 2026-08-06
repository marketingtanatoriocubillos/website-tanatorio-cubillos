# PROGRESS.md — Estado del proyecto

Última actualización: [actualizar fecha cada vez que edites este archivo]

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
- Animación de flecha (`group-hover:translate-x-1`) aplicada a todos los botones tipo `btn-arrow`

## 🚧 En progreso

- `PlanesSection.tsx` — sección con tabs (Atención Inmediata / Venta Futuro), selector animado,
  grid de 9 cards de planes + card destacada (Plan Presidencial). **Último prompt enviado a
  Codex, pendiente de revisión visual.**

## ⏳ Pendiente (Home)

Falta revisar el HTML original más allá de la sección Planes para confirmar qué sigue (sección
de Sucursales, testimonios, etc. — pendiente de mapear).

## ⏳ Pendiente (páginas interiores)

Ninguna página interior migrada todavía. El sitio original tiene:
- `/servicios`, `/crematorio`, `/nosotros`, `/contacto`
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
