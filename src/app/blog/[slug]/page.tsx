import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/CtaBlock";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { blogPosts, getPost } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

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
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          <p className="pt-4">
            <Link
              href="/blog"
              className="text-[14px] font-medium text-green underline-offset-4 hover:underline"
            >
              ← Terug naar blog
            </Link>
          </p>
        </article>
      </Section>

      <CtaBlock
        title={
          <>
            Klaar voor een <em>voldane hond?</em>
          </>
        }
      />
    </>
  );
}
