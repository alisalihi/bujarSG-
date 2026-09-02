import type { MetadataRoute } from 'next'
import { OG_IMAGE, SITE_URL } from '@/lib/seo'

const lastModified = new Date('2026-09-02')

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.75, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: [`${SITE_URL}${OG_IMAGE}`],
  }))
}
