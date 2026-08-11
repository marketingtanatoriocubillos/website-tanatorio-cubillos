import Link from "next/link";

export default function ContactoBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-bgCard">
      <div className="mx-auto flex max-w-[1200px] items-center gap-2 px-4 py-3 font-body text-[12px] text-textMuted sm:px-6 md:px-8">
        <Link href="/" className="text-primaryLight transition hover:text-primary">
          Inicio
        </Link>
        <span aria-hidden="true">&gt;</span>
        <span>Contacto</span>
      </div>
    </nav>
  );
}
