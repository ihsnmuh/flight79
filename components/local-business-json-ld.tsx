import { contact, site, social } from "@/data/flight79";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "CafeOrCoffeeShop"],
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/flight79-hero.jpg`,
  logo: `${site.url}/flight79-logo.svg`,
  telephone: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address,
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  hasMenu: contact.menuUrl,
  hasMap: contact.mapsUrl,
  acceptsReservations: true,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: contact.parking,
      value: true,
    },
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: contact.whatsappUrl,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "FoodEstablishmentReservation",
      name: "Flight 79 Table Reservation",
    },
  },
  sameAs: [social.instagramUrl, social.tiktokUrl],
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
