"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// The six documentation families, in nav order. A single "Docs" dropdown lists them all.
const DOC_FAMILIES = [
  { href: "/docs", label: "IndusAGI (TypeScript)", note: "Framework", badge: "TS" },
  { href: "/cli", label: "IndusAGI Coding Agent (TypeScript)", note: "Coding-agent CLI", badge: "TS" },
  { href: "/python", label: "IndusAGI (Python)", note: "Framework", badge: "PY" },
  { href: "/python-cli", label: "IndusAGI Coding Agent (Python)", note: "Coding-agent CLI", badge: "PY" },
  { href: "/rust", label: "IndusAGI (Rust)", note: "Framework", badge: "RS" },
  { href: "/rust-cli", label: "IndusAGI Coding Agent (Rust)", note: "Coding-agent CLI", badge: "RS" },
];

function useTheme(): [string, () => void] {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const current = document.documentElement.classList.contains("light") ? "light" : "dark";
    setTheme(current);
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next);
    root.style.colorScheme = next;
    try {
      localStorage.setItem("indusagi-theme", next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  };
  return [theme, toggle];
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [docsMenuOpen, setDocsMenuOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const pathname = usePathname();

  const isPythonCli = pathname.startsWith("/python-cli");
  const isPython = pathname.startsWith("/python") && !isPythonCli;
  const isRustCli = pathname.startsWith("/rust-cli");
  const isRust = pathname.startsWith("/rust") && !isRustCli;
  const isActiveFamily = (href: string) =>
    href === "/python" ? isPython : href === "/rust" ? isRust : pathname.startsWith(href);
  const anyDocsActive = DOC_FAMILIES.some((f) => isActiveFamily(f.href));

  useEffect(() => {
    setMobileMenuOpen(false);
    setDocsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen && anyDocsActive) setExpandedSection("docs");
  }, [mobileMenuOpen, anyDocsActive]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLink =
    "px-3 py-2 rounded-lg text-sm font-medium transition-colors text-[color:var(--muted)] hover:text-[color:var(--fg)]";

  return (
    <>
      <header
        className="sticky top-0 z-[300] border-b border-[color:var(--border)]"
        style={{
          background: "color-mix(in srgb, var(--bg) 88%, transparent)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3.5 h-14">
            {/* Logo (old IndusAGI wordmark) */}
            <Link href="/" className="inline-flex items-center no-underline text-[color:var(--fg)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/indusagi-logo.png" alt="IndusAGI" className="site-logo h-7 sm:h-8" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1.5 ml-2">
              <Link href="/" className={navLink}>
                Home
              </Link>

              {/* Docs dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDocsMenuOpen((v) => !v)}
                  aria-expanded={docsMenuOpen}
                  aria-haspopup="menu"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    anyDocsActive || docsMenuOpen
                      ? "text-[color:var(--accent)]"
                      : "text-[color:var(--muted)] hover:text-[color:var(--fg)]"
                  }`}
                >
                  Docs
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform ${docsMenuOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {docsMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setDocsMenuOpen(false)} />
                    <div
                      role="menu"
                      className="absolute left-0 mt-2 w-80 z-50 rounded-2xl border border-[color:var(--border)] p-2 shadow-xl"
                      style={{ background: "var(--surface)" }}
                    >
                      <div className="px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] font-mono">
                        Documentation
                      </div>
                      {DOC_FAMILIES.map((f) => {
                        const active = isActiveFamily(f.href);
                        return (
                          <Link
                            key={f.href}
                            href={f.href}
                            role="menuitem"
                            onClick={() => setDocsMenuOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[color:var(--accent-soft)]"
                          >
                            <span
                              className="w-7 h-7 shrink-0 rounded-lg flex items-center justify-center text-white text-[10px] font-semibold"
                              style={{ background: "var(--accent)" }}
                            >
                              {f.badge}
                            </span>
                            <span className="min-w-0">
                              <span
                                className="block text-sm font-medium truncate"
                                style={{ color: active ? "var(--accent)" : "var(--fg)" }}
                              >
                                {f.label}
                              </span>
                              <span className="block text-xs text-[color:var(--muted)]">{f.note}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              <a
                href="https://github.com/varunisrani/indusagi"
                target="_blank"
                rel="noopener noreferrer"
                className={navLink}
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/indusagi"
                target="_blank"
                rel="noopener noreferrer"
                className={navLink}
              >
                npm
              </a>
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2.5 ml-auto">
              <button
                onClick={toggleTheme}
                title="Toggle theme"
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[9px] border border-[color:var(--border)] cursor-pointer text-[15px]"
                style={{ background: "var(--surface)", color: "var(--fg)" }}
              >
                {theme === "dark" ? "☀" : "☾"}
              </button>

              <Link
                href="/docs"
                className="hidden sm:inline-flex px-[17px] py-[9px] rounded-[9px] text-sm font-semibold no-underline whitespace-nowrap text-white"
                style={{ background: "var(--accent)" }}
              >
                Get started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center w-10 h-[38px] rounded-[9px] border border-[color:var(--border)] cursor-pointer text-[17px]"
                style={{ background: "var(--surface)", color: "var(--fg)" }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 pt-14 overflow-y-auto"
          style={{ background: "var(--bg)" }}
        >
          <nav className="p-4 pb-24 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-semibold text-[color:var(--fg)]"
            >
              Home
            </Link>

            <button
              onClick={() => setExpandedSection(expandedSection === "docs" ? null : "docs")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                anyDocsActive ? "text-[color:var(--accent)]" : "text-[color:var(--fg)]"
              }`}
            >
              Docs
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform ${expandedSection === "docs" ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedSection === "docs" && (
              <div className="ml-4 pl-4 border-l border-[color:var(--border)] flex flex-col gap-0.5">
                {DOC_FAMILIES.map((f) => {
                  const active = isActiveFamily(f.href);
                  return (
                    <Link
                      key={f.href}
                      href={f.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm"
                      style={{ color: active ? "var(--accent)" : "var(--muted)" }}
                    >
                      <span
                        className="w-6 h-6 shrink-0 rounded-lg flex items-center justify-center text-white text-[10px] font-semibold"
                        style={{ background: "var(--accent)" }}
                      >
                        {f.badge}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate">{f.label}</span>
                        <span className="block text-xs text-[color:var(--muted)]">{f.note}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}

            <a
              href="https://github.com/varunisrani/indusagi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl text-base font-semibold text-[color:var(--muted)]"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.npmjs.com/package/indusagi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl text-base font-semibold text-[color:var(--muted)]"
            >
              npm ↗
            </a>
            <Link
              href="/docs"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1.5 px-4 py-3 rounded-xl text-center text-base font-semibold text-white"
              style={{ background: "var(--accent)" }}
            >
              Get started
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
