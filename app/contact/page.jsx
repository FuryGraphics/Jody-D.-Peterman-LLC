import { firm, offices, globalFaqs } from "@/lib/site";
import { buildMetadata, JsonLd, faqSchema } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import FAQ from "@/components/FAQ";
import FindUs from "@/components/FindUs";
import ContactForm from "@/components/ContactForm";
import { Eyebrow, Heading, GoldRule } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { PageHero, RelatedLinks, TrustBadgeRow } from "@/components/sections";

export const metadata = buildMetadata({
  title: "Contact Us — Free Case Evaluation",
  description:
    "Contact Jody D. Peterman, LLC at 304 N. Ashley Street in Valdosta, GA. Call 229-588-2608 for a free case evaluation. We represent clients throughout Georgia.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqSchema(globalFaqs)} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <PageHero
        eyebrow="Free Case Evaluation"
        title="Let's Talk About Your Case"
        subtitle="For a free case evaluation, please call us at 229-588-2608 or complete our contact form. We represent clients throughout Georgia."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-container items-start gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: contact details */}
          <FadeUp>
            <Eyebrow>Get In Touch</Eyebrow>
            <Heading as="h2">We're Here When You Need Us</Heading>
            <GoldRule />
            <p className="text-navy/75">
              While this website provides general information, it does not
              constitute legal advice. The best way to get guidance on your
              specific legal issue is to speak with a lawyer. To schedule a
              meeting with Jody D. Peterman, LLC, call us or complete the intake
              form. We represent clients throughout Georgia.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={firm.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-black/5 bg-warm p-5 shadow-soft transition-colors hover:border-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon name="phone" size={24} />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    Call Us
                  </span>
                  <span className="block text-lg font-bold text-navy">
                    {firm.phone}
                  </span>
                </span>
              </a>
              <a
                href={firm.emailHref}
                className="flex items-center gap-4 rounded-2xl border border-black/5 bg-warm p-5 shadow-soft transition-colors hover:border-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon name="mail" size={24} />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    Email Us
                  </span>
                  <span className="block text-lg font-bold text-navy">
                    {firm.email}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {offices.map((o) => (
                <div
                  key={o.id}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-soft"
                >
                  <div className="flex items-center gap-2 font-semibold text-navy">
                    <Icon name="pin" size={18} className="text-gold-dark" />
                    {o.label}
                  </div>
                  <p className="mt-2 text-sm text-navy/70">
                    {o.street}
                    <br />
                    {o.city}, {o.state} {o.zip}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-navy/70">
                    <Icon name="clock" size={15} className="text-gold-dark" />
                    {o.hours}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <TrustBadgeRow dark={false} />
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>
        </div>
      </section>

      <FindUs />
      <FAQ faqs={globalFaqs} />
      <RelatedLinks
        title="Before You Go"
        links={[
          { href: "/practice-areas", title: "Practice Areas", text: "See how we can help." },
          { href: "/about", title: "About Jody", text: "30+ years of experience." },
          { href: "/locations", title: "Service Areas", text: "Communities we serve." },
        ]}
      />
    </>
  );
}
