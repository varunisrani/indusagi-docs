import { getDefaultPythonCliDocSlug, getPythonCliDocBySlug, getPythonCliDocsManifest } from "../lib/docs";
import PythonCliDocsShell from "./_components/PythonCliDocsShell";

export default async function PythonCliDocsIndexPage() {
  const docs = await getPythonCliDocsManifest();
  const slug = await getDefaultPythonCliDocSlug();
  const doc = await getPythonCliDocBySlug(slug);

  if (!doc) {
    return <div className="p-8">Doc not found.</div>;
  }

  return <PythonCliDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
