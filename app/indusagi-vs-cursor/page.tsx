import Link from "next/link";
import { Header } from "../_components/Header";

export default function IndusagiVsCursor() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.indusagi.com/indusagi-vs-cursor/#software",
        "name": "Indusagi vs Cursor Comparison",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "downloadUrl": "https://www.npmjs.com/package/indusagi",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        },
        "description": "Technical comparison between the open-source TypeScript autonomous framework Indusagi and the proprietary AI editor Cursor.",
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
        "@id": "https://www.indusagi.com/indusagi-vs-cursor/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the primary difference between Indusagi and Cursor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cursor is a proprietary desktop fork of VS Code that bundles closed-source AI assistance. Indusagi is an open-source, terminal-first developer framework (SDK + CLI) designed to build and execute completely customizable coding agents inside any existing terminal, shell, or editor environment."
            }
          },
          {
            "@type": "Question",
            "name": "Do I have to switch editors to use Indusagi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Indusagi operates in your terminal, meaning it integrates with whatever development environment you already use, including vanilla VS Code, Neovim, Emacs, or JetBrains IDEs, without requiring you to switch applications."
            }
          },
          {
            "@type": "Question",
            "name": "Does Indusagi offer better model flexibility than Cursor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While Cursor routes requests through their proprietary proxy backend and limits local model integrations, Indusagi runs entirely locally. You can direct requests to any cloud LLM API, local Ollama endpoints, or custom private host environments with zero proxy middle-men."
            }
          },
          {
            "@type": "Question",
            "name": "Is Indusagi free and open source?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Indusagi is fully open-source under the MIT license, meaning it is entirely free to use, host, and modify forever. Cursor uses a commercial proprietary model with subscription tiers."
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
            <h1>Indusagi vs Cursor: Architecting Open AI Autonomy</h1>
            <p className="text-base sm:text-lg text-[color:var(--muted)] leading-relaxed mt-2 mb-8">
              A comprehensive technical comparison between <strong className="text-[color:var(--ink)]">Indusagi</strong>, the open-source, terminal-first developer framework, and <strong className="text-[color:var(--ink)]">Cursor</strong>, the closed-source AI desktop editor. Learn how self-hosted CLI scripts compare against customized IDE modifications for real autonomous engineering.
            </p>

            <h2>Introduction: Two Distinct Philosophies</h2>
            <p>
              When deciding on an AI-assisted development workflow, developers face a critical choice in engineering philosophy:
            </p>
            <ul>
              <li><strong>The Proprietary App Approach (Cursor):</strong> Modifies the visual editor (VS Code) to wrap AI context features inside custom sidebars, chat panes, and inline inline-completions.</li>
              <li><strong>The Open Framework Approach (Indusagi):</strong> Provides a highly extensible terminal-first SDK and CLI that works directly with your current editor, operating system tools, and script configurations, offering full programmatic control over agent loops and memory files.</li>
            </ul>
            <p>
              While Cursor is an excellent product for developers who want a quick, turnkey editor experience, it locks your engineering pipeline into their closed-source server systems, subscription pricing, and desktop shell. Indusagi gives you complete open-source ownership of your AI pipelines, memory vector directories, and local execution options.
            </p>

            <h2>Detailed Comparison Points</h2>

            <h3>1. Complete Code-Level Customization</h3>
            <p>
              Cursor functions as a closed-source ecosystem. You cannot modify the underlying agent logic, alter how code research is performed, or program custom background tasks. If Cursor's indexing is insufficient for your codebase, your options are highly limited.
            </p>
            <p>
              Indusagi is a fully customizable developer framework. You have access to every line of agent logic. You can write custom <em>Extensions</em> and <em>Skills</em> in TypeScript to intercept tools, configure custom system instructions, write project-specific lint rules, or build tailored terminal dashboards. Everything runs locally inside your repository, loaded dynamically without pre-compiling.
            </p>

            <h3>2. Portability & Terminal Integration</h3>
            <p>
              To use Cursor, you must switch your primary code editor to their custom VS Code fork. This is a severe bottleneck for developers who rely on keyboard-centric tools like Neovim, classic Emacs setups, or lightweight command lines.
            </p>
            <p>
              Indusagi operates directly in the console. You can keep your existing editor, shortcuts, and themes exactly as they are. The Coding Agent CLI runs in a standard terminal panel, performing operations in the background while you write code in your preferred workspace. Furthermore, Indusagi supports an RPC daemon mode, enabling you to build native plug-ins for Neovim, VS Code, or JetBrains to interact with the background agent thread.
            </p>

            <h3>3. Privacy & Network Autonomy</h3>
            <p>
              Cursor routes your LLM completions and codebase queries through their centralized commercial proxies. For enterprise teams or developers managing proprietary secrets, sending code pipelines through third-party middle-men presents serious compliance risks.
            </p>
            <p>
              Indusagi is fully private. Because the agent loop executes directly on your machine, connections to your model providers are completely direct. You can configure the CLI to run 100% offline by targeting local vector embedding and local inference engines like Ollama. Your proprietary intellectual property never leaves your private development environment.
            </p>

            <h2>At-a-Glance Comparison</h2>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Indusagi (SDK + CLI)</th>
                  <th>Cursor (IDE)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>License</strong></td>
                  <td>Open-source (MIT License)</td>
                  <td>Proprietary closed-source</td>
                </tr>
                <tr>
                  <td><strong>IDE Dependency</strong></td>
                  <td>None (Runs in any terminal)</td>
                  <td>Requires custom VS Code fork</td>
                </tr>
                <tr>
                  <td><strong>Model Support</strong></td>
                  <td>Direct cloud APIs & offline local (Ollama)</td>
                  <td>Routed via Cursor proxy servers</td>
                </tr>
                <tr>
                  <td><strong>Customization</strong></td>
                  <td>Full programmatic SDK (custom loops & hooks)</td>
                  <td>Limited to default UI options</td>
                </tr>
                <tr>
                  <td><strong>Pricing</strong></td>
                  <td>100% Free (pay only direct model usage)</td>
                  <td>Subscription layers ($20+/month)</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-4 mt-6">
              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">What is the primary difference between Indusagi and Cursor?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Cursor is a proprietary desktop fork of VS Code that bundles closed-source AI assistance. Indusagi is an open-source, terminal-first developer framework (SDK + CLI) designed to build and execute completely customizable coding agents inside any existing terminal, shell, or editor environment.
                </p>
              </div>

              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">Do I have to switch editors to use Indusagi?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  No. Indusagi operates in your terminal, meaning it integrates with whatever development environment you already use, including vanilla VS Code, Neovim, Emacs, or JetBrains IDEs, without requiring you to switch applications.
                </p>
              </div>

              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">Does Indusagi offer better model flexibility than Cursor?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Yes. While Cursor routes requests through their proprietary proxy backend and limits local model integrations, Indusagi runs entirely locally. You can direct requests to any cloud LLM API, local Ollama endpoints, or custom private host environments with zero proxy middle-men.
                </p>
              </div>

              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">Is Indusagi free and open source?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Yes. Indusagi is fully open-source under the MIT license, meaning it is entirely free to use, host, and modify forever. Cursor uses a commercial proprietary model with subscription tiers.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
              <p className="text-sm text-[color:var(--muted)]">
                Ready to take control of your developer workflow? Learn how to get started in the <Link href="/docs/getting-started" className="text-[color:var(--accent-2)] hover:underline">Quickstart Guide</Link> or download the <Link href="/cli" className="text-[color:var(--accent-2)] hover:underline">Coding Agent CLI Package</Link>.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
