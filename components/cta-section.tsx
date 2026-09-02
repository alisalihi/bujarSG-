'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'

export function CTASection() {
  const { t } = useI18n()

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.44_0.18_27)] px-6 py-14 text-center shadow-xl sm:px-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6"
        >
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="text-pretty leading-relaxed text-primary-foreground/85">
            {t('cta.description')}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-4" />
              {t('cta.whatsapp')}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {t('cta.quote')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
