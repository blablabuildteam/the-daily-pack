import type { Metadata } from "next";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Tijden & Tarieven",
  description:
    "Prijzen en beschikbare tijden van Pack Ronde, Eigen Ronde en Kennismaking bij The Daily Pack Amsterdam-Noord.",
};

const packPrices = [
  {
    label: "Weekdagen (ma–vr)",
    value: "€30 per sessie · circa 1 uur en 45 minuten",
  },
  {
    label: "Losse sessie doordeweeks",
    value: "€32 (geen abonnement)",
  },
];

const eigenPrices = [
  { label: "30 minuten", value: "€30 per sessie" },
  { label: "60 minuten", value: "€55 per sessie" },
];

const weekSlots = [
  "09:30–11:15 — Pack ronde, max 4 honden",
  "11:30–13:15 — Pack ronde, max 4 honden",
  "13:30–15:15 — Pack ronde, max 4 honden",
  "Op afspraak — Eigen Ronde of Kennismaking",
];

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

export default function TijdenTarievenPage() {
  return (
    <>
      <PageHero
        eyebrow="Hoe het werkt"
        title={
          <>
            Tijden en <em>Tarieven.</em>
          </>
        }
        intro="Overzicht van alle pakketten, prijzen en beschikbare tijden."
      />

      <Section theme={2} grain>
        <ContentBlock title="Pack Ronde">
          <p>
            Vaste dag en tijd, elke week. Kies één of meerdere dagen. Maandelijks
            vooruit betaald.
          </p>
          <p>
            Inbegrepen: ophalen en thuisbrengen · wandeling · loopband bij kou,
            regen of energie · foto&apos;s en video&apos;s · Wandelverslag
          </p>
        </ContentBlock>
        <Reveal>
          <PriceList items={packPrices} />
          <p className="mt-6 text-[14px] text-muted">
            Kennismaking is verplicht voor deelname.
          </p>
        </Reveal>
      </Section>

      <Section theme={1}>
        <ContentBlock title="Eigen Ronde">
          <p>
            Privésessie voor één adres, op afspraak en beschikbaarheid. Wandelen
            in het park of bos, met de loopband als aanvulling. Inclusief
            Wandelverslag.
          </p>
        </ContentBlock>
        <Reveal>
          <PriceList items={eigenPrices} />
          <p className="mt-6 text-[15px] text-ink/75">
            Maximaal 2 honden. Bij 2 honden van hetzelfde adres:{" "}
            <strong className="font-medium text-ink">
              25% korting op de hele rekening
            </strong>
            . Prijzen inclusief BTW.
          </p>
        </Reveal>
      </Section>

      <Section theme={2} grain>
        <ContentBlock title="Kennismaking">
          <p>
            Voordat een hond mee kan, starten we met een Kennismaking. Een
            persoonlijke ontmoeting van 30 minuten. We leren de hond kennen en
            bespreken de wensen.
          </p>
          <p>Verplicht voor alle diensten, eenmalig. Op afspraak.</p>
        </ContentBlock>
        <Reveal>
          <PriceList items={[{ label: "Eenmalig", value: "€20 per hond" }]} />
        </Reveal>
      </Section>

      <Section theme={1}>
        <Reveal>
          <h2 className="mb-8">Wanneer zijn we beschikbaar?</h2>
          <div>
            <h3 className="mb-4 text-[20px]">Weekdagen</h3>
            <ul className="max-w-xl space-y-3">
              {weekSlots.map((slot) => (
                <li
                  key={slot}
                  className="border-l-2 border-green pl-4 text-[15px] text-ink/80"
                >
                  {slot}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 text-[14px] text-muted">
            Op officiële feestdagen is The Daily Pack gesloten, tenzij anders
            bepaald.
          </p>
        </Reveal>
      </Section>

      <CtaBlock
        title={
          <>
            Klaar om <em>te starten?</em>
          </>
        }
      />
    </>
  );
}
