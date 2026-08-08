import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  title: ReactNode;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function ContentBlock({
  title,
  eyebrow,
  children,
  className = "",
}: Props) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      {eyebrow ? <p className="eyebrow mb-5 text-green">{eyebrow}</p> : null}
      <h2 className="mb-6 text-[clamp(1.8rem,3vw,2.4rem)]">{title}</h2>
      <div className="space-y-4 text-[16px] leading-relaxed text-ink/75 [&_a]:text-green [&_a]:underline-offset-4 hover:[&_a]:underline [&_strong]:font-medium [&_strong]:text-ink">
        {children}
      </div>
    </Reveal>
  );
}
