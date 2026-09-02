import type {
  Destination,
  DestinationKey,
  ServiceRoute,
} from './types'

export const COMPANY = {
  name: 'Bujar SG',
  tagline: 'Reliable Swiss Vehicle Transport To North Macedonia',
  phone: '+41 79 617 46 02',
  phoneHref: 'tel:+41796174602',
  email: 'info@bujarsg.com',
  emailHref: 'mailto:info@bujarsg.com',
  whatsapp: 'https://wa.me/41796174602',
  facebook: 'https://www.facebook.com/share/19B9kopeQ2/?mibextid=wwXIfr',
  tiktok: 'https://www.tiktok.com/@autotransport.b.ameti?_r=1&_t=ZS-99OiJ8ISE7h',
  address: 'Industriestrasse 12, 8005 Zurich, Switzerland',
} as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const

export const DESTINATIONS: Destination[] = [
  {
    key: 'macedonia',
    country: 'North Macedonia',
    flag: '🇲🇰',
    base: { min: 350, max: 500 },
    description:
      'Direct vehicle transport from Switzerland to Skopje, Tetovo, Gostivar and all major Macedonian cities.',
    coverage: 'Skopje, Tetovo, Gostivar, Kumanovo, Bitola, Struga',
  },
]

export const DESTINATION_OPTIONS: { value: DestinationKey; label: string }[] = [
  { value: 'macedonia', label: 'North Macedonia' },
]

export const SERVICE_ROUTES: ServiceRoute[] = DESTINATIONS.map((d) => ({
  slug: d.key,
  title: `Switzerland → ${d.country}`,
  from: 'Switzerland',
  to: d.country,
  image: '/images/swiss-macedonia-transport.png',
  description: d.description,
  coverage: d.coverage,
  included: [
    'Secure loading',
    'Status updates',
    'Professional handling',
    'Door-to-door option',
  ],
}))

export const INCLUDED_SERVICES = [
  {
    title: 'Door-to-door transport',
    description:
      'We collect your vehicle from your address in Switzerland and deliver it directly to the destination.',
  },
  {
    title: 'Depot pickup',
    description:
      'Drop off and collect your vehicle at one of our secure regional depots for a lower rate.',
  },
  {
    title: 'Status updates',
    description:
      'Receive clear updates from pickup in Switzerland to final delivery.',
  },
  {
    title: 'Professional handling',
    description:
      'Trained drivers and modern car carriers ensure your vehicle arrives in perfect condition.',
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Careful Vehicle Handling',
    description:
      'Your vehicle is loaded, secured and handled with care from pickup to delivery.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Clear Updates',
    description:
      'Straightforward communication keeps you informed throughout the journey.',
    icon: 'MapPin',
  },
  {
    title: '10+ Years Experience',
    description:
      'A decade of dedicated experience moving vehicles between Switzerland and North Macedonia.',
    icon: 'Award',
  },
  {
    title: 'Competitive Pricing',
    description:
      'Transparent, fair pricing with no hidden fees — request a tailored quote online.',
    icon: 'Tag',
  },
  {
    title: 'Professional Drivers',
    description:
      'Experienced, multilingual drivers who know the Switzerland to North Macedonia route.',
    icon: 'Truck',
  },
  {
    title: 'Door-to-Door Service',
    description:
      'Convenient collection and delivery right to your doorstep on both ends.',
    icon: 'Home',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Request Quote',
    description:
      'Use our contact form to receive a fast, transparent quote tailored to your vehicle and route.',
    icon: 'FileText',
  },
  {
    step: 2,
    title: 'Vehicle Pickup',
    description:
      'We collect your vehicle from your Swiss address or depot and load it securely onto our red car carriers.',
    icon: 'Truck',
  },
  {
    step: 3,
    title: 'Safe Delivery',
    description:
      'We keep you updated as your vehicle is delivered safely to its destination in North Macedonia.',
    icon: 'PackageCheck',
  },
]

export const VALUES = [
  {
    title: 'Reliability',
    description: 'We deliver on our promises — on time, every time.',
    icon: 'Clock',
  },
  {
    title: 'Transparency',
    description: 'Clear pricing and honest communication at every stage.',
    icon: 'Eye',
  },
  {
    title: 'Safety',
    description: 'Your vehicle is handled carefully from pickup to delivery.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Professionalism',
    description: 'A dedicated, experienced team focused on dependable service.',
    icon: 'BadgeCheck',
  },
]

export const CERTIFICATIONS = [
  'Swiss Transport License',
  'EU Logistics Compliant',
  'Bonded Carrier',
]
