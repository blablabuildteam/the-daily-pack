import type { Metadata } from "next";
import Link from "next/link";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van kennismaking tot Wandelverslag: zo verloopt een sessie bij The Daily Pack in Amsterdam-Noord.",
};

const sessionSteps = [
  {
    title: "Ophalen en onderweg",
    text: "Op het afgesproken moment halen wij jouw hond op. Elke hond reist in een eigen box in onze elektrische bus, rustig en op zichzelf. Door de kleine groepen zijn de ritjes kort en zit de hond niet onnodig lang in de bus.",
  },
  {
    title: "Wandelen en socialiseren",
    text: "In het park of bos wandelen we met een kleine groep. Hier draait het om meer dan beweging alleen: snuffelen, ontdekken en het ontmoeten van andere honden. De hond gebruikt zowel lichaam als kop, wat zorgt voor een voldaan gevoel. Een wandeling duurt ongeveer een uur.",
  },
  {
    title: "Loopband",
    text: "Terug in de bus is het tijd voor de loopband. Dit doen we ná de wandeling, als de hond al warm en ontspannen is. Zo raakt de hond op een veilige, gecontroleerde manier de laatste energie kwijt. Tempo en duur passen we aan op wat de hond aankan.",
  },
  {
    title: "Thuisbrengen",
    text: "Na de sessie brengen we jouw hond weer netjes thuis. Moe, voldaan en ontspannen, klaar voor de rest van de dag. Zo hou je zelf een rustige hond over, ook op drukke dagen.",
  },
  {
    title: "Wandelverslag",
    text: "Na afloop ontvang je een kort verslag met foto's en video's van de sessie. Aan de hand van een aantal vaste punten zie je hoe de dag verliep en hoe jouw hond zich ontwikkelt.",
  },
];

const busFeatures = [
  "Eigen kooi per hond",
  "Antislip vloer",
  "Ventilatie, ook wanneer de bus stilstaat",
  "GPS tracker op elke hond tijdens de wandeling",
  "Vers water",
  "EHBO kit en brandblusser aan boord",
  "Dagelijks schoongemaakt",
];

export default function WerkwijzePage() {
  return (
    <>
      <PageHero
        eyebrow="Hoe het werkt"
        title={
          <>
            Een dag uit het leven van <em>jouw hond.</em>
          </>
        }
        intro="Elke sessie begint met een goede basis. Wij leren jouw hond kennen, zodat we weten wat er nodig is en hoe we dit het beste kunnen begeleiden."
      />

      <Section theme={2} grain>
        <ContentBlock title="Eerst kennismaken">
          <p>
            Voordat een hond mee kan, plannen we een Kennismaking. Een
            persoonlijke ontmoeting van 30 minuten. We leren de hond kennen,
            bespreken de wensen en bepalen samen de volgende stap.
          </p>
          <p>
            Tijdens de Kennismaking kun je dingen delen zoals waar jouw hond op
            reageert of bang voor is. We houden dit in de gaten en koppelen via
            het Wandelverslag terug hoe het gaat en de voortgang ervan.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <Reveal>
          <h2 className="mb-10">Wat gebeurt er tijdens de sessie?</h2>
        </Reveal>
        <ol className="space-y-10">
          {sessionSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="flex gap-5">
              <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-green">
                {i + 1}
              </span>
              <div className="max-w-2xl">
                <h3 className="mb-2 text-[20px]">{step.title}</h3>
                <p className="text-[15px] text-ink/75">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <Link
            href="/hoe-het-werkt/tijden-tarieven"
            className="text-[14px] font-medium text-green underline-offset-4 hover:underline"
          >
            Bekijk het rooster
          </Link>
        </Reveal>
      </Section>

      <Section theme={5}>
        <ContentBlock title="De loopband">
          <p>
            De loopband is een onderdeel van elke sessie. Geschikt voor alle
            honden met een maximale schofthoogte van 60 cm. Een waardevolle
            aanvulling op de wandeling voor extra beweging en focus. Ook bij kou
            of regen kan de hond zo alsnog energie kwijt. Altijd begeleid, altijd
            op het tempo van de hond.
          </p>
          <p>
            <Link href="/over-ons/loopband">Meer over de loopband</Link>
          </p>
        </ContentBlock>
      </Section>

      <Section theme={2} grain>
        <Reveal>
          <h2 className="mb-8">Veilig vervoer in onze elektrische bus</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {busFeatures.map((item) => (
              <li
                key={item}
                className="border-l-2 border-green pl-4 text-[15px] text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
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
