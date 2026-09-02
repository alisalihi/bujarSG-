import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { ServicesOverview } from '@/components/services-overview'
import { HowItWorks } from '@/components/how-it-works'
import { WhyChooseUs } from '@/components/why-choose-us'
import { CTASection } from '@/components/cta-section'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Car Transport Switzerland To North Macedonia',
  description:
    'Bujar SG provides professional vehicle transport from Switzerland to North Macedonia, including Zurich, Basel and Geneva pickup routes to Skopje, Tetovo and Gostivar.',
  path: '/',
})

export default function HomePage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }])} />
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <CTASection />
    </main>
  )
}
