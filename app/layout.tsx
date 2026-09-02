import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button'
import { JsonLd } from '@/components/json-ld'
import { LanguageProvider } from '@/lib/i18n'
import {
  businessJsonLd,
  OG_IMAGE,
  seoKeywords,
  SITE_URL,
  transportServiceJsonLd,
  websiteJsonLd,
} from '@/lib/seo'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Bujar SG',
  title: {
    default:
      'Bujar SG | Car Transport Switzerland To North Macedonia',
    template: '%s | Bujar SG',
  },
  description:
    'Bujar SG transports cars from Switzerland to North Macedonia, with Swiss pickup and delivery to Skopje, Tetovo, Gostivar and other Macedonian cities.',
  keywords: seoKeywords,
  authors: [{ name: 'Bujar SG' }],
  creator: 'Bujar SG',
  publisher: 'Bujar SG',
  category: 'Vehicle transport',
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
    alternateLocale: ['de_CH', 'sq_AL', 'mk_MK'],
    url: SITE_URL,
    siteName: 'Bujar SG',
    title: 'Bujar SG | Car Transport Switzerland To North Macedonia',
    description:
      'Professional car transport from Switzerland to North Macedonia, including Zurich, Basel and Geneva pickup routes to Skopje, Tetovo and Gostivar.',
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
    title: 'Bujar SG | Car Transport Switzerland To North Macedonia',
    description:
      'Professional car transport from Switzerland to North Macedonia, including Zurich, Basel and Geneva pickup routes.',
    images: [OG_IMAGE],
  },
  other: {
    'geo.region': 'CH-ZH',
    'geo.placename': 'Zurich, Switzerland',
    'business:contact_data:locality': 'Zurich',
    'business:contact_data:country_name': 'Switzerland',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={businessJsonLd} />
        <JsonLd data={transportServiceJsonLd} />
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
