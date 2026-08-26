"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";
import { site } from "@/lib/site";

export function TermsContent() {
  const { p } = useLocale();
  const c = p.terms;

  return (
    <>
      <PageHero title={c.title} intro={c.intro} />

      <Section theme={2} grain>
        <div className="mx-auto max-w-3xl space-y-12">
          {c.articles.map((article) => (
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
            {c.seeAlsoBefore}{" "}
            <Link
              href="/hoe-het-werkt/pack-regels"
              className="text-green underline-offset-4 hover:underline"
            >
              {c.packRulesLabel}
            </Link>{" "}
            · {c.questionsLabel}{" "}
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
