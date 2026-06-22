import type { DocContent, DocEntry } from "../../lib/docs-types";
import DocLayout, { type DocArea } from "../../_components/DocLayout";

const AREA: DocArea = {
  name: "Coding Agent",
  badge: "CLI",
  subtitle: "Developer documentation",
  lang: "TypeScript",
  basePath: "/cli",
  contentDir: "cli",
  sectionOrder: ["Start", "SDK & API", "Customization", "Session", "Configuration", "UI", "Platform"],
};

export default function CLIDocsShell({ docs, doc }: { docs: DocEntry[]; doc: DocContent }) {
  return <DocLayout docs={docs} doc={doc} area={AREA} />;
}
