import type { MetadataRoute } from 'next'
import { getAllPosts } from '../lib/blog'
import { SITE_URL } from '../lib/site'

const STATIC_ROUTES = [
  '',
  'blog/',
  'cv/',
  'contact/',
  'services/',
  'services/stem-tutoring/',
  'services/custom-maps/',
  'services/custom-maps/presents/',
  'services/custom-maps/professional/',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === 'blog/' ? 0.9 : 0.7,
  }))

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticEntries, ...postEntries]
}
