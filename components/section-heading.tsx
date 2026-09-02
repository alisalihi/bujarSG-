'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  eyebrowKey?: string
  titleKey?: string
  descriptionKey?: string
  translationPrefix?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  eyebrowKey,
  titleKey,
  descriptionKey,
  translationPrefix,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const { t } = useI18n()
  const headingEyebrow = eyebrowKey
    ? t(eyebrowKey)
    : translationPrefix
      ? t(`${translationPrefix}.eyebrow`)
      : eyebrow
  const headingTitle = titleKey
    ? t(titleKey)
    : translationPrefix
      ? t(`${translationPrefix}.title`)
      : title
  const headingDescription = descriptionKey
    ? t(descriptionKey)
    : translationPrefix
      ? t(`${translationPrefix}.description`)
      : description

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'flex max-w-2xl flex-col gap-3',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {headingEyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
          {headingEyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {headingTitle}
      </h2>
      {headingDescription ? (
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {headingDescription}
        </p>
      ) : null}
    </motion.div>
  )
}
