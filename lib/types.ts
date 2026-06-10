export type DestinationKey =
  | 'macedonia'
  | 'albania'
  | 'kosovo'
  | 'serbia'
  | 'bosnia'
  | 'croatia'
  | 'other'

export type VehicleType = 'sedan' | 'suv' | 'van' | 'luxury' | 'electric'

export type ServiceType = 'door-to-door' | 'depot-pickup'

export interface RoutePrice {
  min: number
  max: number
}

export interface Destination {
  key: DestinationKey
  country: string
  flag: string
  base: RoutePrice
  deliveryTime: string
  description: string
  coverage: string
}

export interface ServiceRoute {
  slug: string
  title: string
  from: string
  to: string
  image: string
  description: string
  deliveryTime: string
  coverage: string
  included: string[]
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  review: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ContactFormData {
  fullName: string
  email: string
  phone: string
  originCity: string
  destinationCountry: string
  vehicle: string
  message: string
}
