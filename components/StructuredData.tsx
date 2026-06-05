export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: "Century 360 Spa & Sauna House",
    description: "Full-spectrum wellness sanctuary in Hicksville, NY offering infrared sauna, cold plunge, red light therapy, IV infusions, facials, and more.",
    url: "https://century360.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hicksville",
      addressRegion: "NY",
      addressCountry: "US",
    },
    openingHours: ["Mo-Fr 09:00-21:00", "Sa-Su 08:00-20:00"],
    sameAs: ["https://www.instagram.com/century360sauna"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Spa & Wellness Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infrared Sauna" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cold Plunge" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Red Light Therapy" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IV Vitamin Infusions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lymphatic Drainage" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facials" } },
      ],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
