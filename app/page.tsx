import Link from "next/link";
import { Header } from "./_components/Header";
import { HeroInstall } from "./_components/HeroInstall";
import { NpmStats } from "./_components/NpmStats";
import { Faq } from "./_components/Faq";
import { CopyCommand } from "./_components/CopyCommand";

const LAYERS = [
  { id: "L1", title: "LLM Gateway", body: "Unified multi-provider gateway — one interface for Claude, GPT, Gemini, Groq, Ollama and local models." },
  { id: "L2", title: "Agent Runtime", body: "The model conversation loop — streaming, tool calls, and turn orchestration." },
  { id: "L3", title: "Capabilities & Tools", body: "Built-in tool kernel, MCP interop, SaaS connectors, and a multi-agent swarm layer." },
  { id: "L4", title: "Observability & Memory", body: "OTel-free tracing plus working-memory and project-context files." },
  { id: "L5", title: "Product Shell & TUI", body: "The shipping CLI and a React-Ink / ratatui terminal UI you can fully customize." },
];

const EDITIONS = [
  {
    lang: "TypeScript",
    cards: [
      { kind: "FRAMEWORK", name: "indusagi", desc: "The framework — LLM gateway, agent loop, TUI widgets.", pages: "38 pages", href: "/docs" },
      { kind: "CODING AGENT", name: "Coding Agent CLI", desc: "Terminal-first agent — extensions, skills, RPC & SDK modes.", pages: "30 pages", href: "/cli" },
    ],
  },
  {
    lang: "Python",
    cards: [
      { kind: "FRAMEWORK", name: "indusagi", desc: "The Python framework — facades over the full stack.", pages: "24 pages", href: "/python" },
      { kind: "CODING AGENT", name: "induscode", desc: "Python coding agent — Textual console, branchable sessions.", pages: "27 pages", href: "/python-cli" },
    ],
  },
  {
    lang: "Rust",
    cards: [
      { kind: "FRAMEWORK", name: "indusagi", desc: "100% Rust, zero-SDK — compiled to a single binary.", pages: "20 pages", href: "/rust" },
      { kind: "CODING AGENT", name: "induscode", desc: "Native ratatui REPL — slash commands, MCP, capability deck.", pages: "27 pages", href: "/rust-cli" },
    ],
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.indusagi.com/#sdk",
        name: "Indusagi SDK",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "All",
        downloadUrl: "https://www.npmjs.com/package/indusagi",
        offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
        description:
          "Fast, open-source TypeScript SDK and framework for building autonomous AI agents with full control over memory, tools, and streaming.",
        codeRepository: "https://github.com/varunisrani/indusagi",
        license: "https://opensource.org/licenses/MIT",
        author: { "@type": "Organization", name: "Indusagi", url: "https://www.indusagi.com" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.indusagi.com/#cli",
        name: "Indusagi Coding Agent CLI",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "All",
        downloadUrl: "https://www.npmjs.com/package/indusagi-coding-agent",
        offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
        description:
          "Powerful terminal-first AI assistant CLI with extensions, custom skills, Hooks, background agent threads, and RPC capabilities.",
        codeRepository: "https://github.com/varunisrani/indusagi-coding-agent",
        license: "https://opensource.org/licenses/MIT",
        author: { "@type": "Organization", name: "Indusagi", url: "https://www.indusagi.com" },
      },
    ],
  };

  return (
    <main style={{ minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <HeroInstall />

      {/* Live npm stats */}
      <section className="max-w-[1180px] mx-auto px-6 py-8">
        <div className="text-center mb-9">
          <div className="text-[color:var(--accent)] uppercase" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, letterSpacing: ".12em" }}>
            Live on npm
          </div>
          <h2 className="mt-2.5" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 700, fontSize: "clamp(28px,5vw,38px)", letterSpacing: "-0.02em" }}>
            Real download stats
          </h2>
          <p className="max-w-[560px] mx-auto mt-3 text-[color:var(--muted)]" style={{ fontSize: 16, lineHeight: 1.6 }}>
            Pulled live from the npm registry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <NpmStats package="indusagi" label="SDK Package" />
          <NpmStats package="indusagi-coding-agent" label="CLI Package" />
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-[1180px] mx-auto px-6 py-16">
        <div className="text-center mb-9">
          <div className="text-[color:var(--accent)] uppercase" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, letterSpacing: ".12em" }}>
            How it works
          </div>
          <h2 className="mt-2.5" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 700, fontSize: "clamp(28px,5vw,38px)", letterSpacing: "-0.02em" }}>
            Five capability layers, one import
          </h2>
          <p className="max-w-[560px] mx-auto mt-3 text-[color:var(--muted)]" style={{ fontSize: 16, lineHeight: 1.6 }}>
            Drop in the whole stack or reach for a single layer. The same architecture ships in TypeScript, Python, and Rust.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          {LAYERS.map((l) => (
            <div
              key={l.id}
              className="flex items-center gap-[18px] rounded-xl border border-[color:var(--border)]"
              style={{ padding: "18px 22px", background: "var(--surface)" }}
            >
              <span className="text-[color:var(--accent)] flex-none" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, width: 32 }}>
                {l.id}
              </span>
              <div className="flex-1 min-w-0">
                <div style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 600, fontSize: 17 }}>{l.title}</div>
                <div className="text-[color:var(--muted)]" style={{ fontSize: 14, marginTop: 2, lineHeight: 1.5 }}>
                  {l.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pick your edition */}
      <section className="border-t border-b border-[color:var(--border)]" style={{ background: "var(--surface)" }}>
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <div className="text-center mb-9">
            <div className="text-[color:var(--accent)] uppercase" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, letterSpacing: ".12em" }}>
              Documentation
            </div>
            <h2 className="mt-2.5" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 700, fontSize: "clamp(28px,5vw,38px)", letterSpacing: "-0.02em" }}>
              Pick your edition
            </h2>
            <p className="max-w-[560px] mx-auto mt-3 text-[color:var(--muted)]" style={{ fontSize: 16, lineHeight: 1.6 }}>
              Framework or coding agent, in the language your team already ships.
            </p>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            {EDITIONS.map((e) => (
              <div key={e.lang} className="flex flex-col gap-3.5">
                <div className="text-[color:var(--muted)] uppercase pl-1" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, letterSpacing: ".1em" }}>
                  {e.lang}
                </div>
                {e.cards.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block rounded-xl border border-[color:var(--border)] no-underline text-[color:var(--fg)] landing-card"
                    style={{ background: "var(--bg)", padding: 20 }}
                  >
                    <div className="flex items-center justify-between">
                      <div style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 600, fontSize: 17 }}>{c.name}</div>
                      <span className="text-[color:var(--muted)]" style={{ fontSize: 12 }}>{c.pages}</span>
                    </div>
                    <div className="text-[color:var(--muted)]" style={{ fontSize: 14, marginTop: 8, lineHeight: 1.5 }}>
                      {c.desc}
                    </div>
                    <div className="text-[color:var(--accent)]" style={{ fontSize: 13, marginTop: 16 }}>
                      Open docs →
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1180px] mx-auto px-6 py-16">
        <div className="text-center mb-9">
          <div className="text-[color:var(--accent)] uppercase" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, letterSpacing: ".12em" }}>
            Frequently asked
          </div>
          <h2 className="mt-2.5" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 700, fontSize: "clamp(28px,5vw,38px)", letterSpacing: "-0.02em" }}>
            Questions, answered
          </h2>
        </div>
        <Faq />
      </section>

      {/* CTA */}
      <section className="max-w-[1180px] mx-auto px-6 pt-6 pb-[72px]">
        <div className="rounded-[18px] border border-[color:var(--border)] text-center" style={{ background: "var(--accent-soft)", padding: "48px 32px" }}>
          <h2 style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 700, fontSize: "clamp(26px,4.5vw,34px)", letterSpacing: "-0.02em", margin: 0 }}>
            Start building in one command
          </h2>
          <p className="max-w-[480px] mx-auto mt-3 text-[color:var(--muted)]" style={{ fontSize: 16 }}>
            Free models included. No account, no credit card.
          </p>
          <CopyCommand command="npm install -g indusagi" />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function SiteFooter() {
  const col = (title: string, items: { label: string; href?: string; external?: boolean }[]) => (
    <div>
      <div style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 600, fontSize: 14, marginBottom: 14 }}>{title}</div>
      <div className="flex flex-col gap-2.5 text-[color:var(--muted)]" style={{ fontSize: 14 }}>
        {items.map((it) =>
          it.href ? (
            it.external ? (
              <a key={it.label} href={it.href} target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">
                {it.label}
              </a>
            ) : (
              <Link key={it.label} href={it.href} className="no-underline text-inherit">
                {it.label}
              </Link>
            )
          ) : (
            <span key={it.label}>{it.label}</span>
          )
        )}
      </div>
    </div>
  );

  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="max-w-[1180px] mx-auto px-6 grid gap-8" style={{ padding: "48px 24px 24px", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }}>
        <div>
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/indusagi-logo.png" alt="IndusAGI" className="site-logo h-7" />
          </div>
          <p className="mt-4 text-[color:var(--muted)]" style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 240 }}>
            The open-source AI agent stack. TypeScript, Python &amp; Rust.
          </p>
        </div>
        {col("Product", [
          { label: "Framework", href: "/docs" },
          { label: "Coding Agent", href: "/cli" },
          { label: "Changelog" },
          { label: "Roadmap" },
        ])}
        {col("Docs", [
          { label: "TypeScript", href: "/docs" },
          { label: "Python", href: "/python" },
          { label: "Rust", href: "/rust" },
          { label: "API reference", href: "/docs" },
        ])}
        {col("Community", [
          { label: "GitHub", href: "https://github.com/varunisrani/indusagi", external: true },
          { label: "Discord" },
          { label: "npm", href: "https://www.npmjs.com/package/indusagi", external: true },
          { label: "PyPI", href: "https://pypi.org/project/indusagi/", external: true },
        ])}
      </div>
      <div
        className="max-w-[1180px] mx-auto px-6 border-t border-[color:var(--border)] flex items-center justify-between gap-4 flex-wrap text-[color:var(--muted)]"
        style={{ padding: "20px 24px 36px", fontSize: 13 }}
      >
        <span>© 2026 IndusAGI · MIT License</span>
        <span>Privacy · Terms · Security</span>
      </div>
    </footer>
  );
}
