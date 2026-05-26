import Link from "next/link";
import { Header } from "../_components/Header";

export default function IndusagiVsAider() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.indusagi.com/indusagi-vs-aider/#software",
        "name": "Indusagi vs Aider Comparison",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "downloadUrl": "https://www.npmjs.com/package/indusagi",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        },
        "description": "Technical comparison between the programmable TypeScript autonomous framework Indusagi and the Python CLI tool Aider.",
        "codeRepository": "https://github.com/varunisrani/indusagi",
        "license": "https://opensource.org/licenses/MIT",
        "author": {
          "@type": "Organization",
          "name": "Indusagi",
          "url": "https://www.indusagi.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.indusagi.com/indusagi-vs-aider/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the primary architectural difference between Indusagi and Aider?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aider is a standalone, terminal-based coding tool written in Python designed to act as a chat companion. Indusagi is a comprehensive TypeScript developer SDK and framework, which provides a standard coding CLI but fundamentally allows you to build, customize, and embed your own agent loops, memory schemes, and TUIs into separate applications."
            }
          },
          {
            "@type": "Question",
            "name": "Can I import Indusagi as a library in my own TypeScript apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While Aider is purely a standalone CLI tool, Indusagi provides a fully documented TypeScript SDK package (npm: indusagi). You can import it to instantiate custom providers, memory stores, TUI widgets, and agent loops directly inside your own server or client apps."
            }
          },
          {
            "@type": "Question",
            "name": "How do the extension systems compare?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aider has limited support for custom extensions, requiring edits to its core Python codebase. Indusagi CLI features a first-class runtime extension ecosystem loaded dynamically via jiti, allowing you to write, save, and execute TypeScript hook listeners on-the-fly."
            }
          },
          {
            "@type": "Question",
            "name": "Which language environments do they target?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aider is built in Python and runs within python command shells. Indusagi is built natively in TypeScript, making it fully type-safe and optimized for Node.js, Next.js, and web-centric development environments."
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
        <div className="max-w-4xl w-full">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[color:var(--muted)] hover:text-[color:var(--accent-2)] transition-colors mb-6"
          >
            ← Back to Home
          </Link>

          <article className="doc-prose">
            <h1>Indusagi vs Aider: Standalone CLI vs Programmable SDK Framework</h1>
            <p className="text-base sm:text-lg text-[color:var(--muted)] leading-relaxed mt-2 mb-8">
              A deep-dive technical comparison between <strong className="text-[color:var(--ink)]">Indusagi</strong>, the programmable TypeScript SDK and CLI framework, and <strong className="text-[color:var(--ink)]">Aider</strong>, the popular Python CLI-based coding companion. Contrast runtime flexibility, platform customizability, and API design.
            </p>

            <h2>Introduction: CLI Utility vs Agent Framework</h2>
            <p>
              Autonomous terminal-based coding agents have dramatically shifted how developers write code. Among local, terminal-first options, Aider has earned popularity as a functional CLI companion. However, as teams move from simple interactive chats to complex, custom workflows, the architectural differences between an immutable tool and a programmable framework become highly apparent.
            </p>
            <ul>
              <li><strong>The Standalone CLI (Aider):</strong> A python-built command line program. It excels at parsing chat commands in the terminal and applying search-and-replace updates directly to git. However, its logic is rigid, and it is difficult to embed into external applications.</li>
              <li><strong>The Programmable SDK (Indusagi):</strong> A typescript-built agent framework. While it includes a terminal-first Coding Agent CLI, it is designed from the ground up as an extensible SDK. You can import its classes, write custom agent loops, build tailored interfaces, and hook custom listeners directly into the lifecycle.</li>
            </ul>

            <h2>Architectural Deep-Dive</h2>

            <h3>1. The TypeScript SDK Paradigm</h3>
            <p>
              Aider is a closed utility built in Python. If you want to use Aider's code-modification engine as part of a larger Slack bot, web dashboard, or custom enterprise script, you are forced to run shell subprocesses and parse CLI output logs.
            </p>
            <p>
              Indusagi is a native TypeScript library. By installing the <code>indusagi</code> package from npm, you gain access to a fully typed SDK. You can instantiate custom provider connections, configure semantic vector memories, instantiate agent threads, and route streaming outputs directly inside your standard Node.js or Next.js applications with zero subprocess wrappers.
            </p>

            <h3>2. Dynamic TypeScript Runtime Extensions</h3>
            <p>
              Aider features a rigid configuration scheme, limiting customizations to default command flags and preset prompt configurations. Modifying tool behaviors or hooking into core decision trees requires modifying Aider's internal Python files directly.
            </p>
            <p>
              Indusagi CLI provides a runtime extension framework. You can write custom extensions in TypeScript, using hooks to intercept file operations, run bespoke compilers, or filter AI model payloads. Because these are loaded using <code>jiti</code>, they compile on-the-fly and execute instantly within the shell.
            </p>

            <h3>3. Terminal UI (TUI) vs Standard Console Log</h3>
            <p>
              Aider renders interactions using standard vertical terminal logs. While functional, long-running processes, multi-file analyses, and background sub-agent steps quickly clutter the terminal history.
            </p>
            <p>
              Indusagi CLI features a full, beautiful Terminal User Interface (TUI) dashboard. It provides structured React-style widgets to display real-time background task states, active directory trees, and concurrent sub-agent steps, keeping the developer fully updated without stdout flooding.
            </p>

            <h2>Feature Comparison Matrix</h2>
            <table>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Indusagi (SDK + CLI)</th>
                  <th>Aider (CLI Tool)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Primary Runtime</strong></td>
                  <td>TypeScript / Node.js (highly typed)</td>
                  <td>Python</td>
                </tr>
                <tr>
                  <td><strong>SDK Integration</strong></td>
                  <td>Yes (Import modules directly in TS/JS apps)</td>
                  <td>No (CLI utility only)</td>
                </tr>
                <tr>
                  <td><strong>Extension Hooks</strong></td>
                  <td>First-class runtime hook listeners via `jiti`</td>
                  <td>Limited (manual codebase fork required)</td>
                </tr>
                <tr>
                  <td><strong>UI Components</strong></td>
                  <td>Rich, dynamic TUI widgets and status panels</td>
                  <td>Standard vertical stdout print loops</td>
                </tr>
                <tr>
                  <td><strong>Model Support</strong></td>
                  <td>Direct local & cloud APIs (OpenAI, Anthropic, Ollama)</td>
                  <td>Wide provider support via LiteLLM</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-4 mt-6">
              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">What is the primary architectural difference between Indusagi and Aider?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Aider is a standalone, terminal-based coding tool written in Python designed to act as a chat companion. Indusagi is a comprehensive TypeScript developer SDK and framework, which provides a standard coding CLI but fundamentally allows you to build, customize, and embed your own agent loops, memory schemes, and TUIs into separate applications.
                </p>
              </div>

              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">Can I import Indusagi as a library in my own TypeScript apps?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Yes. While Aider is purely a standalone CLI tool, Indusagi provides a fully documented TypeScript SDK package (npm: indusagi). You can import it to instantiate custom providers, memory stores, TUI widgets, and agent loops directly inside your own server or client apps.
                </p>
              </div>

              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">How do the extension systems compare?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Aider has limited support for custom extensions, requiring edits to its core Python codebase. Indusagi CLI features a first-class runtime extension ecosystem loaded dynamically via jiti, allowing you to write, save, and execute TypeScript hook listeners on-the-fly.
                </p>
              </div>

              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">Which language environments do they target?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Aider is built in Python and runs within python command shells. Indusagi is built natively in TypeScript, making it fully type-safe and optimized for Node.js, Next.js, and web-centric development environments.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
              <p className="text-sm text-[color:var(--muted)]">
                Ready to explore programmable agent SDKs? Read the full <Link href="/docs" className="text-[color:var(--accent-2)] hover:underline">SDK Reference Docs</Link> or configure custom extensions in the <Link href="/cli" className="text-[color:var(--accent-2)] hover:underline">CLI Configuration Manual</Link>.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
