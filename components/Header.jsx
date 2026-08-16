"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firm, practiceGroups, getSubAreas, servedCities } from "@/lib/site";
import { Icon } from "./Icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas", mega: true },
  { label: "Service Areas", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const pathname = usePathname();

  // On non-home pages, the header should always render solid.
  const isHome = pathname === "/";
  const solid = scrolled || !isHome || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-white shadow-[0_2px_20px_-8px_rgba(11,30,51,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`font-serif text-xl md:text-2xl font-bold tracking-tight ${
              solid ? "text-navy" : "text-white"
            }`}
          >
            {firm.logoText}
          </span>
          <span
            className={`text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] ${
              solid ? "text-gold-dark" : "text-gold-light"
            }`}
          >
            {firm.logoSub}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.mega ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 py-2 text-sm font-semibold transition-colors ${
                    solid
                      ? "text-navy hover:text-gold-dark"
                      : "text-white hover:text-gold-light"
                  }`}
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className="mt-0.5 transition-transform group-hover:rotate-180"
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
                {/* Mega dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[900px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card">
                    <div className="grid grid-cols-3 divide-x divide-black/5">
                      {practiceGroups.map((g) => (
                        <div key={g.title} className="px-6 py-6">
                          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark">
                            {g.title}
                          </p>
                          <div className="space-y-5">
                            {g.areas.map((pa) => {
                              const subs = getSubAreas(pa.slug);
                              return (
                                <div key={pa.slug}>
                                  <Link
                                    href={`/practice-areas/${pa.slug}`}
                                    className="flex items-center gap-2.5 text-sm font-semibold text-navy transition-colors hover:text-gold-dark"
                                  >
                                    <Icon
                                      name={pa.icon}
                                      size={18}
                                      className="flex-none text-gold-dark"
                                    />
                                    {pa.title}
                                  </Link>
                                  {subs.length > 0 && (
                                    <ul className="mt-1.5 space-y-1 pl-[27px]">
                                      {subs.map((sa) => (
                                        <li key={sa.slug}>
                                          <Link
                                            href={`/practice-areas/${sa.slug}`}
                                            className="block text-[13px] leading-snug text-navy/60 transition-colors hover:text-gold-dark"
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
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-4 border-t border-black/5 bg-warm px-6 py-4">
                      <span className="text-sm text-navy/70">
                        Not sure where your case fits? We&rsquo;ll tell you
                        straight.
                      </span>
                      <span className="flex items-center gap-3">
                        <a
                          href={firm.phoneHref}
                          className="text-sm font-semibold text-navy hover:text-gold-dark"
                        >
                          {firm.phone}
                        </a>
                        <Link
                          href="/practice-areas"
                          className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
                        >
                          View all
                          <Icon name="arrow" size={15} />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 text-sm font-semibold transition-colors ${
                  pathname === link.href ? "text-gold-dark" : ""
                } ${
                  solid
                    ? "text-navy hover:text-gold-dark"
                    : "text-white hover:text-gold-light"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right: phone pill + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={firm.phoneHref}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              solid
                ? "border-navy/15 text-navy hover:border-gold hover:text-gold-dark"
                : "border-white/40 text-white hover:border-gold-light"
            }`}
          >
            <Icon name="phone" size={16} />
            {firm.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Free Case Evaluation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className={`lg:hidden ${solid ? "text-navy" : "text-white"}`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Served-cities sub-bar (desktop) */}
      <div
        className={`hidden border-t transition-colors lg:block ${
          solid
            ? "border-black/5 bg-navy text-white/80"
            : "border-white/10 bg-navy/40 text-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-container items-center gap-1 overflow-x-auto px-6 py-1.5 text-[11px] font-medium tracking-wide">
          <span className="mr-1 font-semibold text-gold-light">Serving</span>
          {servedCities.map((c, i) => (
            <span key={c.name} className="whitespace-nowrap">
              {c.slug ? (
                <Link
                  href={`/locations/${c.slug}`}
                  className="hover:text-gold-light"
                >
                  {c.name}, GA
                </Link>
              ) : (
                <span>{c.name}, GA</span>
              )}
              {i < servedCities.length - 1 && (
                <span className="mx-1.5 text-gold/60">·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-black/5 bg-white lg:hidden">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map((link) =>
              link.mega ? (
                <div key={link.href} className="border-b border-black/5">
                  <button
                    onClick={() => setPracticeOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-navy"
                  >
                    {link.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={practiceOpen ? "rotate-180" : ""}
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  {practiceOpen && (
                    <div className="pb-3 pl-3">
                      {practiceGroups.map((g) => (
                        <div key={g.title} className="mb-4">
                          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-dark">
                            {g.title}
                          </p>
                          {g.areas.map((pa) => (
                            <div key={pa.slug} className="mb-2">
                              <Link
                                href={`/practice-areas/${pa.slug}`}
                                className="flex items-center gap-2 py-1.5 text-sm font-semibold text-navy/90"
                              >
                                <Icon
                                  name={pa.icon}
                                  size={18}
                                  className="text-gold-dark"
                                />
                                {pa.title}
                              </Link>
                              {getSubAreas(pa.slug).map((sa) => (
                                <Link
                                  key={sa.slug}
                                  href={`/practice-areas/${sa.slug}`}
                                  className="block border-l border-black/5 py-1 pl-8 text-[13px] text-navy/60"
                                >
                                  {sa.title}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                      <Link
                        href="/practice-areas"
                        className="mt-1 block rounded-xl bg-warm py-2.5 text-center text-sm font-semibold text-navy"
                      >
                        View all practice areas
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-black/5 py-3 text-base font-semibold text-navy"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-3 py-4">
              <a
                href={firm.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-navy/15 py-3 text-sm font-semibold text-navy"
              >
                <Icon name="phone" size={16} />
                {firm.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-full bg-gold py-3 text-center text-sm font-semibold text-navy"
              >
                Free Case Evaluation
              </Link>
            </div>
            {/* Cities in mobile */}
            <div className="pb-6 text-xs text-navy/60">
              <span className="font-semibold text-gold-dark">Serving: </span>
              {servedCities.map((c) => c.name + ", GA").join(" · ")}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
