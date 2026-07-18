import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const host = SITE_URL.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/gallery/'],
    },
    host,
    sitemap: `${SITE_URL.replace(/\/$/, '')}/sitemap.xml`,
  };
}
