"use client";

import Link from "next/link";
import { ContentBlock } from "@/components/ContentBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

export function PackRegelsContent() {
  const { p } = useLocale();
  const c = p.packRegels;

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
        <ContentBlock title={c.health.title}>
          {c.health.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title={c.behaviour.title}>
          {c.behaviour.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={5}>
        <ContentBlock title={c.packConcept.title}>
          {c.packConcept.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={2} grain>
        <ContentBlock title={c.expectations.title}>
          {c.expectations.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title={c.transport.title}>
          {c.transport.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={5}>
        <ContentBlock title={c.planning.title}>
          {c.planning.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={2} grain>
        <ContentBlock title={c.fullTerms.title}>
          <p>
            {c.fullTerms.textBefore}
            <Link href="/algemene-voorwaarden">{c.fullTerms.linkLabel}</Link>
            {c.fullTerms.textAfter}
          </p>
        </ContentBlock>
      </Section>
    </>
  );
}
