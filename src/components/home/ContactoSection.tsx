"use client";

import { useState } from "react";

import type { ContactFormPayload } from "../../lib/types";

import { ArrowRightIcon } from "../ui/icons/ArrowRightIcon";
import { CheckIcon } from "../ui/icons/CheckIcon";
import { PhoneIcon } from "../ui/icons/PhoneIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

const PHONE_HREF = "tel:+56990511579";
const WHATSAPP_HREF = "https://wa.me/56990511579";
const DEFAULT_MOTIVO = "Quiero cotizar un plan";
const FORM_ORIGIN = "Solicitar Llamada - Home";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldName = "nombre" | "telefono";

const MOTIVO_OPTIONS = [
  "Quiero cotizar un plan",
  "Consulta general",
  "Agendar visita a sucursal",
] as const;

const INITIAL_FORM_VALUES: ContactFormPayload = {
  nombre: "",
  telefono: "",
  motivo: DEFAULT_MOTIVO,
  origen: FORM_ORIGIN,
  website: "",
};

function getFieldClass(hasError: boolean) {
  return `w-full rounded-[10px] border bg-white px-[14px] py-3 text-[14px] text-text outline-none transition placeholder:text-textSubtle disabled:cursor-not-allowed disabled:bg-primaryBg/70 ${
    hasError
      ? "border-[#D9534F] focus:border-[#D9534F]"
      : "border-border focus:border-primaryLight"
  }`;
}

export default function ContactoSection() {
  const [formValues, setFormValues] =
    useState<ContactFormPayload>(INITIAL_FORM_VALUES);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<FieldName, boolean>>({
    nombre: false,
    telefono: false,
  });

  const isSubmitting = status === "submitting";

  function handleFieldChange(
    field: keyof ContactFormPayload,
    value: ContactFormPayload[keyof ContactFormPayload],
  ) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    if (
      (field === "nombre" || field === "telefono") &&
      String(value ?? "").trim()
    ) {
      setFieldErrors((currentErrors) => ({
        ...currentErrors,
        [field]: false,
      }));
    }

    if (status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = {
      nombre: !formValues.nombre.trim(),
      telefono: !formValues.telefono.trim(),
    };

    setFieldErrors(nextErrors);

    if (nextErrors.nombre || nextErrors.telefono) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          nombre: formValues.nombre.trim(),
          telefono: formValues.telefono.trim(),
        } satisfies ContactFormPayload),
      });

      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormValues(INITIAL_FORM_VALUES);
      setFieldErrors({
        nombre: false,
        telefono: false,
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="bg-primaryLight px-4 py-16 sm:px-6 md:px-8 md:py-[72px]"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:items-start">
        <div className="max-w-[620px]">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Atención inmediata
          </p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-[1.12] text-white">
            ¿Necesita ayuda ahora mismo?
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-white/70">
            Nuestro equipo está disponible las 24 horas. Llámenos directamente
            o déjenos su número y lo contactamos en minutos.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              className="group inline-flex min-h-[54px] items-center justify-between gap-3 rounded-[10px] bg-accent px-5 py-4 font-heading text-[15px] font-bold text-accentDark transition hover:brightness-95"
            >
              <span className="flex items-center gap-2">
                <PhoneIcon className="size-[17px] shrink-0" />
                <span>Llamar ahora — +56 9 90511579</span>
              </span>
              <ArrowRightIcon className="size-[15px] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-[54px] items-center justify-between gap-3 rounded-[10px] border border-white/35 bg-white/10 px-5 py-4 font-heading text-[15px] font-bold text-white transition hover:bg-white/14"
            >
              <span className="flex items-center gap-2">
                <WhatsAppIcon className="size-[17px] shrink-0" />
                <span>Escribir por WhatsApp</span>
              </span>
              <ArrowRightIcon className="size-[15px] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-5 flex items-center gap-2 text-white/65">
            <CheckIcon className="size-[15px] shrink-0" />
            <p className="text-[13px]">Respondemos en menos de 10 minutos</p>
          </div>
        </div>

        <article className="rounded-2xl bg-white p-8 shadow-[0_18px_44px_rgba(12,16,58,.18)]">
          <h3 className="font-heading text-[22px] font-bold text-primaryLight">
            Solicitar que nos llamen
          </h3>

          {status === "success" ? (
            <div className="mt-6 rounded-[10px] border border-whatsapp bg-successBg p-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-[18px] shrink-0 text-successText" />
                <p className="font-heading text-[14px] font-bold text-successText">
                  Mensaje enviado. Le contactaremos a la brevedad.
                </p>
              </div>
            </div>
          ) : (
            <form className="mt-6 flex flex-col gap-3" noValidate onSubmit={handleSubmit}>
              <input type="hidden" name="origen" value={formValues.origen} />

              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="contacto-website">No completar</label>
                <input
                  id="contacto-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formValues.website}
                  onChange={(event) =>
                    handleFieldChange("website", event.target.value)
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contacto-nombre"
                  className="mb-1 block text-[12px] font-semibold text-textMuted"
                >
                  Nombre
                </label>
                <input
                  id="contacto-nombre"
                  name="nombre"
                  type="text"
                  placeholder="Su nombre completo"
                  disabled={isSubmitting}
                  value={formValues.nombre}
                  onChange={(event) =>
                    handleFieldChange("nombre", event.target.value)
                  }
                  className={getFieldClass(fieldErrors.nombre)}
                  aria-invalid={fieldErrors.nombre}
                />
              </div>

              <div>
                <label
                  htmlFor="contacto-telefono"
                  className="mb-1 block text-[12px] font-semibold text-textMuted"
                >
                  Teléfono de contacto
                </label>
                <input
                  id="contacto-telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+56 9 ..."
                  disabled={isSubmitting}
                  value={formValues.telefono}
                  onChange={(event) =>
                    handleFieldChange("telefono", event.target.value)
                  }
                  className={getFieldClass(fieldErrors.telefono)}
                  aria-invalid={fieldErrors.telefono}
                />
              </div>

              <div>
                <label
                  htmlFor="contacto-motivo"
                  className="mb-1 block text-[12px] font-semibold text-textMuted"
                >
                  Motivo de contacto
                </label>
                <select
                  id="contacto-motivo"
                  name="motivo"
                  disabled={isSubmitting}
                  value={formValues.motivo}
                  onChange={(event) =>
                    handleFieldChange("motivo", event.target.value)
                  }
                  className={getFieldClass(false)}
                >
                  {MOTIVO_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 min-h-12 rounded-[10px] bg-primaryLight px-5 py-3 font-heading text-[14px] font-bold text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:bg-primaryLight/70"
              >
                {isSubmitting ? "Enviando..." : "Solicitar llamada"}
              </button>

              <div className="flex items-center justify-center gap-2 text-textMuted">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="size-3 shrink-0"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 11V7a5 5 0 0 1 10 0v4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-center text-[11px]">
                  Sus datos están protegidos y serán usados solo para
                  contactarle.
                </p>
              </div>

              {status === "error" ? (
                <div className="rounded-[10px] border border-[#D9534F] bg-[#FDECEC] p-4">
                  <p className="text-center font-heading text-[14px] font-bold text-[#9F2D2A]">
                    No pudimos enviar su mensaje. Llámenos al +56 9 9051 1579 o
                    intente nuevamente.
                  </p>
                </div>
              ) : null}
            </form>
          )}
        </article>
      </div>
    </section>
  );
}
