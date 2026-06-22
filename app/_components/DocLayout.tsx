"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import type { DocContent, DocEntry } from "../lib/docs-types";
import { Header } from "./Header";

export type DocArea = {
  name: string; // sidebar title, e.g. "indusagi"
  badge: string; // e.g. "PACKAGE"
  subtitle: string; // e.g. "Developer documentation"
  lang: string; // breadcrumb language, e.g. "TypeScript"
  basePath: string; // e.g. "/docs"
  contentDir: string; // e.g. "package" (for the edit-on-GitHub link)
  sectionOrder: string[];
};

type Props = {
  docs: DocEntry[];
  doc: DocContent;
  area: DocArea;
};

export default function DocLayout({ docs, doc, area }: Props) {
  const [query, setQuery] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return docs;
    return docs.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.slug.toLowerCase().includes(q) ||
        d.section.toLowerCase().includes(q),
    );
  }, [docs, query]);

  const grouped = useMemo(() => {
    const groups = new Map<string, DocEntry[]>();
    for (const d of filtered) {
      if (!groups.has(d.section)) groups.set(d.section, []);
      groups.get(d.section)!.push(d);
    }
    const ordered = area.sectionOrder.filter((s) => groups.has(s));
    // include any sections not explicitly ordered, after the known ones
    for (const s of groups.keys()) if (!ordered.includes(s)) ordered.push(s);
    return ordered.map((section) => ({ section, items: groups.get(section) || [] }));
  }, [filtered, area.sectionOrder]);

  const idx = docs.findIndex((d) => d.slug === doc.slug);
  const prev = idx > 0 ? docs[idx - 1] : null;
  const next = idx >= 0 && idx < docs.length - 1 ? docs[idx + 1] : null;

  const editHref = `https://github.com/varunisrani/indusagi-ts/edit/main/indusagi-docs/content/${area.contentDir}/${doc.slug}.txt`;

  const itemStyle = (active: boolean): CSSProperties => ({
    fontSize: 14,
    textDecoration: "none",
    padding: "7px 10px",
    borderRadius: 7,
    cursor: "pointer",
    color: active ? "var(--accent)" : "var(--muted)",
    background: active ? "var(--accent-soft)" : "transparent",
    fontWeight: active ? 600 : 400,
  });

  const Sidebar = (
    <aside className={navOpen ? "rounded-xl border border-[color:var(--border)] p-[18px]" : ""} style={navOpen ? { background: "var(--surface)" } : undefined}>
      <Link href="/" className="inline-flex items-center gap-1.5 text-[color:var(--muted)] no-underline" style={{ fontSize: 13 }}>
        ← Back to home
      </Link>
      <div className="flex items-center gap-2" style={{ margin: "14px 0 4px" }}>
        <span
          className="text-[color:var(--accent)]"
          style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: ".08em", border: "1px solid var(--accent)", borderRadius: 6, padding: "2px 7px" }}
        >
          {area.badge}
        </span>
      </div>
      <div style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 700, fontSize: 22 }}>{area.name}</div>
      <div className="text-[color:var(--muted)]" style={{ fontSize: 13, marginBottom: 14 }}>{area.subtitle}</div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search docs…"
        className="w-full"
        style={{ padding: "10px 12px", marginBottom: 18, fontSize: 13 }}
      />

      <div className="max-h-[68vh] overflow-y-auto pr-1">
        {grouped.map((g) => (
          <div key={g.section} className="mb-4">
            <div className="text-[color:var(--muted)]" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", margin: "0 0 8px" }}>
              {g.section}
            </div>
            <div className="flex flex-col gap-0.5">
              {g.items.map((it) => (
                <Link
                  key={it.slug}
                  href={`${area.basePath}/${it.slug}`}
                  onClick={() => setNavOpen(false)}
                  style={itemStyle(it.slug === doc.slug)}
                >
                  {it.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      {/* Mobile sidebar toggle */}
      <div className="lg:hidden max-w-[1320px] mx-auto px-6 pt-[18px]">
        <button
          onClick={() => setNavOpen((v) => !v)}
          className="w-full flex items-center justify-between rounded-[10px] border border-[color:var(--border)] cursor-pointer"
          style={{ padding: "12px 16px", background: "var(--surface)", color: "var(--fg)", fontFamily: "var(--font-sans), sans-serif", fontWeight: 600, fontSize: 15 }}
        >
          ☰ Browse documentation
          <span className="text-[color:var(--muted)]">{navOpen ? "▲" : "▼"}</span>
        </button>
      </div>

      <div
        className="max-w-[1320px] mx-auto px-6 grid gap-9 items-start grid-cols-1 lg:grid-cols-[248px_1fr] xl:grid-cols-[248px_1fr_220px]"
        style={{ padding: "20px 24px 64px" }}
      >
        <div className={navOpen ? "block" : "hidden lg:block lg:sticky lg:top-[84px] lg:self-start"}>{Sidebar}</div>

        <article className="min-w-0 fade-up">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-[color:var(--muted)] flex-wrap" style={{ fontSize: 13, marginBottom: 18 }}>
            <span>Docs</span>
            <span>/</span>
            <span>{area.lang}</span>
            <span>/</span>
            <span className="text-[color:var(--fg)]">{doc.title}</span>
          </div>

          {/* section + slug */}
          <div className="flex items-center gap-2.5" style={{ marginBottom: 10 }}>
            <span
              className="text-[color:var(--accent)]"
              style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".06em", border: "1px solid var(--accent)", borderRadius: 6, padding: "2px 8px", textTransform: "uppercase" }}
            >
              {doc.section}
            </span>
            <span className="text-[color:var(--muted)]" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13 }}>{doc.slug}</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 700, fontSize: "clamp(30px,6vw,42px)", letterSpacing: "-0.02em", margin: "0 0 20px" }}>
            {doc.title}
          </h1>

          <div className="doc-prose" dangerouslySetInnerHTML={{ __html: doc.html }} />

          {/* prev / next */}
          {(prev || next) && (
            <div className="flex justify-between gap-4 flex-wrap border-t border-[color:var(--border)]" style={{ paddingTop: 24, marginTop: 36 }}>
              {prev ? (
                <Link href={`${area.basePath}/${prev.slug}`} className="flex-1 rounded-xl border border-[color:var(--border)] no-underline" style={{ minWidth: 140, padding: "16px 20px" }}>
                  <div className="text-[color:var(--muted)]" style={{ fontSize: 12 }}>← Previous</div>
                  <div className="text-[color:var(--fg)]" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 600, fontSize: 15, marginTop: 4 }}>{prev.title}</div>
                </Link>
              ) : (
                <span className="flex-1" style={{ minWidth: 140 }} />
              )}
              {next && (
                <Link href={`${area.basePath}/${next.slug}`} className="flex-1 rounded-xl border border-[color:var(--border)] no-underline text-right" style={{ minWidth: 140, padding: "16px 20px" }}>
                  <div className="text-[color:var(--muted)]" style={{ fontSize: 12 }}>Next →</div>
                  <div className="text-[color:var(--fg)]" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 600, fontSize: 15, marginTop: 4 }}>{next.title}</div>
                </Link>
              )}
            </div>
          )}
        </article>

        {/* right TOC */}
        <aside className="hidden xl:block" style={{ position: "sticky", top: 84 }}>
          <div className="text-[color:var(--muted)]" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", marginBottom: 12 }}>
            ON THIS PAGE
          </div>
          {doc.toc.length > 0 ? (
            <div className="flex flex-col gap-2.5 border-l border-[color:var(--border)]" style={{ paddingLeft: 14, marginBottom: 24 }}>
              {doc.toc.map((t) => (
                <a key={t.id} href={`#${t.id}`} className="toc-link no-underline" style={{ fontSize: 13, paddingLeft: t.level === 3 ? 12 : 0 }}>
                  {t.text}
                </a>
              ))}
            </div>
          ) : (
            <div className="text-[color:var(--muted)]" style={{ fontSize: 13, marginBottom: 24 }}>No sections</div>
          )}

          <div className="rounded-xl border border-[color:var(--border)]" style={{ background: "var(--surface)", padding: 16 }}>
            <div className="text-[color:var(--accent)]" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", marginBottom: 8 }}>TIP</div>
            <div className="text-[color:var(--muted)]" style={{ fontSize: 13, lineHeight: 1.6 }}>Use sidebar search to jump between modules fast.</div>
          </div>

          <a href={editHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[color:var(--muted)] no-underline" style={{ marginTop: 16, fontSize: 13 }}>
            ✎ Edit this page on GitHub
          </a>
        </aside>
      </div>

      <footer className="border-t border-[color:var(--border)]">
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between gap-4 flex-wrap text-[color:var(--muted)]" style={{ padding: "36px 24px", fontSize: 13 }}>
          <span>© 2026 IndusAGI · MIT License</span>
          <span>Docs · GitHub · npm · PyPI · Discord</span>
        </div>
      </footer>
    </div>
  );
}
