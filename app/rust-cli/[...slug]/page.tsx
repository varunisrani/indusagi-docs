import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getRustCliDocBySlug, getRustCliDocsManifest } from "../../lib/docs";
import { getSeoDescription } from "../../lib/seo";
import RustCliDocsShell from "../_components/RustCliDocsShell";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getRustCliDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Page Not Found',
    };
  }

  const slugPath = slug.join('/');
  const fallback = 'Documentation for induscode, the Rust coding-agent CLI';
  const description = getSeoDescription(doc.raw, fallback);

  return {
    title: doc.title,
    description: description,
    openGraph: {
      title: doc.title,
      description: description,
      url: `/rust-cli/${slugPath}`,
      images: ['/og-image.png'],
      type: 'article',
    },
  };
}

export default async function RustCliDocPage({ params }: PageProps) {
  const { slug } = await params;
  const docs = await getRustCliDocsManifest();
  const doc = await getRustCliDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return <RustCliDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
