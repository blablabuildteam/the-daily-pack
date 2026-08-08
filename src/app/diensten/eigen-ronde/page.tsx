import type { Metadata } from "next";
import Link from "next/link";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eigen Ronde",
  description:
    "Privésessie voor één adres in Amsterdam-Noord. Wandelen en loopband op afspraak, zonder abonnement. Maximaal twee honden.",
};

export default function EigenRondePage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten"
        title={
          <>
            Een sessie <em>op maat.</em>
          </>
        }
        intro="Eigen Ronde is een privésessie voor één adres. Wandelen in het park of bos en stoom afblazen op de loopband. Op afspraak en beschikbaarheid. Geen abonnement nodig."
      />

      <Section theme={2} grain>
        <ContentBlock title="Volledige aandacht, één adres">
          <p>
            Bij een Eigen Ronde gaat de hond samen met een begeleider op pad,
            zonder andere dieren. Dit is ideaal voor honden die liever alleen
            gaan, energie kwijt moeten buiten de vaste rondes, of waarbij een
            tweede hond van hetzelfde adres meegaat (maximaal twee honden).
          </p>
          <p>
            <Link href="/hoe-het-werkt/tijden-tarieven">
              Bekijk de tarieven voor de actuele prijzen
            </Link>
            .
          </p>
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title="Hoe ziet het eruit?">
          <p>
            Ophalen, wandelen, loopband en weer terugbrengen. Net als bij de
            Pack Ronde, maar dan alleen voor jouw hond.
          </p>
        </ContentBlock>
      </Section>

      <CtaBlock
        title={
          <>
            Klaar voor een <em>Eigen Ronde?</em>
          </>
        }
        buttonLabel="Plan een Eigen Ronde"
        href={site.collar.eigenRonde}
      />
    </>
  );
}
