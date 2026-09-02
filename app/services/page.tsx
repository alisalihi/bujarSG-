import type { Metadata } from 'next'
import {
  Building2,
  Home,
  type LucideIcon,
  MapPin,
  PackageCheck,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { RouteCard } from '@/components/route-card'
import { FAQAccordion } from '@/components/faq-accordion'
import { CTASection } from '@/components/cta-section'
import { RouteImageGallery } from '@/components/route-image-gallery'
import { TranslatedText } from '@/components/translated-text'
import { JsonLd } from '@/components/json-ld'
import { INCLUDED_SERVICES, SERVICE_ROUTES } from '@/lib/constants'
import {
  breadcrumbJsonLd,
  pageMetadata,
  serviceFaqJsonLd,
  transportServiceJsonLd,
} from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Vehicle Transport Services Switzerland To North Macedonia',
  description:
    'Explore Bujar SG car transport services from Switzerland to North Macedonia, including Zurich to Skopje, Basel to Tetovo and Geneva to Gostivar routes.',
  path: '/services',
})

const includedIcons: LucideIcon[] = [
  Home,
  Building2,
  MapPin,
  PackageCheck,
]

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={transportServiceJsonLd} />
      <JsonLd data={serviceFaqJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <PageHero
        translationPrefix="servicesPage"
      />

      {/* Route cards */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Route"
            title="Switzerland to North Macedonia"
            description="Regular, scheduled departures from Switzerland to major cities across North Macedonia."
            eyebrowKey="servicesPage.routeEyebrow"
            titleKey="servicesPage.routeTitle"
            descriptionKey="servicesPage.routeDescription"
          />
          <div className="mx-auto mt-14 max-w-xl">
            {SERVICE_ROUTES.map((route, i) => (
              <RouteCard key={route.slug} route={route} index={i} />
            ))}
          </div>
        </div>
      </section>

      <RouteImageGallery />

      <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              <TranslatedText id="servicesPage.seoEyebrow" />
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              <TranslatedText id="servicesPage.seoTitle" />
            </h2>
          </div>
          <div className="grid gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              <TranslatedText id="servicesPage.seoP1" />
            </p>
            <p>
              <TranslatedText id="servicesPage.seoP2" />
            </p>
          </div>
        </div>
      </section>

      {/* Included services */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything you need, included"
            description="Every Bujar SG transport comes with a complete set of professional services as standard."
            eyebrowKey="servicesPage.includedEyebrow"
            titleKey="servicesPage.includedTitle"
            descriptionKey="servicesPage.includedDescription"
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
                      <TranslatedText id={`servicesPage.included.${i}.title`} />
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <TranslatedText id={`servicesPage.included.${i}.description`} />
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
            eyebrowKey="servicesPage.faqEyebrow"
            titleKey="servicesPage.faqTitle"
            descriptionKey="servicesPage.faqDescription"
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
