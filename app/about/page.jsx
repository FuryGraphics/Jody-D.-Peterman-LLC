import Image from "next/image";
import {
  firm,
  globalFaqs,
  attorneyBio,
  credentials,
  pressMentions,
  partners,
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
  AwardsBand,
} from "@/components/sections";

export const metadata = buildMetadata({
  title: "About Attorney Jody D. Peterman",
  description:
    "Meet the Jody D. Peterman, LLC trial team — Jody Peterman, Stephen Delk and Mike Burke — Valdosta, GA attorneys with 200+ jury trials and 2027 Super Lawyers® honors.",
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
    title: "Decades in Your Corner",
    text: "Put decades of experience in your corner. We focus exclusively on pivotal cases involving serious felony charges, catastrophic injuries, trucking accidents and wrongful death.",
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
        image="/images/u-1505664194779-1600.jpg"
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
            <div className="mt-6 flex flex-col items-center gap-5 rounded-2xl bg-navy p-6 text-white sm:flex-row sm:text-left">
              <Image
                src="/sl-2027-peterman.webp"
                alt="Rated by Super Lawyers — Jody D. Peterman — 2027"
                width={180}
                height={198}
                className="h-auto w-36 flex-none drop-shadow-md sm:w-40"
              />
              <div className="flex-1 text-center sm:text-left">
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
              <Button href="/contact">Request a Free Case Evaluation</Button>
              <Button href="/practice-areas" variant="outline">
                See How We Can Help
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Prominent Super Lawyers® awards band */}
      <AwardsBand />

      {/* Meet Our Attorneys — partners */}
      <section className="border-t border-black/5 bg-white py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeUp className="mb-12 text-center">
            <Eyebrow>Our Trial Team</Eyebrow>
            <Heading center>Meet the Attorneys</Heading>
            <GoldRule center />
            <p className="mx-auto max-w-2xl text-navy/70">
              Jody is joined by two partners who spent their careers on the
              defense side — and now bring that insider knowledge to injured
              South Georgians.
            </p>
          </FadeUp>

          <div className="space-y-8">
            {partners.map((atty, i) => (
              <FadeUp
                key={atty.id}
                delay={i * 0.1}
                className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft"
              >
                <div className="grid gap-0 lg:grid-cols-[300px_1fr]">
                  {/* Photo column */}
                  <div className="flex flex-col items-center justify-center gap-4 bg-navy p-8 text-center text-white">
                    {atty.image ? (
                      <div className="h-44 w-36 overflow-hidden rounded-2xl border-2 border-gold/40">
                        <Image
                          src={atty.image}
                          alt={`Attorney ${atty.name.replace(/"/g, "")}`}
                          width={300}
                          height={400}
                          loading="lazy"
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gold font-serif text-3xl font-bold text-navy">
                        {atty.name
                          .replace(/"/g, "")
                          .split(" ")
                          .filter((w) => /^[A-Z]/.test(w))
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    )}
                    <div>
                      <h3 className="font-serif text-xl font-bold">{atty.name}</h3>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-light">
                        {atty.title}
                      </div>
                      <div className="mt-1 text-sm text-white/70">{atty.focus}</div>
                    </div>
                    {atty.badge && (
                      <Image
                        src={atty.badge}
                        alt={`Rated by Super Lawyers — ${atty.name.replace(/"/g, "")} — 2027`}
                        width={150}
                        height={165}
                        loading="lazy"
                        className="mt-1 h-auto w-[84px]"
                      />
                    )}
                  </div>

                  {/* Bio + credentials */}
                  <div className="p-8 md:p-10">
                    <div className="space-y-3 text-navy/75">
                      {atty.bio.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-6 sm:grid-cols-3">
                      <div>
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                          Honors
                        </h4>
                        <ul className="space-y-1.5 text-sm text-navy/70">
                          {atty.honors.map((h) => (
                            <li key={h} className="flex items-start gap-1.5">
                              <Icon name="check" size={15} className="mt-0.5 flex-none text-gold-dark" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                          Education
                        </h4>
                        <ul className="space-y-1.5 text-sm text-navy/70">
                          {atty.education.map((e) => (
                            <li key={e} className="flex items-start gap-1.5">
                              <Icon name="check" size={15} className="mt-0.5 flex-none text-gold-dark" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                          Focus Areas
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {atty.practiceAreas.map((pa) => (
                            <span
                              key={pa}
                              className="rounded-full border border-navy/10 bg-warm px-2.5 py-1 text-xs text-navy/70"
                            >
                              {pa}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
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
        heading="Let's talk about your case."
        text="Send an email inquiry or call Jody D. Peterman, LLC, in Valdosta at 229-588-2608 to make arrangements to speak to our attorney."
      />

      <FAQ faqs={globalFaqs} />

      <RelatedLinks
        title="Where to Next?"
        links={[
          { href: "/practice-areas", title: "Practice Areas", text: "See the cases we handle." },
          { href: "/locations/valdosta", title: "Valdosta Office", text: "304 N. Ashley Street — our home base." },
          { href: "/contact", title: "Contact Us", text: "Start your free case evaluation." },
        ]}
      />
    </>
  );
}
