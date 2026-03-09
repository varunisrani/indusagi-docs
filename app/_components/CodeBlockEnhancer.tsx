"use client";

import { useEffect } from "react";
import { Copy, Check } from "lucide-react";

export default function CodeBlockEnhancer() {
  useEffect(() => {
    // Find all pre > code elements
    const codeBlocks = document.querySelectorAll("pre > code");

    codeBlocks.forEach((codeEl) => {
      const preEl = codeEl.parentElement;
      if (!preEl) return;

      // Skip if already enhanced
      if (preEl.classList.contains("enhanced-code-block")) return;

      // Extract language from class name
      const languageMatch = codeEl.className.match(/language-(\w+)/);
      const language = languageMatch ? languageMatch[1] : "text";

      // Get code text
      const code = codeEl.textContent || "";

      // Create wrapper div
      const wrapper = document.createElement("div");
      wrapper.className =
        "relative group rounded-lg overflow-hidden bg-[#1e293b] border border-[#334155] my-4";

      // Add language badge
      if (language && language !== "text") {
        const badge = document.createElement("div");
        badge.className =
          "absolute top-3 left-4 text-xs font-mono text-[#94a3b8] z-10 pointer-events-none";
        badge.textContent = language;
        wrapper.appendChild(badge);
      }

      // Create copy button
      const button = document.createElement("button");
      button.className =
        "absolute top-3 right-3 p-2 rounded-md bg-[#334155] hover:bg-[#475569] transition-colors opacity-0 group-hover:opacity-100 z-20 flex items-center justify-center text-[#cbd5e1]";
      button.title = "Copy code";
      button.innerHTML = `<svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><rect x="8" y="3" width="12" height="12" rx="2"/></svg>`;

      button.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(code);

          // Show check icon
          button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
          button.classList.add("text-green-400");

          // Reset after 2 seconds
          setTimeout(() => {
            button.innerHTML = `<svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><rect x="8" y="3" width="12" height="12" rx="2"/></svg>`;
            button.classList.remove("text-green-400");
          }, 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      });

      wrapper.appendChild(button);

      // Move pre content into wrapper
      wrapper.appendChild(preEl.cloneNode(true));

      // Replace original pre with wrapper
      preEl.parentElement?.replaceChild(wrapper, preEl);

      // Mark as enhanced
      wrapper.classList.add("enhanced-code-block");
    });
  }, []);

  return null;
}
