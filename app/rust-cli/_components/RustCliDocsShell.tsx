import type { DocContent, DocEntry } from "../../lib/docs-types";
import DocLayout, { type DocArea } from "../../_components/DocLayout";

const AREA: DocArea = {
  name: "induscode",
  badge: "RUST · CLI",
  subtitle: "Rust coding agent",
  lang: "Rust",
  basePath: "/rust-cli",
  contentDir: "rust-cli",
  sectionOrder: ["Start", "Console", "Subsystems", "Configuration", "Reference"],
};

export default function RustCliDocsShell({ docs, doc }: { docs: DocEntry[]; doc: DocContent }) {
  return <DocLayout docs={docs} doc={doc} area={AREA} />;
}
