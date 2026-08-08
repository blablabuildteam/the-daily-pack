import type { Metadata } from "next";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Het verhaal achter The Daily Pack: premium hondenuitlaatservice in Amsterdam-Noord, opgericht door Tim.",
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title={
          <>
            Het verhaal achter <em>The Daily Pack.</em>
          </>
        }
        intro="Een service voor baasjes die het beste willen voor hun hond, zonder dat ze er zelf altijd bij hoeven te zijn."
      />

      <Section theme={2} grain>
        <ContentBlock title="Hoe The Daily Pack ontstond">
          <p>
            The Daily Pack ontstond vanuit een eenvoudige gedachte: een hond die
            goed belast is, is een fijne hond thuis. Niet alleen een blokje om,
            maar echte beweging, buiten zijn en de ruimte om stoom af te blazen.
            Gecombineerd met de loopband zorgt elke sessie voor een voldane
            hond, ook op drukke dagen of wanneer het weer minder is.
          </p>
          <p>
            Wat begon met een kleine groep honden van vrienden en familie die
            mee op pad gingen, groeide uit tot The Daily Pack. Een service voor
            baasjes die het beste willen voor hun hond, zonder dat ze er zelf
            altijd bij hoeven te zijn.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <Reveal>
          <h2 className="mb-8">Het team</h2>
          <blockquote className="max-w-3xl border-l-2 border-green pl-6 md:pl-8">
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,3vw,2rem)] font-light italic leading-[1.35] text-ink">
              &ldquo;Met twee energieke honden thuis weet ik als geen ander wat
              een hond nodig heeft. Meer beweging, minder stress en een voldane
              hond op de bank. Een voldane hond reageert ook minder op andere
              honden en is rustiger in huis. Daarbij ook kleine groepen, want
              een hond hoort meer buiten te lopen dan in de bus te zitten.&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-[16px] font-medium text-ink">Tim</p>
              <p className="mt-1 text-[14px] text-muted">
                Oprichter en begeleider · Vakbekwaam Houder van Hond en Kat ·
                EHBO gecertificeerd
              </p>
            </footer>
          </blockquote>
        </Reveal>
      </Section>

      <CtaBlock
        title={
          <>
            Klaar voor een voldane en <em>gelukkige hond?</em>
          </>
        }
      />
    </>
  );
}
