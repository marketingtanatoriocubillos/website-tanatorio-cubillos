"use client";

import { useState } from "react";

import { SUCURSALES } from "../../data/sucursales";
import type { ContactFormPayload } from "../../lib/types";
import { CheckIcon } from "../ui/icons/CheckIcon";

const FORM_ORIGIN = "Formulario de Contacto";
const DEFAULT_MOTIVO = "Quiero cotizar un plan de previsión";
const DEFAULT_SUCURSAL = "Sin preferencia";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldName = "nombre" | "telefono";

const MOTIVO_OPTIONS = [
  "Quiero cotizar un plan de previsión",
  "Necesito atención inmediata",
  "Consulta sobre servicios",
  "Agendar visita a una sucursal",
  "Otro",
] as const;

const INITIAL_FORM_VALUES: ContactFormPayload = {
  nombre: "",
  telefono: "",
  email: "",
  motivo: DEFAULT_MOTIVO,
  mensaje: "",
  sucursal: DEFAULT_SUCURSAL,
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

export default function ContactoFormCard() {
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
          email: formValues.email?.trim() ?? "",
          mensaje: formValues.mensaje?.trim() ?? "",
          sucursal: formValues.sucursal ?? DEFAULT_SUCURSAL,
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
    <article className="rounded-2xl bg-white p-8 shadow-[0_18px_44px_rgba(12,16,58,.18)] sm:p-9">
      <h3 className="font-heading text-[24px] font-bold text-primaryLight">
        Envíenos un mensaje
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
        <form className="mt-6 flex flex-col gap-4" noValidate onSubmit={handleSubmit}>
          <input type="hidden" name="origen" value={formValues.origen} />

          <div
            className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="contacto-page-website">No completar</label>
            <input
              id="contacto-page-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formValues.website}
              onChange={(event) => handleFieldChange("website", event.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="contacto-page-nombre"
              className="mb-1 block text-[12px] font-semibold text-textMuted"
            >
              Nombre
            </label>
            <input
              id="contacto-page-nombre"
              name="nombre"
              type="text"
              placeholder="Su nombre completo"
              disabled={isSubmitting}
              value={formValues.nombre}
              onChange={(event) => handleFieldChange("nombre", event.target.value)}
              className={getFieldClass(fieldErrors.nombre)}
              aria-invalid={fieldErrors.nombre}
            />
          </div>

          <div>
            <label
              htmlFor="contacto-page-telefono"
              className="mb-1 block text-[12px] font-semibold text-textMuted"
            >
              Teléfono
            </label>
            <input
              id="contacto-page-telefono"
              name="telefono"
              type="tel"
              placeholder="+56 9 ..."
              disabled={isSubmitting}
              value={formValues.telefono}
              onChange={(event) => handleFieldChange("telefono", event.target.value)}
              className={getFieldClass(fieldErrors.telefono)}
              aria-invalid={fieldErrors.telefono}
            />
          </div>

          <div>
            <label
              htmlFor="contacto-page-email"
              className="mb-1 block text-[12px] font-semibold text-textMuted"
            >
              Email
            </label>
            <input
              id="contacto-page-email"
              name="email"
              type="email"
              placeholder="nombre@correo.cl"
              disabled={isSubmitting}
              value={formValues.email ?? ""}
              onChange={(event) => handleFieldChange("email", event.target.value)}
              className={getFieldClass(false)}
            />
          </div>

          <div>
            <label
              htmlFor="contacto-page-motivo"
              className="mb-1 block text-[12px] font-semibold text-textMuted"
            >
              Motivo
            </label>
            <select
              id="contacto-page-motivo"
              name="motivo"
              disabled={isSubmitting}
              value={formValues.motivo}
              onChange={(event) => handleFieldChange("motivo", event.target.value)}
              className={getFieldClass(false)}
            >
              {MOTIVO_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="contacto-page-mensaje"
              className="mb-1 block text-[12px] font-semibold text-textMuted"
            >
              Mensaje
            </label>
            <textarea
              id="contacto-page-mensaje"
              name="mensaje"
              rows={5}
              placeholder="Cuéntenos cómo podemos ayudarle"
              disabled={isSubmitting}
              value={formValues.mensaje ?? ""}
              onChange={(event) => handleFieldChange("mensaje", event.target.value)}
              className={`${getFieldClass(false)} resize-y`}
            />
          </div>

          <div>
            <label
              htmlFor="contacto-page-sucursal"
              className="mb-1 block text-[12px] font-semibold text-textMuted"
            >
              Sucursal
            </label>
            <select
              id="contacto-page-sucursal"
              name="sucursal"
              disabled={isSubmitting}
              value={formValues.sucursal ?? DEFAULT_SUCURSAL}
              onChange={(event) => handleFieldChange("sucursal", event.target.value)}
              className={getFieldClass(false)}
            >
              <option value={DEFAULT_SUCURSAL}>{DEFAULT_SUCURSAL}</option>
              {SUCURSALES.map((sucursal) => {
                const optionLabel = `${sucursal.name} - ${sucursal.cityBadge}`;

                return (
                  <option key={optionLabel} value={optionLabel}>
                    {optionLabel}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 min-h-12 rounded-[10px] bg-primaryLight px-5 py-3 font-heading text-[14px] font-bold text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:bg-primaryLight/70"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
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
              Sus datos están protegidos y serán usados solo para contactarle.
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
  );
}
