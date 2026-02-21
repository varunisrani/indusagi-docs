import fs from "node:fs/promises";
import path from "node:path";
import type { DocContent, DocEntry } from "./docs-types";
import { renderMarkdown } from "./markdown";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Indusagi package sections
const PACKAGE_SECTION_ORDER = ["Start", "AI", "Agent", "TUI", "Reference"];
const PACKAGE_SECTION_MAP: Array<{ prefix: string; section: string }> = [
  { prefix: "ai/", section: "AI" },
  { prefix: "agent/", section: "Agent" },
  { prefix: "tui/", section: "TUI" },
];
const PACKAGE_SPECIAL_ORDER: Record<string, number> = {
  "README": 0,
  "getting-started": 1,
  "package-exports": 90,
  "use-cases/security-testing": 91,
};

// Coding agent CLI sections
const CLI_SECTION_ORDER = ["Start", "SDK & API", "Customization", "Session", "Configuration", "UI", "Platform"];
const CLI_SECTION_MAP: Array<{ match: (slug: string) => boolean; section: string }> = [
  { match: (slug) => ["sdk", "rpc", "json"].includes(slug), section: "SDK & API" },
  { match: (slug) => ["extensions", "skills", "hooks", "subagents", "prompt-templates", "themes", "packages"].includes(slug), section: "Customization" },
  { match: (slug) => ["session", "tree", "compaction"].includes(slug), section: "Session" },
  { match: (slug) => ["settings", "models", "providers", "custom-provider", "keybindings"].includes(slug), section: "Configuration" },
  { match: (slug) => ["tui", "terminal-setup"].includes(slug), section: "UI" },
  { match: (slug) => ["development", "shell-aliases", "windows"].includes(slug), section: "Platform" },
];
const CLI_SPECIAL_ORDER: Record<string, number> = {
  "README": 0,
  "providers": 1,
  "sdk": 2,
  "rpc": 3,
  "json": 4,
  "extensions": 10,
  "skills": 11,
  "hooks": 12,
  "subagents": 13,
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
