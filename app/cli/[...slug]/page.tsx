import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCLIDocBySlug, getCLIDocsManifest } from "../../lib/docs";
import { getSeoDescription } from "../../lib/seo";
import CLIDocsShell from "../_components/CLIDocsShell";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getCLIDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Page Not Found',
    };
  }

  const slugPath = slug.join('/');
  const fallback = 'Documentation for Indusagi Coding Agent CLI';
  const description = getSeoDescription(doc.raw, fallback);
  
  return {
    title: doc.title,
    description: description,
    openGraph: {
      title: doc.title,
      description: description,
      url: `/cli/${slugPath}`,
      images: ['/og-image.png'],
      type: 'article',
    },
  };
}

export default async function CLIDocPage({ params }: PageProps) {
  const { slug } = await params;
  const docs = await getCLIDocsManifest();
  const doc = await getCLIDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return <CLIDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
