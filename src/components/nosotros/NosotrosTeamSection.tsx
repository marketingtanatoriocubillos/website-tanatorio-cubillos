import { PeopleIcon } from "../ui/icons/PeopleIcon";

export default function NosotrosTeamSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-primaryLight">
            Nuestro equipo
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-primaryLight">
            Profesionales comprometidos con su familia
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-textMuted">
            Contamos con un equipo capacitado en tanatopraxia, coordinación de
            servicios fúnebres y acompañamiento al duelo.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[780px] rounded-[20px] border border-border bg-bgSoft px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primaryBg text-primaryLight">
            <PeopleIcon className="size-9" />
          </div>
          <p className="mt-6 text-[15px] leading-7 text-textSubtle">
            Muy pronto conocerás a las personas detrás de cada servicio.
          </p>
        </div>
      </div>
    </section>
  );
}
