import { MetadataRoute } from 'next';
import { getPackageDocsManifest, getCLIDocsManifest } from './lib/docs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.indusagi.com';

  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/docs`, lastModified: new Date() },
    { url: `${baseUrl}/cli`, lastModified: new Date() },
  ];

  const packageDocs = await getPackageDocsManifest();
  const packageDocEntries = packageDocs.map((doc) => ({
    url: `${baseUrl}/docs/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }));

  const cliDocs = await getCLIDocsManifest();
  const cliDocEntries = cliDocs.map((doc) => ({
    url: `${baseUrl}/cli/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }));

  return [...staticPages, ...packageDocEntries, ...cliDocEntries];
}
