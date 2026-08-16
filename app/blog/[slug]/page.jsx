import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getPracticeArea, firm } from "@/lib/site";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import { Button, Eyebrow, Heading, GoldRule } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { CtaBanner, RelatedLinks } from "@/components/sections";

export function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt.slice(0, 158),
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Jody D. Peterman" },
    publisher: { "@type": "Organization", name: firm.name },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    description: post.excerpt,
  };

  const relatedPAs = (post.related || [])
    .map((slug) => getPracticeArea(slug))
    .filter(Boolean);
  const otherPost = blogPosts.find((b) => b.slug !== post.slug);

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.category, href: "/blog" },
        ]}
      />

      {/* Article header */}
      <section className="bg-warm py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
              {post.category}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl">
              {post.title}
            </h1>
            <span className="mt-4 block h-1 w-16 rounded-full bg-gold" />
            <div className="mt-5 flex items-center gap-4 text-sm text-navy/60">
              <span className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy font-serif text-sm font-bold text-gold">
                  J
                </span>
                Jody D. Peterman
              </span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Hero image */}
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <FadeUp className="-mt-6 overflow-hidden rounded-3xl shadow-card">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={640}
            priority
            className="h-full w-full object-cover"
          />
        </FadeUp>
      </div>

      {/* Body */}
      <article className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FadeUp>
            <p className="text-lg leading-relaxed text-navy/80">{post.excerpt}</p>
          </FadeUp>
          {post.body.map((sec, i) => (
            <FadeUp key={sec.h} delay={0.03 * i} className="mt-8">
              <h2 className="font-serif text-2xl font-bold text-navy">{sec.h}</h2>
              <p className="mt-3 leading-relaxed text-navy/75">{sec.p}</p>
            </FadeUp>
          ))}

          {/* Inline CTA box */}
          <FadeUp className="mt-12 rounded-2xl border border-black/5 bg-navy p-8 text-center text-white">
            <h3 className="font-serif text-2xl font-bold">
              Injured? Get a free case evaluation.
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-white/75">
              Every case is different. Talk to Jody D. Peterman directly — 30+
              years of experience, and a free case evaluation.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact">Free Case Evaluation</Button>
              <a
                href={firm.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
              >
                <Icon name="phone" size={16} />
                {firm.phone}
              </a>
            </div>
          </FadeUp>

          {/* Related practice areas inline links */}
          {relatedPAs.length > 0 && (
            <FadeUp className="mt-12 border-t border-black/10 pt-8">
              <Eyebrow>Related Help</Eyebrow>
              <Heading as="h2">Related Practice Areas</Heading>
              <GoldRule />
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedPAs.map((pa) => (
                  <Link
                    key={pa.slug}
                    href={`/practice-areas/${pa.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-warm px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold"
                  >
                    <Icon name={pa.icon} size={18} className="text-gold-dark" />
                    {pa.title}
                  </Link>
                ))}
              </div>
            </FadeUp>
          )}
        </div>
      </article>

      <CtaBanner />
      <RelatedLinks
        title="Keep Reading"
        links={[
          ...(otherPost
            ? [{ href: `/blog/${otherPost.slug}`, title: otherPost.title, text: otherPost.excerpt }]
            : []),
          { href: "/practice-areas", title: "Practice Areas", text: "See how we can help." },
          { href: "/contact", title: "Free Case Evaluation", text: "Tell us what happened." },
        ]}
      />
    </>
  );
}
