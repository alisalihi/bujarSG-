import { ServiceCard } from '@/components/service-card'
import { SectionHeading } from '@/components/section-heading'
import { HOME_SERVICE_CARDS } from '@/lib/constants'

export function ServicesOverview() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Routes"
          title="Vehicle transport across the Balkans"
          description="We move cars, SUVs, vans and luxury vehicles from Switzerland to destinations throughout the Balkans."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_SERVICE_CARDS.map((card, i) => (
            <ServiceCard
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
