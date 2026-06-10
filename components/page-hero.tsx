'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.21_0.02_264)] px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, oklch(0.577 0.221 27.3) 0, transparent 45%), radial-gradient(circle at 80% 70%, oklch(0.44 0.18 27) 0, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-white/80"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
