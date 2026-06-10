import type {
  Destination,
  DestinationKey,
  FaqItem,
  ServiceRoute,
  ServiceType,
  Stat,
  Testimonial,
  VehicleType,
} from './types'

export const COMPANY = {
  name: 'Bujar SG',
  tagline: 'Reliable Swiss Vehicle Transport To The Balkans',
  phone: '+41 44 123 45 67',
  phoneHref: 'tel:+41441234567',
  email: 'info@bujarsg.com',
  emailHref: 'mailto:info@bujarsg.com',
  whatsapp: 'https://wa.me/41441234567',
  facebook: 'https://facebook.com/bujarsg',
  address: 'Industriestrasse 12, 8005 Zurich, Switzerland',
} as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/contact', label: 'Contact' },
] as const

export const ORIGIN_CITIES = [
  'Zurich',
  'Geneva',
  'Bern',
  'Basel',
  'Lausanne',
] as const

export const DESTINATIONS: Destination[] = [
  {
    key: 'macedonia',
    country: 'North Macedonia',
    flag: '🇲🇰',
    base: { min: 350, max: 500 },
    deliveryTime: '4–6 days',
    description:
      'Direct vehicle transport from Switzerland to Skopje, Tetovo, Gostivar and all major Macedonian cities.',
    coverage: 'Skopje, Tetovo, Gostivar, Kumanovo, Bitola, Struga',
  },
  {
    key: 'albania',
    country: 'Albania',
    flag: '🇦🇱',
    base: { min: 380, max: 520 },
    deliveryTime: '5–7 days',
    description:
      'Reliable car carrier service to Tirana, Durres and across Albania with full insurance coverage.',
    coverage: 'Tirana, Durres, Vlore, Shkoder, Elbasan',
  },
  {
    key: 'kosovo',
    country: 'Kosovo',
    flag: '🇽🇰',
    base: { min: 360, max: 490 },
    deliveryTime: '4–6 days',
    description:
      'Professional door-to-door transport to Pristina, Prizren, Peja and the rest of Kosovo.',
    coverage: 'Pristina, Prizren, Peja, Gjakova, Mitrovica',
  },
  {
    key: 'serbia',
    country: 'Serbia',
    flag: '🇷🇸',
    base: { min: 320, max: 450 },
    deliveryTime: '3–5 days',
    description:
      'Fast and insured vehicle shipping to Belgrade, Novi Sad and throughout Serbia.',
    coverage: 'Belgrade, Novi Sad, Nis, Kragujevac',
  },
  {
    key: 'bosnia',
    country: 'Bosnia & Herzegovina',
    flag: '🇧🇦',
    base: { min: 310, max: 430 },
    deliveryTime: '3–5 days',
    description:
      'Secure vehicle transport to Sarajevo, Banja Luka, Tuzla and across Bosnia & Herzegovina.',
    coverage: 'Sarajevo, Banja Luka, Tuzla, Mostar, Zenica',
  },
  {
    key: 'croatia',
    country: 'Croatia',
    flag: '🇭🇷',
    base: { min: 280, max: 400 },
    deliveryTime: '2–4 days',
    description:
      'Premium car carrier service to Zagreb, Split, Rijeka and the Croatian coast.',
    coverage: 'Zagreb, Split, Rijeka, Osijek, Zadar',
  },
]

export const DESTINATION_OPTIONS: { value: DestinationKey; label: string }[] = [
  { value: 'macedonia', label: 'North Macedonia' },
  { value: 'albania', label: 'Albania' },
  { value: 'kosovo', label: 'Kosovo' },
  { value: 'serbia', label: 'Serbia' },
  { value: 'bosnia', label: 'Bosnia & Herzegovina' },
  { value: 'croatia', label: 'Croatia' },
  { value: 'other', label: 'Other Balkan country' },
]

export const VEHICLE_OPTIONS: {
  value: VehicleType
  label: string
  modifier: number
}[] = [
  { value: 'sedan', label: 'Sedan', modifier: 0 },
  { value: 'suv', label: 'SUV', modifier: 80 },
  { value: 'van', label: 'Van', modifier: 80 },
  { value: 'luxury', label: 'Luxury', modifier: 150 },
  { value: 'electric', label: 'Electric', modifier: 100 },
]

export const SERVICE_OPTIONS: {
  value: ServiceType
  label: string
  modifier: number
}[] = [
  { value: 'door-to-door', label: 'Door-to-door', modifier: 60 },
  { value: 'depot-pickup', label: 'Depot pickup', modifier: 0 },
]

export const HOME_SERVICE_CARDS = [
  {
    title: 'Switzerland → Macedonia',
    description:
      'Direct, insured transport to Skopje, Tetovo and all of North Macedonia.',
    href: '/services',
  },
  {
    title: 'Switzerland → Albania',
    description:
      'Reliable car carrier service to Tirana, Durres and across Albania.',
    href: '/services',
  },
  {
    title: 'Switzerland → Kosovo',
    description:
      'Door-to-door delivery to Pristina, Prizren, Peja and beyond.',
    href: '/services',
  },
  {
    title: 'Switzerland → Balkans',
    description:
      'Serbia, Bosnia, Croatia and the wider Balkans — fully covered.',
    href: '/services',
  },
]

export const SERVICE_ROUTES: ServiceRoute[] = DESTINATIONS.filter(
  (d) => d.key !== 'other',
).map((d) => ({
  slug: d.key,
  title: `Switzerland → ${d.country}`,
  from: 'Switzerland',
  to: d.country,
  image: 'https://picsum.photos/seed/bujarsg-' + d.key + '/800/520',
  description: d.description,
  deliveryTime: d.deliveryTime,
  coverage: d.coverage,
  included: [
    'Full transport insurance',
    'GPS tracking',
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
    title: 'Insurance coverage',
    description:
      'Every transported vehicle is fully insured throughout the entire journey.',
  },
  {
    title: 'GPS tracking',
    description:
      'Follow your vehicle in real time from pickup in Switzerland to final delivery.',
  },
  {
    title: 'Professional handling',
    description:
      'Trained drivers and modern car carriers ensure your vehicle arrives in perfect condition.',
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Fully Insured Transport',
    description:
      'Comprehensive insurance covers your vehicle from pickup to delivery, every single time.',
    icon: 'ShieldCheck',
  },
  {
    title: 'GPS Tracking',
    description:
      'Real-time tracking lets you follow your vehicle across every border on its journey.',
    icon: 'MapPin',
  },
  {
    title: '10+ Years Experience',
    description:
      'A decade of dedicated experience moving vehicles between Switzerland and the Balkans.',
    icon: 'Award',
  },
  {
    title: 'Competitive Pricing',
    description:
      'Transparent, fair pricing with no hidden fees — get an instant estimate online.',
    icon: 'Tag',
  },
  {
    title: 'Professional Drivers',
    description:
      'Experienced, multilingual drivers who know every route across the Balkans.',
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
      'Use our calculator or contact form to receive a fast, transparent quote tailored to your vehicle and route.',
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
      'Track your vehicle in real time as we deliver it safely to its destination anywhere in the Balkans.',
    icon: 'PackageCheck',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Arben Krasniqi',
    location: 'Zurich → Skopje',
    rating: 5,
    review:
      'Bujar SG transported my car from Zurich to Skopje faster than promised. The whole process was professional and I could track everything. Highly recommend to the diaspora!',
  },
  {
    name: 'Lirim Hoxha',
    location: 'Geneva → Tirana',
    rating: 5,
    review:
      'Excellent service from Geneva to Tirana. The team kept me informed at every step and my vehicle arrived without a scratch. Fair price and fully insured.',
  },
  {
    name: 'Fatmir Berisha',
    location: 'Basel → Pristina',
    rating: 5,
    review:
      'I have used Bujar SG twice now from Basel to Pristina. Reliable, honest and always on time. This is the company every Balkan family in Switzerland should trust.',
  },
]

export const STATS: Stat[] = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 5000, suffix: '+', label: 'Vehicles Delivered' },
  { value: 8, suffix: '', label: 'Countries Served' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
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
    description: 'Your vehicle is fully insured and handled with care.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Professionalism',
    description: 'A dedicated, experienced team focused on your satisfaction.',
    icon: 'BadgeCheck',
  },
]

export const TEAM = [
  {
    name: 'Bujar Selimi',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/seed/bujarsg-team1/400/400',
  },
  {
    name: 'Driton Aliu',
    role: 'Head of Logistics',
    image: 'https://picsum.photos/seed/bujarsg-team2/400/400',
  },
  {
    name: 'Valon Krasniqi',
    role: 'Fleet Manager',
    image: 'https://picsum.photos/seed/bujarsg-team3/400/400',
  },
  {
    name: 'Egzon Morina',
    role: 'Customer Relations',
    image: 'https://picsum.photos/seed/bujarsg-team4/400/400',
  },
]

export const CERTIFICATIONS = [
  'Swiss Transport License',
  'CMR Insurance Certified',
  'EU Logistics Compliant',
  'ISO 9001 Quality',
  'Bonded Carrier',
]

export const FAQS: FaqItem[] = [
  {
    question: 'How long does transportation take?',
    answer:
      'Delivery times depend on the destination. Croatia typically takes 2–4 days, while Macedonia, Albania and Kosovo take 4–7 days. You will receive an exact estimate with your quote.',
  },
  {
    question: 'Is insurance included?',
    answer:
      'Yes. Every vehicle we transport is fully insured for the entire journey at no extra cost. We provide documentation confirming coverage before pickup.',
  },
  {
    question: 'Can I transport non-running vehicles?',
    answer:
      'Yes, we can transport non-running vehicles using specialized equipment. Please mention this when requesting your quote so we can arrange the right carrier.',
  },
  {
    question: 'How does pickup work?',
    answer:
      'With door-to-door service we collect the vehicle directly from your Swiss address. With depot pickup, you drop it off at one of our secure regional depots for a lower rate.',
  },
  {
    question: 'What documents are required?',
    answer:
      'You will need the vehicle registration, a copy of your ID, and a signed transport authorization. For customs, we guide you through any additional paperwork required for your destination.',
  },
  {
    question: 'How do I track my vehicle?',
    answer:
      'Once your vehicle is loaded, you receive a tracking link to follow its location in real time, plus updates at every major checkpoint until delivery.',
  },
]
