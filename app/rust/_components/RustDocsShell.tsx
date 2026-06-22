import type { DocContent, DocEntry } from "../../lib/docs-types";
import DocLayout, { type DocArea } from "../../_components/DocLayout";

const AREA: DocArea = {
  name: "indusagi",
  badge: "RUST",
  subtitle: "Rust framework",
  lang: "Rust",
  basePath: "/rust",
  contentDir: "rust",
  sectionOrder: ["Start", "Subsystems", "UI", "Reference"],
};

export default function RustDocsShell({ docs, doc }: { docs: DocEntry[]; doc: DocContent }) {
  return <DocLayout docs={docs} doc={doc} area={AREA} />;
}
