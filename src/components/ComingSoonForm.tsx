"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Logo } from "@/components/Logo";
import { useLocale } from "@/lib/i18n/locale-context";
import { site } from "@/lib/site";

export function ComingSoonForm() {
  const router = useRouter();
  const { p } = useLocale();
  const { comingSoon } = p;
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 py-16 theme-1 grain">
      <div className="relative z-[1] w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <Logo size={88} priority />
        </div>

        <p className="eyebrow mx-auto mb-5 justify-center text-green">
          {comingSoon.eyebrow}
        </p>

        <h1 className="text-[clamp(2.4rem,6vw,3.5rem)] leading-[1.05]">
          {comingSoon.titleBefore}
          <em>{comingSoon.titleEm}</em>
        </h1>

        <p className="mx-auto mt-5 max-w-sm text-[16px] leading-relaxed text-ink/70">
          {comingSoon.intro}
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-xs text-left">
          <label htmlFor="password" className="sr-only">
            {comingSoon.passwordLabel}
          </label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder={comingSoon.passwordPlaceholder}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className="w-full rounded-full border border-ink/15 bg-white px-5 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-green"
          />

          {error ? (
            <p className="mt-3 text-center text-[13px] text-red-700">
              {comingSoon.error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading || !password}
            className="mt-4 w-full rounded-full bg-green px-6 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-green-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? comingSoon.loading : comingSoon.submit}
          </button>
        </form>

        <p className="mt-12 text-[13px] text-muted">
          <a
            href={site.emailHref}
            className="transition-colors hover:text-green"
          >
            {site.email}
          </a>
          {" · "}
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-green"
          >
            {comingSoon.instagramLabel}
          </a>
        </p>
      </div>
    </div>
  );
}
