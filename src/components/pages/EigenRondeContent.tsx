"use client";

import Link from "next/link";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";
import { site } from "@/lib/site";

export function EigenRondeContent() {
  const { p } = useLocale();
  const c = p.eigenRonde;
  const cta = p.ctaDefaults.readyEigen;

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
        <ContentBlock title={c.fullAttention.title}>
          {c.fullAttention.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <p>
            <Link href="/hoe-het-werkt/tijden-tarieven">
              {c.fullAttention.ratesLinkLabel}
            </Link>
            .
          </p>
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title={c.howItLooks.title}>
          {c.howItLooks.paragraphs.map((text) => (
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
        buttonLabel={cta.buttonLabel}
        href={site.collar.eigenRonde}
      />
    </>
  );
}
