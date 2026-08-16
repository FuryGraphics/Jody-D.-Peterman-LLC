"use client";

import { useState } from "react";
import { Eyebrow, Heading, GoldRule } from "./ui";
import FadeUp from "./FadeUp";

export default function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "Answers",
  intro,
}) {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-warm py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FadeUp className="mb-10 text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading center>{title}</Heading>
          <GoldRule center />
          {intro && <p className="text-navy/70">{intro}</p>}
        </FadeUp>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeUp
                key={f.q}
                delay={i * 0.05}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-semibold text-navy">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold text-navy transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M8 3v10M3 8h10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-navy/70">{f.a}</p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
