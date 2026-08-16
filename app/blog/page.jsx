import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import { Eyebrow, Heading, GoldRule } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { PageHero, CtaBanner, RelatedLinks } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Personal Injury Blog & Legal Resources",
  description:
    "Practical guidance from a South Georgia personal injury attorney — what to do after an accident, Georgia injury law explained, and how to protect your claim.",
  path: "/blog",
});

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Legal Resources"
        title="Injury Law, Explained"
        subtitle="Straightforward answers to the questions injured South Georgians ask us most."
        image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          {/* Featured */}
          <FadeUp className="mb-14">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-black/5 shadow-soft transition-all hover:shadow-card lg:grid-cols-2"
            >
              <div className="relative h-64 overflow-hidden lg:h-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center bg-navy p-8 text-white md:p-12">
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-light">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-3 font-serif text-2xl font-bold md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-white/75">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-sm text-white/60">
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-gold-light">
                  Read article
                  <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </FadeUp>

          <FadeUp className="mb-10">
            <Eyebrow>More Articles</Eyebrow>
            <Heading>From the Blog</Heading>
            <GoldRule />
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width:768px) 100vw, 380px"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase text-navy">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-lg font-bold text-navy">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-navy/70">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-navy/50">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <RelatedLinks
        title="Get Help Now"
        links={[
          { href: "/practice-areas", title: "Practice Areas", text: "See how we can help." },
          { href: "/about", title: "About the Firm", text: "Meet Jody D. Peterman." },
          { href: "/contact", title: "Free Consultation", text: "Talk to us today." },
        ]}
      />
    </>
  );
}
