"use client";

import { useLocale } from "@/lib/i18n/locale-context";

export function Marquee() {
  const { p } = useLocale();

  return (
    <div className="theme-3 border-y border-white/10 py-3.5 text-white md:py-4">
      <ul className="mx-auto flex max-w-6xl flex-nowrap items-center justify-center gap-x-0 overflow-hidden whitespace-nowrap px-3 sm:px-5">
        {p.marquee.map((label, i) => (
          <li key={label} className="flex items-center">
            {i > 0 ? (
              <span
                aria-hidden
                className="mx-2 h-1 w-1 shrink-0 rounded-full bg-white/55 sm:mx-3 md:mx-4"
              />
            ) : null}
            <span className="font-sans text-[11px] font-medium tracking-[0.04em] text-white/95 sm:text-[13px] md:text-[15px]">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
