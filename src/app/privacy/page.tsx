import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van The Daily Pack.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy."
        intro="The Daily Pack gaat zorgvuldig om met persoonsgegevens. Deze pagina wordt aangevuld met de volledige privacyverklaring."
      />
      <Section theme={2} grain>
        <div className="max-w-2xl space-y-4 text-[16px] text-ink/80">
          <p>
            Wij verwerken gegevens die nodig zijn voor boekingen, communicatie
            en het leveren van onze dienst. Denk aan contactgegevens en
            informatie over jouw hond.
          </p>
          <p>
            Voor vragen over privacy:{" "}
            <a href={site.emailHref} className="text-green underline-offset-4 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
