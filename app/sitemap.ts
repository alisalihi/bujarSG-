import type { MetadataRoute } from 'next'

const baseUrl = 'https://bujarsg.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/calculator', '/contact']
  const now = new Date()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
