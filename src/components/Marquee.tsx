const items = [
  { label: "Wandelen in het park of bos", className: "hidden lg:flex" },
  { label: "Kleine groepen", className: "" },
  { label: "Ophalen en thuisbrengen", className: "hidden md:flex" },
  { label: "Elektrische bus", className: "hidden xl:flex" },
  { label: "GPS-tracker", className: "" },
  { label: "Optionele loopband", className: "" },
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
            <span className="px-3 font-[family-name:var(--font-cormorant)] text-[clamp(13px,1.45vw,20px)] font-light italic tracking-wide md:px-4 lg:px-5">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
