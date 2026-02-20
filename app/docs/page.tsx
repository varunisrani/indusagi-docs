import { getDefaultPackageDocSlug, getPackageDocBySlug, getPackageDocsManifest } from "../lib/docs";
import DocsShell from "./_components/DocsShell";

export default async function DocsIndexPage() {
  const docs = await getPackageDocsManifest();
  const slug = await getDefaultPackageDocSlug();
  const doc = await getPackageDocBySlug(slug);

  if (!doc) {
    return <div className="p-8">Doc not found.</div>;
  }

  return <DocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
