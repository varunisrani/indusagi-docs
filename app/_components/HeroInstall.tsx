"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";

const COMMANDS: Record<string, Record<string, string>> = {
  indusagi: {
    npm: "npm install -g indusagi",
    pip: "pip install indusagi",
    cargo: "cargo install indusagi",
  },
  induscode: {
    npm: "npm install -g indusagi-coding-agent",
    pip: "pip install induscode",
    cargo: "cargo install induscode",
  },
};

const PRODUCTS = [
  { id: "indusagi", label: "indusagi", sub: "Framework" },
  { id: "induscode", label: "induscode", sub: "Coding agent" },
];

const TABS = [
  { id: "npm", label: "npm (node)" },
  { id: "pip", label: "pip (python)" },
  { id: "cargo", label: "cargo (rust)" },
];

export function HeroInstall() {
  const [product, setProduct] = useState("indusagi");
  const [tab, setTab] = useState("npm");
  const [copied, setCopied] = useState(false);

  const cmd = COMMANDS[product][tab];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  const pill = (active: boolean): CSSProperties => ({
    padding: "9px 18px",
    borderRadius: 999,
    border: "none",
    background: active ? "var(--accent-soft)" : "transparent",
    color: active ? "var(--accent)" : "var(--muted)",
    fontFamily: "var(--font-sans), sans-serif",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
  });

  const tabStyle = (active: boolean): CSSProperties => ({
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    background: active ? "var(--accent-soft)" : "transparent",
    color: active ? "var(--accent)" : "var(--muted)",
    fontFamily: "var(--font-mono), monospace",
    fontSize: 13,
    cursor: "pointer",
  });

  return (
    <section className="max-w-[1180px] mx-auto px-6 pt-[72px] pb-12 text-center">
      <div
        className="inline-flex items-center gap-2 px-[13px] py-1.5 rounded-full text-xs text-[color:var(--muted)] border border-[color:var(--border)]"
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        <span className="w-[7px] h-[7px] rounded-full inline-block" style={{ background: "var(--accent)" }} />
        OPEN SOURCE · MIT LICENSED
      </div>

      <h1
        className="mt-6 mb-0"
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(38px,8vw,66px)",
          lineHeight: 1.02,
          letterSpacing: "-0.025em",
        }}
      >
        The open-source
        <br />
        AI agent stack
      </h1>

      <p className="max-w-[620px] mx-auto mt-[22px] text-[color:var(--muted)]" style={{ fontSize: "clamp(16px,2.4vw,18px)", lineHeight: 1.6 }}>
        A terminal-first coding agent and the framework underneath it. Install from npm, pip, or cargo — free
        models included, or bring Claude, GPT, Gemini and your own.
      </p>

      {/* Product toggle */}
      <div
        className="inline-flex max-w-full gap-1 mt-[34px] p-1 rounded-full border border-[color:var(--border)]"
        style={{ background: "var(--surface)" }}
      >
        {PRODUCTS.map((p) => (
          <button key={p.id} onClick={() => setProduct(p.id)} style={pill(product === p.id)}>
            {p.label}
            <span className="hidden sm:inline" style={{ opacity: 0.6, fontWeight: 400, marginLeft: 7 }}>
              {p.sub}
            </span>
          </button>
        ))}
      </div>

      {/* Install box */}
      <div
        className="max-w-[660px] mx-auto mt-[18px] rounded-[14px] border border-[color:var(--border)] overflow-hidden text-left"
        style={{ background: "var(--surface)" }}
      >
        <div className="flex flex-wrap gap-1 border-b border-[color:var(--border)]" style={{ padding: "10px 12px" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} style={tabStyle(tab === t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        <div
          className="flex items-center justify-between gap-4 flex-wrap"
          style={{ padding: "20px 22px", fontFamily: "var(--font-mono), monospace", fontSize: 15 }}
        >
          <span style={{ wordBreak: "break-all" }}>
            <span style={{ color: "var(--accent)", marginRight: 8 }}>$</span>
            {cmd}
          </span>
          <button
            onClick={copy}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] cursor-pointer whitespace-nowrap"
            style={{
              padding: "7px 11px",
              background: "transparent",
              color: "var(--muted)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: 12,
            }}
          >
            {copied ? "✓ Copied" : "⧉ Copy"}
          </button>
        </div>
      </div>

      <p className="mt-3.5 text-[color:var(--muted)]" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13 }}>
        Requires Node 20+ (npm), Python 3.11+ (pip), or Rust 1.96+ (cargo). Set a provider key, then run.
      </p>

      <div className="flex gap-3 justify-center flex-wrap mt-[26px]">
        <Link
          href="/docs"
          className="rounded-[10px] font-semibold text-white no-underline"
          style={{ padding: "13px 22px", background: "var(--accent)", fontSize: 15 }}
        >
          Read the docs
        </Link>
        <a
          href="https://github.com/varunisrani/indusagi"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[10px] font-semibold no-underline border border-[color:var(--border)] text-[color:var(--fg)]"
          style={{ padding: "13px 22px", fontSize: 15 }}
        >
          ★ Star on GitHub
        </a>
      </div>
    </section>
  );
}
