"use client";

import { useLocale } from "@/lib/i18n/locale-context";

const itemClassNames = [
  "hidden lg:flex",
  "",
  "hidden md:flex",
  "hidden xl:flex",
  "",
  "",
];

export function Marquee() {
  const { p } = useLocale();

  return (
    <div className="theme-3 border-y border-white/10 py-4 text-white">
      <ul className="flex flex-nowrap items-center justify-center whitespace-nowrap px-4">
        {p.marquee.map((label, i) => (
          <li
            key={label}
            className={`flex items-center ${itemClassNames[i] ?? ""}`}
          >
            {i > 0 ? (
              <svg
                width="5"
                height="5"
                viewBox="0 0 6 6"
                aria-hidden
                className="shrink-0"
              >
                <circle cx="3" cy="3" r="3" fill="currentColor" opacity="0.55" />
              </svg>
            ) : null}
            <span className="px-3 font-[family-name:var(--font-cormorant)] text-[clamp(13px,1.45vw,20px)] font-light italic tracking-wide md:px-4 lg:px-5">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
