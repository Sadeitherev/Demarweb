import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Демар',
    description: siteConfig.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#071A3D',
    theme_color: '#071A3D',
    icons: [
      {
        src: '/logo-demar-alyans.svg',
        sizes: '260x260',
        type: 'image/svg+xml',
      },
      {
        src: '/logo.png',
        sizes: '260x260',
        type: 'image/png',
      },
    ],
  };
}
