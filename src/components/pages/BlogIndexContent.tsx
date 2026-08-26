"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLocale } from "@/lib/i18n/locale-context";

export function BlogIndexContent() {
  const { p } = useLocale();
  const { blog } = p;

  return (
    <>
      <PageHero title={blog.title} intro={blog.intro} />
      <Section theme={2} grain>
        <ul className="space-y-0">
          {blog.posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li className="border-t border-ink/12 py-10 first:border-t-0 first:pt-0">
                <p className="mb-3 text-[12px] uppercase tracking-[0.16em] text-muted">
                  {post.dateLabel}
                </p>
                <h2 className="max-w-3xl text-[clamp(1.6rem,3vw,2.1rem)]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-green"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink/70">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-block text-[14px] font-medium text-green underline-offset-4 hover:underline"
                >
                  {blog.readMore}
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
