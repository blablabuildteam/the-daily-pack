"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/dictionaries";

type Props = {
  solid?: boolean;
};

export function LanguageSwitcher({ solid = true }: Props) {
  const { locale, setLocale } = useLocale();

  function toggle(next: Locale) {
    if (next === locale) return;
    setLocale(next);
  }

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border px-1 py-1 text-[12px] font-medium tracking-wide ${
        solid ? "border-ink/15 text-ink/70" : "border-white/30 text-white/80"
      }`}
      role="group"
      aria-label="Language"
    >
      {(["nl", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => toggle(code)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            locale === code
              ? solid
                ? "bg-green text-white"
                : "bg-white text-ink"
              : solid
                ? "hover:text-green"
                : "hover:text-white"
          }`}
          aria-pressed={locale === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
