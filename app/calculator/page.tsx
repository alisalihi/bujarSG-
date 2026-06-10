import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHero } from '@/components/page-hero'
import { PriceCalculator } from '@/components/price-calculator'
import { CTASection } from '@/components/cta-section'
import type { DestinationKey } from '@/lib/types'
import { DESTINATION_OPTIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Transport Price Calculator',
  description:
    'Get an instant vehicle transport price estimate from Switzerland to the Balkans. Choose your city, destination, vehicle type and service.',
  alternates: { canonical: '/calculator' },
}

export default async function CalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{ destination?: string }>
}) {
  const params = await searchParams
  const valid = DESTINATION_OPTIONS.some((d) => d.value === params.destination)
  const initialDestination = valid
    ? (params.destination as DestinationKey)
    : undefined

  return (
    <main>
      <PageHero
        eyebrow="Price Calculator"
        title="Estimate your transport cost instantly"
        description="Select your route and vehicle to see a transparent price range in seconds — then request your quote with one click."
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Suspense fallback={null}>
            <PriceCalculator initialDestination={initialDestination} />
          </Suspense>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
