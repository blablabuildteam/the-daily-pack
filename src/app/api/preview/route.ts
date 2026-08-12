import { NextResponse } from "next/server";
import {
  PREVIEW_COOKIE,
  PREVIEW_VALUE,
  SITE_PASSWORD,
} from "@/lib/preview";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    password?: string;
  } | null;

  if (!body?.password || body.password !== SITE_PASSWORD) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(PREVIEW_COOKIE, PREVIEW_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
