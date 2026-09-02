import type { Metadata } from 'next'
import Image from 'next/image'
import {
  BadgeCheck,
  Clock,
  Eye,
  Goal,
  ShieldCheck,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CTASection } from '@/components/cta-section'
import { TranslatedText } from '@/components/translated-text'
import { JsonLd } from '@/components/json-ld'
import { CERTIFICATIONS, VALUES } from '@/lib/constants'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About Bujar SG Vehicle Transport',
  description:
    'Learn about Bujar SG, a Swiss vehicle transport company focused on reliable car transport from Switzerland to North Macedonia.',
  path: '/about',
})

const valueIcons: Record<string, LucideIcon> = {
  Clock,
  Eye,
  ShieldCheck,
  BadgeCheck,
}

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <PageHero
        translationPrefix="about"
      />

      {/* Company story */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/about-fleet.png"
              alt="The Bujar SG fleet of red car carrier trucks at a Swiss logistics depot"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              <TranslatedText id="about.storyEyebrow" />
            </span>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              <TranslatedText id="about.storyTitle" />
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              <TranslatedText id="about.storyP1" />
            </p>
            <p className="leading-relaxed text-muted-foreground">
              <TranslatedText id="about.storyP2" />
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Target className="size-6" />
            </span>
            <h3 className="text-2xl font-bold text-foreground">
              <TranslatedText id="about.missionTitle" />
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              <TranslatedText id="about.mission" />
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Goal className="size-6" />
            </span>
            <h3 className="text-2xl font-bold text-foreground">
              <TranslatedText id="about.visionTitle" />
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              <TranslatedText id="about.vision" />
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Values"
            title="What drives everything we do"
            eyebrowKey="about.valuesEyebrow"
            titleKey="about.valuesTitle"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => {
              const Icon = valueIcons[value.icon]
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    <TranslatedText id={`about.values.${i}.title`} />
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <TranslatedText id={`about.values.${i}.description`} />
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Trust & Certifications"
            title="Licensed and compliant"
            description="We follow the transport requirements needed to move vehicles across European borders with confidence."
            eyebrowKey="about.certEyebrow"
            titleKey="about.certTitle"
            descriptionKey="about.certDescription"
          />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={cert}
                className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm"
              >
                <BadgeCheck className="size-5 text-primary" />
                <TranslatedText id={`about.certs.${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
