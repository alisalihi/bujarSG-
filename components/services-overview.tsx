'use client'

import { ServiceCard } from '@/components/service-card'
import { SectionHeading } from '@/components/section-heading'
import { useI18n } from '@/lib/i18n'

interface ServiceCardCopy {
  title: string
  description: string
}

export function ServicesOverview() {
  const { tArray } = useI18n()
  const cards = tArray<ServiceCardCopy>('servicesOverview.cards')

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Routes"
          title="Vehicle transport to North Macedonia"
          description="We move cars, SUVs, vans and luxury vehicles from Switzerland to destinations throughout North Macedonia."
          translationPrefix="servicesOverview"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <ServiceCard
              key={card.title}
              title={card.title}
              description={card.description}
              href="/services"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
