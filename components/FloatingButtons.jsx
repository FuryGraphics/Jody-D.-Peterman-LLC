"use client";

import { useState } from "react";
import Link from "next/link";
import { firm } from "@/lib/site";
import { Icon } from "./Icons";

// Floating "Call Now" + "Free Case Review" widget, bottom-right, every page.
export default function FloatingButtons() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Case review popover */}
      {open && (
        <div className="fixed bottom-24 right-4 z-[60] w-[300px] max-w-[calc(100vw-2rem)] rounded-2xl border border-black/5 bg-white p-5 shadow-card md:bottom-6 md:right-24">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-serif text-lg font-bold text-navy">
              Free Case Review
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-navy/50 hover:text-navy"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <p className="mb-4 text-sm text-navy/70">
            Tell us what happened. We'll review your case at no cost — no fee
            unless we win.
          </p>
          <a
            href={firm.phoneHref}
            className="mb-2 flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-navy hover:bg-gold-light"
          >
            <Icon name="phone" size={16} />
            Call {firm.phone}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-navy py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
          >
            <Icon name="chat" size={16} />
            Message Us
          </Link>
        </div>
      )}

      {/* Buttons */}
      <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-card transition-transform hover:scale-105"
          aria-label="Free case review"
        >
          <Icon name="chat" size={26} />
        </button>
        <a
          href={firm.phoneHref}
          className="flex h-14 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-navy shadow-card transition-transform hover:scale-105 md:hidden"
          aria-label="Call now"
        >
          <Icon name="phone" size={22} />
          Call Now
        </a>
      </div>
    </>
  );
}
