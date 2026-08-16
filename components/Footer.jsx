import Link from "next/link";
import { firm, offices, topLevelAreas, servedCities, trustBadges } from "@/lib/site";
import { Icon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/70">
      {/* Trust badge row */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-container flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-6 text-center">
          {trustBadges.map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80"
            >
              <Icon name="check" size={16} className="text-gold" />
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-container gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand blurb */}
        <div>
          <div className="font-serif text-2xl font-bold text-white">
            {firm.logoText}
          </div>
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-light">
            {firm.logoSub}
          </div>
          <p className="text-sm leading-relaxed">
            For more than 30 years, we've fought for injured people across South
            Georgia. No fee unless we win — and a free consultation, always.
          </p>
          <a
            href={firm.phoneHref}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-light"
          >
            <Icon name="phone" size={16} />
            {firm.phone}
          </a>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-white">
            Practice Areas
          </h3>
          <ul className="space-y-2 text-sm">
            {topLevelAreas.map((pa) => (
              <li key={pa.slug}>
                <Link
                  href={`/practice-areas/${pa.slug}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {pa.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-white">
            Service Areas
          </h3>
          <ul className="space-y-2 text-sm">
            {servedCities.map((c) => (
              <li key={c.name}>
                {c.slug ? (
                  <Link
                    href={`/locations/${c.slug}`}
                    className="transition-colors hover:text-gold-light"
                  >
                    {c.name}, GA
                  </Link>
                ) : (
                  <span>{c.name}, GA</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-white">
            Our Offices
          </h3>
          <div className="space-y-5 text-sm">
            {offices.map((o) => (
              <div key={o.id}>
                <div className="font-semibold text-white">
                  {o.label}
                  {o.primary && (
                    <span className="ml-2 rounded bg-gold/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-gold-light">
                      Main
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-start gap-2">
                  <Icon name="pin" size={15} className="mt-0.5 flex-none text-gold" />
                  <span>
                    {o.street}
                    <br />
                    {o.city}, {o.state} {o.zip}
                  </span>
                </div>
                <a
                  href={o.phoneHref}
                  className="mt-1 flex items-center gap-2 hover:text-gold-light"
                >
                  <Icon name="phone" size={15} className="text-gold" />
                  {o.phone}
                </a>
                <div className="mt-1 flex items-center gap-2">
                  <Icon name="clock" size={15} className="text-gold" />
                  {o.hours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Associations row */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container flex-wrap items-center justify-center gap-4 px-6 py-6">
          {[
            "State Bar of Georgia",
            "Georgia Trial Lawyers Assoc.",
            "Million Dollar Advocates Forum",
            "American Association for Justice",
            "AV Preeminent · Martindale-Hubbell",
          ].map((a) => (
            <span
              key={a}
              className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white/60"
            >
              <Icon name="scale" size={16} className="text-gold" />
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/50 md:flex-row">
          <p>
            © {year} {firm.name}. All rights reserved. Attorney advertising —
            prior results do not guarantee a similar outcome.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-gold-light">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-gold-light">
              Disclaimer
            </Link>
            <Link href="/sitemap" className="hover:text-gold-light">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
