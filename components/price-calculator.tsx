'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Calculator, Car, MapPin, Truck } from 'lucide-react'
import {
  DESTINATION_OPTIONS,
  ORIGIN_CITIES,
  SERVICE_OPTIONS,
  VEHICLE_OPTIONS,
} from '@/lib/constants'
import { calculatePrice, formatEuro } from '@/lib/pricing'
import type { DestinationKey, ServiceType, VehicleType } from '@/lib/types'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'
const labelClass =
  'mb-2 flex items-center gap-2 text-sm font-semibold text-foreground'

export function PriceCalculator({
  initialDestination,
}: {
  initialDestination?: DestinationKey
}) {
  const router = useRouter()
  const [origin, setOrigin] = useState<string>(ORIGIN_CITIES[0])
  const [destination, setDestination] = useState<DestinationKey>(
    initialDestination ?? 'macedonia',
  )
  const [vehicle, setVehicle] = useState<VehicleType>('sedan')
  const [service, setService] = useState<ServiceType>('door-to-door')

  const price = useMemo(
    () => calculatePrice(destination, vehicle, service),
    [destination, vehicle, service],
  )

  const destinationLabel =
    DESTINATION_OPTIONS.find((d) => d.value === destination)?.label ?? ''

  const requestQuote = () => {
    const params = new URLSearchParams({
      origin,
      destination: destinationLabel,
      vehicle: VEHICLE_OPTIONS.find((v) => v.value === vehicle)?.label ?? '',
      service: SERVICE_OPTIONS.find((s) => s.value === service)?.label ?? '',
    })
    if (price) {
      params.set('estimate', `${formatEuro(price.min)} – ${formatEuro(price.max)}`)
    }
    router.push(`/contact?${params.toString()}`)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Inputs */}
      <div className="lg:col-span-3">
        <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div>
            <label htmlFor="origin" className={labelClass}>
              <MapPin className="size-4 text-primary" />
              Origin City (Switzerland)
            </label>
            <select
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className={fieldClass}
            >
              {ORIGIN_CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="destination" className={labelClass}>
              <MapPin className="size-4 text-primary" />
              Destination Country
            </label>
            <select
              id="destination"
              value={destination}
              onChange={(e) =>
                setDestination(e.target.value as DestinationKey)
              }
              className={fieldClass}
            >
              {DESTINATION_OPTIONS.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className={labelClass}>
              <Car className="size-4 text-primary" />
              Vehicle Type
            </span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {VEHICLE_OPTIONS.map((v) => (
                <button
                  key={v.value}
                  type="button"
                  onClick={() => setVehicle(v.value)}
                  className={cn(
                    'rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors',
                    vehicle === v.value
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-foreground hover:border-primary/40',
                  )}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className={labelClass}>
              <Truck className="size-4 text-primary" />
              Service Type
            </span>
            <div className="grid grid-cols-2 gap-2">
              {SERVICE_OPTIONS.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setService(s.value)}
                  className={cn(
                    'rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors',
                    service === s.value
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-foreground hover:border-primary/40',
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="lg:col-span-2">
        <div className="sticky top-24 flex flex-col gap-5 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.44_0.18_27)] p-7 text-primary-foreground shadow-xl">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            <Calculator className="size-4" />
            Your Estimate
          </span>

          <AnimatePresence mode="wait">
            {price ? (
              <motion.div
                key={`${destination}-${vehicle}-${service}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-1"
              >
                <span className="text-sm text-primary-foreground/80">
                  Estimated price range
                </span>
                <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {formatEuro(price.min)}
                </span>
                <span className="text-lg font-semibold text-primary-foreground/90">
                  to {formatEuro(price.max)}
                </span>
              </motion.div>
            ) : (
              <motion.p
                key="no-price"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm leading-relaxed text-primary-foreground/85"
              >
                Contact us for a custom quote to your selected destination. We
                cover the entire Balkan region.
              </motion.p>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-2 rounded-xl bg-white/10 p-4 text-sm">
            <div className="flex justify-between">
              <span className="text-primary-foreground/75">Route</span>
              <span className="font-medium">
                {origin} → {destinationLabel}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary-foreground/75">Vehicle</span>
              <span className="font-medium">
                {VEHICLE_OPTIONS.find((v) => v.value === vehicle)?.label}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary-foreground/75">Service</span>
              <span className="font-medium">
                {SERVICE_OPTIONS.find((s) => s.value === service)?.label}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={requestQuote}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition-transform hover:scale-[1.03]"
          >
            Request This Quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-center text-xs text-primary-foreground/70">
            Estimates are indicative. Final pricing is confirmed on request.
          </p>
        </div>
      </div>
    </div>
  )
}
