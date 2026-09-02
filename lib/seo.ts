import type { Metadata } from 'next'
import { COMPANY } from '@/lib/constants'

const vercelUrl = process.env.VERCEL_URL
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const SITE_URL =
  configuredSiteUrl ??
  (vercelUrl ? `https://${vercelUrl}` : 'https://bujarsg.com')
export const OG_IMAGE = '/images/og-bujar-sg.png'

export const seoKeywords = [
  'vehicle transport Switzerland North Macedonia',
  'car transport Switzerland North Macedonia',
  'auto transport Switzerland Macedonia',
  'Autotransport Schweiz Nordmazedonien',
  'Fahrzeugtransport Schweiz Mazedonien',
  'Transport veturash Zvicer Maqedoni',
  'transport automjetesh Zvicra Maqedonia e Veriut',
  'car carrier Switzerland Skopje',
  'vehicle transport Zurich Skopje',
  'car transport Basel Tetovo',
  'auto transport Geneva Gostivar',
  'Bujar SG',
]

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    keywords: seoKeywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_CH',
      alternateLocale: ['de_CH', 'sq_AL', 'mk_MK'],
      url: `${SITE_URL}${path}`,
      siteName: COMPANY.name,
      title,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'Bujar SG vehicle transport from Switzerland to North Macedonia',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MovingCompany'],
  '@id': `${SITE_URL}/#business`,
  name: COMPANY.name,
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  description:
    'Professional vehicle transport from Switzerland to North Macedonia, including pickup in Swiss cities and delivery to Skopje, Tetovo, Gostivar and other Macedonian cities.',
  telephone: COMPANY.phone,
  email: COMPANY.email,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY.phone,
    contactType: 'customer service',
    areaServed: ['CH', 'MK'],
    availableLanguage: ['English', 'German', 'Albanian'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address,
    addressLocality: 'Zurich',
    addressCountry: 'CH',
  },
  areaServed: [
    { '@type': 'Country', name: 'Switzerland' },
    { '@type': 'Country', name: 'North Macedonia' },
  ],
  sameAs: [COMPANY.facebook, COMPANY.tiktok],
  priceRange: '€€',
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: COMPANY.name,
  url: SITE_URL,
  inLanguage: ['en-CH', 'de-CH', 'sq'],
  publisher: { '@id': `${SITE_URL}/#business` },
}

export const transportServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/services#vehicle-transport`,
  name: 'Vehicle transport from Switzerland to North Macedonia',
  serviceType: 'Vehicle transport',
  provider: { '@id': `${SITE_URL}/#business` },
  areaServed: [
    { '@type': 'Country', name: 'Switzerland' },
    { '@type': 'Country', name: 'North Macedonia' },
  ],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${SITE_URL}/contact`,
    servicePhone: COMPANY.phone,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Switzerland to North Macedonia vehicle transport routes',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Zurich to Skopje vehicle transport',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Basel to Tetovo vehicle transport',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Geneva to Gostivar vehicle transport',
        },
      },
    ],
  },
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export const serviceFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does vehicle transport from Switzerland to North Macedonia take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Delivery timing is confirmed with your quote and depends on pickup location, route planning, and destination city in North Macedonia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Bujar SG transport non-running vehicles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Bujar SG can transport non-running vehicles with suitable loading equipment when this is mentioned during the quote request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which North Macedonia cities does Bujar SG deliver to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bujar SG delivers vehicles to Skopje, Tetovo, Gostivar, Kumanovo, Bitola, Struga and other locations in North Macedonia.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does pickup in Switzerland work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vehicle pickup can be arranged from a Swiss address or through a regional depot, depending on the quote and route plan.',
      },
    },
  ],
}
