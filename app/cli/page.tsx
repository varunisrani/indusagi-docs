import { getDefaultCLIDocSlug, getCLIDocBySlug, getCLIDocsManifest } from "../lib/docs";
import CLIDocsShell from "./_components/CLIDocsShell";

export default async function CLIDocsIndexPage() {
  const docs = await getCLIDocsManifest();
  const slug = await getDefaultCLIDocSlug();
  const doc = await getCLIDocBySlug(slug);

  if (!doc) {
    return <div className="p-8">Doc not found.</div>;
  }

  return <CLIDocsShell docs={docs} doc={doc} />;
}
export const dynamic = "force-dynamic";
