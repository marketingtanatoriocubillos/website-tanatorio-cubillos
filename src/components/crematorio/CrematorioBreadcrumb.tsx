import Link from "next/link";

export default function CrematorioBreadcrumb() {
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-3 text-[13px] text-textMuted sm:px-6 md:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2">
          <Link href="/" className="transition hover:text-primary">
            Inicio
          </Link>
          <span className="text-textSubtle">&gt;</span>
          <Link href="/servicios" className="transition hover:text-primary">
            Servicios
          </Link>
          <span className="text-textSubtle">&gt;</span>
          <span aria-current="page">Crematorio</span>
        </nav>
      </div>
    </div>
  );
}
