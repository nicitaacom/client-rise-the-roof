import Script from "next/script"
import { businessInfo } from "@/consts/businessInfo"

const SchemaOrgScript = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: businessInfo.name,
    image: businessInfo.logoUrl,
    url: businessInfo.websiteUrl,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address,
      addressLocality: businessInfo.city,
      addressRegion: businessInfo.county,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.latitude,
      longitude: businessInfo.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday"],
        opens: businessInfo.businessHours.monday.opens,
        closes: businessInfo.businessHours.monday.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday"],
        opens: businessInfo.businessHours.tuesday.opens,
        closes: businessInfo.businessHours.tuesday.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday"],
        opens: businessInfo.businessHours.wednesday.opens,
        closes: businessInfo.businessHours.wednesday.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday"],
        opens: businessInfo.businessHours.thursday.opens,
        closes: businessInfo.businessHours.thursday.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: businessInfo.businessHours.friday.opens,
        closes: businessInfo.businessHours.friday.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: businessInfo.businessHours.saturday.opens,
        closes: businessInfo.businessHours.saturday.closes,
      },
    ],
    sameAs: [businessInfo.instagramUrl, businessInfo.facebookUrl],
    priceRange: businessInfo.priceRange,
    areaServed: businessInfo.areasServed,
    description: `${businessInfo.name} provides expert roofing solutions including ${businessInfo.primaryServices.join(", ")}. ${businessInfo.yearsInBusiness} in business with ${businessInfo.guarantee} guarantee.`,
    foundingDate: businessInfo.foundingYear,
    founders: [
      {
        "@type": "Person",
        name: businessInfo.founders[0],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flat Bitumen Roof Installation",
            description: "Professional installation of durable flat bitumen roofing systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Repairs",
            description: "Fast and effective roof repair services in Newcastle and surrounding areas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dry Ridge System Installation",
            description: "Modern dry ridge systems for improved roof performance",
          },
        },
      ],
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: businessInfo.rating.average.toString(),
        bestRating: businessInfo.rating.max.toString(),
      },
      author: {
        "@type": "Person",
        name: "Newcastle Homeowner",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessInfo.rating.average.toString(),
      ratingCount: businessInfo.rating.count.toString(),
      bestRating: businessInfo.rating.max.toString(),
    },
  }

  return (
    <Script
      id="schema-local-business"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  )
}

export default SchemaOrgScript
