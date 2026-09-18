import Image from "next/image";
import { firm, offices, globalFaqs, heroBadges } from "@/lib/site";
import { buildMetadata, JsonLd, legalServiceSchema, faqSchema } from "@/lib/seo";
import { Button } from "@/components/ui";
import { Icon } from "@/components/Icons";
import FadeUp from "@/components/FadeUp";
import FAQ from "@/components/FAQ";
import FindUs from "@/components/FindUs";
import {
  PracticeGrid,
  StoryBlock,
  HowItWorks,
  ReviewsSection,
  WhereWeServe,
  CtaBanner,
  TrustBadgeRow,
  AwardsBand,
} from "@/components/sections";

export const metadata = buildMetadata({
  title: "Valdosta Personal Injury & Criminal Defense Lawyer",
  description:
    "Jody D. Peterman, LLC in Valdosta, GA — a trial attorney with 200+ jury trials since 1995 handling catastrophic injury, trucking, wrongful death and serious felony cases. Call 229-588-2608.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={legalServiceSchema({ offices })} />
      <JsonLd data={faqSchema(globalFaqs)} />

      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="/images/u-1521791136064-1920.jpg"
          alt="Attorney shaking hands with a client at Jody D. Peterman, LLC"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55" />
        <div className="relative mx-auto w-full max-w-container px-4 pb-16 pt-36 md:px-6 md:pt-40">
          <FadeUp className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              {firm.tagline}
            </span>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
              Aggressive Representation
              <br />
              <span className="text-gold">When the Stakes Are High.</span>
            </h1>
            <span className="mt-5 block h-1 w-24 rounded-full bg-gold" />
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Attorney Jody D. Peterman is an award-winning Georgia lawyer
              representing clients in high-stakes matters involving catastrophic
              injuries, trucking accidents, wrongful death cases, and the
              wrongly accused in a criminal case — throughout the Valdosta area
              and all of Georgia.
            </p>

            {/* Trust badge row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {heroBadges.map((b) => (
                <span
                  key={b.label}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                >
                  <Icon name={b.icon} size={18} className="text-gold" />
                  {b.label}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" className="px-9 py-4 text-base">
                Get Your Free Case Evaluation
              </Button>
              <a
                href={firm.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy"
              >
                <Icon name="phone" size={20} />
                {firm.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-b border-black/5 bg-navy py-8">
        <div className="mx-auto grid max-w-container grid-cols-2 gap-6 px-4 text-center md:grid-cols-4 md:px-6">
          {[
            { n: "1995", l: "Practicing Since" },
            { n: "200+", l: "Jury Trials Tried" },
            { n: "AV", l: "Martindale-Hubbell Rated" },
            { n: "Free", l: "Case Evaluation" },
          ].map((s, i) => (
            <FadeUp key={s.l} delay={i * 0.08}>
              <div className="font-serif text-3xl font-bold text-gold md:text-4xl">
                {s.n}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                {s.l}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <AwardsBand />
      <PracticeGrid />
      <CtaBanner />
      <StoryBlock />
      <HowItWorks />
      <WhereWeServe />
      <ReviewsSection />
      <CtaBanner
        heading="Aggressive representation when the stakes are high."
        text="We take only a select number of cases, so our clients get the focus these matters require. Call 229-588-2608 for a free case evaluation."
      />
      <FAQ faqs={globalFaqs} />
      <FindUs />

      {/* Final CTA with full trust badge row */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-container px-4 text-center md:px-6">
          <FadeUp>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Ready to talk? So are we.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              For a free case evaluation, call us at 229-588-2608 or complete
              our contact form. We represent clients throughout Georgia.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/contact" className="px-9 py-4 text-base">
                Free Case Evaluation
              </Button>
              <a
                href={firm.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy"
              >
                <Icon name="phone" size={20} />
                {firm.phone}
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-12 border-t border-white/10 pt-10">
            <TrustBadgeRow />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
