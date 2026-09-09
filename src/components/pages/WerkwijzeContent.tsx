"use client";

import Link from "next/link";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { MediaBand } from "@/components/MediaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

export function WerkwijzeContent() {
  const { p } = useLocale();
  const c = p.werkwijze;
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

      <MediaBand src="/media/pages/werkwijze.jpg" priority videoSrc="/media/videos/werkwijze.mp4" />


      <Section theme={2} grain>
        <ContentBlock title={c.introMeeting.title}>
          {c.introMeeting.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <Reveal>
          <h2 className="mb-10">{c.sessionHeading}</h2>
        </Reveal>
        <ol className="space-y-10">
          {c.sessionSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="flex gap-5">
              <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-green">
                {i + 1}
              </span>
              <div className="max-w-2xl">
                <h3 className="mb-2 text-[20px]">{step.title}</h3>
                <p className="text-[15px] text-ink/75">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <Link
            href="/hoe-het-werkt/tijden-tarieven"
            className="text-[14px] font-medium text-green underline-offset-4 hover:underline"
          >
            {c.rosterLinkLabel}
          </Link>
        </Reveal>
      </Section>

      <Section theme={5}>
        <ContentBlock title={c.treadmill.title}>
          {c.treadmill.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <p>
            <Link href="/over-ons/loopband">{c.treadmill.linkLabel}</Link>
          </p>
        </ContentBlock>
      </Section>

      <Section theme={2} grain>
        <Reveal>
          <h2 className="mb-8">{c.busHeading}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.busFeatures.map((item) => (
              <li
                key={item}
                className="border-l-2 border-green pl-4 text-[15px] text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
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
