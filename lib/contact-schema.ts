import { z } from 'zod'

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  originCity: z.string().min(2, 'Please enter your origin city'),
  destinationCountry: z.string().min(2, 'Please select a destination country'),
  vehicle: z.string().min(2, 'Please enter your vehicle make & model'),
  message: z.string().min(10, 'Please add a few details (min. 10 characters)'),
})

export type ContactSchema = z.infer<typeof contactSchema>
