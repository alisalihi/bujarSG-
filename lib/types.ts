export type DestinationKey = 'macedonia'

export interface RoutePrice {
  min: number
  max: number
}

export interface Destination {
  key: DestinationKey
  country: string
  flag: string
  base: RoutePrice
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
  coverage: string
  included: string[]
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
