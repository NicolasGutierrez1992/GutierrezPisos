import { SITE, WHATSAPP_NUMBER } from "@/lib/config";

export default function StructuredData() {
  const business = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: `+${WHATSAPP_NUMBER}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: SITE.zone,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "CABA",
      addressCountry: "AR",
    },
    sameAs: [SITE.instagramUrl],
    openingHours: SITE.openingHours,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
    />
  );
}
