"use client";

import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

export function ContactPageContent() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageHero title={`${t.contact.title}.`} intro={t.contact.intro} />
      <Section theme={2} grain>
        <p className="mb-2 max-w-xl text-[15px] text-ink/70">
          <Link
            href="/hoe-het-werkt/faq"
            className="font-medium text-green underline-offset-4 hover:underline"
          >
            {locale === "en"
              ? "View the FAQ"
              : "Bekijk de veelgestelde vragen"}
          </Link>
          {locale === "en" ? " for quick answers." : " voor snelle antwoorden."}
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
