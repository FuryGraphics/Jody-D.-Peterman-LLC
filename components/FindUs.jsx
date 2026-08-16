"use client";

import { useState } from "react";
import { offices } from "@/lib/site";
import { Eyebrow, Heading, GoldRule } from "./ui";
import { Icon } from "./Icons";
import FadeUp from "./FadeUp";

// "Find Us" section with a tab per office and an embedded Google Map.
export default function FindUs() {
  const [active, setActive] = useState(offices[0].id);
  const office = offices.find((o) => o.id === active);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${office.street}, ${office.city}, ${office.state} ${office.zip}`
  )}&output=embed`;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeUp className="mb-8 text-center">
          <Eyebrow>Visit Us</Eyebrow>
          <Heading center>Two Offices Serving South Georgia</Heading>
          <GoldRule center />
        </FadeUp>

        {/* Office tabs */}
        <div className="mb-8 flex justify-center gap-3">
          {offices.map((o) => (
            <button
              key={o.id}
              onClick={() => setActive(o.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                active === o.id
                  ? "bg-navy text-white"
                  : "bg-warm text-navy hover:bg-gold/20"
              }`}
            >
              {o.city}
              {o.primary && (
                <span className="ml-2 rounded bg-gold/30 px-1.5 py-0.5 text-[10px] uppercase text-gold-dark">
                  Main
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-8 overflow-hidden rounded-3xl border border-black/5 shadow-card lg:grid-cols-2">
          {/* Details */}
          <div className="bg-navy p-8 text-white md:p-10">
            <h3 className="font-serif text-2xl font-bold">{office.label}</h3>
            <span className="mt-1 block h-1 w-12 rounded-full bg-gold" />
            <ul className="mt-6 space-y-5 text-white/80">
              <li className="flex items-start gap-3">
                <Icon name="pin" size={20} className="mt-0.5 flex-none text-gold" />
                <span>
                  {office.street}
                  <br />
                  {office.city}, {office.state} {office.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" size={20} className="flex-none text-gold" />
                <a href={office.phoneHref} className="hover:text-gold-light">
                  {office.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="clock" size={20} className="flex-none text-gold" />
                {office.hours}
              </li>
            </ul>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                `${office.street}, ${office.city}, ${office.state} ${office.zip}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
            >
              Get Directions
              <Icon name="arrow" size={16} />
            </a>
          </div>

          {/* Map */}
          <div className="min-h-[340px]">
            <iframe
              key={office.id}
              title={`Map of ${office.label}`}
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 340 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
