"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { DocEntry } from "../../lib/docs-types";

type CLIDocsNavProps = {
  docs: DocEntry[];
  activeSlug: string;
};

const SECTION_ORDER = ["Start", "SDK & API", "Customization", "Session", "Configuration", "UI", "Platform"];

export default function CLIDocsNav({ docs, activeSlug }: CLIDocsNavProps) {
  const [query, setQuery] = useState("");

  const filteredDocs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return docs;
    return docs.filter((doc) => {
      return (
        doc.title.toLowerCase().includes(q) ||
        doc.slug.toLowerCase().includes(q) ||
        doc.section.toLowerCase().includes(q)
      );
    });
  }, [docs, query]);

  const grouped = useMemo(() => {
    const groups = new Map<string, DocEntry[]>();
    for (const doc of filteredDocs) {
      if (!groups.has(doc.section)) groups.set(doc.section, []);
      groups.get(doc.section)!.push(doc);
    }
    return SECTION_ORDER.filter((section) => groups.has(section)).map((section) => ({
      section,
      items: groups.get(section) || [],
    }));
  }, [filteredDocs]);

  return (
    <div className="hidden lg:block sticky top-16">
      <div className="surface rounded-2xl sm:rounded-3xl p-4 sm:p-5">
        <Link href="/" className="text-xs text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors">
          ← Back to home
        </Link>
        <div className="tag-cli inline-flex items-center rounded-full px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-2 sm:mt-3">
          CLI
        </div>
        <div className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-semibold text-[color:var(--ink)]">Coding Agent</div>
        <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-[color:var(--muted)]">
          Terminal-first AI assistant
        </div>
        <div className="mt-4 sm:mt-5">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs..."
            className="w-full rounded-xl border border-[color:var(--border)] bg-[rgba(30,30,30,0.8)] px-3 py-2 text-sm outline-none focus:border-[color:var(--accent-2)]"
          />
        </div>
        <div className="mt-4 sm:mt-6 max-h-[50vh] sm:max-h-[60vh] lg:max-h-[60vh] overflow-y-auto pr-1">
          <div className="space-y-4 sm:space-y-6">
            {grouped.map((group) => (
              <div key={group.section}>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[color:var(--muted)] font-medium">
                  {group.section}
                </div>
                <div className="mt-2 sm:mt-3 flex flex-col gap-1">
                  {group.items.map((doc) => {
                    const isActive = doc.slug === activeSlug;
                    return (
                      <Link
                        key={doc.slug}
                        href={`/cli/${doc.slug}`}
                        className={`rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition-colors ${
                          isActive
                            ? "bg-[rgba(34,211,238,0.15)] text-[color:var(--accent-2)] font-medium"
                            : "text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"
                        }`}
                      >
                        <div className="font-medium">{doc.title}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
