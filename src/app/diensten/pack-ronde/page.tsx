import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Pack Ronde",
  description:
    "De dagelijkse uitlaatservice van The Daily Pack in Amsterdam-Noord. Vaste dag, vast tijdslot, kleine groepen. Wandelen én loopband.",
};

const included = [
  "Ophalen en thuisbrengen",
  "Wandeling in het park of bos",
  "Loopband sessie",
  "Foto's en video's",
  "Wandelverslag na elke sessie",
];

export default function PackRondePage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten"
        title={
          <>
            De dagelijkse <em>uitlaatservice.</em>
          </>
        }
        intro="Pack Ronde is de dagelijkse uitlaatservice van The Daily Pack. Vaste dag, vast tijdslot, vaste begeleider. Kleine groepen, zodat elk dier de aandacht krijgt die nodig is."
      />

      <Section theme={2} grain>
        <ContentBlock title="De dagelijkse opbouw">
          <p>
            Elke werkdag gaan we in meerdere rondes met kleine groepen op pad,
            en in het weekend één ronde per dag. Elke hond heeft een vast
            tijdslot. Waar mogelijk werken we met een vaste groep. Dat geeft de
            dieren rust en herkenning.
          </p>
          <p>
            Een volledige sessie duurt ongeveer{" "}
            <strong>1 uur en 45 minuten</strong>: ophalen, wandeling in het park
            of bos, loopband en thuisbrengen.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title="Hoe verloopt een sessie?">
          <p>
            Van ophalen tot thuisbrengen regelen wij alles. Benieuwd naar de
            precieze stappen?
          </p>
          <p>
            <Link href="/hoe-het-werkt/werkwijze">Bekijk de werkwijze</Link>
          </p>
        </ContentBlock>
      </Section>

      <Section theme={5}>
        <ContentBlock title="Hoe werkt een abonnement?">
          <p>
            Pack Ronde is een abonnement met vaste dag en tijd per week. Kies
            één of meerdere dagen. Maandelijks vooruit betaald.
          </p>
        </ContentBlock>

        <Reveal className="mt-10">
          <p className="mb-4 text-[12px] uppercase tracking-[0.14em] text-muted">
            Inbegrepen
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li
                key={item}
                className="border-l-2 border-green pl-4 text-[15px] text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/hoe-het-werkt/tijden-tarieven"
              className="text-[14px] font-medium text-green underline-offset-4 hover:underline"
            >
              Bekijk tijden en tarieven
            </Link>
          </p>
          <p className="mt-6 text-[14px] text-muted">
            Kennismaking is verplicht voor deelname. Opzegtermijn 1
            kalendermaand.
          </p>
        </Reveal>
      </Section>

      <Section theme={2} grain>
        <ContentBlock title="Liever geen abonnement?">
          <p>
            Dezelfde pack ronde, maar dan zonder vaste verplichting. Heb je in
            het weekend een afspraak buiten de deur of ben je druk met visite
            bezig? De Weekendpas geeft toegang tot de pack ronde op zaterdag of
            zondag, op beschikbaarheid.
          </p>
          <p className="pt-2">
            <Button href="/hoe-het-werkt/tijden-tarieven" variant="secondary">
              Bekijk de Weekendpas
            </Button>
          </p>
        </ContentBlock>
      </Section>

      <CtaBlock
        title={
          <>
            Klaar om <em>aan te sluiten?</em>
          </>
        }
      />
    </>
  );
}
