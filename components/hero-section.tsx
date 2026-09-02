'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, MapPin, PlayCircle, Truck } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const trustIndicators = [
  { icon: BadgeCheck, labelKey: 'hero.handling' },
  { icon: Truck, labelKey: 'hero.vehicles' },
  { icon: MapPin, labelKey: 'hero.destination' },
]

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/images/hero-truck.png"
        alt="Bujar SG red car carrier truck transporting vehicles on a Swiss alpine highway"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.21_0.02_264_/_0.92)] via-[oklch(0.21_0.02_264_/_0.75)] to-[oklch(0.21_0.02_264_/_0.35)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm"
          >
            <Truck className="size-4 text-primary" />
            {t('hero.badge')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03]"
            >
              {t('hero.quote')}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <PlayCircle className="size-4" />
              {t('hero.how')}
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {trustIndicators.map((item) => (
              <li
                key={item.labelKey}
                className="flex items-center gap-2.5 text-sm font-medium text-white/90"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/20 text-primary backdrop-blur-sm">
                  <item.icon className="size-5" />
                </span>
                {t(item.labelKey)}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
