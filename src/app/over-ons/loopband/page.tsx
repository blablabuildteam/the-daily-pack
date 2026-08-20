import type { Metadata } from "next";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "De loopband",
  description:
    "Gecontroleerde beweging en stoom afblazen: de loopband als aanvulling op elke wandeling bij The Daily Pack.",
};

export default function LoopbandPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title={
          <>
            De <em>loopband.</em>
          </>
        }
        intro="Gecontroleerde beweging, focus en stoom afblazen. De loopband is een waardevolle aanvulling op iedere wandeling, voor elk dier op elk niveau."
      />

      <Section theme={2} grain>
        <ContentBlock title="Meer dan alleen beweging">
          <p>
            De loopband vervangt de wandeling niet, het vult aan. Waar buiten
            lopen zorgt voor socialisatie en mentale prikkels, biedt de loopband
            gecontroleerde, gerichte beweging. De hond werkt aan conditie,
            balans en lichaamsbesef, zonder afleidingen van buiten. Het resultaat
            is een dier dat niet alleen fysiek maar ook mentaal tot rust komt.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title="Geschikt voor elke hond">
          <p>
            De loopband is een waardevolle aanvulling op de wandeling voor elke
            hond. Extra beweging, focus en de kans om alle resterende energie
            kwijt te raken op een rustige, gecontroleerde manier. Heb je een
            energieke hond? Dan is de loopband helemaal geweldig. Ook bij kou of
            regen kan de hond zo alsnog voldoende energie kwijt.
          </p>
          <p>
            <strong>Note:</strong> De loopband in onze bus is geschikt voor
            honden met een schofthoogte tot 60 cm.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={5}>
        <ContentBlock title="Rustig opbouwen, altijd begeleid">
          <p>
            Niet elk dier stapt meteen vol vertrouwen op de loopband. Dat is
            normaal. We nemen de tijd om elke hond op eigen tempo te laten
            wennen. Eerst kennismaken, dan rustig opbouwen. Tempo en duur worden
            altijd aangepast.
          </p>
          <p>
            Kan een hond om welke reden dan ook niet op de loopband? Laat het
            weten, dan houden we daar rekening mee. De loopband wordt altijd
            gebruikt na de wandeling. Zo is het dier al warm, ontspannen en klaar
            voor de volgende stap.
          </p>
        </ContentBlock>
      </Section>

      <CtaBlock
        title={
          <>
            Klaar om <em>te starten?</em>
          </>
        }
        text="Begin met een Kennismaking, de eerste stap voor elke dienst."
      />
    </>
  );
}
