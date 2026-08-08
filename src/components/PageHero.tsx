import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  intro: string;
  eyebrow?: string;
};

export function PageHero({ title, intro, eyebrow }: Props) {
  return (
    <section className="theme-1 grain border-b border-ink/8 pt-32 md:pt-44">
      <div className="relative z-[1] mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        {eyebrow ? (
          <p className="eyebrow animate-fade-up mb-7 text-green">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl animate-fade-up delay-1 text-[clamp(2.6rem,6vw,4.25rem)] leading-[1.02]">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl animate-fade-up delay-2 text-[16px] leading-relaxed text-ink/75 md:text-[17px]">
          {intro}
        </p>
      </div>
    </section>
  );
}
