"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";
import { site } from "@/lib/site";

export function BedrijfsinformatieContent() {
  const { p } = useLocale();
  const c = p.company;

  return (
    <>
      <PageHero title={c.title} intro={c.intro} />
      <Section theme={2} grain>
        <dl className="max-w-xl space-y-6 text-[16px]">
          <div>
            <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
              {c.labels.company}
            </dt>
            <dd className="mt-1 text-ink">{c.values.company}</dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
              {c.labels.area}
            </dt>
            <dd className="mt-1 text-ink">{c.values.area}</dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
              {c.labels.email}
            </dt>
            <dd className="mt-1">
              <a
                href={site.emailHref}
                className="text-green underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
              {c.labels.contact}
            </dt>
            <dd className="mt-1">
              <Link
                href="/contact"
                className="text-green underline-offset-4 hover:underline"
              >
                {c.values.contactForm}
              </Link>
            </dd>
          </div>
        </dl>
      </Section>
    </>
  );
}
