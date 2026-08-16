import { firm } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import { Heading, GoldRule } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Legal Disclaimer",
  description:
    "Legal disclaimer for Jody D. Peterman, LLC. This website is attorney advertising and does not create an attorney–client relationship or constitute legal advice.",
  path: "/disclaimer",
});

const sections = [
  {
    h: "No Legal Advice",
    p: "The information on this website is provided for general informational purposes only and does not constitute legal advice. You should not act or rely on any information on this website without seeking the advice of a licensed attorney regarding your specific situation.",
  },
  {
    h: "No Attorney–Client Relationship",
    p: "Contacting us through this website, by email, or by phone does not create an attorney–client relationship. An attorney–client relationship is formed only after we agree in writing to represent you.",
  },
  {
    h: "Attorney Advertising",
    p: "This website may be considered attorney advertising in some jurisdictions. Prior results do not guarantee a similar outcome. Every case is different and must be evaluated on its own facts.",
  },
  {
    h: "Statute of Limitations",
    p: "Legal claims are subject to strict deadlines. Do not delay in seeking legal advice, as your rights may be affected by the passage of time.",
  },
  {
    h: "Questions",
    p: `For questions about this disclaimer, contact ${firm.name} at ${firm.phone}.`,
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Disclaimer", href: "/disclaimer" },
        ]}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FadeUp>
            <Heading as="h1">Legal Disclaimer</Heading>
            <GoldRule />
          </FadeUp>
          {sections.map((s, i) => (
            <FadeUp key={s.h} delay={i * 0.04} className="mt-8">
              <h2 className="font-serif text-xl font-bold text-navy">{s.h}</h2>
              <p className="mt-2 text-navy/75">{s.p}</p>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
