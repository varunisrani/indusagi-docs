"use client";

import { useState } from "react";

type Method = {
  id: string;
  label: string;
  live?: boolean;
  cmd: string;
};

type Product = {
  id: string;
  name: string;
  tagline: string;
  accent: string; // active tab / underline color
  methods: Method[];
};

// Install matrix: both products × the three ecosystems (npm / python / rust).
const PRODUCTS: Product[] = [
  {
    id: "indusagi",
    name: "indusagi",
    tagline: "Agent framework",
    accent: "#ff7a45",
    methods: [
      { id: "npm", label: "npm", live: true, cmd: "npm install -g indusagi" },
      { id: "pip", label: "pip", live: true, cmd: "pip install indusagi" },
      { id: "cargo", label: "cargo", live: true, cmd: "cargo install indusagi" },
    ],
  },
  {
    id: "induscode",
    name: "induscode",
    tagline: "Coding agent",
    accent: "#22d3ee",
    methods: [
      { id: "npm", label: "npm", live: true, cmd: "npm install -g indusagi-coding-agent" },
      { id: "pip", label: "pip", live: true, cmd: "pip install induscode" },
      { id: "cargo", label: "cargo", live: true, cmd: "cargo install induscode" },
    ],
  },
];

export function HeroInstall() {
  const [productId, setProductId] = useState(PRODUCTS[0].id);
  const [methodId, setMethodId] = useState("npm");
  const [copied, setCopied] = useState(false);

  const product = PRODUCTS.find((p) => p.id === productId) ?? PRODUCTS[0];
  const method = product.methods.find((m) => m.id === methodId) ?? product.methods[0];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(method.cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  return (
    <div className="text-center mb-10 sm:mb-14 px-2">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[color:var(--ink)] mb-4 sm:mb-5">
        The open-source AI agent stack
      </h1>
      <p className="mx-auto max-w-2xl text-base sm:text-lg text-[color:var(--muted)] leading-relaxed">
        A terminal-first coding agent and the framework underneath it. Install from{" "}
        <span className="text-[color:var(--ink)]">npm</span>,{" "}
        <span className="text-[color:var(--ink)]">pip</span>, or{" "}
        <span className="text-[color:var(--ink)]">cargo</span> — free models included, or connect any
        provider including Claude, GPT, Gemini and more.
      </p>

      {/* Product selector */}
      <div className="mt-7 sm:mt-9 inline-flex rounded-full border border-[color:var(--border)] bg-[rgba(20,20,20,0.6)] p-1">
        {PRODUCTS.map((p) => {
          const active = p.id === productId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setProductId(p.id);
                setCopied(false);
              }}
              className={`relative rounded-full px-4 sm:px-5 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-[rgba(255,255,255,0.08)] text-[color:var(--ink)]"
                  : "text-[color:var(--muted)] hover:text-[color:var(--ink)]"
              }`}
            >
              {p.name}
              <span className="ml-2 hidden sm:inline text-[11px] text-[color:var(--muted)]">{p.tagline}</span>
            </button>
          );
        })}
      </div>

      {/* Install card */}
      <div className="mt-5 mx-auto max-w-2xl text-left">
        <div className="surface-strong rounded-2xl border border-[color:var(--border)] overflow-hidden">
          {/* Method tabs */}
          <div className="flex items-center gap-1 sm:gap-2 border-b border-[color:var(--border)] px-2 sm:px-3">
            {product.methods.map((m) => {
              const active = m.id === methodId;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => {
                    setMethodId(m.id);
                    setCopied(false);
                  }}
                  className="relative flex items-center gap-1.5 px-3 sm:px-4 py-3 text-sm font-mono transition-colors"
                  style={{ color: active ? "var(--ink)" : "var(--muted)" }}
                >
                  {m.label}
                  {m.live && (
                    <span
                      className="rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide"
                      style={{ background: "rgba(255,122,69,0.16)", color: product.accent }}
                    >
                      live
                    </span>
                  )}
                  {active && (
                    <span
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full"
                      style={{ background: product.accent }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Command row */}
          <div className="flex items-center gap-3 px-4 sm:px-5 py-4">
            <code className="min-w-0 flex-1 font-mono text-[13px] sm:text-sm text-[color:var(--ink)] break-all">
              <span className="select-none text-[color:var(--muted)]">$ </span>
              {method.cmd}
            </code>
            <button
              type="button"
              onClick={copy}
              aria-label="Copy install command"
              className="shrink-0 rounded-lg border border-[color:var(--border)] p-2 text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:border-[color:var(--accent)] transition-colors"
            >
              {copied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={product.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <p className="mt-2.5 text-center text-xs text-[color:var(--muted)]">
          {method.id === "cargo"
            ? "Installs the latest crates.io release as a native single binary. `cargo binstall` and prebuilt installers (shell · Homebrew) ship via GitHub Releases."
            : product.id === "indusagi"
              ? "Requires Node 20+ (npm) or Python 3.11+ (pip). Set a provider API key, then import or run it."
              : "Requires Node 20+ (npm) or Python 3.11+ (pip). Set a provider API key, then launch the console."}
        </p>
      </div>
    </div>
  );
}
