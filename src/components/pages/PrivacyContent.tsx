"use client";

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";
import { site } from "@/lib/site";

export function PrivacyContent() {
  const { p } = useLocale();
  const c = p.privacy;

  return (
    <>
      <PageHero title={c.title} intro={c.intro} />
      <Section theme={2} grain>
        <div className="max-w-2xl space-y-4 text-[16px] text-ink/80">
          {c.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <p>
            {c.questionsBefore}{" "}
            <a
              href={site.emailHref}
              className="text-green underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
            {c.questionsAfter}
          </p>
        </div>
      </Section>
    </>
  );
}
