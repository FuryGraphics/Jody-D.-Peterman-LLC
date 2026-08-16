import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  practiceAreas,
  getPracticeArea,
  getSubAreas,
  topLevelAreas,
  firm,
} from "@/lib/site";
import { buildMetadata, JsonLd, faqSchema } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import FAQ from "@/components/FAQ";
import { Button, Eyebrow, Heading, GoldRule } from "@/components/ui";
import { Icon } from "@/components/Icons";
import {
  PageHero,
  HowItWorks,
  CtaBanner,
  RelatedLinks,
  ReviewsSection,
} from "@/components/sections";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const pa = getPracticeArea(params.slug);
  if (!pa) return {};
  return buildMetadata({
    title: `${pa.title} Lawyer in Valdosta, GA`,
    description: `${pa.title} attorney serving Valdosta and all of Georgia. ${pa.blurb} Call 229-588-2608 for a free case evaluation.`.slice(0, 158),
    path: `/practice-areas/${pa.slug}`,
    image: pa.image,
  });
}

export default function PracticeAreaPage({ params }) {
  const pa = getPracticeArea(params.slug);
  if (!pa) notFound();

  const parent = pa.parent ? getPracticeArea(pa.parent) : null;
  const subs = getSubAreas(pa.slug);
  const isCriminal =
    pa.slug === "criminal-defense" || pa.parent === "criminal-defense";

  // Related pages: sibling sub-areas where they exist, otherwise other
  // top-level areas.
  const siblings = parent
    ? getSubAreas(parent.slug).filter((s) => s.slug !== pa.slug)
    : [];
  const related = (
    siblings.length ? siblings : topLevelAreas.filter((p) => p.slug !== pa.slug)
  ).slice(0, 2);

  return (
    <>
      <JsonLd data={faqSchema(pa.faqs)} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Practice Areas", href: "/practice-areas" },
          ...(parent
            ? [{ name: parent.title, href: `/practice-areas/${parent.slug}` }]
            : []),
          { name: pa.title, href: `/practice-areas/${pa.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Practice Area"
        title={`${pa.title} Attorney`}
        subtitle={pa.blurb}
        image={pa.image}
        showBadges
      />

      {/* Intro + what we handle */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-container gap-12 px-4 md:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeUp>
            <Eyebrow>Overview</Eyebrow>
            <Heading as="h2">How We Handle {pa.title} Cases</Heading>
            <GoldRule />
            <p className="text-lg text-navy/75">{pa.intro}</p>

            <div className="mt-8 rounded-2xl border border-black/5 bg-warm p-7">
              <h3 className="mb-5 font-serif text-xl font-bold text-navy">
                {pa.title} cases we handle
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {pa.handles.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-navy/80">
                    <Icon name="check" size={18} className="mt-1 flex-none text-gold-dark" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {subs.length > 0 && (
              <div className="mt-8 rounded-2xl border border-black/5 bg-white p-7 shadow-soft">
                <h3 className="mb-5 font-serif text-xl font-bold text-navy">
                  {pa.title}: focused practice areas
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {subs.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/practice-areas/${s.slug}`}
                        className="group flex items-start gap-2 rounded-xl border border-black/5 bg-warm p-4 transition-colors hover:border-gold"
                      >
                        <Icon
                          name="arrow"
                          size={18}
                          className="mt-0.5 flex-none text-gold-dark transition-transform group-hover:translate-x-1"
                        />
                        <span>
                          <span className="block font-semibold text-navy">
                            {s.title}
                          </span>
                          <span className="mt-1 block text-sm text-navy/65">
                            {s.blurb}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {parent && (
              <p className="mt-8 text-sm text-navy/60">
                Part of our{" "}
                <Link
                  href={`/practice-areas/${parent.slug}`}
                  className="font-semibold text-gold-dark hover:underline"
                >
                  {parent.title}
                </Link>{" "}
                practice.
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Free {pa.title} Case Evaluation</Button>
              <a
                href={firm.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <Icon name="phone" size={16} />
                {firm.phone}
              </a>
            </div>
          </FadeUp>

          {/* Sidebar */}
          <FadeUp delay={0.1} className="lg:sticky lg:top-32 lg:self-start">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <Image
                src={pa.image}
                alt={`${pa.title} attorney representing injured clients in South Georgia`}
                width={700}
                height={520}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="bg-navy p-7 text-white">
                <h3 className="font-serif text-xl font-bold">
                  Hurt and not sure what to do?
                </h3>
                <p className="mt-2 text-sm text-white/75">
                  Put decades of experience in your corner. For a free case
                  evaluation, call 229-588-2608 or complete our contact form.
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  {[
                    "Free case evaluation",
                    "We take only a select number of cases",
                    "More than 100 jury trials tried",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-white/85">
                      <Icon name="check" size={16} className="text-gold" />
                      {b}
                    </div>
                  ))}
                </div>
                <Button href="/contact" className="mt-6 w-full">
                  Start Your Case Evaluation
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <CtaBanner
        heading={
          isCriminal
            ? `Under investigation or charged? Talk to a ${pa.title.toLowerCase()} attorney today.`
            : `Injured? Talk to a ${pa.title.toLowerCase()} attorney today.`
        }
        text="The sooner we start, the more we can do. Reach out for a free, confidential consultation."
      />

      <HowItWorks />
      <ReviewsSection />
      <FAQ faqs={pa.faqs} title={`${pa.title} — Common Questions`} />

      <RelatedLinks
        title="Related Practice Areas"
        links={[
          ...related.map((r) => ({
            href: `/practice-areas/${r.slug}`,
            title: r.title,
            text: r.blurb,
          })),
          { href: "/contact", title: "Contact Us", text: "Free case evaluation — we represent clients throughout Georgia." },
        ]}
      />
    </>
  );
}
