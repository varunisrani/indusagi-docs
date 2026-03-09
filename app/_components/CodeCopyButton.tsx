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
            
            // Show checkmark
            button.textContent = "✓";
            button.style.background = "rgba(34, 197, 94, 0.3)";
            button.style.color = "#22c55e";
            button.style.borderColor = "rgba(34, 197, 94, 0.5)";
            
            // Reset after 1.5 seconds
            setTimeout(() => {
              button.textContent = "copy";
              button.style.background = "";
              button.style.color = "";
              button.style.borderColor = "";
            }, 1500);
          } catch (err) {
            console.error("Failed to copy:", err);
          }
        }
      });
    });
  }, []);

  return null;
}
