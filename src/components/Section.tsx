import type { ReactNode } from "react";

type Theme = 1 | 2 | 3 | 4 | 5;

type Props = {
  theme?: Theme;
  children: ReactNode;
  className?: string;
  id?: string;
  grain?: boolean;
};

export function Section({
  theme = 1,
  children,
  className = "",
  id,
  grain = false,
}: Props) {
  return (
    <section
      id={id}
      className={`theme-${theme} ${grain ? "grain" : ""} ${className}`}
    >
      <div className="relative z-[1] mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        {children}
      </div>
    </section>
  );
}
