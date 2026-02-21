"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Doc structure for navigation
const docsStructure = {
  package: {
    label: "Package Docs",
    color: "orange",
    sections: [
      { title: "Getting Started", slug: "getting-started" },
      { title: "Package Exports", slug: "package-exports" },
      { title: "AI Module Overview", slug: "ai/README" },
      { title: "AI API Reference", slug: "ai/api-reference" },
      { title: "AI Providers", slug: "ai/providers" },
      { title: "AI Streaming", slug: "ai/streaming" },
      { title: "AI Models", slug: "ai/models" },
      { title: "Agent Overview", slug: "agent/README" },
      { title: "Agent API Reference", slug: "agent/api-reference" },
      { title: "Agent Loop & Tools", slug: "agent/loop-and-tools" },
      { title: "TUI Overview", slug: "tui/README" },
      { title: "TUI Components", slug: "tui/components" },
    ]
  },
  cli: {
    label: "CLI Docs",
    color: "cyan",
    sections: [
      { title: "Getting Started", slug: "getting-started" },
      { title: "Configuration", slug: "configuration" },
      { title: "Extensions", slug: "extensions" },
      { title: "Skills", slug: "skills" },
      { title: "Hooks", slug: "hooks" },
      { title: "Session Management", slug: "session" },
      { title: "RPC Mode", slug: "rpc" },
      { title: "SDK API", slug: "sdk" },
      { title: "Themes", slug: "themes" },
      { title: "Keybindings", slug: "keybindings" },
      { title: "TUI Components", slug: "tui" },
      { title: "Prompt Templates", slug: "prompt-templates" },
    ]
  }
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Determine which docs section we're in
  const isDocs = pathname.startsWith("/docs");
  const isCLI = pathname.startsWith("/cli");
  
  useEffect(() => {
    // Close menu on route change
    setMobileMenuOpen(false);
  }, [pathname]);

  // Auto-expand section when menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      if (isDocs) {
        setExpandedSection("package");
      } else if (isCLI) {
        setExpandedSection("cli");
      }
    }
  }, [mobileMenuOpen, isDocs, isCLI]);

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
              <Link
                href="/docs"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isDocs
                    ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                Docs
              </Link>
              <Link
                href="/cli"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isCLI
                    ? "bg-[rgba(34,211,238,0.15)] text-[color:var(--accent-2)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                CLI
              </Link>
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

            {/* Package Docs Section */}
            <div className="mb-2">
              <button
                onClick={() => setExpandedSection(expandedSection === "package" ? null : "package")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isDocs
                    ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]"
                    : "text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#fe6027] to-[#ff8a50] flex items-center justify-center text-white text-xs">
                    📦
                  </span>
                  Package Docs
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${expandedSection === "package" ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              
              {expandedSection === "package" && (
                <div className="mt-1 ml-4 pl-4 border-l border-[color:var(--border)] space-y-0.5">
                  {docsStructure.package.sections.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/docs/${doc.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        pathname === `/docs/${doc.slug}`
                          ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)] font-medium"
                          : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.03)]"
                      }`}
                    >
                      {doc.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CLI Docs Section */}
            <div className="mb-2">
              <button
                onClick={() => setExpandedSection(expandedSection === "cli" ? null : "cli")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isCLI
                    ? "bg-[rgba(34,211,238,0.15)] text-[color:var(--accent-2)]"
                    : "text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white text-xs">
                    ⚡
                  </span>
                  CLI Docs
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${expandedSection === "cli" ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              
              {expandedSection === "cli" && (
                <div className="mt-1 ml-4 pl-4 border-l border-[#2a2a2a] space-y-0.5">
                  {docsStructure.cli.sections.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/cli/${doc.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        pathname === `/cli/${doc.slug}`
                          ? "bg-[rgba(34,211,238,0.15)] text-[color:var(--accent-2)] font-medium"
                          : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.03)]"
                      }`}
                    >
                      {doc.title}
                    </Link>
                  ))}
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
