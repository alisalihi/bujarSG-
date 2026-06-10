import {
  DESTINATIONS,
  SERVICE_OPTIONS,
  VEHICLE_OPTIONS,
} from './constants'
import type { DestinationKey, RoutePrice, ServiceType, VehicleType } from './types'

/**
 * Calculate the estimated price range for a vehicle transport.
 * Returns null when no quotable destination is selected (e.g. "other").
 */
export function calculatePrice(
  destination: DestinationKey,
  vehicle: VehicleType,
  service: ServiceType,
): RoutePrice | null {
  const dest = DESTINATIONS.find((d) => d.key === destination)
  if (!dest || destination === 'other') return null

  const vehicleModifier =
    VEHICLE_OPTIONS.find((v) => v.value === vehicle)?.modifier ?? 0
  const serviceModifier =
    SERVICE_OPTIONS.find((s) => s.value === service)?.modifier ?? 0

  const extra = vehicleModifier + serviceModifier

  return {
    min: dest.base.min + extra,
    max: dest.base.max + extra,
  }
}

export function formatEuro(value: number): string {
  return new Intl.NumberFormat('de-CH', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}
