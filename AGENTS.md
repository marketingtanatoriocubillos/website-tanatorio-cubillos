# AGENTS.md — Funeraria Cubillos (migración a Next.js)

Este archivo son instrucciones persistentes para cualquier agente (Codex, Claude, etc.) que
trabaje en este repo. Léelo completo antes de tocar código.

## Qué es este proyecto

Migración del sitio de Funeraria Cubillos (funeraria/crematorio/tanatorio en Iquique, Chile) de
HTML/CSS estático a Next.js con TypeScript. Objetivo: mismo diseño y contenido del sitio
original, pero con código limpio, tipado, mantenible y sin duplicación.

## Stack

- Next.js (App Router), TypeScript estricto (`strict: true`)
- Tailwind CSS (config en `tailwind.config.ts`, tokens de color/fuente ya definidos ahí)
- Fuentes: Quicksand (`font-heading`) y Open Sans (`font-body`), vía `next/font/google`
- Sin librerías extra sin preguntar antes

## Estructura de carpetas

```
src/
  app/                    → páginas (App Router)
  components/
    layout/               → Header, Topbar, Footer, MobileDrawer, FloatingButtons, MobileCtaBar
    home/                 → secciones específicas del Home (Hero, PlanesSection, etc.)
    planes/               → componentes reutilizables de planes (PlanCard, etc.)
    ui/icons/              → íconos SVG reutilizables, un componente por ícono
  data/                   → navigation.ts, planes.ts (fuente única de verdad, sin duplicar datos)
  lib/types.ts            → interfaces compartidas (NavLink, Plan, FooterColumn, etc.)
_legacy-reference/        → HTML/CSS del sitio viejo, SOLO como referencia de contenido y valores
                             exactos (colores, textos, spacing). NUNCA copiar estilos inline ni
                             JS vanilla de ahí — todo se reconstruye limpio. Está en .gitignore.
```

## Reglas de código (no negociables)

1. **TypeScript estricto, sin `any`** salvo justificación explícita en comentario.
2. **Cero estilos inline** (`style={{...}}`) — todo con clases de Tailwind. Usa los tokens ya
   definidos en `tailwind.config.ts` (`brand.primary`, `brand.accent`, `primaryBg`, `accentDark`,
   `whatsapp`, etc.) en vez de hex sueltos si ya existe un token equivalente.
3. **Elementos que se repiten → array de datos + `.map()`**, nunca copiar/pegar el mismo bloque
   de JSX varias veces con solo el texto cambiando.
4. **Componente propio (archivo aparte) solo si**: (a) se reutiliza en más de un lugar del sitio,
   o (b) el archivo padre se está poniendo largo/mezclando responsabilidades. Si algo se usa una
   sola vez y es corto, un `.map()` inline alcanza — no crear archivos por crear.
5. **Server Components por defecto.** Solo usar `"use client"` cuando el componente
   necesita estado, efectos, o listeners del navegador (dropdowns, drawer, tabs).
6. **Links internos**: siempre `<Link>` de `next/link`. `<a>` normal solo para `mailto:`, `tel:`,
   o links externos.
7. **Imágenes**: siempre `<Image>` de `next/image`, nunca `<img>`.

## Gotchas ya resueltos (no los repitas)

- **`backdrop-filter` o `position: sticky` + `z-index` en un ancestro crea un nuevo stacking
  context** que atrapa a los hijos `fixed` dentro de sus límites, sin importar su propio
  z-index. El `MobileDrawer` usa un **Portal de React** (`createPortal` a `document.body`)
  precisamente para evitar este problema — no lo cambies a renderizado normal.
- **`src/app/favicon.ico`** (si existe) tiene prioridad automática sobre `metadata.icons` en
  Next.js. El favicon real va referenciado en `metadata.icons` en `layout.tsx`.
- **Dropdowns del nav son click-based (useState), no hover** — el hover con gap entre botón y
  menú se rompe fácil. Ver `DesktopNav.tsx` / `DropdownNav.tsx` como referencia del patrón.
- **Decisión de diseño**: las cards de servicios NO cambian el color del borde a amarillo en
  hover (a diferencia del sitio original) — el usuario prefiere solo el movimiento (translateY).
  No "corregir" esto de vuelta al original.
- Después de crear archivos nuevos, si Next.js tira "Module not found" para un archivo que sí
  existe, probablemente es caché de Turbopack: `rm -rf .next` y reiniciar `npm run dev`.

## Flujo de verificación obligatorio después de CUALQUIER cambio

```bash
npm run lint
npx tsc --noEmit
npm run dev   # y confirmar visualmente si el cambio es de UI
```

No des un cambio por terminado sin correr estos 3 pasos.

## Convención de commits

Mensajes cortos y descriptivos, prefijo de tipo cuando aplique:
`fix: ...`, `feat: ...`, `refactor: ...`. Commitear seguido, no esperar a tener "todo listo".

## Dónde está el estado actual del proyecto

Ver `PROGRESS.md` en la raíz — se actualiza cada vez que avanza el proyecto. Léelo siempre antes
de empezar una sesión nueva de trabajo.
