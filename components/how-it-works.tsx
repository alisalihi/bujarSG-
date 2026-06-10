'use client'

import { motion } from 'framer-motion'
import { FileText, PackageCheck, Truck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { HOW_IT_WORKS } from '@/lib/constants'

const icons = { FileText, Truck, PackageCheck } as const

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="Three simple steps to ship your vehicle"
          description="From your first quote to safe delivery, we keep the entire process transparent and stress-free."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block lg:h-px lg:w-full lg:top-12 lg:left-0 lg:translate-x-0" />

          <div className="grid gap-10 lg:grid-cols-3">
            {HOW_IT_WORKS.map((item, i) => {
              const Icon = icons[item.icon as keyof typeof icons]
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="relative z-10 flex size-24 items-center justify-center rounded-full border-4 border-muted bg-primary text-primary-foreground shadow-lg">
                    <Icon className="size-9" />
                    <span className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full bg-[oklch(0.21_0.02_264)] text-sm font-bold text-white">
                      {item.step}
                    </span>
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
