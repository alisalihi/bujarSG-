import type { Metadata } from 'next'
import {
  Building2,
  Home,
  type LucideIcon,
  MapPin,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { RouteCard } from '@/components/route-card'
import { FAQAccordion } from '@/components/faq-accordion'
import { CTASection } from '@/components/cta-section'
import { INCLUDED_SERVICES, SERVICE_ROUTES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services & Routes',
  description:
    'Detailed vehicle transport routes from Switzerland to Macedonia, Albania, Kosovo, Serbia, Bosnia and Croatia. Door-to-door, fully insured, GPS tracked.',
  alternates: { canonical: '/services' },
}

const includedIcons: LucideIcon[] = [
  Home,
  Building2,
  ShieldCheck,
  MapPin,
  PackageCheck,
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Vehicle transport routes & services"
        description="Choose your destination and discover our complete, fully insured transport service from Switzerland to the Balkans."
      />

      {/* Route cards */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Routes"
            title="Where we deliver"
            description="Regular, scheduled departures to every major destination across the Balkans."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_ROUTES.map((route, i) => (
              <RouteCard key={route.slug} route={route} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Included services */}
      <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything you need, included"
            description="Every Bujar SG transport comes with a complete set of professional services as standard."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_SERVICES.map((service, i) => {
              const Icon = includedIcons[i % includedIcons.length]
              return (
                <div
                  key={service.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about transporting your vehicle with Bujar SG."
          />
          <div className="mt-12">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
