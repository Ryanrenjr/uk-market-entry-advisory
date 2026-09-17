import { siteUrl } from "@/lib/metadata";

interface StructuredDataProps {
  locale: string;
}

// Only facts already published elsewhere on the site (Footer, Contact page)
// go into this schema — no registration numbers, phone lines, social
// profiles, ratings or founding dates, since none of those are confirmed.
export default function StructuredData({ locale }: StructuredDataProps) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "London Thames International",
    url: siteUrl,
    logo: `${siteUrl}/images/logo-mark.png`,
    email: "londonthamesinternational@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kings House, 174 Hammersmith Rd",
      addressLocality: "London",
      postalCode: "W6 7JP",
      addressCountry: "GB",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "London Thames International",
    url: siteUrl,
    inLanguage: locale,
  };

  // Defence-in-depth against a "</script>" sequence ever breaking out of the
  // tag — the payload above is entirely static site facts, not user input,
  // but there's no reason not to escape it anyway.
  const json = JSON.stringify([organization, website]).replace(/</g, "\\u003c");

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
