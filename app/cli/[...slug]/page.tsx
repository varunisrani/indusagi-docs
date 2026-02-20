import { notFound } from "next/navigation";
import { getCLIDocBySlug, getCLIDocsManifest } from "../../lib/docs";
import CLIDocsShell from "../_components/CLIDocsShell";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

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
