import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo/site';

const staticRoutes = ['', '/privacy-policy', '/#services', '/#calculator', '/#about', '/#location', '/#contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
