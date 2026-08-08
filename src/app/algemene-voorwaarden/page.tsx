import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden van The Daily Pack.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <PageHero
        title="Algemene Voorwaarden."
        intro="Deze pagina wordt aangevuld met de volledige juridische tekst. Tot die tijd gelden de Pack Regels als praktische richtlijn."
      />
      <Section theme={2} grain>
        <div className="max-w-2xl space-y-4 text-[16px] text-ink/80">
          <p>
            Voor praktische regels rond gezondheid, gedrag, transport en
            annulering, zie de{" "}
            <Link href="/hoe-het-werkt/pack-regels" className="text-green underline-offset-4 hover:underline">
              Pack Regels
            </Link>
            .
          </p>
          <p>
            Vragen? Mail naar{" "}
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
