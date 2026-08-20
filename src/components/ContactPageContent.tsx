"use client";

import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";
import { site } from "@/lib/site";

export function ContactPageContent() {
  const { t } = useLocale();

  return (
    <>
      <PageHero title={`${t.contact.title}.`} intro={t.contact.intro} />
      <Section theme={2} grain>
        <p className="max-w-xl text-[15px] text-ink/70">
          {site.email}
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
