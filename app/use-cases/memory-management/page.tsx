import Link from "next/link";
import { Header } from "../../_components/Header";

export default function MemoryManagementUseCase() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.indusagi.com/use-cases/memory-management/#software",
        "name": "Indusagi Memory SDK",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "downloadUrl": "https://www.npmjs.com/package/indusagi",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        },
        "description": "Multi-tier semantic memory system and vector storage engine for autonomous TypeScript AI agents, featuring automated context compaction.",
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
        "@id": "https://www.indusagi.com/use-cases/memory-management/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does semantic memory work in Indusagi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indusagi uses local or cloud vector embeddings to store previous agent interactions, shell commands, and source modifications. The agent performs a semantic vector search before executing a task to fetch highly relevant historical context."
            }
          },
          {
            "@type": "Question",
            "name": "What is the role of session compaction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Session compaction is an automated background routine that summarizes conversational history and active file edits into compressed paragraphs, keeping the token context small and reducing overall LLM billing costs."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need an external vector database for memory?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Indusagi features a built-in lightweight local vector index that runs inside your repository or AppData folder without requiring an active external database subscription or server."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize the memory pruning rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Developers can programmatically adjust decay parameters, context bounds, and compaction thresholds through configuration interfaces in the TypeScript SDK."
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
            <h1>Advanced AI Agent Memory Management & Context Compaction</h1>
            <p className="text-base sm:text-lg text-[color:var(--muted)] leading-relaxed mt-2 mb-8">
              Explore the multi-tier memory architecture of <strong className="text-[color:var(--ink)]">Indusagi</strong>. Learn how semantic search directories and automated context compaction maintain long-term developer session history while keeping token costs low.
            </p>

            <h2>Why Memory is Critical for Autonomous Coding Agents</h2>
            <p>
              In large-scale software engineering, autonomous agents often face thousands of lines of context. Traditional LLM integration models feed the entire command log and source tree directly into the context window. However, this naive approach causes severe context degradation, high API bills, and slower execution speeds. As chat logs grow, agents lose their focus and often miss key instructions.
            </p>
            <p>
              The Indusagi framework resolves this issue by implementing a tiered, active memory engine. By partitioning memory into distinct short-term, long-term, and semantic caches, your agents maintain complete awareness of their current workspace tasks, workspace modifications, and historical solutions.
            </p>

            <h2>The Multi-Tier Memory Architecture</h2>
            
            <h3>1. Short-Term TUI Context</h3>
            <p>
              Short-term memory acts as the active workspace canvas. It records immediately pending tool invocations, shell command stdout buffers, and file diff listings. This memory tier runs in-memory within the dynamic terminal session and is optimized for quick interactive edits.
            </p>

            <h3>2. Long-Term Semantic Vector Storage</h3>
            <p>
              When a developer session finishes or a task succeeds, the interaction logs, source modifications, and command parameters are parsed into structured chunks. These chunks are embedded into local vector indexes inside the <code>.antigravitycli</code> workspace folders. Before launching a new coding run, Indusagi runs a semantic lookup. The agent queries its vector memory to find if it has solved a similar bug or implemented a similar routing module before, pulling past files into the context immediately.
            </p>

            <h3>3. Automated Context Compaction</h3>
            <p>
              To maintain absolute code efficiency, Indusagi CLI incorporates a background compaction loop. If the active conversation exceeds pre-configured token thresholds, the compaction routine automatically kicks in. It compiles the historical chat records, logs, and branch modifications into tight semantic summaries, replacing thousands of raw chat tokens with a brief description.
            </p>

            <h2>Worry-Free Developer Operations</h2>
            <p>
              The direct benefits of Indusagi's memory architecture are visible in real-world application building:
            </p>
            <ul>
              <li><strong>Zero External Servers:</strong> The vector engine operates locally in-process. You don't need to run standalone vector databases like Pinecone or Milvus to achieve long-term agent memory.</li>
              <li><strong>Token Cost Reductions:</strong> By keeping active contexts tightly summarized, API billing is reduced by up to 70% compared to non-compacted agent loops.</li>
              <li><strong>Model Agnostic:</strong> The memory interfaces map abstract embeddings, meaning you can swap the embedding model (e.g., local Nomadic Embed vs cloud OpenAI) without changing your main agent code.</li>
            </ul>

            <blockquote className="my-6 p-4">
              <strong>Architecture Note:</strong> All memory entities are represented under strict TypeScript type definitions, giving developers absolute safety when writing programmatic compaction filters.
            </blockquote>

            <h2>Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-4 mt-6">
              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">How does semantic memory work in Indusagi?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Indusagi uses local or cloud vector embeddings to store previous agent interactions, shell commands, and source modifications. The agent performs a semantic vector search before executing a task to fetch highly relevant historical context.
                </p>
              </div>

              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">What is the role of session compaction?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Session compaction is an automated background routine that summarizes conversational history and active file edits into compressed paragraphs, keeping the token context small and reducing overall LLM billing costs.
                </p>
              </div>

              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">Do I need an external vector database for memory?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  No. Indusagi features a built-in lightweight local vector index that runs inside your repository or AppData folder without requiring an active external database subscription or server.
                </p>
              </div>

              <div className="landing-card rounded-xl p-5">
                <h4 className="font-semibold text-[color:var(--ink)] mb-2">Can I customize the memory pruning rules?</h4>
                <p className="text-sm text-[color:var(--muted)]">
                  Yes. Developers can programmatically adjust decay parameters, context bounds, and compaction thresholds through configuration interfaces in the TypeScript SDK.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
              <p className="text-sm text-[color:var(--muted)]">
                Curious to implement customized memories? Check out the <Link href="/docs" className="text-[color:var(--accent-2)] hover:underline">Indusagi Package API</Link> or learn how compaction runs in the <Link href="/cli" className="text-[color:var(--accent-2)] hover:underline">Coding Agent CLI Documentation</Link>.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
