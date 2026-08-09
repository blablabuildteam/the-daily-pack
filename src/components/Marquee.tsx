const items = [
  "Wandelen én loopband",
  "Kleine groepen",
  "Ophalen & thuisbrengen",
  "Elektrische bus",
  "Amsterdam-Noord",
  "7 dagen per week",
];

export function Marquee() {
  return (
    <div className="theme-3 border-y border-white/10 py-4 text-white">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5">
        {items.map((item, i) => (
          <li key={item} className="flex items-center">
            <span className="px-4 font-[family-name:var(--font-cormorant)] text-[17px] font-light italic tracking-wide md:px-6 md:text-[21px]">
              {item}
            </span>
            {i < items.length - 1 ? (
              <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden>
                <circle cx="3" cy="3" r="3" fill="currentColor" opacity="0.55" />
              </svg>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
