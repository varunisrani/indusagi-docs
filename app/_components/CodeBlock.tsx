"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "text" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative group rounded-lg overflow-hidden bg-[#1e293b] border border-[#334155]">
      {/* Language badge */}
      {language && language !== "text" && (
        <div className="absolute top-2 left-3 text-xs font-mono text-[#94a3b8] z-10">
          {language}
        </div>
      )}

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-[#334155] hover:bg-[#475569] transition-colors opacity-0 group-hover:opacity-100 z-20 text-[#cbd5e1]"
        title="Copy code"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" className="text-green-400">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
            <rect x="8" y="3" width="12" height="12" rx="2"></rect>
          </svg>
        )}
      </button>

      {/* Code block */}
      <pre className="p-4 pt-8 overflow-x-auto">
        <code className={`font-mono text-sm text-[#e2e8f0] language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
