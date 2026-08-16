import Image from "next/image";
import { notFound } from "next/navigation";
import { locations, getLocation, getOffice, firm, globalFaqs } from "@/lib/site";
import { buildMetadata, JsonLd, localBusinessSchema, faqSchema } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import FAQ from "@/components/FAQ";
import { Button, Eyebrow, Heading, GoldRule } from "@/components/ui";
import { Icon } from "@/components/Icons";
import {
  PageHero,
  PracticeGrid,
  CtaBanner,
  ReviewsSection,
  RelatedLinks,
} from "@/components/sections";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }) {
  const loc = getLocation(params.slug);
  if (!loc) return {};
  return buildMetadata({
    title: `${loc.city}, GA Personal Injury Lawyer`,
    description: `Serving ${loc.city} and ${loc.county} from our Valdosta office — catastrophic injury, trucking, wrongful death and serious felony cases. Free case evaluation: 229-588-2608.`.slice(0, 158),
    path: `/locations/${loc.slug}`,
    image: loc.image,
  });
}

export default function LocationPage({ params }) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();
  const office = getOffice(loc.officeId);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${office.street}, ${office.city}, ${office.state} ${office.zip}`
  )}&output=embed`;

  const localFaqs = [
    {
      q: `Do you handle cases in ${loc.city}, GA?`,
      a: `Yes. We represent injured clients throughout ${loc.county} and the surrounding area. Your nearest office is our ${office.city} location, and we're happy to come to you if travel is difficult.`,
    },
    ...globalFaqs.slice(0, 3),
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema(office)} />
      <JsonLd data={faqSchema(localFaqs)} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/locations" },
          { name: `${loc.city}, GA`, href: `/locations/${loc.slug}` },
        ]}
      />
      <PageHero
        eyebrow={loc.county}
        title={`${loc.city}, GA Personal Injury Lawyer`}
        subtitle={`Trusted representation for injured people and families in ${loc.city} and throughout ${loc.county}.`}
        image={loc.image}
        showBadges
      />

      {/* City intro + neighborhoods */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-container items-start gap-12 px-4 md:px-6 lg:grid-cols-2">
          <FadeUp>
            <Eyebrow>Serving {loc.city}</Eyebrow>
            <Heading as="h2">Local Help After a Serious Injury</Heading>
            <GoldRule />
            <p className="text-lg text-navy/75">{loc.intro}</p>
            <p className="mt-4 text-navy/75">
              Whether you were hurt in a crash on the highway, injured on the
              job, or lost a loved one to someone else's negligence, you don't
              have to face the insurance companies alone. We know this community,
              and we know how to win here.
            </p>

            <div className="mt-8">
              <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-dark">
                Areas we serve near {loc.city}
              </div>
              <div className="flex flex-wrap gap-2">
                {loc.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-navy/10 bg-warm px-3 py-1.5 text-sm text-navy/70"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Free {loc.city} Case Evaluation</Button>
              <a
                href={office.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <Icon name="phone" size={16} />
                {office.phone}
              </a>
            </div>
          </FadeUp>

          {/* Nearest office card + map */}
          <FadeUp delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-black/5 shadow-card">
              <div className="bg-navy p-7 text-white">
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-light">
                  Nearest Office
                </span>
                <h3 className="mt-1 font-serif text-2xl font-bold">{office.label}</h3>
                <ul className="mt-5 space-y-4 text-sm text-white/85">
                  <li className="flex items-start gap-3">
                    <Icon name="pin" size={18} className="mt-0.5 flex-none text-gold" />
                    <span>
                      {office.street}
                      <br />
                      {office.city}, {office.state} {office.zip}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="phone" size={18} className="flex-none text-gold" />
                    <a href={office.phoneHref} className="hover:text-gold-light">
                      {office.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="clock" size={18} className="flex-none text-gold" />
                    {office.hours}
                  </li>
                </ul>
              </div>
              <iframe
                title={`Map of ${office.label}`}
                src={mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <PracticeGrid
        eyebrow={`${loc.city} Practice Areas`}
        title={`How We Help in ${loc.city}`}
        intro={`We handle the full range of personal injury cases for ${loc.city} residents.`}
        limit={6}
      />
      <CtaBanner
        heading={`Injured in ${loc.city}? We're ready to help.`}
        text="For a free case evaluation, call 229-588-2608 or complete our contact form. We represent clients throughout Georgia."
      />
      <ReviewsSection />
      <FAQ faqs={localFaqs} title={`${loc.city} — Frequently Asked Questions`} />

      <RelatedLinks
        title="Explore More"
        links={[
          { href: "/practice-areas/car-accidents", title: "Car Accidents", text: `${loc.city} crash injury help.` },
          {
            href:
              locations.find((l) => l.slug !== loc.slug)
                ? `/locations/${locations.find((l) => l.slug !== loc.slug).slug}`
                : "/locations",
            title: "Other Service Areas",
            text: "See more South Georgia communities.",
          },
          { href: "/contact", title: "Contact Us", text: "Start your free case evaluation." },
        ]}
      />
    </>
  );
}
