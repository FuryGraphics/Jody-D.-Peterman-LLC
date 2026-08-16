import Link from "next/link";
import { practiceAreas, locations, blogPosts } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FadeUp from "@/components/FadeUp";
import { Heading, GoldRule } from "@/components/ui";
import { Icon } from "@/components/Icons";

export const metadata = buildMetadata({
  title: "Sitemap",
  description:
    "Browse every page on the Jody D. Peterman, LLC website — practice areas, service areas, blog articles, and firm information, all in one place.",
  path: "/sitemap",
});

const groups = [
  {
    title: "Main Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Jody D. Peterman" },
      { href: "/practice-areas", label: "Practice Areas" },
      { href: "/locations", label: "Service Areas" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Practice Areas",
    links: practiceAreas.map((p) => ({
      href: `/practice-areas/${p.slug}`,
      label: p.title,
    })),
  },
  {
    title: "Service Areas",
    links: locations.map((l) => ({
      href: `/locations/${l.slug}`,
      label: `${l.city}, GA`,
    })),
  },
  {
    title: "Blog Articles",
    links: blogPosts.map((b) => ({ href: `/blog/${b.slug}`, label: b.title })),
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Sitemap", href: "/sitemap" },
        ]}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FadeUp>
            <Heading as="h1">Sitemap</Heading>
            <GoldRule />
          </FadeUp>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g, i) => (
              <FadeUp key={g.title} delay={i * 0.05}>
                <h2 className="mb-4 font-serif text-lg font-bold text-navy">
                  {g.title}
                </h2>
                <ul className="space-y-2">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="flex items-center gap-2 text-navy/75 transition-colors hover:text-gold-dark"
                      >
                        <Icon name="arrow" size={15} className="text-gold" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
