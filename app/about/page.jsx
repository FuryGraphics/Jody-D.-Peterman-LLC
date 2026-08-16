import Image from "next/image";
import {
  firm,
  globalFaqs,
  attorneyBio,
  credentials,
  pressMentions,
} from "@/lib/site";
import {
  buildMetadata,
  JsonLd,
  attorneySchema,
  faqSchema,
} from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import FAQ from "@/components/FAQ";
import { Button, Eyebrow, Heading, GoldRule } from "@/components/ui";
import { Icon } from "@/components/Icons";
import {
  PageHero,
  CtaBanner,
  RelatedLinks,
  TrustBadgeRow,
  TestimonialsSection,
} from "@/components/sections";

export const metadata = buildMetadata({
  title: "About Attorney Jody D. Peterman",
  description:
    "Meet Jody Donald Peterman — a Valdosta, GA trial attorney practicing since 1995, with more than 100 jury trials, an AV rating from Martindale-Hubbell® and a Top 100 Georgia Trial Lawyers honor.",
  path: "/about",
});

const creds = credentials.associations.concat(
  "Admitted before the U.S. Supreme Court and the 11th Circuit Court of Appeals",
  "Admitted in all three U.S. District Courts of Georgia"
);

const values = [
  {
    icon: "scale",
    title: "Trial-Ready Advocacy",
    text: "We prepare each case for trial because that is the best way to position our clients for favorable results, even if the case is ultimately resolved in the pretrial phase.",
  },
  {
    icon: "heart",
    title: "Personal Attention",
    text: "We take only a select number of cases. That means our attention is focused solely on helping our clients get through the most difficult times of their lives.",
  },
  {
    icon: "shield",
    title: "No Fee Unless We Win",
    text: "You pay nothing upfront and no attorney's fee at all unless we recover compensation for you. The risk is ours, not yours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={attorneySchema()} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <PageHero
        eyebrow="Meet Your Attorney"
        title="Jody Donald Peterman"
        subtitle="A fierce litigator securing outstanding results for clients since 1995."
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=70"
      />

      {/* Bio */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-container items-start gap-12 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeUp className="lg:sticky lg:top-32">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/jody-peterman.png"
                alt="Attorney Jody D. Peterman"
                width={300}
                height={400}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-6 rounded-2xl bg-navy p-6 text-center text-white">
              <div className="font-serif text-3xl font-bold text-gold">30+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Years Serving South Georgia
              </div>
              <a
                href={firm.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-light"
              >
                <Icon name="phone" size={16} />
                {firm.phone}
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Eyebrow>Biography</Eyebrow>
            <Heading as="h2">One of South Georgia's Most Experienced Trial Lawyers</Heading>
            <GoldRule />
            <div className="space-y-4 text-navy/75">
              {attorneyBio.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-warm p-6">
                <h3 className="mb-4 font-serif text-xl font-bold text-navy">
                  Education
                </h3>
                <ul className="space-y-3">
                  {credentials.education.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-navy/75">
                      <Icon name="check" size={18} className="mt-0.5 flex-none text-gold-dark" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-black/5 bg-warm p-6">
                <h3 className="mb-4 font-serif text-xl font-bold text-navy">
                  Honors
                </h3>
                <ul className="space-y-3">
                  {credentials.honors.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-navy/75">
                      <Icon name="check" size={18} className="mt-0.5 flex-none text-gold-dark" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-black/5 bg-warm p-6">
              <h3 className="mb-4 font-serif text-xl font-bold text-navy">
                Bar Admissions
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {credentials.barAdmissions.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-navy/75">
                    <Icon name="check" size={18} className="mt-0.5 flex-none text-gold-dark" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-black/5 bg-warm p-6">
              <h3 className="mb-4 font-serif text-xl font-bold text-navy">
                Professional Associations
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {creds.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-navy/75">
                    <Icon name="check" size={18} className="mt-0.5 flex-none text-gold-dark" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-black/5 bg-warm p-6">
              <h3 className="mb-4 font-serif text-xl font-bold text-navy">
                Jody Peterman in the Press
              </h3>
              <ul className="space-y-3">
                {pressMentions.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-navy/75">
                    <Icon name="check" size={18} className="mt-0.5 flex-none text-gold-dark" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Schedule a Free Consultation</Button>
              <Button href="/practice-areas" variant="outline">
                See How We Can Help
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeUp className="mb-12 text-center">
            <Eyebrow>Why Clients Choose Us</Eyebrow>
            <Heading center>The Peterman Difference</Heading>
            <GoldRule center />
          </FadeUp>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeUp
                key={v.title}
                delay={i * 0.1}
                className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-soft"
              >
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold">
                  <Icon name={v.icon} size={30} />
                </span>
                <h3 className="font-serif text-xl font-bold text-navy">{v.title}</h3>
                <p className="mt-3 text-sm text-navy/70">{v.text}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2} className="mt-12 border-t border-black/10 pt-10">
            <TrustBadgeRow dark={false} />
          </FadeUp>
        </div>
      </section>

      <TestimonialsSection />

      <CtaBanner
        heading="Let's discuss your case — free of charge."
        text="Get honest answers from an attorney with 30+ years of experience. No pressure, no obligation."
      />

      <FAQ faqs={globalFaqs} />

      <RelatedLinks
        title="Where to Next?"
        links={[
          { href: "/practice-areas", title: "Practice Areas", text: "See the cases we handle." },
          { href: "/locations/valdosta", title: "Valdosta Office", text: "304 N. Ashley Street — our home base." },
          { href: "/contact", title: "Contact Us", text: "Start your free case review." },
        ]}
      />
    </>
  );
}
