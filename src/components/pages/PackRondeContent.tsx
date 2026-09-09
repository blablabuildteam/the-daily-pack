"use client";

import Link from "next/link";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { MediaBand } from "@/components/MediaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

export function PackRondeContent() {
  const { p } = useLocale();
  const c = p.packRonde;
  const cta = p.ctaDefaults.readyJoin;

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

      <MediaBand src="/media/pages/pack-ronde.jpg" priority />


      <Section theme={2} grain>
        <ContentBlock title={c.dailyBuild.title}>
          {c.dailyBuild.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title={c.howSession.title}>
          {c.howSession.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <p>
            <Link href="/hoe-het-werkt/werkwijze">{c.howSession.linkLabel}</Link>
          </p>
        </ContentBlock>
      </Section>

      <Section theme={5}>
        <ContentBlock title={c.subscription.title}>
          {c.subscription.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>

        <Reveal className="mt-10">
          <p className="mb-4 text-[12px] uppercase tracking-[0.14em] text-muted">
            {c.subscription.includedLabel}
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.subscription.included.map((item) => (
              <li
                key={item}
                className="border-l-2 border-green pl-4 text-[15px] text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/hoe-het-werkt/tijden-tarieven"
              className="text-[14px] font-medium text-green underline-offset-4 hover:underline"
            >
              {c.subscription.ratesLinkLabel}
            </Link>
          </p>
          <p className="mt-6 text-[14px] text-muted">{c.subscription.notice}</p>
        </Reveal>
      </Section>

      <Section theme={2} grain>
        <ContentBlock title={c.noSubscription.title}>
          {c.noSubscription.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <p className="pt-2">
            <Link
              href="/hoe-het-werkt/tijden-tarieven"
              className="text-[14px] font-medium text-green underline-offset-4 hover:underline"
            >
              {c.noSubscription.ratesLinkLabel}
            </Link>
          </p>
        </ContentBlock>
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
