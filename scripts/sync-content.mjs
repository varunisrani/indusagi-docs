#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, "..", "..", "..");
const CONTENT_DIR = path.join(__dirname, "..", "content");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyMarkdownToTxt(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.log(`Source dir not found: ${srcDir}`);
    return 0;
  }

  ensureDir(destDir);
  let copied = 0;

  function walk(dir, destBase) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(srcPath, path.join(destBase, entry.name));
      } else if (entry.name.endsWith(".md")) {
        const destPath = path.join(destBase, entry.name.replace(".md", ".txt"));
        ensureDir(path.dirname(destPath));
        fs.copyFileSync(srcPath, destPath);
        copied++;
        console.log(`  ${entry.name} -> ${entry.name.replace(".md", ".txt")}`);
      }
    }
  }

  walk(srcDir, destDir);
  return copied;
}

console.log("Syncing Indusagi Package docs...");
const packageSrc = path.join(ROOT_DIR, "indusagi", "docs");
const packageDest = path.join(CONTENT_DIR, "package");
const packageCount = copyMarkdownToTxt(packageSrc, packageDest);
console.log(`  Synced ${packageCount} package docs\n`);

console.log("Syncing Coding Agent CLI docs...");
const cliSrc = path.join(ROOT_DIR, "indusagi-coding-agent", "docs");
const cliDest = path.join(CONTENT_DIR, "cli");
const cliCount = copyMarkdownToTxt(cliSrc, cliDest);
console.log(`  Synced ${cliCount} CLI docs\n`);

console.log(`✅ Total: ${packageCount + cliCount} docs synced.`);
