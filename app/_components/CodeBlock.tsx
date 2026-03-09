"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

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
        className="absolute top-2 right-2 p-2 rounded-md bg-[#334155] hover:bg-[#475569] transition-colors opacity-0 group-hover:opacity-100 z-20"
        title="Copy code"
      >
        {copied ? (
          <Check size={16} className="text-green-400" />
        ) : (
          <Copy size={16} className="text-[#cbd5e1]" />
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
