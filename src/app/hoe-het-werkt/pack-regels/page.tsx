import type { Metadata } from "next";
import Link from "next/link";
import { ContentBlock } from "@/components/ContentBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Pack Regels",
  description:
    "Regels rond gezondheid, gedrag, transport en annulering bij The Daily Pack Amsterdam-Noord.",
};

export default function PackRegelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hoe het werkt"
        title={
          <>
            Pack <em>Regels.</em>
          </>
        }
        intro="Om de veiligheid, rust en het plezier binnen The Daily Pack te garanderen, hanteren we een aantal belangrijke regels. Als je jouw hond bij ons aanmeldt, ga je akkoord met deze voorwaarden. Voor aansprakelijkheid, betaling en overige juridische zaken verwijzen we naar de Algemene Voorwaarden."
      />

      <Section theme={2} grain>
        <ContentBlock title="Gezondheid en Toelating">
          <p>
            Alleen gezonde honden kunnen deelnemen. Dit betekent: alle
            vaccinaties up-to-date (met name hondenziekte, Parvo, Leptospirose en
            Kennelhoest), vlooien en tekenbehandeling actueel, minimaal 6 maanden
            oud.
          </p>
          <p>
            Zieke honden of honden met een besmettelijke aandoening mogen niet
            deelnemen. Toelating wordt hervat zodra de hond volledig hersteld
            is. Loopse teven kunnen gedurende de volledige loopsheid niet
            deelnemen. Honden met agressief gedrag naar andere honden of mensen
            kunnen worden geweigerd.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title="Gedrag en Socialisatie">
          <p>
            The Daily Pack werkt met kleine groepen zodat socialisatie veilig
            kan plaatsvinden. We beoordelen gedrag en energie tijdens de
            Kennismaking. We vragen om open communicatie over temperament en
            triggers.
          </p>
          <p>
            Als een hond de rust of veiligheid van de groep in gevaar brengt,
            behoudt The Daily Pack zich het recht voor de hond tijdelijk of
            permanent te weigeren.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={5}>
        <ContentBlock title="The Pack Concept">
          <p>
            Elke hond heeft een vast tijdslot. Waar mogelijk werken we met een
            vaste groep. Dat geeft de dieren rust en herkenning. De groep bestaat
            uit de honden die op dat tijdslot zijn ingepland en kan wijzigen door
            uitval of nieuwe aanmeldingen.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={2} grain>
        <ContentBlock title="Wat je van ons mag verwachten">
          <p>
            We halen op en brengen terug op het afgesproken moment. Na elke
            sessie ontvang je het Wandelverslag met foto&apos;s en video&apos;s.
            In geval van nood zijn we altijd bereikbaar. Bij medische
            noodgevallen brengen we direct naar een dierenarts en informeren we
            direct.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <ContentBlock title="Transport en Veiligheid">
          <p>
            Vervoer in onze volledig ingerichte elektrische bus. Elke hond
            reist in een eigen transportbox. Antislip vloer, ventilatie die
            altijd actief blijft ook wanneer de bus stilstaat. Elke hond draagt
            tijdens de wandeling een GPS tracker. EHBO kit en brandblusser
            aanwezig.
          </p>
          <p>
            De loopband is geschikt voor honden met een schofthoogte tot 60 cm.
            De eigenaar dient tijdens de uitlaattijden telefonisch bereikbaar te
            zijn.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={5}>
        <ContentBlock title="Planning en Annulering">
          <p>
            Voor Eigen Ronde en Weekendpas geldt: afmelden meer dan 24 uur van
            tevoren betekent de sessie inhalen binnen enkele weken. Afmelden
            binnen 24 uur vervalt de sessie, zonder inhalen.
          </p>
          <p>
            Voor Pack Ronde geldt geen compensatie bij een gemiste sessie,
            omdat het abonnement een vaste plek reserveert, geen los
            consumptierecht.
          </p>
          <p>
            Bij Code Oranje/Rood of temperaturen boven 33 graden passen we de
            service aan of annuleren we. Je wordt hierover altijd direct
            geïnformeerd. Op officiële feestdagen is The Daily Pack gesloten,
            tenzij anders bepaald.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={2} grain>
        <ContentBlock title="Volledige voorwaarden">
          <p>
            Voor de volledige voorwaarden omtrent aansprakelijkheid, betaling,
            abonnement en sleutelbeheer, zie de{" "}
            <Link href="/algemene-voorwaarden">Algemene Voorwaarden</Link>.
          </p>
        </ContentBlock>
      </Section>
    </>
  );
}
