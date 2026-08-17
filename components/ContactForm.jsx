"use client";

import Script from "next/script";

// Intake form is hosted by CaseClimb. form_embed.js resizes the iframe to fit
// its content, keyed off the `inline-<formId>` id below.
const FORM_ID = "pvYnzCYXqkWSXvakjGuf";
const FORM_NAME = "Website Form (Jody D. Peterman, LLC)";

export default function ContactForm() {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-4 shadow-card sm:p-6">
      <iframe
        src={`https://services.caseclimb.com/widget/form/${FORM_ID}`}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "540px",
          border: "none",
          borderRadius: "10px",
        }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={FORM_NAME}
        data-height="540"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title={FORM_NAME}
      />
      <Script
        src="https://services.caseclimb.com/js/form_embed.js"
        strategy="lazyOnload"
      />
      <p className="mt-4 text-center text-xs text-navy/50">
        Submitting this form does not create an attorney–client relationship.
        Your information is kept strictly confidential.
      </p>
    </div>
  );
}
