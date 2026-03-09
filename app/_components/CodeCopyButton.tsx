"use client";

import { useEffect } from "react";

export function CodeCopyButton() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".copy-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        e.preventDefault();
        const codeData = (button as HTMLButtonElement).getAttribute("data-code");
        
        if (codeData) {
          try {
            await navigator.clipboard.writeText(codeData);
            
            // Change button text
            const original = button.textContent;
            button.textContent = "✓ Copied";
            button.style.background = "rgba(34, 197, 94, 0.2)";
            button.style.color = "#22c55e";
            
            // Reset after 2 seconds
            setTimeout(() => {
              button.textContent = original;
              button.style.background = "";
              button.style.color = "";
            }, 2000);
          } catch (err) {
            console.error("Failed to copy:", err);
          }
        }
      });
    });
  }, []);

  return null;
}
