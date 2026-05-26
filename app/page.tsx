import Link from "next/link";
import { Header } from "./_components/Header";
import { NpmStats } from "./_components/NpmStats";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.indusagi.com/#sdk",
        "name": "Indusagi SDK",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "downloadUrl": "https://www.npmjs.com/package/indusagi",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        },
        "description": "Fast, open-source TypeScript SDK and framework for building autonomous AI agents with full control over memory, tools, and streaming.",
        "codeRepository": "https://github.com/varunisrani/indusagi",
        "license": "https://opensource.org/licenses/MIT",
        "author": {
          "@type": "Organization",
          "name": "Indusagi",
          "url": "https://www.indusagi.com"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.indusagi.com/#cli",
        "name": "Indusagi Coding Agent CLI",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "downloadUrl": "https://www.npmjs.com/package/indusagi-coding-agent",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        },
        "description": "Powerful terminal-first AI assistant CLI with extensions, custom skills, Hooks, background agent threads, and RPC capabilities.",
        "codeRepository": "https://github.com/varunisrani/indusagi-coding-agent",
        "license": "https://opensource.org/licenses/MIT",
        "author": {
          "@type": "Organization",
          "name": "Indusagi",
          "url": "https://www.indusagi.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.indusagi.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Indusagi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indusagi is an open-source developer framework consisting of a TypeScript SDK and a terminal-first Coding Agent CLI designed to build, run, and scale highly customized AI agents."
            }
          },
          {
            "@type": "Question",
            "name": "Is Indusagi free and MIT licensed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Both the Indusagi TypeScript package and the Coding Agent CLI are fully open-source under the MIT license, free for both individual and commercial application use."
            }
          },
          {
            "@type": "Question",
            "name": "Does Indusagi support local LLM models?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Indusagi supports local LLM execution via Ollama, Bedrock, Llama.cpp, and other local providers, in addition to cloud APIs from Anthropic, OpenAI, and Groq."
            }
          },
          {
            "@type": "Question",
            "name": "Can I extend the Coding Agent CLI with custom skills?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The Indusagi Coding Agent CLI has native support for custom skills, hook intercepts, background execution sub-agents, and Model Context Protocol (MCP) server configurations."
            }
          },
          {
            "@type": "Question",
            "name": "How does memory management work in Indusagi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indusagi features a sophisticated multi-tier memory system including semantic memory search, long-term storage, and intelligent context compaction to minimize cost and maximize relevance."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                  PKG
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors">
                    Indusagi Package
                  </h2>
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-1 mb-2 sm:mb-3">
                    TypeScript SDK & Components
                  </p>
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] hidden sm:block">
                    All-in-one bundle: AI providers, agent loop, and TUI widgets.
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
                  CLI
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
    </main>
  );
}
