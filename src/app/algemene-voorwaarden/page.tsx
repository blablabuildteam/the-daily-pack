import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden van The Daily Pack.",
};

const articles: {
  title: string;
  clauses: { n: string; text: string }[];
}[] = [
  {
    title: "Artikel 1 — Definities",
    clauses: [
      {
        n: "1.1",
        text: "Ondernemer: Founder Falk, handelend onder de naam The Daily Pack, gevestigd te Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 70835225.",
      },
      {
        n: "1.2",
        text: "Consument: De natuurlijke persoon die niet handelt in de uitoefening van een beroep of bedrijf en die een overeenkomst aangaat of wenst aan te gaan met de Ondernemer.",
      },
      {
        n: "1.3",
        text: "Overeenkomst: De afspraken tussen de Ondernemer en de Consument betreffende het verlenen van de hondenuitlaatservice.",
      },
      {
        n: "1.4",
        text: "Gasthond: De hond van de Consument waarvoor een overeenkomst wordt of is gesloten.",
      },
    ],
  },
  {
    title: "Artikel 2 — Toepasselijkheid",
    clauses: [
      {
        n: "2.1",
        text: "Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen de Ondernemer en de Consument met betrekking tot de hondenuitlaatservice.",
      },
      {
        n: "2.2",
        text: "De Ondernemer behoudt zich het recht voor deze voorwaarden en tarieven te wijzigen. Wijzigingen worden ten minste één maand van tevoren schriftelijk of per e-mail bekendgemaakt.",
      },
      {
        n: "2.3",
        text: "Op deze voorwaarden zijn de bepalingen van het Burgerlijk Wetboek van toepassing.",
      },
    ],
  },
  {
    title: "Artikel 3 — Algemeen",
    clauses: [
      {
        n: "3.1",
        text: "De Ondernemer wordt niet beschouwd als eigenaar van de Gasthond.",
      },
      {
        n: "3.2",
        text: "De Gasthond dient sociaal te zijn richting andere honden en mensen.",
      },
      {
        n: "3.3",
        text: "De Ondernemer behoudt zich het recht voor honden te weigeren indien hij van mening is dat de Gasthond een risico vormt voor andere honden, medewerkers of derden.",
      },
      {
        n: "3.4",
        text: "De Ondernemer behoudt zich het recht voor honden tijdelijk niet te accepteren indien er redelijke gronden zijn om te vermoeden dat de Gasthond een besmettelijke ziekte heeft.",
      },
      {
        n: "3.5",
        text: "De eigenaar dient tijdens de uitlaattijden telefonisch bereikbaar te zijn.",
      },
      {
        n: "3.6",
        text: "Bij aanvang van de dienstverlening dient de eigenaar alle relevante informatie over de Gasthond te verstrekken die van belang is voor een goede en verantwoorde verzorging.",
      },
      {
        n: "3.7",
        text: "Puppy's mogen deelnemen vanaf de leeftijd van 6 maanden.",
      },
      {
        n: "3.8",
        text: "Tijdens de intake dient de eigenaar eerlijk te zijn over het temperament van de Gasthond, waaronder eventuele angst, zindelijkheidsproblemen of reactiviteit. Indien een hond de rust of veiligheid van de groep in gevaar brengt, behoudt de Ondernemer zich het recht voor de Gasthond tijdelijk of permanent te weigeren.",
      },
      {
        n: "3.9",
        text: "Niet-gecastreerde reuen zijn toegestaan, tenzij zij aantoonbaar problemen veroorzaken binnen de groep. De Ondernemer behoudt zich het recht voor niet-gecastreerde reuen te weigeren indien de veiligheid van de groep in het geding is.",
      },
    ],
  },
  {
    title: "Artikel 4 — Gezondheid",
    clauses: [
      {
        n: "4.1",
        text: "De Gasthond dient volledig gevaccineerd te zijn tegen hondenziekte, parvovirus, leptospirose (ziekte van Weil) en kennelhoest. Een vaccinatiebewijs wordt tijdens de intake opgevraagd.",
      },
      {
        n: "4.2",
        text: "De eigenaar is verantwoordelijk voor een preventieve behandeling van de hond tegen vlooien, teken en wormen.",
      },
      {
        n: "4.3",
        text: "Loopse teven mogen gedurende de gehele loopsheid niet deelnemen (ten minste 3 weken).",
      },
      {
        n: "4.4",
        text: "In geval van ziekte kan een losse geboekte sessie tot 18:00 uur de avond ervoor worden geannuleerd.",
      },
      {
        n: "4.5",
        text: "Zieke honden mogen niet deelnemen aan de hondenuitlaatservice.",
      },
      {
        n: "4.6",
        text: "Indien dringende medische zorg nodig is, wordt een dierenarts ingeschakeld, indien mogelijk na overleg met de eigenaar. De kosten hiervan komen voor rekening van de eigenaar.",
      },
    ],
  },
  {
    title: "Artikel 5 — Sleutelbeheer",
    clauses: [
      {
        n: "5.1",
        text: "Waar nodig wordt aan de Ondernemer een huissleutel verstrekt voor het ophalen en terugbrengen van de Gasthond.",
      },
      {
        n: "5.2",
        text: "Sleutels worden niet gekopieerd en voorzien van geen adres.",
      },
      {
        n: "5.3",
        text: "Sleutels worden alleen meegenomen op de dag(en) waarop de dienst wordt verleend.",
      },
      {
        n: "5.4",
        text: "Sleutels worden uitsluitend gebruikt voor het ophalen en terugbrengen van de Gasthond.",
      },
      {
        n: "5.5",
        text: "Op verzoek van de Consument worden sleutels direct teruggegeven, waarmee het sleutelbeheer wordt beëindigd.",
      },
    ],
  },
  {
    title: "Artikel 6 — Hondenuitlaatservice",
    clauses: [
      {
        n: "6.1",
        text: "De Ondernemer haalt de Gasthond op het afgesproken tijdstip op en brengt deze terug naar het afgesproken adres, tenzij anders overeengekomen.",
      },
      {
        n: "6.2",
        text: "De Gasthond wordt vervoerd in een transportbox in de elektrische bus van de Ondernemer.",
      },
      {
        n: "6.3",
        text: "De duur van de hondenuitlaatservice kan om veiligheidsredenen worden aangepast.",
      },
      {
        n: "6.4",
        text: "De Gasthond dient op het afgesproken tijdstip en de afgesproken plaats beschikbaar te zijn. Indien de Gasthond niet beschikbaar is, worden de kosten voor de geplande dienst in rekening gebracht.",
      },
      {
        n: "6.5",
        text: "De Ondernemer is gerechtigd de Gasthond los te laten lopen op eigen terrein, tenzij schriftelijk anders overeengekomen.",
      },
      {
        n: "6.6",
        text: "De Pack Ronde-uitlaatservice vindt uitsluitend doordeweeks plaats. Sessies in het weekend zijn alleen op afspraak en op basis van beschikbaarheid.",
      },
    ],
  },
  {
    title: "Artikel 7 — Aansprakelijkheid",
    clauses: [
      {
        n: "7.1",
        text: "De Ondernemer is niet aansprakelijk voor letsel, ziekte, infectie of verlies van de Gasthond, tenzij dit rechtstreeks is veroorzaakt door opzet of grove nalatigheid van de Ondernemer.",
      },
      {
        n: "7.2",
        text: "De Consument blijft te allen tijde wettelijk aansprakelijk voor schade die door de Gasthond wordt toegebracht aan andere honden, personen of eigendommen — vóór, tijdens en na de wandeling.",
      },
      {
        n: "7.3",
        text: "Een aansprakelijkheidsverzekering (WA) is verplicht voor deelname en wordt tijdens de intake opgevraagd.",
      },
      {
        n: "7.4",
        text: "Eventuele kosten voor dierenartsbezoek of schade veroorzaakt door de Gasthond worden op de Consument verhaald.",
      },
      {
        n: "7.5",
        text: "Indien niet duidelijk is welke hond de schade heeft veroorzaakt, worden de kosten gedeeld tussen de eigenaren van de betrokken honden.",
      },
      {
        n: "7.6",
        text: "De Ondernemer is niet aansprakelijk voor schade aan de woning of de inboedel veroorzaakt door een natte of vuile hond.",
      },
      {
        n: "7.7",
        text: "In geval van een weglopende hond wordt alles wat redelijkerwijs mogelijk is gedaan om de Gasthond te lokaliseren. Aansprakelijkheid voor verlies is uitgesloten, tenzij grove nalatigheid van de Ondernemer kan worden aangetoond.",
      },
    ],
  },
  {
    title: "Artikel 8 — Boeking & Annulering",
    clauses: [
      {
        n: "8.1",
        text: "Voor losse boekingen (kennismaking, losse Pack Ronde-sessie, Eigen Ronde) dienen annuleringen uiterlijk om 18:00 uur de avond ervoor te worden doorgegeven. Dit geldt ook in geval van ziekte. Bij annuleringen na 18:00 uur wordt het volledige tarief in rekening gebracht.",
      },
      {
        n: "8.2",
        text: "Sessies binnen een abonnement kunnen niet afzonderlijk worden geannuleerd. Aangezien de plek van de hond wekelijks is gereserveerd, wordt een gemiste sessie niet gecrediteerd of ingehaald.",
      },
      {
        n: "8.3",
        text: "De enige uitzondering is aaneengesloten afwezigheid (zoals een vakantie). Indien de Consument één of meer aaneengesloten weken afwezig is, geldt een reserveringsvergoeding van 50% om de plek van de hond voor de gemiste sessies te behouden, mits dit ten minste twee weken van tevoren wordt gemeld.",
      },
      {
        n: "8.4",
        text: "De Ondernemer is gesloten op officiële feestdagen.",
      },
      {
        n: "8.5",
        text: "Bij extreme weersomstandigheden (Code Oranje/Rood of temperaturen boven 33°C) kan de dienst worden aangepast of geannuleerd. De Consument wordt hierover direct via WhatsApp geïnformeerd.",
      },
    ],
  },
  {
    title: "Artikel 9 — Betaling",
    clauses: [
      {
        n: "9.1",
        text: "Betaling geschiedt maandelijks vooraf, uiterlijk op de 1e van de maand.",
      },
      {
        n: "9.2",
        text: "Het abonnementsbedrag wordt in rekening gebracht ongeacht het aantal daadwerkelijk afgenomen wandelingen.",
      },
      {
        n: "9.3",
        text: "Bij uitblijven van betaling wordt na 30 dagen een toeslag van 10% van het totaalbedrag toegepast. Na 60 dagen wordt een toeslag van 30% toegepast.",
      },
      {
        n: "9.4",
        text: "In geval van langdurige ziekte van de Gasthond (aangetoond met een medische verklaring) kan een ziekteperiode van maximaal 2 maanden worden toegekend. Gedurende deze periode wordt 50% van het normale tarief in rekening gebracht.",
      },
      {
        n: "9.5",
        text: "Betaling geschiedt via automatische incasso of bankoverschrijving, tenzij schriftelijk anders overeengekomen.",
      },
    ],
  },
  {
    title: "Artikel 10 — Abonnement & Opzegging",
    clauses: [
      {
        n: "10.1",
        text: "De Ondernemer werkt bij voorkeur met vaste abonnementen om een consistente groepssamenstelling te waarborgen.",
      },
      {
        n: "10.2",
        text: "De opzegtermijn bedraagt één kalendermaand.",
      },
      {
        n: "10.3",
        text: "Bij tussentijdse beëindiging worden reeds betaalde bedragen niet gerestitueerd.",
      },
      {
        n: "10.4",
        text: "Bij herhaaldelijke schending van deze voorwaarden behoudt de Ondernemer zich het recht voor de overeenkomst met onmiddellijke ingang te beëindigen.",
      },
      {
        n: "10.5",
        text: "Bij aanhoudend uitblijven van betaling kan de Ondernemer de overeenkomst eenzijdig beëindigen.",
      },
    ],
  },
  {
    title: "Artikel 11 — Privacy",
    clauses: [
      {
        n: "11.1",
        text: "De Ondernemer verwerkt de persoonsgegevens van de Consument in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG). Persoonsgegevens worden uitsluitend gebruikt voor de uitvoering van de overeenkomst en worden zonder toestemming van de Consument niet met derden gedeeld.",
      },
      {
        n: "11.2",
        text: "De Consument heeft het recht op inzage, rectificatie en verwijdering van zijn persoonsgegevens. Verzoeken kunnen worden ingediend via info@thedailypack.nl.",
      },
    ],
  },
  {
    title: "Artikel 12 — Toepasselijk recht",
    clauses: [
      {
        n: "12.1",
        text: "Op alle overeenkomsten tussen de Ondernemer en de Consument is Nederlands recht van toepassing.",
      },
      {
        n: "12.2",
        text: "Eventuele geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Amsterdam.",
      },
    ],
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <PageHero
        title="Algemene Voorwaarden."
        intro="Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen The Daily Pack, hierna te noemen 'de Ondernemer', en de natuurlijke persoon die niet handelt in de uitoefening van een beroep of bedrijf, hierna te noemen 'de Consument', met betrekking tot de hondenuitlaatservice."
      />

      <Section theme={2} grain>
        <div className="mx-auto max-w-3xl space-y-12">
          {articles.map((article) => (
            <section key={article.title}>
              <h2 className="mb-5 text-[clamp(1.35rem,2.4vw,1.7rem)]">
                {article.title}
              </h2>
              <ul className="space-y-4">
                {article.clauses.map((clause) => (
                  <li
                    key={clause.n}
                    className="grid gap-2 text-[15.5px] leading-relaxed text-ink/80 sm:grid-cols-[3.5rem_1fr]"
                  >
                    <span className="font-medium text-ink">{clause.n}</span>
                    <span>{clause.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className="border-t border-ink/10 pt-8 text-[14px] text-muted">
            Zie ook de{" "}
            <Link
              href="/hoe-het-werkt/pack-regels"
              className="text-green underline-offset-4 hover:underline"
            >
              Pack Regels
            </Link>{" "}
            · Vragen?{" "}
            <a
              href={site.emailHref}
              className="text-green underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
