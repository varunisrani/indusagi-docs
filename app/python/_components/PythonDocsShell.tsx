import type { DocContent, DocEntry } from "../../lib/docs-types";
import DocLayout, { type DocArea } from "../../_components/DocLayout";

const AREA: DocArea = {
  name: "indusagi",
  badge: "PYTHON",
  subtitle: "Python framework",
  lang: "Python",
  basePath: "/python",
  contentDir: "python",
  sectionOrder: ["Start", "Facades", "Subsystems", "UI", "Reference"],
};

export default function PythonDocsShell({ docs, doc }: { docs: DocEntry[]; doc: DocContent }) {
  return <DocLayout docs={docs} doc={doc} area={AREA} />;
}
