import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { TranslatedText } from '@/components/translated-text'
import { JsonLd } from '@/components/json-ld'
import { COMPANY } from '@/lib/constants'
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Get A Car Transport Quote',
  description:
    'Request a Bujar SG quote for vehicle transport from Switzerland to North Macedonia. Contact us for Swiss pickup and delivery to Skopje, Tetovo or Gostivar.',
  path: '/contact',
})

const contactDetails = [
  {
    icon: Phone,
    labelKey: 'contact.phone',
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
  },
  {
    icon: Mail,
    labelKey: 'contact.email',
    value: COMPANY.email,
    href: COMPANY.emailHref,
  },
  {
    icon: MessageCircle,
    labelKey: 'contact.whatsapp',
    valueKey: 'contact.chat',
    href: COMPANY.whatsapp,
  },
  {
    icon: Globe,
    labelKey: 'contact.facebook',
    valueKey: 'contact.facebookPage',
    href: COMPANY.facebook,
  },
]

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <PageHero
        translationPrefix="contact"
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-foreground">
                <TranslatedText id="contact.infoTitle" />
              </h2>
              <ul className="flex flex-col gap-4">
                {contactDetails.map((item) => (
                  <li key={item.labelKey}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-center gap-4"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <item.icon className="size-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          <TranslatedText id={item.labelKey} />
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          {item.valueKey ? (
                            <TranslatedText id={item.valueKey} />
                          ) : (
                            item.value ?? ''
                          )}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <MapPin className="size-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      <TranslatedText id="contact.address" />
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {COMPANY.address}
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title="Bujar SG headquarters location in Zurich, Switzerland"
                src="https://www.google.com/maps?q=Zurich,Switzerland&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
