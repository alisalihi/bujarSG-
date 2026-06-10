import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'
import { COMPANY } from '@/lib/constants'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const siteUrl = 'https://bujarsg.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bujar SG — Reliable Vehicle Transport From Switzerland To The Balkans',
    template: '%s | Bujar SG',
  },
  description:
    'Fast, insured and professional vehicle transportation services from Switzerland to Macedonia, Albania, Kosovo, Serbia, Bosnia, Croatia and the Balkans.',
  keywords: [
    'vehicle transport Switzerland Balkans',
    'car transport Switzerland Macedonia',
    'auto transport Albania Kosovo',
    'car carrier Switzerland',
    'Balkan vehicle shipping',
    'Bujar SG',
  ],
  authors: [{ name: 'Bujar SG' }],
  creator: 'Bujar SG',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CH',
    url: siteUrl,
    siteName: 'Bujar SG',
    title: 'Reliable Vehicle Transport From Switzerland To The Balkans',
    description:
      'Fast, insured and professional vehicle transportation services across Macedonia, Albania, Kosovo and the Balkans.',
    images: [
      {
        url: '/images/hero-truck.png',
        width: 1200,
        height: 630,
        alt: 'Bujar SG red car carrier truck on a Swiss highway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliable Vehicle Transport From Switzerland To The Balkans',
    description:
      'Fast, insured and professional vehicle transportation services across the Balkans.',
    images: ['/images/hero-truck.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  generator: 'v0.app',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'Bujar SG',
  description:
    'Professional vehicle transportation from Switzerland to the Balkans.',
  url: siteUrl,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  areaServed: [
    'North Macedonia',
    'Albania',
    'Kosovo',
    'Serbia',
    'Bosnia and Herzegovina',
    'Croatia',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CH',
    addressLocality: 'Zurich',
  },
  priceRange: '€€',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
