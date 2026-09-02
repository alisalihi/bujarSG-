'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  index?: number
}

export function ServiceCard({
  title,
  description,
  href,
  index = 0,
}: ServiceCardProps) {
  const { t } = useI18n()

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <MapPin className="size-6" />
      </span>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-[oklch(0.44_0.18_27)]"
      >
        {t('servicesOverview.learnMore')}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}
