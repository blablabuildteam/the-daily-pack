"use client";

import { useLocale } from "@/lib/i18n/locale-context";

export function Marquee() {
  const { p } = useLocale();
  const items = [...p.marquee, ...p.marquee];

  return (
    <div className="theme-3 overflow-hidden border-y border-white/10 py-3 text-white md:py-3.5">
      {/* Mobile: scrolling marquee so all USPs stay readable */}
      <div className="relative md:hidden">
        <ul className="animate-marquee flex w-max items-center gap-0 whitespace-nowrap">
          {items.map((label, i) => (
            <li key={`${label}-${i}`} className="flex items-center">
              {i > 0 ? (
                <span
                  aria-hidden
                  className="mx-3 h-1 w-1 shrink-0 rounded-full bg-white/55"
                />
              ) : null}
              <span className="font-sans text-[12px] font-medium tracking-[0.04em] text-white/95">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: single centered row */}
      <ul className="mx-auto hidden max-w-6xl flex-wrap items-center justify-center gap-x-0 px-5 md:flex">
        {p.marquee.map((label, i) => (
          <li key={label} className="flex items-center">
            {i > 0 ? (
              <span
                aria-hidden
                className="mx-3 h-1 w-1 shrink-0 rounded-full bg-white/55 lg:mx-4"
              />
            ) : null}
            <span className="font-sans text-[13px] font-medium tracking-[0.04em] text-white/95 lg:text-[15px]">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
