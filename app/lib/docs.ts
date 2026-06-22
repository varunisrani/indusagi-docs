import fs from "node:fs/promises";
import path from "node:path";
import type { DocContent, DocEntry } from "./docs-types";
import { renderMarkdown } from "./markdown";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Indusagi package sections
const PACKAGE_SECTION_ORDER = ["Start", "Subsystems", "AI", "Agent", "TUI", "MCP", "Memory", "Reference"];
const PACKAGE_SECTION_MAP: Array<{ prefix: string; section: string }> = [
  { prefix: "subsystems/", section: "Subsystems" },
  { prefix: "ai/", section: "AI" },
  { prefix: "agent/", section: "Agent" },
  { prefix: "tui/", section: "TUI" },
  { prefix: "mcp/", section: "MCP" },
  { prefix: "memory/", section: "Memory" },
];
const PACKAGE_SPECIAL_ORDER: Record<string, number> = {
  "README": 0,
  "getting-started": 1,
  "architecture": 2,
  "subsystems/llm-gateway": 10,
  "subsystems/runtime": 11,
  "subsystems/capabilities": 12,
  "subsystems/interop-mcp": 13,
  "subsystems/connectors-saas": 14,
  "subsystems/swarm": 15,
  "subsystems/smithy": 16,
  "subsystems/tracing": 17,
  "subsystems/shell-app": 18,
  "subsystems/react-ink": 19,
  "package-exports": 90,
  "use-cases/security-testing": 91,
};

// Coding agent CLI sections
const CLI_SECTION_ORDER = ["Start", "SDK & API", "Customization", "Session", "Configuration", "UI", "Platform"];
const CLI_SECTION_MAP: Array<{ match: (slug: string) => boolean; section: string }> = [
  { match: (slug) => ["sdk", "rpc", "json"].includes(slug), section: "SDK & API" },
  { match: (slug) => ["extensions", "loading-extensions", "skills", "hooks", "subagents", "prompt-templates", "themes", "packages", "tools"].includes(slug), section: "Customization" },
  { match: (slug) => ["session", "tree", "compaction"].includes(slug), section: "Session" },
  { match: (slug) => ["settings", "models", "providers", "custom-provider", "keybindings"].includes(slug), section: "Configuration" },
  { match: (slug) => ["tui", "terminal-setup"].includes(slug), section: "UI" },
  { match: (slug) => ["development", "shell-aliases", "windows"].includes(slug), section: "Platform" },
];
const CLI_SPECIAL_ORDER: Record<string, number> = {
  "README": 0,
  "architecture": 0.5,
  "providers": 1,
  "sdk": 2,
  "rpc": 3,
  "json": 4,
  "extensions": 10,
  "loading-extensions": 10.5,
  "skills": 11,
  "hooks": 12,
  "subagents": 13,
  "tools": 14,
  "session": 20,
  "tree": 21,
  "compaction": 22,
  "settings": 30,
  "models": 31,
  "custom-provider": 32,
  "keybindings": 33,
  "tui": 40,
  "terminal-setup": 41,
  "development": 50,
  "shell-aliases": 51,
  "windows": 52,
  "packages": 60,
  "prompt-templates": 61,
  "themes": 62,
};

function pickPackageSection(slug: string): string {
  for (const { prefix, section } of PACKAGE_SECTION_MAP) {
    if (slug.startsWith(prefix)) return section;
  }
  if (slug === "package-exports" || slug.startsWith("use-cases/")) return "Reference";
  return "Start";
}

function pickCLISection(slug: string): string {
  const baseName = slug.split("/").at(-1) || slug;
  for (const { match, section } of CLI_SECTION_MAP) {
    if (match(baseName)) return section;
  }
  return "Start";
}

function sortDocs(a: DocEntry, b: DocEntry, sectionOrder: string[]) {
  const aSection = sectionOrder.indexOf(a.section);
  const bSection = sectionOrder.indexOf(b.section);
  if (aSection !== bSection) return aSection - bSection;
  if (a.order !== b.order) return a.order - b.order;
  return a.title.localeCompare(b.title);
}

async function readDocPaths(subdir: string): Promise<string[]> {
  const result: string[] = [];
  const dir = path.join(CONTENT_DIR, subdir);

  async function walk(dirPath: string) {
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
          await walk(fullPath);
        } else if (entry.isFile() && entry.name.endsWith(".txt")) {
          result.push(fullPath);
        }
      }
    } catch {
      // Directory doesn't exist
    }
  }

  await walk(dir);
  return result;
}

function slugFromFile(filePath: string, subdir: string): string {
  const dir = path.join(CONTENT_DIR, subdir);
  const rel = path.relative(dir, filePath);
  return rel.replace(/\.txt$/, "").split(path.sep).join("/");
}

async function getTitleFromFile(filePath: string): Promise<string> {
  const content = await fs.readFile(filePath, "utf-8");
  const firstHeading = content.split(/\r?\n/).find((line) => line.trim().startsWith("# "));
  if (firstHeading) {
    return firstHeading.replace(/^#\s+/, "").trim();
  }
  return path.basename(filePath, ".txt");
}

function stripTitle(markdown: string): { title: string; body: string } {
  const lines = markdown.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith("# ")) {
      const title = line.replace(/^#\s+/, "").trim();
      const body = [...lines.slice(0, i), ...lines.slice(i + 1)].join("\n").trim();
      return { title, body };
    }
  }
  return { title: "Untitled", body: markdown };
}

// Package docs (indusagi)
export async function getPackageDocsManifest(): Promise<DocEntry[]> {
  const paths = await readDocPaths("package");
  const docs = await Promise.all(
    paths.map(async (filePath) => {
      const slug = slugFromFile(filePath, "package");
      const baseName = slug.split("/").at(-1) || slug;
      const title = await getTitleFromFile(filePath);
      const section = pickPackageSection(slug);
      const order = PACKAGE_SPECIAL_ORDER[slug] ?? PACKAGE_SPECIAL_ORDER[baseName] ?? 10;
      return { slug, title, section, order };
    }),
  );

  docs.sort((a, b) => sortDocs(a, b, PACKAGE_SECTION_ORDER));
  return docs;
}

export async function getPackageDocBySlug(slugParts: string[]): Promise<DocContent | null> {
  const slug = slugParts.join("/");
  const filePath = path.join(CONTENT_DIR, "package", `${slug}.txt`);

  try {
    const markdown = await fs.readFile(filePath, "utf-8");
    const { title, body } = stripTitle(markdown);
    const { html, toc } = renderMarkdown(body);
    const section = pickPackageSection(slug);
    return { slug, title, section, html, raw: body, toc };
  } catch {
    return null;
  }
}

export async function getDefaultPackageDocSlug(): Promise<string[]> {
  const preferred = ["getting-started", "README"];
  for (const slug of preferred) {
    try {
      await fs.access(path.join(CONTENT_DIR, "package", `${slug}.txt`));
      return [slug];
    } catch {
      // continue
    }
  }
  return ["README"];
}

// CLI docs (coding-agent)
export async function getCLIDocsManifest(): Promise<DocEntry[]> {
  const paths = await readDocPaths("cli");
  const docs = await Promise.all(
    paths.map(async (filePath) => {
      const slug = slugFromFile(filePath, "cli");
      const baseName = slug.split("/").at(-1) || slug;
      const title = await getTitleFromFile(filePath);
      const section = pickCLISection(slug);
      const order = CLI_SPECIAL_ORDER[baseName] ?? 100;
      return { slug, title, section, order };
    }),
  );

  docs.sort((a, b) => sortDocs(a, b, CLI_SECTION_ORDER));
  return docs;
}

export async function getCLIDocBySlug(slugParts: string[]): Promise<DocContent | null> {
  const slug = slugParts.join("/");
  const filePath = path.join(CONTENT_DIR, "cli", `${slug}.txt`);

  try {
    const markdown = await fs.readFile(filePath, "utf-8");
    const { title, body } = stripTitle(markdown);
    const { html, toc } = renderMarkdown(body);
    const section = pickCLISection(slug);
    return { slug, title, section, html, raw: body, toc };
  } catch {
    return null;
  }
}

export async function getDefaultCLIDocSlug(): Promise<string[]> {
  const preferred = ["README", "providers", "sdk"];
  for (const slug of preferred) {
    try {
      await fs.access(path.join(CONTENT_DIR, "cli", `${slug}.txt`));
      return [slug];
    } catch {
      // continue
    }
  }
  return ["README"];
}

// Python rebuild docs (indusagi for Python)
const PYTHON_SECTION_ORDER = ["Start", "Facades", "Subsystems", "UI", "Reference"];
const PYTHON_SECTION_MAP: Array<{ prefix: string; section: string }> = [
  { prefix: "facades/", section: "Facades" },
  { prefix: "subsystems/", section: "Subsystems" },
  { prefix: "ui/", section: "UI" },
  { prefix: "reference/", section: "Reference" },
];
const PYTHON_SPECIAL_ORDER: Record<string, number> = {
  "README": 0,
  "getting-started": 1,
  "architecture": 2,
  "facades/ai": 10,
  "facades/agent": 11,
  "facades/mcp": 12,
  "facades/memory": 13,
  "subsystems/llm-gateway": 20,
  "subsystems/runtime": 21,
  "subsystems/capabilities": 22,
  "subsystems/interop": 23,
  "subsystems/connectors": 24,
  "subsystems/swarm": 25,
  "subsystems/smithy": 26,
  "subsystems/tracing": 27,
  "subsystems/shell-app": 28,
  "ui/tui": 40,
  "ui/react-ink": 41,
  "ui/ui-bridge": 42,
  "reference/package-exports": 60,
  "reference/cli": 61,
  "reference/examples": 62,
  "reference/testing": 63,
  "reference/parity": 64,
};

function pickPythonSection(slug: string): string {
  for (const { prefix, section } of PYTHON_SECTION_MAP) {
    if (slug.startsWith(prefix)) return section;
  }
  return "Start";
}

export async function getPythonDocsManifest(): Promise<DocEntry[]> {
  const paths = await readDocPaths("python");
  const docs = await Promise.all(
    paths.map(async (filePath) => {
      const slug = slugFromFile(filePath, "python");
      const title = await getTitleFromFile(filePath);
      const section = pickPythonSection(slug);
      const order = PYTHON_SPECIAL_ORDER[slug] ?? 100;
      return { slug, title, section, order };
    }),
  );

  docs.sort((a, b) => sortDocs(a, b, PYTHON_SECTION_ORDER));
  return docs;
}

export async function getPythonDocBySlug(slugParts: string[]): Promise<DocContent | null> {
  const slug = slugParts.join("/");
  const filePath = path.join(CONTENT_DIR, "python", `${slug}.txt`);

  try {
    const markdown = await fs.readFile(filePath, "utf-8");
    const { title, body } = stripTitle(markdown);
    const { html, toc } = renderMarkdown(body);
    const section = pickPythonSection(slug);
    return { slug, title, section, html, raw: body, toc };
  } catch {
    return null;
  }
}

export async function getDefaultPythonDocSlug(): Promise<string[]> {
  const preferred = ["getting-started", "README"];
  for (const slug of preferred) {
    try {
      await fs.access(path.join(CONTENT_DIR, "python", `${slug}.txt`));
      return [slug];
    } catch {
      // continue
    }
  }
  return ["README"];
}

// Python coding-agent CLI docs (induscode)
const PYTHON_CLI_SECTION_ORDER = ["Start", "Console", "Subsystems", "Configuration", "Reference"];
const PYTHON_CLI_SECTION_MAP: Array<{ prefix: string; section: string }> = [
  { prefix: "console/", section: "Console" },
  { prefix: "subsystems/", section: "Subsystems" },
  { prefix: "configuration/", section: "Configuration" },
  { prefix: "reference/", section: "Reference" },
];
const PYTHON_CLI_SPECIAL_ORDER: Record<string, number> = {
  "README": 0,
  "getting-started": 1,
  "architecture": 2,
  "console/overview": 10,
  "console/slash-commands": 11,
  "console/dialogs": 12,
  "console/theming": 13,
  "subsystems/launch": 20,
  "subsystems/boot": 21,
  "subsystems/conductor": 22,
  "subsystems/runtime-bridge": 23,
  "subsystems/capability-deck": 24,
  "subsystems/channels": 25,
  "subsystems/sessions": 26,
  "subsystems/window-budget": 27,
  "subsystems/transcript-export": 28,
  "subsystems/briefing": 29,
  "subsystems/addons": 30,
  "subsystems/insight": 31,
  "configuration/settings": 40,
  "configuration/auth": 41,
  "configuration/models": 42,
  "configuration/mcp": 43,
  "reference/cli": 60,
  "reference/package-exports": 61,
  "reference/parity": 62,
  "reference/testing": 63,
};

function pickPythonCliSection(slug: string): string {
  for (const { prefix, section } of PYTHON_CLI_SECTION_MAP) {
    if (slug.startsWith(prefix)) return section;
  }
  return "Start";
}

export async function getPythonCliDocsManifest(): Promise<DocEntry[]> {
  const paths = await readDocPaths("python-cli");
  const docs = await Promise.all(
    paths.map(async (filePath) => {
      const slug = slugFromFile(filePath, "python-cli");
      const title = await getTitleFromFile(filePath);
      const section = pickPythonCliSection(slug);
      const order = PYTHON_CLI_SPECIAL_ORDER[slug] ?? 100;
      return { slug, title, section, order };
    }),
  );

  docs.sort((a, b) => sortDocs(a, b, PYTHON_CLI_SECTION_ORDER));
  return docs;
}

export async function getPythonCliDocBySlug(slugParts: string[]): Promise<DocContent | null> {
  const slug = slugParts.join("/");
  const filePath = path.join(CONTENT_DIR, "python-cli", `${slug}.txt`);

  try {
    const markdown = await fs.readFile(filePath, "utf-8");
    const { title, body } = stripTitle(markdown);
    const { html, toc } = renderMarkdown(body);
    const section = pickPythonCliSection(slug);
    return { slug, title, section, html, raw: body, toc };
  } catch {
    return null;
  }
}

export async function getDefaultPythonCliDocSlug(): Promise<string[]> {
  const preferred = ["getting-started", "README"];
  for (const slug of preferred) {
    try {
      await fs.access(path.join(CONTENT_DIR, "python-cli", `${slug}.txt`));
      return [slug];
    } catch {
      // continue
    }
  }
  return ["README"];
}

// Rust rebuild docs (indusagi for Rust — the framework)
const RUST_SECTION_ORDER = ["Start", "Subsystems", "UI", "Reference"];
const RUST_SECTION_MAP: Array<{ prefix: string; section: string }> = [
  { prefix: "subsystems/", section: "Subsystems" },
  { prefix: "ui/", section: "UI" },
  { prefix: "reference/", section: "Reference" },
];
const RUST_SPECIAL_ORDER: Record<string, number> = {
  "README": 0,
  "getting-started": 1,
  "architecture": 2,
  "subsystems/core": 10,
  "subsystems/llm-gateway": 11,
  "subsystems/runtime": 12,
  "subsystems/capabilities": 13,
  "subsystems/interop": 14,
  "subsystems/connectors": 15,
  "subsystems/swarm": 16,
  "subsystems/smithy": 17,
  "subsystems/tracing": 18,
  "subsystems/shell-app": 19,
  "subsystems/facade": 20,
  "ui/tui": 40,
  "ui/tui-render": 41,
  "reference/cli": 60,
  "reference/crate-exports": 61,
  "reference/testing": 62,
  "reference/parity": 63,
};

function pickRustSection(slug: string): string {
  for (const { prefix, section } of RUST_SECTION_MAP) {
    if (slug.startsWith(prefix)) return section;
  }
  return "Start";
}

export async function getRustDocsManifest(): Promise<DocEntry[]> {
  const paths = await readDocPaths("rust");
  const docs = await Promise.all(
    paths.map(async (filePath) => {
      const slug = slugFromFile(filePath, "rust");
      const title = await getTitleFromFile(filePath);
      const section = pickRustSection(slug);
      const order = RUST_SPECIAL_ORDER[slug] ?? 100;
      return { slug, title, section, order };
    }),
  );

  docs.sort((a, b) => sortDocs(a, b, RUST_SECTION_ORDER));
  return docs;
}

export async function getRustDocBySlug(slugParts: string[]): Promise<DocContent | null> {
  const slug = slugParts.join("/");
  const filePath = path.join(CONTENT_DIR, "rust", `${slug}.txt`);

  try {
    const markdown = await fs.readFile(filePath, "utf-8");
    const { title, body } = stripTitle(markdown);
    const { html, toc } = renderMarkdown(body);
    const section = pickRustSection(slug);
    return { slug, title, section, html, raw: body, toc };
  } catch {
    return null;
  }
}

export async function getDefaultRustDocSlug(): Promise<string[]> {
  const preferred = ["getting-started", "README"];
  for (const slug of preferred) {
    try {
      await fs.access(path.join(CONTENT_DIR, "rust", `${slug}.txt`));
      return [slug];
    } catch {
      // continue
    }
  }
  return ["README"];
}

// Rust coding-agent CLI docs (induscode for Rust)
const RUST_CLI_SECTION_ORDER = ["Start", "Console", "Subsystems", "Configuration", "Reference"];
const RUST_CLI_SECTION_MAP: Array<{ prefix: string; section: string }> = [
  { prefix: "console/", section: "Console" },
  { prefix: "subsystems/", section: "Subsystems" },
  { prefix: "configuration/", section: "Configuration" },
  { prefix: "reference/", section: "Reference" },
];
const RUST_CLI_SPECIAL_ORDER: Record<string, number> = {
  "README": 0,
  "getting-started": 1,
  "architecture": 2,
  "console/overview": 10,
  "console/slash-commands": 11,
  "console/dialogs": 12,
  "console/theming": 13,
  "subsystems/launch": 20,
  "subsystems/boot": 21,
  "subsystems/conductor": 22,
  "subsystems/runtime-bridge": 23,
  "subsystems/capability-deck": 24,
  "subsystems/channels": 25,
  "subsystems/sessions": 26,
  "subsystems/window-budget": 27,
  "subsystems/transcript-export": 28,
  "subsystems/briefing": 29,
  "subsystems/addons": 30,
  "subsystems/insight": 31,
  "configuration/settings": 40,
  "configuration/auth": 41,
  "configuration/models": 42,
  "configuration/mcp": 43,
  "reference/cli": 60,
  "reference/crate-exports": 61,
  "reference/parity": 62,
  "reference/testing": 63,
};

function pickRustCliSection(slug: string): string {
  for (const { prefix, section } of RUST_CLI_SECTION_MAP) {
    if (slug.startsWith(prefix)) return section;
  }
  return "Start";
}

export async function getRustCliDocsManifest(): Promise<DocEntry[]> {
  const paths = await readDocPaths("rust-cli");
  const docs = await Promise.all(
    paths.map(async (filePath) => {
      const slug = slugFromFile(filePath, "rust-cli");
      const title = await getTitleFromFile(filePath);
      const section = pickRustCliSection(slug);
      const order = RUST_CLI_SPECIAL_ORDER[slug] ?? 100;
      return { slug, title, section, order };
    }),
  );

  docs.sort((a, b) => sortDocs(a, b, RUST_CLI_SECTION_ORDER));
  return docs;
}

export async function getRustCliDocBySlug(slugParts: string[]): Promise<DocContent | null> {
  const slug = slugParts.join("/");
  const filePath = path.join(CONTENT_DIR, "rust-cli", `${slug}.txt`);

  try {
    const markdown = await fs.readFile(filePath, "utf-8");
    const { title, body } = stripTitle(markdown);
    const { html, toc } = renderMarkdown(body);
    const section = pickRustCliSection(slug);
    return { slug, title, section, html, raw: body, toc };
  } catch {
    return null;
  }
}

export async function getDefaultRustCliDocSlug(): Promise<string[]> {
  const preferred = ["getting-started", "README"];
  for (const slug of preferred) {
    try {
      await fs.access(path.join(CONTENT_DIR, "rust-cli", `${slug}.txt`));
      return [slug];
    } catch {
      // continue
    }
  }
  return ["README"];
}
