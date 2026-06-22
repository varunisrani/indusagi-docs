import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getRustDocBySlug, getRustDocsManifest } from "../../lib/docs";
import { getSeoDescription } from "../../lib/seo";
import RustDocsShell from "../_components/RustDocsShell";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getRustDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Page Not Found',
    };
  }

  const slugPath = slug.join('/');
  const fallback = 'Documentation for indusagi, the Rust agent framework';
  const description = getSeoDescription(doc.raw, fallback);

  return {
    title: doc.title,
    description: description,
    openGraph: {
      title: doc.title,
      description: description,
      url: `/rust/${slugPath}`,
      images: ['/og-image.png'],
      type: 'article',
    },
  };
}

export default async function RustDocPage({ params }: PageProps) {
  const { slug } = await params;
  const docs = await getRustDocsManifest();
  const doc = await getRustDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return <RustDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
