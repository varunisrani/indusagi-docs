"use client";

import { useState } from "react";

export function CopyCommand({ command = "npm install -g indusagi" }: { command?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-3.5 rounded-[10px] border border-[color:var(--border)] cursor-pointer"
      style={{
        marginTop: 24,
        padding: "14px 20px",
        background: "var(--bg)",
        fontFamily: "var(--font-mono), monospace",
        fontSize: 15,
        color: "var(--fg)",
      }}
    >
      <span style={{ color: "var(--accent)" }}>$</span> {command}{" "}
      <span style={{ color: "var(--muted)" }}>{copied ? "✓" : "⧉"}</span>
    </button>
  );
}
