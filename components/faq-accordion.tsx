'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface FaqCopy {
  question: string
  answer: string
}

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  const { tArray } = useI18n()
  const faqs = tArray<FaqCopy>('faq.items')

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div
            key={faq.question}
            className={cn(
              'overflow-hidden rounded-xl border bg-card transition-colors',
              isOpen ? 'border-primary/40 shadow-sm' : 'border-border',
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-semibold text-foreground">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'flex size-7 shrink-0 items-center justify-center rounded-full',
                  isOpen
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-primary',
                )}
              >
                <Plus className="size-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
