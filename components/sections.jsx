import Image from "next/image";
import Link from "next/link";
import {
  firm,
  topLevelAreas,
  practiceGroups,
  getSubAreas,
  reviews,
  testimonials,
  googleRating,
  howItWorks,
  trustBadges,
  superLawyers,
  servedCities,
  locations,
} from "@/lib/site";
import { Button, Eyebrow, Heading, GoldRule, Stars } from "./ui";
import { Icon } from "./Icons";
import FadeUp from "./FadeUp";

// ---- Trust badge row (used on hero + final CTA) ----------------------------
export function TrustBadgeRow({ items = trustBadges, dark = true }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {items.map((b) => (
        <span
          key={b}
          className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${
            dark ? "text-white/85" : "text-navy/80"
          }`}
        >
          <Icon name="check" size={16} className="text-gold" />
          {b}
        </span>
      ))}
    </div>
  );
}

// ---- Prominent awards / recognition band -----------------------------------
export function AwardsBand() {
  return (
    <section className="bg-warm py-16">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="mb-10 text-center">
          <Eyebrow>Awards &amp; Recognition</Eyebrow>
          <Heading center>Selected to the {superLawyers.year} Super Lawyers® List</Heading>
          <GoldRule center />
          <p className="mx-auto max-w-2xl text-navy/70">
            All three attorneys at {firm.name} were selected to Super Lawyers® in{" "}
            {superLawyers.year} — a distinction given to no more than 5% of the
            attorneys in Georgia.
          </p>
        </FadeUp>
        <div className="flex flex-wrap items-end justify-center gap-8 sm:gap-12">
          {superLawyers.recipients.map((r, i) => (
            <FadeUp
              key={r.name}
              delay={i * 0.1}
              className="flex flex-col items-center"
            >
              <Image
                src={r.badge}
                alt={`Rated by Super Lawyers — ${r.name} — ${superLawyers.year}`}
                width={180}
                height={200}
                loading="lazy"
                className="h-auto w-[130px] drop-shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:w-[150px]"
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Mid-page full-width CTA banner ----------------------------------------
export function CtaBanner({
  heading = "Injured in an accident? Let's talk today.",
  text = "Put decades of experience in your corner. For a free case evaluation, call 229-588-2608 or complete our contact form.",
  withBadges = false,
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C9A84C 0, transparent 40%), radial-gradient(circle at 80% 80%, #C9A84C 0, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
              {heading}
            </h2>
            <p className="mt-3 text-white/75">{text}</p>
          </div>
          <div className="flex flex-none flex-col gap-3 sm:flex-row">
            <Button href="/contact">Free Case Evaluation</Button>
            <a
              href={firm.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              <Icon name="phone" size={16} />
              {firm.phone}
            </a>
          </div>
        </FadeUp>
        {withBadges && (
          <FadeUp delay={0.1} className="mt-10 border-t border-white/10 pt-8">
            <TrustBadgeRow />
          </FadeUp>
        )}
      </div>
    </section>
  );
}

// ---- Practice areas grid ("What We Handle") --------------------------------
export function PracticeGrid({
  eyebrow = "What We Handle",
  title = "Practice Areas",
  intro = "Three decades of trial-tested experience across serious injury, wrongful death and serious felony cases in South Georgia.",
  limit,
}) {
  const items = limit ? topLevelAreas.slice(0, limit) : topLevelAreas;
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="mb-12 text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading center>{title}</Heading>
          <GoldRule center />
          <p className="mx-auto max-w-2xl text-navy/70">{intro}</p>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((pa, i) => (
            <FadeUp key={pa.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/practice-areas/${pa.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={pa.image}
                    alt={`${pa.title} attorney in South Georgia`}
                    fill
                    sizes="(max-width:768px) 100vw, 380px"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-navy shadow-soft">
                    <Icon name={pa.icon} size={24} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-bold text-navy">
                    {pa.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-navy/70">{pa.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                    Learn more
                    <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Full practice-area index (parents + sub-areas) ------------------------
export function AllPracticeAreas() {
  return (
    <section className="bg-warm py-20">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="mb-12 text-center">
          <Eyebrow>Full Index</Eyebrow>
          <Heading center>Every Area We Handle</Heading>
          <GoldRule center />
          <p className="mx-auto max-w-2xl text-navy/70">
            Browse the complete list, including the focused areas within each
            practice.
          </p>
        </FadeUp>
        <div className="grid gap-6 lg:grid-cols-3">
          {practiceGroups.map((g, gi) => (
            <FadeUp
              key={g.title}
              delay={gi * 0.08}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-soft"
            >
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark">
                {g.title}
              </p>
              <div className="space-y-6">
                {g.areas.map((pa) => {
                  const subs = getSubAreas(pa.slug);
                  return (
                    <div key={pa.slug}>
                      <Link
                        href={`/practice-areas/${pa.slug}`}
                        className="flex items-center gap-3 transition-colors hover:text-gold-dark"
                      >
                        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-navy text-gold">
                          <Icon name={pa.icon} size={18} />
                        </span>
                        <span className="font-serif text-lg font-bold text-navy">
                          {pa.title}
                        </span>
                      </Link>
                      {subs.length > 0 && (
                        <ul className="mt-2.5 space-y-1.5 border-l border-black/5 pl-[18px] ml-[18px]">
                          {subs.map((sa) => (
                            <li key={sa.slug}>
                              <Link
                                href={`/practice-areas/${sa.slug}`}
                                className="block text-sm text-navy/65 transition-colors hover:text-gold-dark"
                              >
                                {sa.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Our Story / About block -----------------------------------------------
export function StoryBlock() {
  return (
    <section className="bg-warm py-20">
      <div className="mx-auto grid max-w-container items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <FadeUp className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/jody-peterman.png"
              alt="Attorney Jody D. Peterman at his South Georgia law office"
              width={300}
              height={400}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-navy px-8 py-6 text-center shadow-card md:-right-6">
            <div className="font-serif text-4xl font-bold text-gold">
              {firm.yearsExperience}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Years Serving
              <br />
              South Georgia
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Eyebrow>Our Story</Eyebrow>
          <Heading>A Lifelong Georgian and Successful Trial Attorney</Heading>
          <GoldRule />
          <p className="text-navy/75">
            Attorney Jody D. Peterman has been serving clients across the
            Valdosta area and all of Georgia since 1995. He is a trial lawyer
            who has represented clients in more than 200 jury trials, and he has
            a well-established reputation among past clients and legal peers as
            an assertive, intelligent and authoritative litigator with a long
            record of success — including the reduction and dismissal of serious
            felony charges.
          </p>
          <p className="mt-4 text-navy/75">
            We handle only a select number of personal injury claims, so our
            clients get the focus and personal attention these complex cases
            require.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/about">Meet Jody D. Peterman</Button>
            <Button href="/practice-areas" variant="outline">
              Our Practice Areas
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ---- How It Works ----------------------------------------------------------
export function HowItWorks() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="mb-14 text-center">
          <Eyebrow dark>How It Works</Eyebrow>
          <Heading dark center>
            Your Path to Recovery
          </Heading>
          <GoldRule center />
          <p className="mx-auto max-w-2xl text-white/70">
            We make the legal process simple, so you can focus on healing.
          </p>
        </FadeUp>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((s, i) => (
            <FadeUp key={s.step} delay={i * 0.1} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold font-serif text-2xl font-bold text-navy">
                  {s.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{s.text}</p>
              </div>
              {i < howItWorks.length - 1 && (
                <span className="absolute -right-4 top-16 hidden text-gold lg:block">
                  <Icon name="arrow" size={22} />
                </span>
              )}
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Reviews ---------------------------------------------------------------
export function ReviewsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="mb-12 flex flex-col items-center gap-4 text-center">
          <Eyebrow>Client Reviews</Eyebrow>
          <Heading center>What Our Clients Say</Heading>
          <div className="flex items-center gap-3">
            <Stars />
            <span className="font-semibold text-navy">{googleRating.rating}</span>
            <span className="text-navy/60">
              · Based on {googleRating.count}+ Google reviews
            </span>
          </div>
        </FadeUp>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeUp
              key={r.name}
              delay={(i % 3) * 0.08}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-warm p-7 shadow-soft"
            >
              <Stars className="mb-4" />
              <p className="flex-1 text-navy/80">“{r.text}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-serif font-bold text-gold">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-navy">{r.name}</span>
                  <span className="block text-xs text-navy/60">
                    Google Review · {r.when}
                  </span>
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Testimonials (carried over from the firm's prior site) ----------------
export function TestimonialsSection() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="mb-12 text-center">
          <Eyebrow dark>Testimonials</Eyebrow>
          <Heading dark center>
            In Our Clients' Words
          </Heading>
          <GoldRule center />
        </FadeUp>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeUp
              key={t.id}
              delay={(i % 3) * 0.08}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <Stars className="mb-4" />
              <p className="flex-1 text-white/80">“{t.text}”</p>
              <span className="mt-6 border-t border-white/10 pt-4 text-sm font-semibold text-gold">
                — {t.name}
              </span>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Where We Serve --------------------------------------------------------
export function WhereWeServe() {
  const primary = locations.find((l) => l.primary);
  return (
    <section className="bg-warm py-20">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="mb-12 text-center">
          <Eyebrow>Where We Serve</Eyebrow>
          <Heading center>Proudly Serving South Georgia</Heading>
          <GoldRule center />
        </FadeUp>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeUp className="overflow-hidden rounded-3xl shadow-card">
            <Image
              src={primary.image}
              alt="Valdosta, Georgia — home of Jody D. Peterman, LLC"
              width={1000}
              height={640}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <h3 className="font-serif text-2xl font-bold text-navy">
              {primary.city}, GA — Our Home Base
            </h3>
            <GoldRule />
            <p className="text-navy/75">{primary.intro}</p>
            <div className="mt-6">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-gold-dark">
                Nearby communities we serve
              </div>
              <div className="flex flex-wrap gap-2">
                {primary.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-sm text-navy/70"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <Button href={`/locations/${primary.slug}`}>
                {primary.city} Office Details
              </Button>
            </div>
          </FadeUp>
        </div>

        {/* Other cities grid */}
        <FadeUp delay={0.15} className="mt-12">
          <div className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-gold-dark">
            More cities we serve
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {servedCities
              .filter((c) => c.name !== primary.city)
              .map((c) =>
                c.slug ? (
                  <Link
                    key={c.name}
                    href={`/locations/${c.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-black/5 bg-white px-4 py-3 shadow-soft transition-colors hover:border-gold"
                  >
                    <span className="flex items-center gap-2 font-semibold text-navy">
                      <Icon name="pin" size={18} className="text-gold-dark" />
                      {c.name}, GA
                    </span>
                    <Icon
                      name="arrow"
                      size={16}
                      className="text-gold-dark transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                ) : (
                  <span
                    key={c.name}
                    className="flex items-center gap-2 rounded-xl border border-black/5 bg-white px-4 py-3 font-semibold text-navy/70 shadow-soft"
                  >
                    <Icon name="pin" size={18} className="text-gold-dark" />
                    {c.name}, GA
                  </span>
                )
              )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ---- Inner page hero -------------------------------------------------------
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/u-1450101499163-1600.jpg",
  showBadges = false,
}) {
  return (
    <section className="relative flex min-h-[340px] items-center overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/55" />
      <div className="relative mx-auto w-full max-w-container px-4 py-16 md:px-6 md:py-20">
        <FadeUp>
          {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          <span className="mt-4 block h-1 w-20 rounded-full bg-gold" />
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>
          )}
          {showBadges && (
            <div className="mt-7">
              <TrustBadgeRow
                items={["Free Case Evaluation", "200+ jury trials", "Practicing Since 1995"]}
              />
            </div>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

// ---- Related links helper (internal linking) -------------------------------
export function RelatedLinks({ title = "Related", links }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="mb-8">
          <Eyebrow>Explore More</Eyebrow>
          <Heading>{title}</Heading>
          <GoldRule />
        </FadeUp>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l, i) => (
            <FadeUp key={l.href} delay={i * 0.06}>
              <Link
                href={l.href}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-black/5 bg-warm p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span>
                  <span className="block font-serif text-lg font-semibold text-navy">
                    {l.title}
                  </span>
                  <span className="mt-1 block text-sm text-navy/60">{l.text}</span>
                </span>
                <Icon
                  name="arrow"
                  size={20}
                  className="flex-none text-gold-dark transition-transform group-hover:translate-x-1"
                />
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
