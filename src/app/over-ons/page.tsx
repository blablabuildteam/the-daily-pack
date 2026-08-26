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
            Het idee achter The Daily Pack is simpel: een hond die goed belast
            is, is een fijne hond thuis. Geen kort blokje om, maar echte
            beweging buiten, socialiseren en de ruimte om stoom af te blazen. Op
            dagen dat je werkt of andere dingen te doen hebt, zit een goed
            rondje er niet altijd in.
          </p>
          <p>
            Wat begon met de honden van vrienden en familie, groeide uit tot een
            service voor meer baasjes die het beste willen voor hun hond, zonder
            dat ze er zelf altijd bij hoeven te zijn.
          </p>
        </ContentBlock>
      </Section>

      <Section theme={1}>
        <Reveal>
          <h2 className="mb-8">Het team</h2>
          <blockquote className="max-w-3xl border-l-2 border-green pl-6 md:pl-8">
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,3vw,2rem)] font-light italic leading-[1.35] text-ink">
              &ldquo;Met twee energieke honden thuis merk ik dagelijks hoe
              belangrijk goede beweging is. Het zorgt voor een hond die zich
              beter voelt, en dat zie je terug in het gedrag: minder stress,
              rustiger thuis en minder reactief.
            </p>
            <p className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,3vw,2rem)] font-light italic leading-[1.35] text-ink">
              Daarbij werk ik bewust met kleine groepen: dat betekent kortere
              tijd in de bus en meer aandacht voor iedere hond tijdens de
              wandeling.&rdquo;
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
