"use client";

import Image from "next/image";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { MediaBand } from "@/components/MediaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

export function OverOnsContent() {
  const { p } = useLocale();
  const c = p.overOns;
  const cta = p.ctaDefaults.readyHappy;

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

      <MediaBand src="/media/pages/over-ons.jpg" priority />

      <Section theme={2} grain>
        <ContentBlock title={c.origin.title}>
          {c.origin.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <Reveal>
          <h2 className="mb-8">{c.teamHeading}</h2>
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden bg-beige-2">
              <Image
                src="/media/pages/tim.jpg"
                alt={c.quoteName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <blockquote className="border-l-2 border-green pl-6 md:pl-8">
              {c.quote.map((paragraph, i) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className={`${i > 0 ? "mt-5 " : ""}font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,3vw,2rem)] font-light italic leading-[1.35] text-ink`}
                >
                  {i === 0 ? <>&ldquo;</> : null}
                  {paragraph}
                  {i === c.quote.length - 1 ? <>&rdquo;</> : null}
                </p>
              ))}
              <footer className="mt-8">
                <p className="text-[16px] font-medium text-ink">{c.quoteName}</p>
                <p className="mt-1 text-[14px] text-muted">{c.quoteRole}</p>
              </footer>
            </blockquote>
          </div>
        </Reveal>
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
