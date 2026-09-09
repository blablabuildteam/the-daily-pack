"use client";

import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

export function FaqContent() {
  const { p } = useLocale();
  const c = p.faq;
  const cta = p.ctaDefaults.readyStart;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={
          <>
            {c.titleBefore}
            <em>{c.titleEm}</em>
          </>
        }
        intro={c.intro}
      />

      <Section theme={2} grain>
        <ul className="space-y-0">
          {c.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <li className="border-t border-ink/12 py-8 first:border-t-0 first:pt-0 md:py-10">
                <h2 className="max-w-3xl text-[clamp(1.25rem,2.4vw,1.65rem)] leading-snug">
                  {item.q}
                </h2>
                <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink/75">
                  {item.a}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBlock
        title={
          <>
            {cta.titleBefore}
            <em>{cta.titleEm}</em>
          </>
        }
      />
    </>
  );
}
