const items = [
  { label: "Wandelen én loopband", className: "" },
  { label: "Kleine groepen", className: "" },
  { label: "Ophalen & thuisbrengen", className: "hidden md:flex" },
  { label: "Elektrische bus", className: "hidden lg:flex" },
  { label: "Amsterdam-Noord", className: "hidden sm:flex" },
  { label: "GPS-tracker", className: "" },
];

export function Marquee() {
  return (
    <div className="theme-3 border-y border-white/10 py-4 text-white">
      <ul className="flex flex-nowrap items-center justify-center whitespace-nowrap px-4">
        {items.map((item, i) => (
          <li key={item.label} className={`flex items-center ${item.className}`}>
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
            <span className="px-3 font-[family-name:var(--font-cormorant)] text-[clamp(14px,1.6vw,21px)] font-light italic tracking-wide md:px-5 lg:px-6">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
