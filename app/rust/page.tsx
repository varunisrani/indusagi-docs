import { getDefaultRustDocSlug, getRustDocBySlug, getRustDocsManifest } from "../lib/docs";
import RustDocsShell from "./_components/RustDocsShell";

export default async function RustDocsIndexPage() {
  const docs = await getRustDocsManifest();
  const slug = await getDefaultRustDocSlug();
  const doc = await getRustDocBySlug(slug);

  if (!doc) {
    return <div className="p-8">Doc not found.</div>;
  }

  return <RustDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
