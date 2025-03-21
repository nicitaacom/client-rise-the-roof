import type { Metadata, Viewport } from "next"
import { businessInfo } from "./businessInfo"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(businessInfo.websiteUrl),
  title: {
    template: `%s | ${businessInfo.name} - Professional Roofing Services in ${businessInfo.city}`,
    default: `${businessInfo.name} - Professional Roofing Solutions in ${businessInfo.city} | ${businessInfo.yearsInBusiness} Experience`,
  },
  description: `${businessInfo.name} provides expert roofing solutions in ${businessInfo.city} including ${businessInfo.primaryServices.join(", ")}. ${businessInfo.yearsInBusiness} in business with ${businessInfo.guarantee} guarantee on all workmanship. Family-owned, fully insured, and trusted by homeowners across ${businessInfo.county}.`,
  keywords: [
    `roofing company ${businessInfo.city}`,
    `roofers in ${businessInfo.city}`,
    `roof repairs ${businessInfo.county}`,
    "flat roof specialists",
    "bitumen roof installation",
    "roof repair services",
    "dry ridge system installation",
    "roof window fitting",
    "fascia soffit replacement",
    "professional roofers",
    "local roofing contractor",
    "roof maintenance",
    "emergency roof repair",
    "residential roofing",
    "commercial roofing",
    "roofing guarantee",
    "trusted roofers",
    businessInfo.email, // Add email as keyword for email searches
  ].join(", "),
  authors: [{ name: "Duane and team", url: businessInfo.instagramUrl }],
  generator: "Next.js",
  applicationName: businessInfo.name,
  referrer: "origin-when-cross-origin",
  creator: `${businessInfo.name} Team`,
  publisher: businessInfo.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Roofing Services",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: `${businessInfo.name} - Professional Roofing Experts in ${businessInfo.city} | ${businessInfo.yearsInBusiness} Experience`,
    description: `Family-run roofing specialists in ${businessInfo.city} with ${businessInfo.yearsInBusiness} industry experience. We provide high-quality ${businessInfo.primaryServices.join(", ")} with a ${businessInfo.guarantee} guarantee. Free estimates and competitive rates.`,
    url: businessInfo.websiteUrl,
    siteName: businessInfo.name,
    images: [
      {
        url: businessInfo.logoUrl,
        width: 1200,
        height: 630,
        alt: `${businessInfo.name} - Professional Roofing Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} - Expert Roofing Solutions in ${businessInfo.city}`,
    description: `Trusted roofing specialists with ${businessInfo.yearsInBusiness} experience. Specializing in ${businessInfo.primaryServices.slice(0, 3).join(", ")} and more. ${businessInfo.guarantee} workmanship guarantee. Contact us: ${businessInfo.phone}`,
    images: [
      {
        url: businessInfo.logoUrl,
        alt: `${businessInfo.name} - Professional Roofing Services`,
      },
    ],
  },
  alternates: {
    canonical: businessInfo.websiteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
