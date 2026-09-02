'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Languages } from 'lucide-react'
import { LANGUAGE_OPTIONS, type Locale, useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const shortLabels: Record<Locale, string> = {
  en: 'EN',
  sq: 'SQ',
  'de-CH': 'CH',
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const selectedLanguage =
    LANGUAGE_OPTIONS.find((option) => option.value === locale) ??
    LANGUAGE_OPTIONS[0]

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <div ref={rootRef} className={cn('relative inline-flex', className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('language.label')}
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background/95 px-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md transition hover:border-primary/40 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
      >
        <Languages className="size-4 text-primary" aria-hidden="true" />
        <span className="rounded-md bg-accent px-1.5 py-0.5 text-xs font-bold text-accent-foreground">
          {shortLabels[locale]}
        </span>
        <span className="hidden lg:inline">{selectedLanguage.label}</span>
        <ChevronDown
          className={cn(
            'size-4 text-muted-foreground transition-transform',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={t('language.label')}
          className="absolute right-0 top-full z-50 mt-2 w-56 max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-background p-1.5 shadow-xl shadow-black/10"
        >
          {LANGUAGE_OPTIONS.map((option) => {
            const active = option.value === locale

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setLocale(option.value)
                  setOpen(false)
                }}
                className={cn(
                  'flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
                  active
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-muted',
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      'flex size-8 items-center justify-center rounded-md text-xs font-bold',
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {shortLabels[option.value]}
                  </span>
                  <span>{option.label}</span>
                </span>
                {active ? (
                  <Check className="size-4 text-primary" aria-hidden="true" />
                ) : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
