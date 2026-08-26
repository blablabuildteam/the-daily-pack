"use client";

import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

function PriceList({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex flex-col gap-1 border-b border-ink/8 pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
        >
          <span className="text-[15px] text-ink">{item.label}</span>
          <span className="text-[15px] text-ink/70 sm:text-right">
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TijdenTarievenContent() {
  const { p } = useLocale();
  const c = p.tijden;
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
        <ContentBlock title={c.packRonde.title}>
          {c.packRonde.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
        <Reveal>
          <PriceList items={c.packRonde.prices} />
          <p className="mt-6 text-[14px] text-muted">{c.packRonde.notice}</p>
        </Reveal>
      </Section>

      <Section theme={1}>
        <ContentBlock title={c.eigenRonde.title}>
          {c.eigenRonde.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
        <Reveal>
          <PriceList items={c.eigenRonde.prices} />
          <p className="mt-6 text-[15px] text-ink/75">
            {c.eigenRonde.maxDogs}{" "}
            <strong className="font-medium text-ink">
              {c.eigenRonde.secondDogDiscount}
            </strong>
            . {c.eigenRonde.vatNote}
          </p>
        </Reveal>
      </Section>

      <Section theme={2} grain>
        <ContentBlock title={c.kennismaking.title}>
          {c.kennismaking.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
        </ContentBlock>
        <Reveal>
          <PriceList items={c.kennismaking.prices} />
        </Reveal>
      </Section>

      <Section theme={1}>
        <Reveal>
          <h2 className="mb-8">{c.availabilityHeading}</h2>
          <div>
            <h3 className="mb-4 text-[20px]">{c.weekdaysHeading}</h3>
            <ul className="max-w-xl space-y-3">
              {c.weekSlots.map((slot) => (
                <li
                  key={slot}
                  className="border-l-2 border-green pl-4 text-[15px] text-ink/80"
                >
                  {slot}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 text-[14px] text-muted">{c.holidaysNote}</p>
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
