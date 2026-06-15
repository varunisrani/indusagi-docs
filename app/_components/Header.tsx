"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// The four documentation families, in nav order. A single "Docs" dropdown lists them all.
const DOC_FAMILIES = [
  { href: "/docs", label: "IndusAGI (TypeScript)", note: "Framework", badge: "TS", from: "from-[#fe6027]", to: "to-[#ff8a50]", accent: "#ff7a45" },
  { href: "/cli", label: "IndusAGI Coding Agent (TypeScript)", note: "Coding-agent CLI", badge: "TS", from: "from-cyan-500", to: "to-teal-600", accent: "#22d3ee" },
  { href: "/python", label: "IndusAGI (Python)", note: "Framework", badge: "PY", from: "from-emerald-500", to: "to-green-600", accent: "#34d399" },
  { href: "/python-cli", label: "IndusAGI Coding Agent (Python)", note: "Coding-agent CLI", badge: "PY", from: "from-violet-500", to: "to-purple-600", accent: "#a78bfa" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [docsMenuOpen, setDocsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine which docs family we're in
  const isDocs = pathname.startsWith("/docs");
  const isCLI = pathname.startsWith("/cli");
  const isPythonCli = pathname.startsWith("/python-cli");
  const isPython = pathname.startsWith("/python") && !isPythonCli;
  // /python-cli also starts with /python, so the framework match must exclude it.
  const isActiveFamily = (href: string) =>
    href === "/python" ? isPython : pathname.startsWith(href);
  const anyDocsActive = isDocs || isCLI || isPython || isPythonCli;

  useEffect(() => {
    // Close menus on route change
    setMobileMenuOpen(false);
    setDocsMenuOpen(false);
  }, [pathname]);

  // Auto-expand the Docs group when the mobile menu opens on a docs page
  useEffect(() => {
    if (mobileMenuOpen && anyDocsActive) {
      setExpandedSection("docs");
    }
  }, [mobileMenuOpen, anyDocsActive]);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-[color:var(--ink)] hover:text-[color:var(--accent)] transition-colors"
            >
              <img
                src="https://i.ibb.co/PvCrYrPn/IND-wordmark-tr.png"
                alt="Indusagi"
                className="h-6 sm:h-7 md:h-8 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                Home
              </Link>

              {/* Docs dropdown — lists the four documentation families */}
              <div className="relative">
                <button
                  onClick={() => setDocsMenuOpen((v) => !v)}
                  aria-expanded={docsMenuOpen}
                  aria-haspopup="menu"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    anyDocsActive || docsMenuOpen
                      ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]"
                      : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"
                  }`}
                >
                  Docs
                  <svg
                    width="14"
                    height="14"
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
                    {/* click-away catcher */}
                    <div className="fixed inset-0 z-40" onClick={() => setDocsMenuOpen(false)} />
                    <div
                      role="menu"
                      className="absolute left-0 mt-2 w-80 z-50 rounded-2xl border border-[color:var(--border)] bg-[#161616] shadow-xl p-2"
                    >
                      <div className="px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
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
                            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                              active ? "bg-[rgba(255,255,255,0.06)]" : "hover:bg-[rgba(255,255,255,0.04)]"
                            }`}
                          >
                            <span
                              className={`w-7 h-7 shrink-0 rounded-lg bg-gradient-to-br ${f.from} ${f.to} flex items-center justify-center text-white text-[10px] font-semibold`}
                            >
                              {f.badge}
                            </span>
                            <span className="min-w-0">
                              <span
                                className="block text-sm font-medium text-[color:var(--ink)] truncate"
                                style={active ? { color: f.accent } : undefined}
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
                href="https://www.npmjs.com/package/indusagi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-[color:var(--accent)] text-white px-3 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity ml-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM4.24 4.5h15.52v15.52H4.24V4.5zm3.12 3.12v9.28h3.12v-6.16h3.04v6.16h3.12V7.62H7.36z" />
                </svg>
                npm
              </a>
              <a
                href="https://pypi.org/project/indusagi/"
                target="_blank"
                rel="noopener noreferrer"
                title="indusagi for Python (framework)"
                className="flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] text-[color:var(--muted)] px-3 py-1.5 text-sm font-medium hover:text-[#34d399] hover:border-[#34d399] transition-colors ml-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                Python
              </a>
              <a
                href="https://github.com/varunisrani/indusagi.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] text-[color:var(--muted)] px-3 py-1.5 text-sm font-medium hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors ml-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0.5C5.65 0.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.24.78-.54 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.05.77 2.12 0 1.53-.02 2.76-.02 3.14 0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                Indusagi SDK
              </a>
              <a
                href="https://github.com/varunisrani/indusagi-coding-agent.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] text-[color:var(--muted)] px-3 py-1.5 text-sm font-medium hover:text-[color:var(--accent-2)] hover:border-[color:var(--accent-2)] transition-colors ml-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0.5C5.65 0.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.24.78-.54 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.05.77 2.12 0 1.53-.02 2.76-.02 3.14 0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                Indusagi CLI
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[color:var(--border)] hover:border-[color:var(--accent)] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0f0f0f] pt-12 overflow-y-auto">
          <nav className="p-4 pb-24">
            {/* Main Navigation */}
            <div className="space-y-1 mb-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]"
                    : "text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Home
              </Link>
            </div>

            {/* Divider */}
            <div className="h-px bg-[color:var(--border)] my-3" />

            {/* Docs Section — the four documentation families */}
            <div className="mb-2">
              <button
                onClick={() => setExpandedSection(expandedSection === "docs" ? null : "docs")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  anyDocsActive
                    ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]"
                    : "text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#fe6027] to-[#ff8a50] flex items-center justify-center text-white text-xs">
                    DOC
                  </span>
                  Docs
                </div>
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
                <div className="mt-1 ml-4 pl-4 border-l border-[color:var(--border)] space-y-0.5">
                  {DOC_FAMILIES.map((f) => {
                    const active = isActiveFamily(f.href);
                    return (
                      <Link
                        key={f.href}
                        href={f.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          active
                            ? "bg-[rgba(255,255,255,0.06)] font-medium"
                            : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.03)]"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 shrink-0 rounded-lg bg-gradient-to-br ${f.from} ${f.to} flex items-center justify-center text-white text-[10px] font-semibold`}
                        >
                          {f.badge}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate" style={active ? { color: f.accent } : undefined}>
                            {f.label}
                          </span>
                          <span className="block text-xs text-[color:var(--muted)]">{f.note}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-[color:var(--border)] my-3" />

            {/* NPM Links */}
            <div className="space-y-1">
              <a
                href="https://www.npmjs.com/package/indusagi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[color:var(--accent)]">
                  <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM4.24 4.5h15.52v15.52H4.24V4.5zm3.12 3.12v9.28h3.12v-6.16h3.04v6.16h3.12V7.62H7.36z" />
                </svg>
                indusagi (SDK)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-[color:var(--muted)]">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <a
                href="https://www.npmjs.com/package/indusagi-coding-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[color:var(--accent-2)]">
                  <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM4.24 4.5h15.52v15.52H4.24V4.5zm3.12 3.12v9.28h3.12v-6.16h3.04v6.16h3.12V7.62H7.36z" />
                </svg>
                indusagi-coding-agent (CLI)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-[color:var(--muted)]">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <a
                href="https://pypi.org/project/indusagi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#34d399" }}>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                indusagi (Python)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-[color:var(--muted)]">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <a
                href="https://pypi.org/project/induscode/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a78bfa" }}>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                induscode (Python)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-[color:var(--muted)]">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <a
                href="https://github.com/varunisrani/indusagi.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[color:var(--accent)]">
                  <path d="M12 0.5C5.65 0.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.24.78-.54 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.05.77 2.12 0 1.53-.02 2.76-.02 3.14 0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                Indusagi SDK
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-[color:var(--muted)]">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <a
                href="https://github.com/varunisrani/indusagi-coding-agent.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[color:var(--accent-2)]">
                  <path d="M12 0.5C5.65 0.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.24.78-.54 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.05.77 2.12 0 1.53-.02 2.76-.02 3.14 0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                Indusagi CLI
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-[color:var(--muted)]">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            {/* Install hint */}
            <div className="mt-6 bg-[rgba(255,122,69,0.1)] rounded-xl p-4 border border-[rgba(255,122,69,0.2)]">
              <div className="text-xs text-[color:var(--muted)] mb-2">Quick install</div>
              <code className="text-sm text-[color:var(--accent)] font-mono">
                npm install indusagi
              </code>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
