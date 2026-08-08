import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bedrijfsinformatie",
  description: "Contact- en bedrijfsgegevens van The Daily Pack Amsterdam-Noord.",
};

export default function BedrijfsinformatiePage() {
  return (
    <>
      <PageHero
        title="Bedrijfsinformatie."
        intro="Contactgegevens van The Daily Pack. KvK- en BTW-gegevens kunnen hier worden aangevuld."
      />
      <Section theme={2} grain>
        <dl className="max-w-xl space-y-6 text-[16px]">
          <div>
            <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
              Bedrijf
            </dt>
            <dd className="mt-1 text-ink">The Daily Pack</dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
              Werkgebied
            </dt>
            <dd className="mt-1 text-ink">Amsterdam-Noord</dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
              E-mail
            </dt>
            <dd className="mt-1">
              <a href={site.emailHref} className="text-green underline-offset-4 hover:underline">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
              Telefoon
            </dt>
            <dd className="mt-1">
              <a href={site.phoneHref} className="text-green underline-offset-4 hover:underline">
                {site.phone}
              </a>
            </dd>
          </div>
        </dl>
      </Section>
    </>
  );
}
