import { getDefaultPythonDocSlug, getPythonDocBySlug, getPythonDocsManifest } from "../lib/docs";
import PythonDocsShell from "./_components/PythonDocsShell";

export default async function PythonDocsIndexPage() {
  const docs = await getPythonDocsManifest();
  const slug = await getDefaultPythonDocSlug();
  const doc = await getPythonDocBySlug(slug);

  if (!doc) {
    return <div className="p-8">Doc not found.</div>;
  }

  return <PythonDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
