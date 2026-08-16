import { SITE_URL, firm } from "./site";

/**
 * Build a complete Next.js Metadata object with unique title, description,
 * canonical URL, and Open Graph tags for a given page.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og-default.jpg",
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${firm.name}`;
  return {
    // `absolute` bypasses the root layout's title template so the firm name
    // isn't appended twice.
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: firm.name,
      type: "website",
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

// ---- Schema.org JSON-LD builders -------------------------------------------

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function legalServiceSchema({ offices }) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: firm.name,
    url: SITE_URL,
    telephone: firm.phone,
    priceRange: "Free Case Evaluation",
    areaServed: "Georgia",
    description:
      "Valdosta, Georgia law firm handling catastrophic injury, trucking, medical malpractice, nursing home neglect, wrongful death and serious felony defense. Practicing since 1995 with more than 100 jury trials.",
    address: offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.street,
      addressLocality: o.city,
      addressRegion: o.state,
      postalCode: o.zip,
      addressCountry: "US",
    })),
  };
}

export function attorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "Jody D. Peterman",
    worksFor: { "@type": "LegalService", name: firm.name },
    url: `${SITE_URL}/about`,
    telephone: firm.phone,
    jobTitle: "Trial Attorney",
    areaServed: "Georgia",
    alumniOf: [
      "Mercer University, Walter F. George School of Law",
      "Valdosta State College",
    ],
    knowsAbout: [
      "Personal Injury Law",
      "Catastrophic Injuries",
      "Truck Accidents",
      "Wrongful Death",
      "Medical Malpractice",
      "Nursing Home Negligence",
      "Criminal Defense",
    ],
  };
}

export function localBusinessSchema(office) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${firm.name} — ${office.city} Office`,
    url: `${SITE_URL}/locations/${office.id}`,
    telephone: office.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.street,
      addressLocality: office.city,
      addressRegion: office.state,
      postalCode: office.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: office.lat, longitude: office.lng },
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "Free Case Evaluation",
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
