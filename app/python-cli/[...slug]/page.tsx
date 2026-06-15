import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPythonCliDocBySlug, getPythonCliDocsManifest } from "../../lib/docs";
import { getSeoDescription } from "../../lib/seo";
import PythonCliDocsShell from "../_components/PythonCliDocsShell";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getPythonCliDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Page Not Found',
    };
  }

  const slugPath = slug.join('/');
  const fallback = 'Documentation for induscode, the Python coding-agent CLI';
  const description = getSeoDescription(doc.raw, fallback);

  return {
    title: doc.title,
    description: description,
    openGraph: {
      title: doc.title,
      description: description,
      url: `/python-cli/${slugPath}`,
      images: ['/og-image.png'],
      type: 'article',
    },
  };
}

export default async function PythonCliDocPage({ params }: PageProps) {
  const { slug } = await params;
  const docs = await getPythonCliDocsManifest();
  const doc = await getPythonCliDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return <PythonCliDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
