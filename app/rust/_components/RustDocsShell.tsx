import type { DocContent, DocEntry } from "../../lib/docs-types";
import { renderMarkdown } from "../../lib/markdown";
import RustDocsNav from "./RustDocsNav";
import { Header } from "../../_components/Header";

type RustDocsShellProps = {
  docs: DocEntry[];
  doc: DocContent;
};

export default function RustDocsShell({ docs, doc }: RustDocsShellProps) {
  const markdownSource = doc.raw || "";
  const { html: contentHtml, toc } = renderMarkdown(markdownSource);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pb-16 sm:pb-20 pt-20 lg:pt-16">
        <div className="mx-auto max-w-7xl px-3 sm:px-4">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_220px]">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block lg:pt-2">
              <RustDocsNav docs={docs} activeSlug={doc.slug} />
            </aside>

            {/* Main Content */}
            <main className="min-w-0">
              <div className="surface-strong rounded-2xl sm:rounded-[28px] px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="tag-rust rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.22em]">
                    {doc.section}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[color:var(--muted)]">{doc.slug}</span>
                </div>
                <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-[color:var(--ink)]">
                  {doc.title}
                </h1>
                <div className="mt-4 sm:mt-6 doc-prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
              </div>

              {/* Mobile TOC - shows at bottom */}
              {toc.length > 0 && (
                <div className="lg:hidden mt-4 sm:mt-6 surface rounded-2xl p-4">
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[color:var(--muted)] font-medium">
                    On This Page
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="inline-block rounded-lg bg-[rgba(251,191,36,0.1)] px-2.5 py-1 text-xs text-[color:var(--ink)] hover:bg-[rgba(251,191,36,0.2)] transition-colors"
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </main>

            {/* Right Sidebar - Desktop Only */}
            <aside className="hidden xl:block">
              <div className="sticky top-20 space-y-4">
                <div className="surface rounded-2xl p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    On This Page
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    {toc.length === 0 ? (
                      <div className="text-[color:var(--muted)]">No sections</div>
                    ) : (
                      toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`toc-link block ${
                            item.level === 3 ? "pl-3 text-xs" : "font-medium"
                          }`}
                        >
                          {item.text}
                        </a>
                      ))
                    )}
                  </div>
                </div>

                <div className="surface rounded-2xl p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    Tips
                  </div>
                  <div className="mt-3 text-sm text-[color:var(--muted)]">
                    indusagi (Rust) builds as a Cargo workspace and ships the `indusagi-cli` binary. It is
                    the 100%-Rust edition of the agent framework — the same subsystems as the TypeScript and
                    Python editions.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
