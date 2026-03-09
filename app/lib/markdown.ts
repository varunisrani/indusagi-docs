import { marked } from "marked";
import type { TocItem } from "./docs-types";

export function slugify(text: string): string {
  if (!text) return "section";
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function withUniqueSlug(base: string, seen: Map<string, number>): string {
  const count = seen.get(base) || 0;
  if (count === 0) {
    seen.set(base, 1);
    return base;
  }
  const next = count + 1;
  seen.set(base, next);
  return `${base}-${next}`;
}

export function renderMarkdown(markdown: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const seen = new Map<string, number>();
  const renderer = new marked.Renderer();

  renderer.heading = ({ text, depth }) => {
    const base = slugify(text);
    const id = withUniqueSlug(base || "section", seen);
    if (depth === 2 || depth === 3) {
      toc.push({
        id,
        text: text.replace(/<[^>]+>/g, ""),
        level: depth as 2 | 3,
      });
    }
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  };

  const html = marked.parse(markdown, {
    renderer,
    gfm: true,
    breaks: false,
  }) as string;

  return { html, toc };
}
