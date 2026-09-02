'use client'

import { motion } from 'framer-motion'
import {
  Award,
  BadgeCheck,
  Home,
  MapPin,
  Tag,
  Truck,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { WHY_CHOOSE_US } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  MapPin,
  Award,
  Tag,
  Truck,
  Home,
}

export function WhyChooseUs() {
  const { t } = useI18n()

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The trusted choice for North Macedonia vehicle transport"
          description="Families across Switzerland rely on Bujar SG for careful, reliable and professional vehicle delivery to North Macedonia."
          translationPrefix="why"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((feature, i) => {
            const Icon = icons[feature.icon]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {t(`why.features.${i}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`why.features.${i}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
