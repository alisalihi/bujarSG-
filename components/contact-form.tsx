'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { contactSchema, type ContactSchema } from '@/lib/contact-schema'
import { DESTINATION_OPTIONS } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'
const labelClass = 'mb-1.5 block text-sm font-semibold text-foreground'
const errorClass = 'mt-1 text-xs font-medium text-destructive'

export function ContactForm() {
  const searchParams = useSearchParams()
  const { t } = useI18n()
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      originCity: '',
      destinationCountry: '',
      vehicle: '',
      message: '',
    },
  })

  // Prefill from quote links.
  useEffect(() => {
    const origin = searchParams.get('origin')
    const destination = searchParams.get('destination')
    const vehicle = searchParams.get('vehicle')
    const service = searchParams.get('service')
    const estimate = searchParams.get('estimate')

    if (origin) setValue('originCity', origin)
    if (destination) setValue('destinationCountry', destination)
    if (origin || destination || estimate) {
      const lines = [
        t('contact.form.requestIntro'),
        origin && destination
          ? `${t('contact.form.route')} ${origin} -> ${destination}`
          : '',
        vehicle ? `${t('contact.form.vehicleType')} ${vehicle}` : '',
        service ? `${t('contact.form.service')} ${service}` : '',
        estimate ? `${t('contact.form.estimate')} ${estimate}` : '',
      ].filter(Boolean)
      setValue('message', lines.join('\n'))
    }
  }, [searchParams, setValue, t])

  const onSubmit = async (data: ContactSchema) => {
    setStatus('submitting')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error ?? t('contact.form.errorFallback'))
      }
      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setServerError(
        err instanceof Error ? err.message : t('contact.form.errorFallback'),
      )
    }
  }

  const fieldError = (field: keyof ContactSchema) =>
    errors[field] ? t(`contact.form.errors.${field}`) : null

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center shadow-sm"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-accent text-primary">
          <CheckCircle2 className="size-9" />
        </span>
        <h3 className="text-2xl font-bold text-foreground">
          {t('contact.form.successTitle')}
        </h3>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          {t('contact.form.successDescription')}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          {t('contact.form.sendAnother')}
        </button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            {t('contact.form.fullName')}
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={cn(fieldClass, errors.fullName && 'border-destructive')}
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className={errorClass}>{fieldError('fullName')}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {t('contact.form.email')}
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={cn(fieldClass, errors.email && 'border-destructive')}
            {...register('email')}
          />
          {errors.email && <p className={errorClass}>{fieldError('email')}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t('contact.form.phone')}
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={cn(fieldClass, errors.phone && 'border-destructive')}
            {...register('phone')}
          />
          {errors.phone && <p className={errorClass}>{fieldError('phone')}</p>}
        </div>
        <div>
          <label htmlFor="originCity" className={labelClass}>
            {t('contact.form.originCity')}
          </label>
          <input
            id="originCity"
            type="text"
            className={cn(fieldClass, errors.originCity && 'border-destructive')}
            {...register('originCity')}
          />
          {errors.originCity && (
            <p className={errorClass}>{fieldError('originCity')}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="destinationCountry" className={labelClass}>
            {t('contact.form.destination')}
          </label>
          <select
            id="destinationCountry"
            className={cn(
              fieldClass,
              errors.destinationCountry && 'border-destructive',
            )}
            {...register('destinationCountry')}
          >
            <option value="">{t('contact.form.destinationPlaceholder')}</option>
            {DESTINATION_OPTIONS.map((d) => (
              <option key={d.value} value={d.label}>
                {t(`destinations.${d.value}`)}
              </option>
            ))}
          </select>
          {errors.destinationCountry && (
            <p className={errorClass}>{fieldError('destinationCountry')}</p>
          )}
        </div>
        <div>
          <label htmlFor="vehicle" className={labelClass}>
            {t('contact.form.vehicle')}
          </label>
          <input
            id="vehicle"
            type="text"
            placeholder={t('contact.form.vehiclePlaceholder')}
            className={cn(fieldClass, errors.vehicle && 'border-destructive')}
            {...register('vehicle')}
          />
          {errors.vehicle && (
            <p className={errorClass}>{fieldError('vehicle')}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(
            fieldClass,
            'resize-none',
            errors.message && 'border-destructive',
          )}
          {...register('message')}
        />
        {errors.message && (
          <p className={errorClass}>{fieldError('message')}</p>
        )}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          <AlertCircle className="size-4 shrink-0" />
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            {t('contact.form.sending')}
          </>
        ) : (
          <>
            <Send className="size-4" />
            {t('contact.form.submit')}
          </>
        )}
      </button>
    </form>
  )
}
