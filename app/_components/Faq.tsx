"use client";

import { useState } from "react";

const FAQ = [
  {
    q: "What is IndusAGI?",
    a: "An open-source developer stack: a multi-provider framework plus a terminal-first coding agent. It gives developers programmatic control over autonomous agent loops, memory, tools, and the console UI.",
  },
  {
    q: "Do I have to pay to use it?",
    a: "No. Every edition is MIT-licensed and free for personal, institutional, and production commercial use — no licensing fees.",
  },
  {
    q: "Do I need cloud LLM APIs?",
    a: "No. Cloud providers like Anthropic, OpenAI and Groq are fully integrated, but you can run entirely offline with local providers such as Ollama and llama.cpp.",
  },
  {
    q: "How long does setup take?",
    a: "Under two minutes. Install via npm, pip or cargo, run the setup wizard to connect a provider, and start working immediately.",
  },
  {
    q: "Which languages are supported?",
    a: "TypeScript, Python and Rust — each ships both the framework and the coding agent with the same layered architecture.",
  },
  {
    q: "How does it manage context windows?",
    a: "An automated session-compaction algorithm compiles long histories into semantic summaries, preserving project context while reducing token cost.",
  },
  {
    q: "How does IndusCode compare to Claude Code and GitHub Copilot?",
    a: "IndusCode ranked #18 globally on Terminal-Bench 2.0 with a 69.1% score, finishing above Claude Code and Gemini CLI. It is a terminal-native agent, not an IDE plugin.",
  },
  {
    q: "What is IndusCode's Terminal-Bench 2.0 ranking?",
    a: "IndusCode scored 69.1% on Terminal-Bench 2.0, placing #18 globally as a solo-built open-source project.",
  },
  {
    q: "Is IndusCode free to use?",
    a: "Yes. IndusCode includes free built-in models and also supports bring-your-own API keys for Claude, GPT, Gemini, and other providers.",
  },
  {
    q: "How do I install IndusCode?",
    a: "Run npm install -g induscode, pip install induscode, or cargo install induscode depending on your environment.",
  },
  {
    q: "Does IndusCode work with my existing LLM provider?",
    a: "Yes. IndusCode supports multiple providers including Claude, GPT, and Gemini, letting you switch without changing your workflow.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="max-w-[820px] mx-auto flex flex-col gap-2.5">
      {FAQ.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className="rounded-xl border border-[color:var(--border)] overflow-hidden"
            style={{ background: "var(--surface)" }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
              style={{
                padding: "18px 22px",
                background: "transparent",
                border: "none",
                color: "var(--fg)",
                fontFamily: "var(--font-sans), sans-serif",
                fontWeight: 600,
                fontSize: 17,
              }}
            >
              {f.q}
              <span
                style={{
                  fontSize: 22,
                  color: "var(--muted)",
                  transition: "transform .2s",
                  transform: isOpen ? "rotate(45deg)" : "none",
                  display: "inline-block",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="text-[color:var(--muted)]" style={{ padding: "0 22px 20px", fontSize: 15, lineHeight: 1.65 }}>
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
