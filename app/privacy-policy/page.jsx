import { firm } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import { Heading, GoldRule } from "@/components/ui";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Jody D. Peterman, LLC. Learn how our South Georgia personal injury law firm collects, uses, and protects your information.",
  path: "/privacy-policy",
});

const sections = [
  {
    h: "Information We Collect",
    p: "When you contact us through our website, by phone, or by email, we may collect your name, contact details, and information about your legal matter. We collect this information only to evaluate and, where appropriate, represent you.",
  },
  {
    h: "How We Use Your Information",
    p: "We use the information you provide to respond to your inquiry, evaluate your potential case, and communicate with you. We do not sell your personal information to third parties.",
  },
  {
    h: "Analytics & Cookies",
    p: "Our website uses Google Analytics to understand how visitors use the site. These tools may set cookies and collect anonymized usage data. You can disable cookies in your browser settings.",
  },
  {
    h: "Confidentiality",
    p: "Information you submit through this website is not protected by the attorney–client privilege until an attorney–client relationship has been established in writing. Please do not send confidential or time-sensitive information through the website.",
  },
  {
    h: "Contact Us",
    p: `If you have questions about this policy, contact us at ${firm.email} or ${firm.phone}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FadeUp>
            <Heading as="h1">Privacy Policy</Heading>
            <GoldRule />
            <p className="text-navy/70">
              This Privacy Policy explains how {firm.name} handles information
              collected through this website. Last updated {new Date().getFullYear()}.
            </p>
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
