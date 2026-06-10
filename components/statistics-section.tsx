'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/animated-counter'
import { STATS } from '@/lib/constants'

export function StatisticsSection({ dark = false }: { dark?: boolean }) {
  return (
    <section
      className={
        dark
          ? 'bg-[oklch(0.21_0.02_264)] px-4 py-16 text-white sm:px-6 lg:px-8'
          : 'px-4 py-16 sm:px-6 lg:px-8'
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={
              dark
                ? 'flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 text-center'
                : 'flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center shadow-sm'
            }
          >
            <span className="text-4xl font-extrabold text-primary sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span
              className={
                dark
                  ? 'text-sm font-medium text-white/70'
                  : 'text-sm font-medium text-muted-foreground'
              }
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
