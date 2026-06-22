import { MetadataRoute } from 'next';
import { getPackageDocsManifest, getCLIDocsManifest, getPythonDocsManifest, getPythonCliDocsManifest, getRustDocsManifest, getRustCliDocsManifest } from './lib/docs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.indusagi.com';

  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/docs`, lastModified: new Date() },
    { url: `${baseUrl}/cli`, lastModified: new Date() },
    { url: `${baseUrl}/python`, lastModified: new Date() },
    { url: `${baseUrl}/python-cli`, lastModified: new Date() },
    { url: `${baseUrl}/rust`, lastModified: new Date() },
    { url: `${baseUrl}/rust-cli`, lastModified: new Date() },
    { url: `${baseUrl}/use-cases/coding-agent`, lastModified: new Date() },
    { url: `${baseUrl}/use-cases/memory-management`, lastModified: new Date() },
    { url: `${baseUrl}/indusagi-vs-cursor`, lastModified: new Date() },
    { url: `${baseUrl}/indusagi-vs-aider`, lastModified: new Date() },
    { url: `${baseUrl}/best-ai-agent-framework-india`, lastModified: new Date() },
    { url: `${baseUrl}/sovereign-ai-indusagi`, lastModified: new Date() },
    { url: `${baseUrl}/use-cases/india-fintech-startups`, lastModified: new Date() },
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

  const pythonDocs = await getPythonDocsManifest();
  const pythonDocEntries = pythonDocs.map((doc) => ({
    url: `${baseUrl}/python/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }));

  const pythonCliDocs = await getPythonCliDocsManifest();
  const pythonCliDocEntries = pythonCliDocs.map((doc) => ({
    url: `${baseUrl}/python-cli/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }));

  const rustDocs = await getRustDocsManifest();
  const rustDocEntries = rustDocs.map((doc) => ({
    url: `${baseUrl}/rust/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }));

  const rustCliDocs = await getRustCliDocsManifest();
  const rustCliDocEntries = rustCliDocs.map((doc) => ({
    url: `${baseUrl}/rust-cli/${doc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }));

  return [...staticPages, ...packageDocEntries, ...cliDocEntries, ...pythonDocEntries, ...pythonCliDocEntries, ...rustDocEntries, ...rustCliDocEntries];
}
