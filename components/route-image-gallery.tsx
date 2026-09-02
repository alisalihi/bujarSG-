'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useI18n } from '@/lib/i18n'

const images = [
  '/images/swiss-macedonia-transport.png',
  '/images/hero-truck.png',
  '/images/truck-loading.png',
]

interface RouteImageCopy {
  title: string
  description: string
}

export function RouteImageGallery() {
  const { t, tArray } = useI18n()
  const routes = tArray<RouteImageCopy>('servicesPage.routeImages')

  return (
    <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Popular Routes"
          title="Swiss pickup routes to North Macedonia"
          description="A few common pickup and delivery combinations for the Switzerland to North Macedonia service."
          eyebrowKey="servicesPage.routeImagesEyebrow"
          titleKey="servicesPage.routeImagesTitle"
          descriptionKey="servicesPage.routeImagesDescription"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {routes.map((route, i) => (
            <motion.article
              key={route.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images[i % images.length]}
                  alt={route.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.21_0.02_264_/_0.72)] to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-sm font-bold text-foreground shadow-sm">
                  <MapPin className="size-4 text-primary" />
                  {t('footer.route')}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">
                  {route.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {route.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
