import Image from "next/image";
import Link from "next/link";
import { locations, servedCities, globalFaqs } from "@/lib/site";
import { buildMetadata, JsonLd, faqSchema } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import FAQ from "@/components/FAQ";
import FindUs from "@/components/FindUs";
import { Eyebrow, Heading, GoldRule } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { PageHero, CtaBanner, RelatedLinks } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Service Areas Across South Georgia",
  description:
    "Jody D. Peterman, LLC serves clients from its Valdosta office and throughout the State of Georgia, including Adel, Tifton, Albany, Cordele, Douglas, Moultrie and Thomasville.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={faqSchema(globalFaqs)} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/locations" },
        ]}
      />
      <PageHero
        eyebrow="Where We Serve"
        title="Serving All of South Georgia"
        subtitle="From our office at 304 N. Ashley Street in Valdosta, we represent clients across South Georgia and statewide — and we'll come to you when you can't come to us."
        image="/images/u-1524661135-1600.jpg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeUp className="mb-12 text-center">
            <Eyebrow>Communities We Serve</Eyebrow>
            <Heading center>Local Roots, Regional Reach</Heading>
            <GoldRule center />
            <p className="mx-auto max-w-2xl text-navy/70">
              Explore the South Georgia communities where we help injured people
              and their families every day.
            </p>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, i) => (
              <FadeUp key={loc.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`${loc.city}, GA personal injury attorney`}
                      fill
                      sizes="(max-width:768px) 100vw, 380px"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    {loc.primary && (
                      <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase text-navy">
                        Main Office
                      </span>
                    )}
                    <h3 className="absolute bottom-3 left-4 font-serif text-xl font-bold text-white">
                      {loc.city}, GA
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                      {loc.county}
                    </span>
                    <p className="mt-2 flex-1 text-sm text-navy/70 line-clamp-3">
                      {loc.intro}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                      View {loc.city} page
                      <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          {/* Additional cities without pages */}
          <FadeUp delay={0.2} className="mt-10 rounded-2xl border border-black/5 bg-warm p-6 text-center">
            <span className="text-sm font-semibold text-navy">
              We also proudly serve:{" "}
            </span>
            <span className="text-sm text-navy/70">
              {servedCities.filter((c) => !c.slug).map((c) => `${c.name}, GA`).join(" · ")} — and
              surrounding communities throughout South Georgia.
            </span>
          </FadeUp>
        </div>
      </section>

      <CtaBanner />
      <FindUs />
      <FAQ faqs={globalFaqs} />
      <RelatedLinks
        title="Learn More"
        links={[
          { href: "/practice-areas", title: "Practice Areas", text: "The cases we handle." },
          { href: "/about", title: "About the Firm", text: "30+ years of experience." },
          { href: "/contact", title: "Contact Us", text: "Free case evaluation today." },
        ]}
      />
    </>
  );
}
