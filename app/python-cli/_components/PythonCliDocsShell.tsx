import type { DocContent, DocEntry } from "../../lib/docs-types";
import DocLayout, { type DocArea } from "../../_components/DocLayout";

const AREA: DocArea = {
  name: "induscode",
  badge: "PYTHON · CLI",
  subtitle: "Python coding agent",
  lang: "Python",
  basePath: "/python-cli",
  contentDir: "python-cli",
  sectionOrder: ["Start", "Console", "Subsystems", "Configuration", "Reference"],
};

export default function PythonCliDocsShell({ docs, doc }: { docs: DocEntry[]; doc: DocContent }) {
  return <DocLayout docs={docs} doc={doc} area={AREA} />;
}
