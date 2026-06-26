import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/lib/seo/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: '/logo-demar-alyans.svg',
        width: 260,
        height: 260,
        alt: 'Логотип Демар Альянс',
      },
    ],
  },
  icons: {
    icon: '/logo-demar-alyans.svg',
    shortcut: '/logo-demar-alyans.svg',
    apple: '/logo.png',
  },
  manifest: '/manifest.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/logo-demar-alyans.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
