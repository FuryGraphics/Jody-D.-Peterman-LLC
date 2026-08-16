"use client";

import { useState } from "react";
import { Icon } from "./Icons";

const practiceOptions = [
  "Car Accident",
  "Truck Accident",
  "Motorcycle Accident",
  "Wrongful Death",
  "Slip & Fall",
  "Workers' Compensation",
  "Medical Malpractice",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Front-end demo only — wire this to your CRM / email endpoint before launch.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-black/5 bg-white p-10 text-center shadow-card">
        <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy">
          <Icon name="check" size={32} />
        </span>
        <h3 className="font-serif text-2xl font-bold text-navy">
          Thank you — we've got it.
        </h3>
        <p className="mt-3 text-navy/70">
          A member of our team will reach out shortly. If you need help right
          now, call us any time — we're here for you.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-black/5 bg-white p-7 shadow-card md:p-9"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy">
            Full Name*
          </label>
          <input required name="name" className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy">
            Phone*
          </label>
          <input
            required
            name="phone"
            type="tel"
            className={field}
            placeholder="(229) 555-0123"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy">
            Email*
          </label>
          <input
            required
            name="email"
            type="email"
            className={field}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy">
            Type of Case
          </label>
          <select name="caseType" className={field} defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {practiceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-semibold text-navy">
          Tell us what happened
        </label>
        <textarea
          name="message"
          rows={5}
          className={field}
          placeholder="Briefly describe your accident or injury…"
        />
      </div>
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 text-base font-semibold text-navy transition-colors hover:bg-gold-light"
      >
        Request My Free Case Evaluation
        <Icon name="arrow" size={18} />
      </button>
      <p className="mt-4 text-center text-xs text-navy/50">
        Submitting this form does not create an attorney–client relationship.
        Your information is kept strictly confidential.
      </p>
    </form>
  );
}
