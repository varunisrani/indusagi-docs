module.exports = [
"[project]/indusagi-ts/indusagi-docs/app/favicon.ico.mjs { IMAGE => \"[project]/indusagi-ts/indusagi-docs/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/favicon.ico.mjs { IMAGE => \"[project]/indusagi-ts/indusagi-docs/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/indusagi-ts/indusagi-docs/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/indusagi-ts/indusagi-docs/app/lib/markdown.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderMarkdown",
    ()=>renderMarkdown,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/marked/lib/marked.esm.js [app-rsc] (ecmascript)");
;
function slugify(text) {
    if (!text) return "section";
    return text.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}
function withUniqueSlug(base, seen) {
    const count = seen.get(base) || 0;
    if (count === 0) {
        seen.set(base, 1);
        return base;
    }
    const next = count + 1;
    seen.set(base, next);
    return `${base}-${next}`;
}
function renderMarkdown(markdown) {
    const toc = [];
    const seen = new Map();
    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["marked"].Renderer();
    renderer.heading = ({ text, depth })=>{
        const base = slugify(text);
        const id = withUniqueSlug(base || "section", seen);
        if (depth === 2 || depth === 3) {
            toc.push({
                id,
                text: text.replace(/<[^>]+>/g, ""),
                level: depth
            });
        }
        return `<h${depth} id="${id}">${text}</h${depth}>`;
    };
    const html = __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["marked"].parse(markdown, {
        renderer,
        gfm: true,
        breaks: false
    });
    return {
        html,
        toc
    };
}
}),
"[project]/indusagi-ts/indusagi-docs/app/lib/docs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCLIDocBySlug",
    ()=>getCLIDocBySlug,
    "getCLIDocsManifest",
    ()=>getCLIDocsManifest,
    "getDefaultCLIDocSlug",
    ()=>getDefaultCLIDocSlug,
    "getDefaultPackageDocSlug",
    ()=>getDefaultPackageDocSlug,
    "getDefaultPythonCliDocSlug",
    ()=>getDefaultPythonCliDocSlug,
    "getDefaultPythonDocSlug",
    ()=>getDefaultPythonDocSlug,
    "getPackageDocBySlug",
    ()=>getPackageDocBySlug,
    "getPackageDocsManifest",
    ()=>getPackageDocsManifest,
    "getPythonCliDocBySlug",
    ()=>getPythonCliDocBySlug,
    "getPythonCliDocsManifest",
    ()=>getPythonCliDocsManifest,
    "getPythonDocBySlug",
    ()=>getPythonDocBySlug,
    "getPythonDocsManifest",
    ()=>getPythonDocsManifest
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$markdown$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/lib/markdown.ts [app-rsc] (ecmascript)");
;
;
;
const CONTENT_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "content");
// Indusagi package sections
const PACKAGE_SECTION_ORDER = [
    "Start",
    "Subsystems",
    "AI",
    "Agent",
    "TUI",
    "MCP",
    "Memory",
    "Reference"
];
const PACKAGE_SECTION_MAP = [
    {
        prefix: "subsystems/",
        section: "Subsystems"
    },
    {
        prefix: "ai/",
        section: "AI"
    },
    {
        prefix: "agent/",
        section: "Agent"
    },
    {
        prefix: "tui/",
        section: "TUI"
    },
    {
        prefix: "mcp/",
        section: "MCP"
    },
    {
        prefix: "memory/",
        section: "Memory"
    }
];
const PACKAGE_SPECIAL_ORDER = {
    "README": 0,
    "getting-started": 1,
    "architecture": 2,
    "subsystems/llm-gateway": 10,
    "subsystems/runtime": 11,
    "subsystems/capabilities": 12,
    "subsystems/interop-mcp": 13,
    "subsystems/connectors-saas": 14,
    "subsystems/swarm": 15,
    "subsystems/smithy": 16,
    "subsystems/tracing": 17,
    "subsystems/shell-app": 18,
    "subsystems/react-ink": 19,
    "package-exports": 90,
    "use-cases/security-testing": 91
};
// Coding agent CLI sections
const CLI_SECTION_ORDER = [
    "Start",
    "SDK & API",
    "Customization",
    "Session",
    "Configuration",
    "UI",
    "Platform"
];
const CLI_SECTION_MAP = [
    {
        match: (slug)=>[
                "sdk",
                "rpc",
                "json"
            ].includes(slug),
        section: "SDK & API"
    },
    {
        match: (slug)=>[
                "extensions",
                "loading-extensions",
                "skills",
                "hooks",
                "subagents",
                "prompt-templates",
                "themes",
                "packages",
                "tools"
            ].includes(slug),
        section: "Customization"
    },
    {
        match: (slug)=>[
                "session",
                "tree",
                "compaction"
            ].includes(slug),
        section: "Session"
    },
    {
        match: (slug)=>[
                "settings",
                "models",
                "providers",
                "custom-provider",
                "keybindings"
            ].includes(slug),
        section: "Configuration"
    },
    {
        match: (slug)=>[
                "tui",
                "terminal-setup"
            ].includes(slug),
        section: "UI"
    },
    {
        match: (slug)=>[
                "development",
                "shell-aliases",
                "windows"
            ].includes(slug),
        section: "Platform"
    }
];
const CLI_SPECIAL_ORDER = {
    "README": 0,
    "architecture": 0.5,
    "providers": 1,
    "sdk": 2,
    "rpc": 3,
    "json": 4,
    "extensions": 10,
    "loading-extensions": 10.5,
    "skills": 11,
    "hooks": 12,
    "subagents": 13,
    "tools": 14,
    "session": 20,
    "tree": 21,
    "compaction": 22,
    "settings": 30,
    "models": 31,
    "custom-provider": 32,
    "keybindings": 33,
    "tui": 40,
    "terminal-setup": 41,
    "development": 50,
    "shell-aliases": 51,
    "windows": 52,
    "packages": 60,
    "prompt-templates": 61,
    "themes": 62
};
function pickPackageSection(slug) {
    for (const { prefix, section } of PACKAGE_SECTION_MAP){
        if (slug.startsWith(prefix)) return section;
    }
    if (slug === "package-exports" || slug.startsWith("use-cases/")) return "Reference";
    return "Start";
}
function pickCLISection(slug) {
    const baseName = slug.split("/").at(-1) || slug;
    for (const { match, section } of CLI_SECTION_MAP){
        if (match(baseName)) return section;
    }
    return "Start";
}
function sortDocs(a, b, sectionOrder) {
    const aSection = sectionOrder.indexOf(a.section);
    const bSection = sectionOrder.indexOf(b.section);
    if (aSection !== bSection) return aSection - bSection;
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title);
}
async function readDocPaths(subdir) {
    const result = [];
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, subdir);
    async function walk(dirPath) {
        try {
            const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readdir(dirPath, {
                withFileTypes: true
            });
            for (const entry of entries){
                const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dirPath, entry.name);
                if (entry.isDirectory()) {
                    await walk(fullPath);
                } else if (entry.isFile() && entry.name.endsWith(".txt")) {
                    result.push(fullPath);
                }
            }
        } catch  {
        // Directory doesn't exist
        }
    }
    await walk(dir);
    return result;
}
function slugFromFile(filePath, subdir) {
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, subdir);
    const rel = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(dir, filePath);
    return rel.replace(/\.txt$/, "").split(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].sep).join("/");
}
async function getTitleFromFile(filePath) {
    const content = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, "utf-8");
    const firstHeading = content.split(/\r?\n/).find((line)=>line.trim().startsWith("# "));
    if (firstHeading) {
        return firstHeading.replace(/^#\s+/, "").trim();
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].basename(filePath, ".txt");
}
function stripTitle(markdown) {
    const lines = markdown.split(/\r?\n/);
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (line.trim().startsWith("# ")) {
            const title = line.replace(/^#\s+/, "").trim();
            const body = [
                ...lines.slice(0, i),
                ...lines.slice(i + 1)
            ].join("\n").trim();
            return {
                title,
                body
            };
        }
    }
    return {
        title: "Untitled",
        body: markdown
    };
}
async function getPackageDocsManifest() {
    const paths = await readDocPaths("package");
    const docs = await Promise.all(paths.map(async (filePath)=>{
        const slug = slugFromFile(filePath, "package");
        const baseName = slug.split("/").at(-1) || slug;
        const title = await getTitleFromFile(filePath);
        const section = pickPackageSection(slug);
        const order = PACKAGE_SPECIAL_ORDER[slug] ?? PACKAGE_SPECIAL_ORDER[baseName] ?? 10;
        return {
            slug,
            title,
            section,
            order
        };
    }));
    docs.sort((a, b)=>sortDocs(a, b, PACKAGE_SECTION_ORDER));
    return docs;
}
async function getPackageDocBySlug(slugParts) {
    const slug = slugParts.join("/");
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, "package", `${slug}.txt`);
    try {
        const markdown = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, "utf-8");
        const { title, body } = stripTitle(markdown);
        const { html, toc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$markdown$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderMarkdown"])(body);
        const section = pickPackageSection(slug);
        return {
            slug,
            title,
            section,
            html,
            raw: body,
            toc
        };
    } catch  {
        return null;
    }
}
async function getDefaultPackageDocSlug() {
    const preferred = [
        "getting-started",
        "README"
    ];
    for (const slug of preferred){
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].access(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, "package", `${slug}.txt`));
            return [
                slug
            ];
        } catch  {
        // continue
        }
    }
    return [
        "README"
    ];
}
async function getCLIDocsManifest() {
    const paths = await readDocPaths("cli");
    const docs = await Promise.all(paths.map(async (filePath)=>{
        const slug = slugFromFile(filePath, "cli");
        const baseName = slug.split("/").at(-1) || slug;
        const title = await getTitleFromFile(filePath);
        const section = pickCLISection(slug);
        const order = CLI_SPECIAL_ORDER[baseName] ?? 100;
        return {
            slug,
            title,
            section,
            order
        };
    }));
    docs.sort((a, b)=>sortDocs(a, b, CLI_SECTION_ORDER));
    return docs;
}
async function getCLIDocBySlug(slugParts) {
    const slug = slugParts.join("/");
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, "cli", `${slug}.txt`);
    try {
        const markdown = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, "utf-8");
        const { title, body } = stripTitle(markdown);
        const { html, toc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$markdown$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderMarkdown"])(body);
        const section = pickCLISection(slug);
        return {
            slug,
            title,
            section,
            html,
            raw: body,
            toc
        };
    } catch  {
        return null;
    }
}
async function getDefaultCLIDocSlug() {
    const preferred = [
        "README",
        "providers",
        "sdk"
    ];
    for (const slug of preferred){
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].access(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, "cli", `${slug}.txt`));
            return [
                slug
            ];
        } catch  {
        // continue
        }
    }
    return [
        "README"
    ];
}
// Python rebuild docs (indusagi for Python)
const PYTHON_SECTION_ORDER = [
    "Start",
    "Facades",
    "Subsystems",
    "UI",
    "Reference"
];
const PYTHON_SECTION_MAP = [
    {
        prefix: "facades/",
        section: "Facades"
    },
    {
        prefix: "subsystems/",
        section: "Subsystems"
    },
    {
        prefix: "ui/",
        section: "UI"
    },
    {
        prefix: "reference/",
        section: "Reference"
    }
];
const PYTHON_SPECIAL_ORDER = {
    "README": 0,
    "getting-started": 1,
    "architecture": 2,
    "facades/ai": 10,
    "facades/agent": 11,
    "facades/mcp": 12,
    "facades/memory": 13,
    "subsystems/llm-gateway": 20,
    "subsystems/runtime": 21,
    "subsystems/capabilities": 22,
    "subsystems/interop": 23,
    "subsystems/connectors": 24,
    "subsystems/swarm": 25,
    "subsystems/smithy": 26,
    "subsystems/tracing": 27,
    "subsystems/shell-app": 28,
    "ui/tui": 40,
    "ui/react-ink": 41,
    "ui/ui-bridge": 42,
    "reference/package-exports": 60,
    "reference/cli": 61,
    "reference/examples": 62,
    "reference/testing": 63,
    "reference/parity": 64
};
function pickPythonSection(slug) {
    for (const { prefix, section } of PYTHON_SECTION_MAP){
        if (slug.startsWith(prefix)) return section;
    }
    return "Start";
}
async function getPythonDocsManifest() {
    const paths = await readDocPaths("python");
    const docs = await Promise.all(paths.map(async (filePath)=>{
        const slug = slugFromFile(filePath, "python");
        const title = await getTitleFromFile(filePath);
        const section = pickPythonSection(slug);
        const order = PYTHON_SPECIAL_ORDER[slug] ?? 100;
        return {
            slug,
            title,
            section,
            order
        };
    }));
    docs.sort((a, b)=>sortDocs(a, b, PYTHON_SECTION_ORDER));
    return docs;
}
async function getPythonDocBySlug(slugParts) {
    const slug = slugParts.join("/");
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, "python", `${slug}.txt`);
    try {
        const markdown = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, "utf-8");
        const { title, body } = stripTitle(markdown);
        const { html, toc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$markdown$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderMarkdown"])(body);
        const section = pickPythonSection(slug);
        return {
            slug,
            title,
            section,
            html,
            raw: body,
            toc
        };
    } catch  {
        return null;
    }
}
async function getDefaultPythonDocSlug() {
    const preferred = [
        "getting-started",
        "README"
    ];
    for (const slug of preferred){
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].access(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, "python", `${slug}.txt`));
            return [
                slug
            ];
        } catch  {
        // continue
        }
    }
    return [
        "README"
    ];
}
// Python coding-agent CLI docs (induscode)
const PYTHON_CLI_SECTION_ORDER = [
    "Start",
    "Console",
    "Subsystems",
    "Configuration",
    "Reference"
];
const PYTHON_CLI_SECTION_MAP = [
    {
        prefix: "console/",
        section: "Console"
    },
    {
        prefix: "subsystems/",
        section: "Subsystems"
    },
    {
        prefix: "configuration/",
        section: "Configuration"
    },
    {
        prefix: "reference/",
        section: "Reference"
    }
];
const PYTHON_CLI_SPECIAL_ORDER = {
    "README": 0,
    "getting-started": 1,
    "architecture": 2,
    "console/overview": 10,
    "console/slash-commands": 11,
    "console/dialogs": 12,
    "console/theming": 13,
    "subsystems/launch": 20,
    "subsystems/boot": 21,
    "subsystems/conductor": 22,
    "subsystems/runtime-bridge": 23,
    "subsystems/capability-deck": 24,
    "subsystems/channels": 25,
    "subsystems/sessions": 26,
    "subsystems/window-budget": 27,
    "subsystems/transcript-export": 28,
    "subsystems/briefing": 29,
    "subsystems/addons": 30,
    "subsystems/insight": 31,
    "configuration/settings": 40,
    "configuration/auth": 41,
    "configuration/models": 42,
    "configuration/mcp": 43,
    "reference/cli": 60,
    "reference/package-exports": 61,
    "reference/parity": 62,
    "reference/testing": 63
};
function pickPythonCliSection(slug) {
    for (const { prefix, section } of PYTHON_CLI_SECTION_MAP){
        if (slug.startsWith(prefix)) return section;
    }
    return "Start";
}
async function getPythonCliDocsManifest() {
    const paths = await readDocPaths("python-cli");
    const docs = await Promise.all(paths.map(async (filePath)=>{
        const slug = slugFromFile(filePath, "python-cli");
        const title = await getTitleFromFile(filePath);
        const section = pickPythonCliSection(slug);
        const order = PYTHON_CLI_SPECIAL_ORDER[slug] ?? 100;
        return {
            slug,
            title,
            section,
            order
        };
    }));
    docs.sort((a, b)=>sortDocs(a, b, PYTHON_CLI_SECTION_ORDER));
    return docs;
}
async function getPythonCliDocBySlug(slugParts) {
    const slug = slugParts.join("/");
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, "python-cli", `${slug}.txt`);
    try {
        const markdown = await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, "utf-8");
        const { title, body } = stripTitle(markdown);
        const { html, toc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$markdown$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderMarkdown"])(body);
        const section = pickPythonCliSection(slug);
        return {
            slug,
            title,
            section,
            html,
            raw: body,
            toc
        };
    } catch  {
        return null;
    }
}
async function getDefaultPythonCliDocSlug() {
    const preferred = [
        "getting-started",
        "README"
    ];
    for (const slug of preferred){
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["default"].access(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(CONTENT_DIR, "python-cli", `${slug}.txt`));
            return [
                slug
            ];
        } catch  {
        // continue
        }
    }
    return [
        "README"
    ];
}
}),
"[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx <module evaluation>", "default");
}),
"[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx", "default");
}),
"[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$cli$2f$_components$2f$CLIDocsNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$cli$2f$_components$2f$CLIDocsNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$cli$2f$_components$2f$CLIDocsNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx <module evaluation>", "Header");
}),
"[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx", "Header");
}),
"[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/indusagi-ts/indusagi-docs/app/_components/NpmStats.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NpmStats",
    ()=>NpmStats
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const NpmStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NpmStats() from the server but NpmStats is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/indusagi-ts/indusagi-docs/app/_components/NpmStats.tsx <module evaluation>", "NpmStats");
}),
"[project]/indusagi-ts/indusagi-docs/app/_components/NpmStats.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NpmStats",
    ()=>NpmStats
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const NpmStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NpmStats() from the server but NpmStats is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/indusagi-ts/indusagi-docs/app/_components/NpmStats.tsx", "NpmStats");
}),
"[project]/indusagi-ts/indusagi-docs/app/_components/NpmStats.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$NpmStats$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/_components/NpmStats.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$NpmStats$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/_components/NpmStats.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$NpmStats$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/indusagi-ts/indusagi-docs/app/_components/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$NpmStats$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/_components/NpmStats.tsx [app-rsc] (ecmascript)");
;
;
}),
"[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CLIDocsShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$markdown$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/lib/markdown.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$cli$2f$_components$2f$CLIDocsNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsNav.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/_components/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx [app-rsc] (ecmascript)");
;
;
;
;
function CLIDocsShell({ docs, doc }) {
    const markdownSource = doc.raw || "";
    const { html: contentHtml, toc } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$markdown$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderMarkdown"])(markdownSource);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$_components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-16 sm:pb-20 pt-20 lg:pt-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-3 sm:px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_220px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "hidden lg:block lg:pt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$cli$2f$_components$2f$CLIDocsNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    docs: docs,
                                    activeSlug: doc.slug
                                }, void 0, false, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "surface-strong rounded-2xl sm:rounded-[28px] px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2 sm:gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tag-cli rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.22em]",
                                                        children: doc.section
                                                    }, void 0, false, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] sm:text-xs text-[color:var(--muted)]",
                                                        children: doc.slug
                                                    }, void 0, false, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "mt-3 sm:mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-[color:var(--ink)]",
                                                children: doc.title
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 sm:mt-6 doc-prose",
                                                dangerouslySetInnerHTML: {
                                                    __html: contentHtml
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    toc.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:hidden mt-4 sm:mt-6 surface rounded-2xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[color:var(--muted)] font-medium",
                                                children: "On This Page"
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap gap-2",
                                                children: toc.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `#${item.id}`,
                                                        className: "inline-block rounded-lg bg-[rgba(34,211,238,0.1)] px-2.5 py-1 text-xs text-[color:var(--ink)] hover:bg-[rgba(34,211,238,0.2)] transition-colors",
                                                        children: item.text
                                                    }, item.id, false, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "hidden xl:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-20 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "surface rounded-2xl p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]",
                                                    children: "On This Page"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 space-y-2 text-sm",
                                                    children: toc.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[color:var(--muted)]",
                                                        children: "No sections"
                                                    }, void 0, false, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 23
                                                    }, this) : toc.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `#${item.id}`,
                                                            className: `toc-link block ${item.level === 3 ? "pl-3 text-xs" : "font-medium"}`,
                                                            children: item.text
                                                        }, item.id, false, {
                                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "surface rounded-2xl p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]",
                                                    children: "Tips"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 text-sm text-[color:var(--muted)]",
                                                    children: [
                                                        "Use the sidebar search to jump between docs. Run",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "bg-[rgba(34,211,238,0.15)] px-1.5 py-0.5 rounded text-xs",
                                                            children: "indusagi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, this),
                                                        " to start the CLI."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/indusagi-ts/indusagi-docs/app/cli/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CLIDocsIndexPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$docs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/lib/docs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$cli$2f$_components$2f$CLIDocsShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/cli/_components/CLIDocsShell.tsx [app-rsc] (ecmascript)");
;
;
;
async function CLIDocsIndexPage() {
    const docs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$docs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCLIDocsManifest"])();
    const slug = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$docs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultCLIDocSlug"])();
    const doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$lib$2f$docs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCLIDocBySlug"])(slug);
    if (!doc) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8",
            children: "Doc not found."
        }, void 0, false, {
            fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/page.tsx",
            lineNumber: 10,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$app$2f$cli$2f$_components$2f$CLIDocsShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        docs: docs,
        doc: doc
    }, void 0, false, {
        fileName: "[project]/indusagi-ts/indusagi-docs/app/cli/page.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
const dynamic = "force-dynamic";
}),
"[project]/indusagi-ts/indusagi-docs/app/cli/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/app/cli/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f4259d09._.js.map