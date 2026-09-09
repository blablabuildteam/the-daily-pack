import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    name?: string;
    email?: string;
    message?: string;
  } | null;

  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const message = body?.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `The Daily Pack — bericht van ${name}`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
        _honey: "",
      }),
    });

    const payload = (await res.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
    } | null;

    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "upstream",
          detail: payload?.message ?? null,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: payload?.message ?? null });
  } catch {
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 });
  }
}
