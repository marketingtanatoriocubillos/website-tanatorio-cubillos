import { NextResponse } from "next/server";

import type { ContactFormPayload } from "../../../lib/types";

function isContactFormPayload(value: unknown): value is ContactFormPayload {
  if (!value || typeof value !== "object") {
    return false;
  }

  const payload = value as Record<string, unknown>;

  return (
    typeof payload.nombre === "string" &&
    typeof payload.telefono === "string" &&
    typeof payload.motivo === "string" &&
    typeof payload.origen === "string" &&
    typeof payload.website === "string"
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!isContactFormPayload(body)) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    if (body.website.trim()) {
      return NextResponse.json({ success: true });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    const webhookPayload = {
      nombre: body.nombre,
      telefono: body.telefono,
      motivo: body.motivo,
      origen: body.origen,
      email: body.email ?? "",
      mensaje: body.mensaje ?? "",
      sucursal: body.sucursal ?? "",
      website: body.website,
    } satisfies ContactFormPayload;

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookPayload),
      signal: AbortSignal.timeout(10000),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
