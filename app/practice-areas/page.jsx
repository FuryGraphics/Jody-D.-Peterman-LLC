import { globalFaqs } from "@/lib/site";
import { buildMetadata, JsonLd, faqSchema } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import {
  PageHero,
  PracticeGrid,
  AllPracticeAreas,
  HowItWorks,
  CtaBanner,
  RelatedLinks,
} from "@/components/sections";

export const metadata = buildMetadata({
  title: "Practice Areas",
  description:
    "From car and truck accidents to catastrophic injury, nursing home neglect, medical malpractice, wrongful death and serious felony defense — see every case type Jody D. Peterman, LLC handles.",
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  return (
    <>
      <JsonLd data={faqSchema(globalFaqs)} />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Practice Areas", href: "/practice-areas" },
        ]}
      />
      <PageHero
        eyebrow="What We Handle"
        title="Our Practice Areas"
        subtitle="Serious injury, wrongful death and serious felony defense — handled by a trial attorney with more than 200 jury trials behind him."
        image="/images/u-1589829545856-1600.jpg"
      />
      <PracticeGrid
        eyebrow="Areas of Practice"
        title="How We Can Help"
        intro="Select a practice area to learn how we approach these cases in South Georgia — and how we can help you recover."
      />
      <AllPracticeAreas />
      <CtaBanner />
      <HowItWorks />
      <FAQ faqs={globalFaqs} />
      <RelatedLinks
        title="Learn More"
        links={[
          { href: "/about", title: "Meet Jody D. Peterman", text: "Practicing since 1995 — 200+ jury trials." },
          { href: "/locations", title: "Service Areas", text: "Communities we serve across South Georgia." },
          { href: "/contact", title: "Free Case Evaluation", text: "Tell us what happened." },
        ]}
      />
    </>
  );
}
