import Link from "next/link";
import { Header } from "./_components/Header";
import { NpmStats } from "./_components/NpmStats";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center px-3 sm:px-4 pt-16 sm:pt-20 pb-8 sm:pb-10">
        <div className="max-w-5xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--ink)] mb-3 sm:mb-4">
              Indusagi Documentation
            </h1>
            <p className="text-base sm:text-lg text-[color:var(--muted)]">
              Choose the documentation you need
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-0">
            {/* Indusagi Package Docs */}
            <Link
              href="/docs"
              className="group landing-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:border-[color:var(--accent)] cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#fe6027] to-[#ff8a50] flex items-center justify-center text-white text-xl sm:text-2xl font-bold shrink-0">
                  📦
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors">
                    Indusagi Package
                  </h2>
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-1 mb-2 sm:mb-3">
                    TypeScript SDK & Components
                  </p>
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] hidden sm:block">
                    All-in-one bundle: AI providers, agent loop, TUI widgets, and Web UI components.
                    Build your own agent interfaces.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <span className="tag rounded-full px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                      AI Module
                    </span>
                    <span className="tag rounded-full px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                      Agent Loop
                    </span>
                    <span className="tag rounded-full px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                      TUI
                    </span>
                    <span className="tag rounded-full px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                      Web UI
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Coding Agent CLI Docs */}
            <Link
              href="/cli"
              className="group landing-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:border-[color:var(--accent)] cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold shrink-0">
                  ⚡
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors">
                    Coding Agent CLI
                  </h2>
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-1 mb-2 sm:mb-3">
                    Terminal-First AI Assistant
                  </p>
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] hidden sm:block">
                    A powerful CLI coding agent with extensions, skills, hooks, and session management.
                    Interactive, RPC, or SDK modes.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <span className="tag-cli rounded-full px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                      Extensions
                    </span>
                    <span className="tag-cli rounded-full px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                      Skills
                    </span>
                    <span className="tag-cli rounded-full px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                      RPC Mode
                    </span>
                    <span className="tag-cli rounded-full px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs">
                      SDK
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* NPM Stats Section */}
          <div className="mt-10 sm:mt-16 px-2 sm:px-0">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--ink)] mb-2">
                NPM Packages
              </h2>
              <p className="text-xs sm:text-sm text-[color:var(--muted)]">
                Real-time download statistics from npm registry
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <NpmStats package="indusagi" label="SDK Package" />
              <NpmStats package="indusagi-coding-agent" label="CLI Package" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
