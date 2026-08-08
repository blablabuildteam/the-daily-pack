const items = [
  "Wandelen én loopband",
  "Kleine groepen",
  "Ophalen & thuisbrengen",
  "Elektrische bus",
  "Amsterdam-Noord",
  "7 dagen per week",
];

function Row() {
  return (
    <>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-8 font-[family-name:var(--font-cormorant)] text-[19px] font-light italic tracking-wide md:text-[22px]">
            {item}
          </span>
          <svg width="7" height="7" viewBox="0 0 6 6" aria-hidden>
            <circle cx="3" cy="3" r="3" fill="currentColor" opacity="0.55" />
          </svg>
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <div
      className="theme-3 overflow-hidden border-y border-white/10 py-4 text-white"
      aria-hidden
    >
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
