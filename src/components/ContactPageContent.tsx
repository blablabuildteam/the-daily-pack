"use client";

import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

export function ContactPageContent() {
  const { t } = useLocale();

  return (
    <>
      <PageHero
        title={`${t.contact.title}.`}
        intro={
          <>
            {t.contact.intro}{" "}
            <Link
              href="/hoe-het-werkt/faq"
              className="font-medium text-green underline-offset-4 hover:underline"
            >
              {t.contact.faqLink}
            </Link>
          </>
        }
      />
      <Section theme={2} grain>
        <ContactForm />
      </Section>
    </>
  );
}
