import { notFound } from "next/navigation";
import { getPackageDocBySlug, getPackageDocsManifest } from "../../lib/docs";
import DocsShell from "../_components/DocsShell";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

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
