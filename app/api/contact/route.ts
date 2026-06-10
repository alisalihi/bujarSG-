import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/contact-schema'
import { COMPANY } from '@/lib/constants'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 },
    )
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed.', issues: parsed.error.flatten() },
      { status: 422 },
    )
  }

  const data = parsed.data
  const apiKey = process.env.RESEND_API_KEY

  // Gracefully handle the case where email is not yet configured so the
  // form still works in preview/demo environments.
  if (!apiKey) {
    console.log('[v0] RESEND_API_KEY not set — logging contact request:', data)
    return NextResponse.json({
      success: true,
      delivered: false,
      message: 'Request received. Email delivery is not configured yet.',
    })
  }

  try {
    const resend = new Resend(apiKey)
    const to = process.env.CONTACT_EMAIL ?? COMPANY.email
    const from = process.env.CONTACT_FROM_EMAIL ?? 'Bujar SG <onboarding@resend.dev>'

    await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New quote request — ${data.fullName} (${data.destinationCountry})`,
      html: `
        <h2>New Vehicle Transport Quote Request</h2>
        <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(data.fullName)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(data.email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(data.phone)}</td></tr>
          <tr><td><strong>Origin City</strong></td><td>${escapeHtml(data.originCity)}</td></tr>
          <tr><td><strong>Destination</strong></td><td>${escapeHtml(data.destinationCountry)}</td></tr>
          <tr><td><strong>Vehicle</strong></td><td>${escapeHtml(data.vehicle)}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(data.message)}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true, delivered: true })
  } catch (error) {
    console.log('[v0] Failed to send contact email:', error)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 500 },
    )
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
