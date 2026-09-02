import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'
import { LanguageProvider } from '@/lib/i18n'
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
    default: 'Bujar SG — Reliable Vehicle Transport From Switzerland To North Macedonia',
    template: '%s | Bujar SG',
  },
  description:
    'Fast, reliable and professional vehicle transportation services from Switzerland to North Macedonia.',
  keywords: [
    'vehicle transport Switzerland North Macedonia',
    'car transport Switzerland Macedonia',
    'auto transport Switzerland Skopje',
    'car carrier Switzerland',
    'North Macedonia vehicle shipping',
    'Bujar SG',
  ],
  authors: [{ name: 'Bujar SG' }],
  creator: 'Bujar SG',
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_CH',
    url: siteUrl,
    siteName: 'Bujar SG',
    title: 'Reliable Vehicle Transport From Switzerland To North Macedonia',
    description:
      'Fast, reliable and professional vehicle transportation services from Switzerland to North Macedonia.',
    images: [
      {
        url: '/images/og-bujar-sg.png',
        width: 1200,
        height: 630,
        alt: 'Bujar SG vehicle transport from Switzerland to North Macedonia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliable Vehicle Transport From Switzerland To North Macedonia',
    description:
      'Fast, reliable and professional vehicle transportation services from Switzerland to North Macedonia.',
    images: ['/images/og-bujar-sg.png'],
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
    'Professional vehicle transportation from Switzerland to North Macedonia.',
  url: siteUrl,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  areaServed: ['North Macedonia'],
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
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloatingButton />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
