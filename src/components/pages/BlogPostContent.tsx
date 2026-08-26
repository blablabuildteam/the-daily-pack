"use client";

import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

type Props = {
  slug: string;
};

export function BlogPostContent({ slug }: Props) {
  const { p } = useLocale();
  const post = p.blog.posts.find((item) => item.slug === slug);
  const cta = p.ctaDefaults.readyHappy;

  if (!post) return null;

  return (
    <>
      <PageHero
        eyebrow={post.dateLabel}
        title={post.title}
        intro={post.excerpt}
      />

      <Section theme={2} grain>
        <article className="mx-auto max-w-3xl space-y-10">
          {post.sections.map((section) => (
            <div key={section.heading ?? section.paragraphs[0].slice(0, 24)}>
              {section.heading ? (
                <h2 className="mb-4 text-[clamp(1.5rem,2.5vw,1.9rem)]">
                  {section.heading}
                </h2>
              ) : null}
              <div className="space-y-4 text-[16px] leading-relaxed text-ink/80">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <p className="pt-4">
            <Link
              href="/blog"
              className="text-[14px] font-medium text-green underline-offset-4 hover:underline"
            >
              ← {p.blog.back}
            </Link>
          </p>
        </article>
      </Section>

      <CtaBlock
        title={
          <>
            {cta.titleBefore}
            <em>{cta.titleEm}</em>
          </>
        }
      />
    </>
  );
}
