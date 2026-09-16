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

  const origin =
    request.headers.get("origin") ??
    request.headers.get("referer") ??
    "https://thedailypack.nl";

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin.includes("thedailypack.nl")
          ? "https://thedailypack.nl"
          : origin,
        Referer: "https://thedailypack.nl/contact",
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

    const success =
      res.ok &&
      (payload?.success === true ||
        payload?.success === "true" ||
        payload?.success === "True");

    if (!success) {
      return NextResponse.json(
        {
          ok: false,
          error: "upstream",
          detail: payload?.message ?? `status_${res.status}`,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 });
  }
}
