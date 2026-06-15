import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPythonDocBySlug, getPythonDocsManifest } from "../../lib/docs";
import { getSeoDescription } from "../../lib/seo";
import PythonDocsShell from "../_components/PythonDocsShell";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getPythonDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Page Not Found',
    };
  }

  const slugPath = slug.join('/');
  const fallback = 'Documentation for the Indusagi Python framework';
  const description = getSeoDescription(doc.raw, fallback);

  return {
    title: doc.title,
    description: description,
    openGraph: {
      title: doc.title,
      description: description,
      url: `/python/${slugPath}`,
      images: ['/og-image.png'],
      type: 'article',
    },
  };
}

export default async function PythonDocPage({ params }: PageProps) {
  const { slug } = await params;
  const docs = await getPythonDocsManifest();
  const doc = await getPythonDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return <PythonDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
