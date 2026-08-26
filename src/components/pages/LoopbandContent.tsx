"use client";

import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

export function LoopbandContent() {
  const { p } = useLocale();
  const c = p.loopband;
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
        <ContentBlock title={c.moreThanMovement.title}>
          {c.moreThanMovement.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title={c.suitable.title}>
          {c.suitable.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <p>
            <strong>{c.suitable.noteLabel}</strong> {c.suitable.note}
          </p>
        </ContentBlock>
      </Section>

      <Section theme={5}>
        <ContentBlock title={c.buildUp.title}>
          {c.buildUp.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <CtaBlock
        title={
          <>
            {cta.titleBefore}
            <em>{cta.titleEm}</em>
          </>
        }
        text={c.ctaText}
      />
    </>
  );
}
