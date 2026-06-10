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
import { StatisticsSection } from '@/components/statistics-section'
import { CTASection } from '@/components/cta-section'
import { CERTIFICATIONS, TEAM, VALUES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Bujar SG',
  description:
    'Learn about Bujar SG, the trusted Swiss vehicle transportation company serving the Balkan diaspora with reliable, insured car transport for over a decade.',
  alternates: { canonical: '/about' },
}

const valueIcons: Record<string, LucideIcon> = {
  Clock,
  Eye,
  ShieldCheck,
  BadgeCheck,
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="Switzerland's trusted Balkan transport company"
        description="For over a decade, Bujar SG has connected families across Switzerland with their home countries through safe, reliable and insured vehicle transport."
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
              Our Story
            </span>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Built on trust within the diaspora
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Bujar SG was founded in Zurich by members of the Balkan community
              who understood first-hand how difficult and stressful it was to
              transport a vehicle back home. What started as a single red
              carrier has grown into a professional fleet serving thousands of
              families every year.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Today we operate regular routes from Switzerland to North
              Macedonia, Albania, Kosovo, Serbia, Bosnia & Herzegovina and
              Croatia. Every journey is fully insured, GPS tracked and handled
              by professional, multilingual drivers who treat each vehicle as if
              it were their own.
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
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="leading-relaxed text-muted-foreground">
              To deliver safe, affordable, and reliable vehicle transport
              services from Switzerland to the Balkans — giving every customer
              complete peace of mind from pickup to delivery.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Goal className="size-6" />
            </span>
            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="leading-relaxed text-muted-foreground">
              To become the most trusted Balkan vehicle transportation company
              in Switzerland, setting the standard for professionalism, safety
              and customer care across the region.
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
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => {
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
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <StatisticsSection dark />

      {/* Team */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Team"
            title="The people behind Bujar SG"
            description="A dedicated team of logistics professionals committed to getting your vehicle home safely."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="relative size-28 overflow-hidden rounded-full ring-4 ring-accent">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Bujar SG`}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Trust & Certifications"
            title="Licensed, insured and compliant"
            description="We hold the certifications and insurance required to transport your vehicle across European borders with confidence."
          />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm"
              >
                <BadgeCheck className="size-5 text-primary" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
