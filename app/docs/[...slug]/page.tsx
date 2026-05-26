import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPackageDocBySlug, getPackageDocsManifest } from "../../lib/docs";
import { getSeoDescription } from "../../lib/seo";
import DocsShell from "../_components/DocsShell";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getPackageDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Page Not Found',
    };
  }

  const slugPath = slug.join('/');
  const fallback = 'Documentation for Indusagi packages';
  const description = getSeoDescription(doc.raw, fallback);
  
  return {
    title: doc.title,
    description: description,
    openGraph: {
      title: doc.title,
      description: description,
      url: `/docs/${slugPath}`,
      images: ['/og-image.png'],
      type: 'article',
    },
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const docs = await getPackageDocsManifest();
  const doc = await getPackageDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return <DocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
