'use client'

import Link from 'next/link'
import { MapPin, MessageCircle, Phone } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.6 5.82a6.3 6.3 0 0 0 3.56 1.14v3.12a9.18 9.18 0 0 1-3.52-.72v5.86c0 3.19-2.59 5.78-5.78 5.78a5.78 5.78 0 0 1 0-11.56c.33 0 .65.03.96.08v3.21a2.7 2.7 0 1 0 1.71 2.51V3h3.07c.24 1.12.94 2.09 2 2.82Z" />
    </svg>
  )
}
import { Logo } from '@/components/logo'
import { COMPANY, DESTINATIONS, NAV_LINKS } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border bg-[oklch(0.21_0.02_264)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <Logo textClassName="text-white" />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {t('footer.description')}
          </p>
          <div className="flex gap-3">
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Bujar SG on Facebook"
              className="flex size-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={COMPANY.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="Bujar SG on TikTok"
              className="flex size-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary"
            >
              <TikTokIcon className="size-4" />
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Bujar SG on WhatsApp"
              className="flex size-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/90">
            {t('footer.navigation')}
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-white/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {t(`nav.${link.label.toLowerCase()}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/90">
            {t('footer.destinations')}
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-white/70">
            {DESTINATIONS.map((d) => (
              <li key={d.key}>
                <Link
                  href="/services"
                  className="transition-colors hover:text-primary"
                >
                  {t('footer.route')}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/90">
            {t('footer.contact')}
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li>
              <a
                href={COMPANY.phoneHref}
                className="flex items-start gap-2.5 transition-colors hover:text-primary"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {COMPANY.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}.{' '}
            {t('footer.rights')}
          </p>
          <p>{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  )
}
