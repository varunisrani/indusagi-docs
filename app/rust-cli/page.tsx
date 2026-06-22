import { getDefaultRustCliDocSlug, getRustCliDocBySlug, getRustCliDocsManifest } from "../lib/docs";
import RustCliDocsShell from "./_components/RustCliDocsShell";

export default async function RustCliDocsIndexPage() {
  const docs = await getRustCliDocsManifest();
  const slug = await getDefaultRustCliDocSlug();
  const doc = await getRustCliDocBySlug(slug);

  if (!doc) {
    return <div className="p-8">Doc not found.</div>;
  }

  return <RustCliDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
