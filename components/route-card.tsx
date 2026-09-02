'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { ServiceRoute } from '@/lib/types'

export function RouteCard({
  route,
  index = 0,
}: {
  route: ServiceRoute
  index?: number
}) {
  const { t, tArray } = useI18n()
  const included = tArray<string>('routes.included')

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={route.image}
          alt={t(`routes.${route.slug}.title`)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.21_0.02_264_/_0.55)] to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-bold text-foreground">
          {t(`routes.${route.slug}.title`)}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t(`routes.${route.slug}.description`)}
        </p>

        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
          <span>
            <span className="font-medium text-foreground">
              {t('routes.coverage')}{' '}
            </span>
            {t(`routes.${route.slug}.coverage`)}
          </span>
        </div>

        <ul className="grid grid-cols-2 gap-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <Check className="size-3.5 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={`/contact?destination=${encodeURIComponent(route.to)}`}
          className="group/btn mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          {t('routes.quote')}
          <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  )
}
