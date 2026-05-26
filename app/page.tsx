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
              "text": "Indusagi is an open-source, fast TypeScript AI agent framework combined with a terminal-first Coding Agent CLI. It gives developers full control over memory systems, background execution loops, tool integration, and interactive terminal interfaces."
            }
          },
          {
            "@type": "Question",
            "name": "Do I have to pay to use Indusagi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Indusagi is fully free, open-source software distributed under the MIT license, meaning you can use it for both commercial and personal projects without any usage fees."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need cloud-based LLM APIs to run Indusagi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. While Indusagi supports cloud models like OpenAI, Anthropic Claude, and Groq, it also integrates natively with local LLM environments like Ollama and Llama.cpp for complete offline privacy."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to set up and get started?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial setup takes less than two minutes. You can install the packages via npm or run the CLI immediately to start interacting with your workspace and creating custom AI agents."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Indusagi different from other AI coding agents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike rigid commercial coding agents, Indusagi is a highly customizable framework offering extensible hook listeners, terminal user interface (TUI) widgets, and smart session compaction to optimize context usage and reduce cost."
            }
          },
          {
            "@type": "Question",
            "name": "How does the CLI manage token usage and context windows?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indusagi CLI integrates automated session compaction which compiles conversational history and branch updates into semantic summaries, keeping active context short and context costs down."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support Model Context Protocol (MCP) servers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Indusagi has built-in client support for MCP servers, allowing your custom agents to connect to any external tools, databases, or APIs adhering to the protocol."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to compile TypeScript files to build CLI extensions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The Coding Agent CLI loads custom extensions dynamically using jiti, allowing you to write, edit, and load TypeScript extension modules directly without a compilation step."
            }
          },
          {
            "@type": "Question",
            "name": "How do I customize the terminal UI (TUI) widgets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Indusagi package provides fully modular React-style components for terminal screens. You can customize theme layouts, loading indicators, and input handlers using standard configurations in your agent codebase."
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

          {/* Frequently Asked Questions Section */}
          <div className="mt-16 sm:mt-24 px-2 sm:px-0">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[color:var(--ink)] mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-[color:var(--muted)]">
                Direct answers to common technical and general inquiries about Indusagi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-12">
              <div className="landing-card rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                  What is Indusagi?
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  Indusagi is an open-source developer framework consisting of a TypeScript SDK and a terminal-first Coding Agent CLI. It is engineered to give developers granular programmatic control over autonomous AI agent loops, memory directories, and console UI rendering.
                </p>
              </div>

              <div className="landing-card rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                  Do I have to pay to use Indusagi?
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  No. Both the TypeScript SDK and the CLI package are completely free to use under the MIT open-source license. You can deploy it for personal, institutional, or production-level commercial services without licensing fees.
                </p>
              </div>

              <div className="landing-card rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                  Do I need cloud-based LLM APIs to run Indusagi?
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  No. While cloud APIs from Anthropic, OpenAI, and Groq are fully integrated, Indusagi natively supports local inference. You can configure it to execute completely offline using local providers such as Ollama and Llama.cpp.
                </p>
              </div>

              <div className="landing-card rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                  How long does it take to set up and get started?
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  Initial environment initialization takes less than two minutes. You can install the CLI directly via npm, run the setup wizard to connect to your preferred model provider, and start working immediately.
                </p>
              </div>

              <div className="landing-card rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                  What makes Indusagi different from other AI coding agents?
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  Unlike rigid, black-box AI platforms, Indusagi provides full code-level control. Developers can write custom hooks to intercept file operations, design dynamic console UI widgets, and configure granular token boundaries.
                </p>
              </div>

              <div className="landing-card rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                  How does the CLI manage token usage and context windows?
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  The terminal CLI uses an automated session compaction algorithm. It periodically compiles extended conversation histories and active branch logs into semantic text summaries, preserving long-term project context while reducing API costs.
                </p>
              </div>

              <div className="landing-card rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                  Do you support Model Context Protocol (MCP) servers?
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  Yes. The framework includes built-in client capabilities for MCP. This enables your custom agents to interact seamlessly with any third-party tools, local databases, or external microservices running the protocol.
                </p>
              </div>

              <div className="landing-card rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                  Do I need to compile TypeScript files to build CLI extensions?
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  No. The Coding Agent CLI loads dynamic extension modules at runtime using the jiti compilation loader. You can write and execute TypeScript extension files immediately without manual pre-compilation.
                </p>
              </div>

              <div className="landing-card rounded-2xl p-6 md:col-span-2">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--ink)] mb-2">
                  How do I customize the terminal UI (TUI) widgets?
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  The SDK package includes a set of modular terminal widgets for dashboard design. You can programmatically set custom layouts, loading states, and text color schemes within your agent startup configuration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
