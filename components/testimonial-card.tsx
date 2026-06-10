'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { TESTIMONIALS } from '@/lib/constants'
import type { Testimonial } from '@/lib/types'

export function TestimonialCard({
  testimonial,
  index = 0,
}: {
  testimonial: Testimonial
  index?: number
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm"
    >
      <Quote className="size-8 text-primary/30" aria-hidden="true" />
      <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="flex-1 text-pretty leading-relaxed text-foreground">
        “{testimonial.review}”
      </blockquote>
      <figcaption className="mt-2 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex size-11 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
          {testimonial.name.charAt(0)}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-bold text-foreground">
            {testimonial.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {testimonial.location}
          </span>
        </span>
      </figcaption>
    </motion.figure>
  )
}

export function TestimonialsSection() {
  return (
    <section className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by the Balkan diaspora in Switzerland"
          description="Real stories from customers who shipped their vehicles with Bujar SG."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
