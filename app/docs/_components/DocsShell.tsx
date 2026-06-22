import type { DocContent, DocEntry } from "../../lib/docs-types";
import DocLayout, { type DocArea } from "../../_components/DocLayout";

const AREA: DocArea = {
  name: "indusagi",
  badge: "PACKAGE",
  subtitle: "Developer documentation",
  lang: "TypeScript",
  basePath: "/docs",
  contentDir: "package",
  sectionOrder: ["Start", "Subsystems", "AI", "Agent", "TUI", "MCP", "Memory", "Reference"],
};

export default function DocsShell({ docs, doc }: { docs: DocEntry[]; doc: DocContent }) {
  return <DocLayout docs={docs} doc={doc} area={AREA} />;
}
