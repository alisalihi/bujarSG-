'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Logo } from '@/components/logo'
import { COMPANY, NAV_LINKS } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Home page has a dark hero, so the navbar starts transparent there.
  const overHero = pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        overHero
          ? 'bg-transparent'
          : 'border-b border-border bg-background/90 shadow-sm backdrop-blur-md',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label={t('nav.homeAria')}>
          <Logo
            textClassName={cn(
              overHero ? 'text-white' : 'text-foreground',
            )}
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    overHero
                      ? 'text-white/90 hover:text-white'
                      : 'text-muted-foreground hover:text-foreground',
                    active && (overHero ? 'text-white' : 'text-primary'),
                  )}
                >
                  {t(`nav.${link.label.toLowerCase()}`)}
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className={cn(
                        'absolute inset-x-2 -bottom-px h-0.5 rounded-full',
                        overHero ? 'bg-white' : 'bg-primary',
                      )}
                    />
                  ) : null}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={COMPANY.phoneHref}
            className={cn(
              'flex items-center gap-2 text-sm font-medium transition-colors',
              overHero ? 'text-white/90 hover:text-white' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            {COMPANY.phone}
          </a>
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] hover:bg-primary/90"
          >
            {t('nav.quote')}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
          className={cn(
            'inline-flex items-center justify-center rounded-md p-2 md:hidden',
            overHero ? 'text-white' : 'text-foreground',
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background/95 shadow-lg backdrop-blur-md md:hidden"
          >
            <ul className="mx-4 my-3 flex flex-col gap-1 rounded-xl border border-border bg-card p-2 shadow-sm">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold transition-colors',
                        active
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted',
                      )}
                    >
                      <span>{t(`nav.${link.label.toLowerCase()}`)}</span>
                      {active ? (
                        <span className="size-2 rounded-full bg-primary-foreground" />
                      ) : null}
                    </Link>
                  </li>
                )
              })}
              <li className="my-2 border-t border-border" />
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  {t('nav.quote')}
                </Link>
              </li>
              <li>
                <LanguageSwitcher className="w-full" />
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
