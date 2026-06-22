# The indusagi-docs Site — Complete Guide

A single reference for the **indusagi documentation website**: what it is, how it is built, every page it serves, what the landing page shows, the whole UI, and an honest list of what exists and what does not.

> Scope note: this file documents the *website* in `indusagi-docs/`, not the indusagi products themselves. The products (the TypeScript, Python, and Rust framework + coding-agent) are what the site's pages describe.

---

## 1. What this is

`indusagi-docs` is a **Next.js documentation website** for the entire indusagi project family. It is a normal web app (not a hosted SaaS) that renders documentation from plain text files.

- **Framework:** Next.js `16.1.6` (App Router) with React `19.2.3`, TypeScript, and Tailwind CSS v4.
- **Content:** every doc page is a `.txt` file (written in Markdown) under `content/`. The site reads those files at request/build time and renders them to HTML.
- **Shape:** one home page, six documentation "areas" (TypeScript / Python / Rust × framework / coding-agent), and seven standalone marketing/SEO pages.
- **Public URL referenced in code:** `https://www.indusagi.com`.

Think of it as a thin reading shell wrapped around a folder of Markdown files: the folder is the source of truth, and the app turns it into a browsable, searchable site.

---

## 2. How it works (the content pipeline)

```
content/<area>/*.txt   →   app/lib/docs.ts   →   app/<area>/[...slug]/page.tsx   →   app/lib/markdown.ts   →   <Area>Shell + <Area>Nav   →   HTML page
   (source of truth)       (build manifest)        (route → one page)               (Markdown → HTML+TOC)      (sidebar + content + TOC)
```

1. **Source files.** Each doc lives at `content/<area>/<slug>.txt`. The file's first `# ` heading is its **title**; the rest is the body. Nested folders become slugged paths (e.g. `content/rust/subsystems/runtime.txt` → slug `subsystems/runtime`).
2. **Manifest (`app/lib/docs.ts`).** For each area there is a `get<Area>DocsManifest()` that walks the folder, reads each title, assigns a **sidebar section** (by slug prefix or basename), and assigns an **order** (a per-area lookup table, with unlisted pages defaulting to the end). There is also a `get<Area>DocBySlug()` (loads + renders one page) and a `getDefault<Area>DocSlug()` (the page the area root redirects to).
3. **Routing.** Each area is a route group with three files: `app/<area>/page.tsx` (the area landing → redirects to the default doc), `app/<area>/[...slug]/page.tsx` (resolves any deeper page; returns Next.js `notFound()` when the slug has no `.txt`), and `_components/` holding that area's `Shell` and `Nav`.
4. **Rendering (`app/lib/markdown.ts`).** Uses the **`marked`** library with a custom renderer that (a) gives every heading a URL-safe anchor id and (b) collects an **`h2`/`h3` table of contents**. Returns `{ html, toc }`.
5. **Presentation.** The area `Shell` lays out the page (header + left sidebar + content + right TOC); the area `Nav` renders the searchable, grouped sidebar.

**Build / run scripts** (`package.json`):

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | local dev server |
| `build` | `next build` | production build |
| `start` | `next start` | serve the production build |
| `lint` | `eslint` | lint |
| `sync` | `node scripts/sync-content.mjs` | content sync helper — **effectively a no-op**; `content/` is already the source of truth |

`next.config.ts` only sets `distDir` (overridable via `NEXT_BUILD_DIR`, to dodge a root-owned `.next`) and pins the Turbopack `root` to this project. There is **no** `output: "export"`, so the site is a normal server-rendered/SSG Next app, not a pre-exported static bundle.

---

## 3. The six documentation areas

Every area is backed by one `content/` folder and reached at one route. The area root sends you to its default page.

| Route | Content dir | Documents | Pages | Default page | Sidebar sections (in order) |
|-------|-------------|-----------|:----:|--------------|------------------------------|
| `/docs` | `content/package` | **indusagi** — the TypeScript framework (npm) | 38 | `getting-started` → `README` | Start, Subsystems, AI, Agent, TUI, MCP, Memory, Reference |
| `/cli` | `content/cli` | the TypeScript coding-agent CLI | 30 | `README` → `providers` → `sdk` | Start, SDK & API, Customization, Session, Configuration, UI, Platform |
| `/python` | `content/python` | **indusagi** — the Python framework | 24 | `getting-started` → `README` | Start, Facades, Subsystems, UI, Reference |
| `/python-cli` | `content/python-cli` | **induscode** — the Python coding agent | 27 | `getting-started` → `README` | Start, Console, Subsystems, Configuration, Reference |
| `/rust` | `content/rust` | **indusagi** — the Rust framework | 20 | `getting-started` → `README` | Start, Subsystems, UI, Reference |
| `/rust-cli` | `content/rust-cli` | **induscode** — the Rust coding agent | 27 | `getting-started` → `README` | Start, Console, Subsystems, Configuration, Reference |

**Total: 6 areas, 166 documentation pages.**

All six areas share the same UI pattern (a `Shell` + a `Nav`); only the section names, ordering tables, and accent colors differ.

---

## 4. Full page inventory

Every page, grouped by the sidebar section it falls under, with a one-line gist. Counts are the real `.txt` file counts.

### 4.1 `/docs` — TypeScript framework (`content/package`, 38 pages)

**Start**
- `README` — *indusagi* — the framework overview (multi-provider LLM gateway, agent loop, TUI).
- `getting-started` — installing and first use of the framework's CLI + library.
- `architecture` — the stack of capability layers (L1–L5) and the root entry barrel.

**Subsystems** (10)
- `subsystems/llm-gateway` — the L1 unified multi-provider LLM gateway.
- `subsystems/runtime` — the L2 agent layer: the model conversation loop.
- `subsystems/capabilities` — the L3 built-in tool set + kernel.
- `subsystems/interop-mcp` — the L3 bridge to Model Context Protocol.
- `subsystems/connectors-saas` — the L3 SaaS-connector bridge.
- `subsystems/swarm` — the L3 multi-agent crew layer.
- `subsystems/smithy` — the L5 agent-builder (IndusForge) meta-tool.
- `subsystems/tracing` — the cross-cutting, OTel-free observability layer.
- `subsystems/shell-app` — the L5 product CLI layer.
- `subsystems/react-ink` — the Ink component library for the terminal UI.

**AI** (7)
- `ai/README` — the `indusagi/ai` subpath (facade over `src/facade/ai.ts`).
- `ai/api-reference` — AI module API reference.
- `ai/models` — models and the model registry.
- `ai/oauth` — OAuth providers (ships in API-key-only mode).
- `ai/providers` — the supported AI providers.
- `ai/streaming` — the streaming model.
- `ai/utils` — AI utilities.

**Agent** (5)
- `agent/README` — the Agent module.
- `agent/api-reference` — Agent API reference.
- `agent/loop-and-tools` — the agent loop and tools.
- `agent/bg-process` — the background-process tool.
- `agent/tools-reference` — tools reference.

**TUI** (5)
- `tui/README` — the TUI module.
- `tui/architecture` — TUI architecture (React + Ink).
- `tui/components` — TUI components reference.
- `tui/images` — TUI image handling (no pixel images rendered).
- `tui/input-and-keys` — input, keys, and autocomplete.

**MCP** (3)
- `mcp/README` — the `indusagi/mcp` module overview.
- `mcp/api-reference` — MCP module API reference.
- `mcp/developer-guide` — MCP developer guide (`indusagi/mcp` vs `indusagi/interop`).

**Memory** (3)
- `memory/README` — the "phantom" memory facade (no runtime exports).
- `memory/api-reference` — where the real memory symbols live (in the runtime).
- `memory/developer-guide` — how to use the memory behavior.

**Reference** (2)
- `package-exports` — the package's public exports.
- `use-cases/security-testing` — authorized security-testing use case.

> Sidebar caveat: the `/docs` navigation only renders the **Start, AI, Agent, TUI, Reference** groups (see §10). The Subsystems, MCP, and Memory pages exist and load by direct URL but are **not linked in the `/docs` left sidebar**.

### 4.2 `/cli` — TypeScript coding agent (`content/cli`, 30 pages)

**Start** (5)
- `README` — Indusagi Coding Agent overview.
- `architecture` — module map (one npm package on the `indusagi` framework).
- `features` — capability summary derived from the shipped subsystems.
- `mcp` — connect the agent to external MCP servers (as a client).
- `memory` — working-memory scratch note + project-context files (`AGENTS.md`/`CLAUDE.md`).

**SDK & API** (3)
- `sdk` — using the SDK.
- `rpc` — the Link / JSON-RPC line protocol (`indus --json`).
- `json` — print / JSON output mode (`-p`).

**Customization** (9)
- `extensions` — addons.
- `loading-extensions` — addon discovery/loader/host.
- `skills` — authoring skills.
- `hooks` — the hooks dispatcher.
- `subagents` — the `task` tool / subagents.
- `prompt-templates` — prompt templates.
- `themes` — the four built-in color schemes.
- `packages` — indusagi packages (bundling addons/skills).
- `tools` — the built-in tool reference (the capability deck).

**Session** (3)
- `session` — the append-only NDJSON session file format (branchable tree).
- `tree` — session tree navigation / branching.
- `compaction` — context compaction & branch archival.

**Configuration** (5)
- `settings` — settings keys.
- `models` — custom models.
- `providers` — providers.
- `custom-provider` — custom providers (registration lives in the framework).
- `keybindings` — keybindings (`/keys`).

**UI** (2)
- `tui` — the interactive terminal console (default mode).
- `terminal-setup` — terminal setup notes.

**Platform** (3)
- `development` — building/contributing.
- `shell-aliases` — the `bash` tool runs a non-interactive shell.
- `windows` — Windows notes.

### 4.3 `/python` — Python framework (`content/python`, 24 pages)

**Start** (3): `README`, `getting-started`, `architecture` — the Python framework overview, install, and layered architecture.

**Facades** (4)
- `facades/agent` — the high-level Agent entry point.
- `facades/ai` — the LLM facade (old camelCase vocabulary).
- `facades/mcp` — the MCP support / compatibility layer.
- `facades/memory` — a deliberately empty facade module.

**Subsystems** (9)
- `subsystems/llm-gateway` — unified multi-provider gateway.
- `subsystems/runtime` — the conversation engine.
- `subsystems/capabilities` — the built-in tool layer.
- `subsystems/interop` — the bidirectional MCP bridge.
- `subsystems/connectors` — the Composio SaaS bridge.
- `subsystems/swarm` — the multi-agent crew layer.
- `subsystems/smithy` — the agent-builder meta-tool.
- `subsystems/tracing` — the homegrown observability layer.
- `subsystems/shell-app` — the CLI internals (`pindusagi`).

**UI** (3)
- `ui/tui` — framework-free terminal-UI primitives.
- `ui/react-ink` — the terminal-UI widget library.
- `ui/ui-bridge` — the event-sourced runtime ↔ UI seam.

**Reference** (5)
- `reference/cli` — the `pindusagi`/`indusagi` command line.
- `reference/examples` — the fifteen live demo programs.
- `reference/package-exports` — the lazy namespace re-exporter.
- `reference/parity` — the rebuild's self-audit (`PARITY_REPORT.md`).
- `reference/testing` — the pytest suite (1,349 tests).

### 4.4 `/python-cli` — Python coding agent (`content/python-cli`, 27 pages)

**Start** (3): `README`, `getting-started`, `architecture` — `induscode` for Python, built on the Python framework.

**Console** (4)
- `console/overview` — the interactive Textual console (the product shell).
- `console/slash-commands` — the slash-command subsystem.
- `console/dialogs` — the twelve modal overlays.
- `console/theming` — theme engine + input/composer layers.

**Subsystems** (12)
- `subsystems/launch` — the CLI front door (argv → help/expand).
- `subsystems/boot` — bootstrap: argv → running agent.
- `subsystems/conductor` — product session orchestration (wraps one framework Agent).
- `subsystems/runtime-bridge` — per-turn routing of where a message is produced.
- `subsystems/capability-deck` — the tooling layer (callable tools).
- `subsystems/channels` — the non-interactive JSON-RPC/NDJSON surface.
- `subsystems/sessions` — catalog + navigation over persisted conversations.
- `subsystems/window-budget` — context-window budgeting + compaction.
- `subsystems/transcript-export` — self-contained-HTML transcript publisher.
- `subsystems/briefing` — system-prompt / context assembly.
- `subsystems/addons` — the frozen-contract extension layer.
- `subsystems/insight` — observability over `indusagi.tracing`.

**Configuration** (4): `configuration/settings`, `configuration/auth`, `configuration/models`, `configuration/mcp` — session preferences, key resolution + `pindus signin`, model selection, and mounting MCP servers.

**Reference** (4): `reference/cli`, `reference/package-exports`, `reference/parity`, `reference/testing` — the `pindus` command line, public surfaces, parity/gaps, and the 703-test suite.

### 4.5 `/rust` — Rust framework (`content/rust`, 20 pages)

**Start** (3)
- `README` — the Rust edition overview (100% Rust, zero-SDK, single binary).
- `getting-started` — install (`cargo install indusagi` / `cargo add indusagi`) and build-from-source.
- `architecture` — the one merged crate (every former `indusagi-*` library as a `pub mod`).

**Subsystems** (11)
- `subsystems/core` — foundational module (cancellation, brand, locator, version, ids).
- `subsystems/llm-gateway` — the multi-provider gateway.
- `subsystems/runtime` — the agent engine.
- `subsystems/capabilities` — the built-in tool layer.
- `subsystems/interop` — the bidirectional MCP bridge.
- `subsystems/connectors` — the hexagonal SaaS-connector bridge.
- `subsystems/swarm` — the multi-agent crew layer.
- `subsystems/smithy` — the agent-builder forge.
- `subsystems/tracing` — observability.
- `subsystems/shell-app` — the CLI front door (`argv` → `ExitCode`).
- `subsystems/facade` — the thin compatibility/public-API layer.

**UI** (2)
- `ui/tui` — framework-free terminal-UI model tier.
- `ui/tui-render` — the live ratatui render engine.

**Reference** (4): `reference/cli`, `reference/crate-exports`, `reference/parity`, `reference/testing` — the `indusagi` binary, the crate's public surface, parity/lineage, and the 2062-test gate.

### 4.6 `/rust-cli` — Rust coding agent (`content/rust-cli`, 27 pages)

**Start** (3): `README`, `getting-started`, `architecture` — `induscode` (Rust), built on the Rust framework; install with `cargo install induscode`.

**Console** (4): `console/overview`, `console/slash-commands`, `console/dialogs` (thirteen overlays), `console/theming` (the ratatui REPL, its slash commands, overlays, and color engine).

**Subsystems** (12): `subsystems/launch`, `boot`, `conductor`, `runtime-bridge`, `capability-deck`, `channels`, `sessions`, `window-budget`, `transcript-export`, `briefing`, `addons`, `insight` — the Rust analogues of the Python coding-agent subsystems (launch/boot, the session conductor, per-turn routing, the tool deck, headless channels, branchable sessions, compaction, HTML export, prompt assembly, loadable addons, and observability).

**Configuration** (4): `configuration/settings`, `configuration/auth`, `configuration/models`, `configuration/mcp` — the 24-key preference surface, key resolution + `indus signin`, model/provider selection, and MCP mounting.

**Reference** (4): `reference/cli`, `reference/crate-exports`, `reference/parity`, `reference/testing` — the `indus`/`indusagi` command line (18-flag table), the merged crate's exports, parity/lineage, and the inline `#[cfg(test)]` test suite.

---

## 5. The landing page (`/`)

Source: `app/page.tsx`. Top to bottom, it shows:

1. **Header** (the shared global chrome — see §6).
2. **Hero install widget** (`HeroInstall`, a client component). A headline "**The open-source AI agent stack**" and a subhead, then:
   - A **product toggle**: `indusagi` (Agent framework) / `induscode` (Coding agent).
   - An **install matrix** with three tabs per product — **npm**, **pip**, **cargo** — each marked **live**, showing one copy-able command:
     - indusagi → `npm install -g indusagi` · `pip install indusagi` · `cargo install indusagi`
     - induscode → `npm install -g indusagi-coding-agent` · `pip install induscode` · `cargo install induscode`
   - A copy button and a one-line note under the command (the cargo note mentions the crates.io release + `cargo binstall` / prebuilt installers).
3. **"Documentation" heading** + subhead ("Choose the edition you need — TypeScript, Python, or Rust").
4. **Doc cards grid — four cards only:**
   - **Indusagi Package** → `/docs` (tags: AI Module, Agent Loop, TUI)
   - **Coding Agent CLI** → `/cli` (tags: Extensions, Skills, RPC Mode, SDK)
   - **IndusAGI (Rust)** → `/rust` (tags: Cargo, Runtime, LLM Gateway)
   - **Coding Agent (Rust)** → `/rust-cli` (tags: Console, Slash Commands, Sessions)
   - There are **no landing cards for `/python` or `/python-cli`** — the Python editions are reachable only via the header "Docs" dropdown, the sitemap, or direct URL.
5. **NPM Packages** section: two `NpmStats` cards pulling live download stats for `indusagi` (SDK) and `indusagi-coding-agent` (CLI).
6. **Frequently Asked Questions**: nine static Q&A cards (what is indusagi, pricing/MIT, local LLMs, setup time, differentiation, token/compaction, MCP, jiti extensions, TUI widgets).
7. **Structured data**: an inline JSON-LD `@graph` with two `SoftwareApplication` entries (SDK + CLI) and a `FAQPage` mirroring the FAQ — for SEO/rich results.

---

## 6. Global UI & chrome

Source: `app/_components/Header.tsx` (used on the home page and every doc shell), `app/layout.tsx` (root layout + metadata).

- **Logo** (top-left): a remote wordmark image (`i.ibb.co/...`) linking home.
- **Desktop nav:** `Home`, a **"Docs" dropdown** listing all **six** families (TS framework, TS coding agent, PY framework, PY coding agent, RS framework, RS coding agent — each with a colored badge: TS/PY/RS and a "Framework"/"Coding-agent CLI" note), then outbound buttons: **npm** (`npmjs.com/package/indusagi`), **Python** (`pypi.org/project/indusagi`), **Indusagi SDK** (GitHub), **Indusagi CLI** (GitHub).
- **Mobile nav:** a hamburger opens a full-screen overlay with Home, an expandable "Docs" group (same six families), outbound links to npm (SDK + CLI), PyPI (`indusagi` + `induscode`), and the two GitHub repos, plus a "Quick install" hint showing `npm install indusagi`.
- **Theme:** the site is **dark only**. Colors come from CSS variables; there is **no light/dark toggle**.
- **Footer:** there is **no dedicated footer component**; pages simply end after their content.
- **Shared components** (`app/_components/`): `Header`, `HeroInstall`, `NpmStats`, and an `index.ts` barrel.

---

## 7. The doc reading experience

Each area's `Shell` (e.g. `app/docs/_components/DocsShell.tsx`) and `Nav` (`DocsNav.tsx`) drive the reading view. All six areas follow the same pattern.

- **Layout:** a responsive grid — left sidebar (260px) · content · right TOC (220px). The right TOC appears only on extra-large screens; the left sidebar only on large screens.
- **Left sidebar (`Nav`):** a "← Back to home" link, an area badge + name + tagline, a **search box**, and the page links grouped by section in a scrollable column. The active page is highlighted.
- **Search:** a **client-side filter only** — it narrows the sidebar list by matching the typed text against each page's title, slug, and section. It is **not** full-text search (it does not search page bodies) and there is no search backend or results page.
- **Content panel:** a section tag + the slug + the page `# ` title, then the rendered Markdown (`doc-prose`).
- **Right "On This Page" TOC:** built from the page's `h2`/`h3` headings (anchored links); shows "No sections" when empty. On small screens a compact TOC renders at the bottom instead. A static "Tips" box also appears in the right rail.
- **Markdown features:** headings get anchor ids; tables, lists, blockquotes, and fenced code render via `marked`. There is **no syntax-highlighting library** in the dependencies (the only runtime deps are `marked`, `next`, `react`, `react-dom`), so code blocks render unhighlighted. There are **no per-code-block copy buttons** in the doc body (the copy button exists only on the landing-page install widget).
- **Not present:** breadcrumbs, prev/next page links, "edit this page" links, version switcher, and last-updated stamps are **not** implemented.
- **404 handling:** an unknown slug under an area calls Next.js `notFound()`.

---

## 8. Marketing & SEO pages

Seven standalone pages live directly under `app/` (each its own `page.tsx`, independent of the `content/` pipeline). They are SEO/landing pages:

| Route | Purpose |
|-------|---------|
| `/best-ai-agent-framework-india` | SEO landing — "best AI agent framework" (India angle). |
| `/indusagi-vs-aider` | Comparison landing — indusagi vs. Aider. |
| `/indusagi-vs-cursor` | Comparison landing — indusagi vs. Cursor. |
| `/sovereign-ai-indusagi` | Positioning landing — "sovereign AI". |
| `/use-cases/coding-agent` | Use-case landing — coding agent. |
| `/use-cases/india-fintech-startups` | Use-case landing — India fintech startups. |
| `/use-cases/memory-management` | Use-case landing — memory management. |

**SEO setup:**
- `app/sitemap.ts` emits `https://www.indusagi.com/sitemap.xml` covering: the home page, the six area roots, all seven marketing pages, **and every doc page** from all six manifests (so all 166 doc URLs are in the sitemap).
- `app/robots.ts` allows all crawlers and explicitly allows the AI crawlers `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `anthropic-ai`; points to the sitemap.
- `public/llms.txt` — an AI-crawler summary file describing indusagi.
- `app/lib/seo.ts` — shared SEO/metadata helpers; the root `app/layout.tsx` carries default metadata/OpenGraph; the home page embeds JSON-LD (§5).

---

## 9. Build, config & assets

- **Stack:** Next.js `16.1.6` (App Router), React `19.2.3`, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`), ESLint (`eslint-config-next`). The only runtime dependency beyond the framework is **`marked` `^15`** (Markdown rendering).
- **`app/lib/`:** `docs.ts` (manifests + per-area loaders), `docs-types.ts` (`DocEntry`, `DocContent`, `TocItem` types), `markdown.ts` (the `marked` renderer + TOC), `seo.ts` (metadata helpers).
- **`scripts/sync-content.mjs`:** a content-sync helper that is effectively a no-op — `content/` is the canonical source.
- **`public/` assets:** `llms.txt`, `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`. (No raster logo is bundled; the header logo is a remote image.)
- **Repo-root reports:** `seo_analysis_report.md` and `seo_implementation_report.md` document SEO findings/changes; `README.md` is the project's own readme. These are notes, not part of the served site.

---

## 10. What exists vs. what does not

**Referenced-but-missing pages (dead internal links).** Some doc bodies link to pages that have no backing `.txt` file (they 404):

| Dead link | Note |
|-----------|------|
| `/rust/performance` | Linked from the Rust framework docs; no `content/rust/performance.txt`. |
| `/rust/reference/package-exports` | The Rust file is `reference/crate-exports`, not `package-exports`. |
| `/rust/subsystems/connectors-saas` | The Rust file is `subsystems/connectors`, not `connectors-saas`. |
| `/rust/subsystems` and `/rust/ui` | Bare section prefixes — there are no section index pages. |
| `/cli/reference/cli` | No `content/cli/reference/` tree exists. |
| `/rust-cli/console/overlays` | The file is `console/dialogs`, not `overlays`. |
| `/rust-cli/reference/core` | No such page. |

**Sidebar/section asymmetry.** The `/docs` (TypeScript framework) sidebar's `SECTION_ORDER` is only `["Start", "AI", "Agent", "TUI", "Reference"]`. The manifest also files pages under **Subsystems, MCP, and Memory**, but those three groups are **not rendered in the `/docs` left sidebar** — those ~16 pages load by direct URL and appear in the sitemap, but are unlinked in navigation. The other five areas' navs list all of their sections.

**Landing-page coverage.** The home page cards cover only four areas (`/docs`, `/cli`, `/rust`, `/rust-cli`); the two **Python** areas have no landing card (they are still in the header dropdown and sitemap).

**Absent site features** (not built):
- No full-text/body search (sidebar search is a client-side title/slug/section filter only); no search backend.
- No light/dark theme toggle (dark only).
- No footer, breadcrumbs, prev/next links, "edit on GitHub", version switcher, or last-updated dates.
- No code-block syntax highlighting and no in-body copy buttons.
- No i18n/localization, no comments, no per-page analytics widgets.
- Content is `.txt` (Markdown) only — there is no CMS, no MDX components, and `sync-content.mjs` does not pull from anywhere.

---

## 11. By the numbers

- **6** documentation areas; **166** documentation pages total.
- Per area: `/docs` **38**, `/cli` **30**, `/python` **24**, `/python-cli` **27**, `/rust` **20**, `/rust-cli` **27**.
- **7** standalone marketing/SEO pages + **1** home page.
- **4** doc cards on the landing page (of 6 areas); **6** families in the header "Docs" dropdown.
- **3** install ecosystems on the hero (npm / pip / cargo) × **2** products = 6 install commands.
- **2** live npm-stats cards; **9** FAQ entries; **1** JSON-LD graph.
- Shared UI components: **3** (`Header`, `HeroInstall`, `NpmStats`); per-area UI components: **2 each** (`Shell` + `Nav`) × 6.
- Runtime dependencies: **4** (`next`, `react`, `react-dom`, `marked`); Next.js **16.1.6**.
- Sitemap entries: home + 6 area roots + 7 marketing pages + 166 doc pages.

---

*Generated as a snapshot of the indusagi-docs site. The `content/` `.txt` files remain the source of truth; if pages are added or sections re-ordered in `app/lib/docs.ts`, refresh §3–§4 and §11.*
