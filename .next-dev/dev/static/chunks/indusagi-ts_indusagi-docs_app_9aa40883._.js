(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PythonCliDocsNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SECTION_ORDER = [
    "Start",
    "Console",
    "Subsystems",
    "Configuration",
    "Reference"
];
function PythonCliDocsNav({ docs, activeSlug }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredDocs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PythonCliDocsNav.useMemo[filteredDocs]": ()=>{
            const q = query.trim().toLowerCase();
            if (!q) return docs;
            return docs.filter({
                "PythonCliDocsNav.useMemo[filteredDocs]": (doc)=>{
                    return doc.title.toLowerCase().includes(q) || doc.slug.toLowerCase().includes(q) || doc.section.toLowerCase().includes(q);
                }
            }["PythonCliDocsNav.useMemo[filteredDocs]"]);
        }
    }["PythonCliDocsNav.useMemo[filteredDocs]"], [
        docs,
        query
    ]);
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PythonCliDocsNav.useMemo[grouped]": ()=>{
            const groups = new Map();
            for (const doc of filteredDocs){
                if (!groups.has(doc.section)) groups.set(doc.section, []);
                groups.get(doc.section).push(doc);
            }
            return SECTION_ORDER.filter({
                "PythonCliDocsNav.useMemo[grouped]": (section)=>groups.has(section)
            }["PythonCliDocsNav.useMemo[grouped]"]).map({
                "PythonCliDocsNav.useMemo[grouped]": (section)=>({
                        section,
                        items: groups.get(section) || []
                    })
            }["PythonCliDocsNav.useMemo[grouped]"]);
        }
    }["PythonCliDocsNav.useMemo[grouped]"], [
        filteredDocs
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden lg:block sticky top-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "surface rounded-2xl sm:rounded-3xl p-4 sm:p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-xs text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors",
                    children: "← Back to home"
                }, void 0, false, {
                    fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tag-python-cli inline-flex items-center rounded-full px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-2 sm:mt-3",
                    children: "Python Agent"
                }, void 0, false, {
                    fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1.5 sm:mt-2 text-xl sm:text-2xl font-semibold text-[color:var(--ink)]",
                    children: "induscode"
                }, void 0, false, {
                    fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-0.5 sm:mt-1 text-xs sm:text-sm text-[color:var(--muted)]",
                    children: "Python coding-agent CLI"
                }, void 0, false, {
                    fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 sm:mt-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        placeholder: "Search docs...",
                        className: "w-full rounded-xl border border-[color:var(--border)] bg-[rgba(30,30,30,0.8)] px-3 py-2 text-sm outline-none focus:border-[#a78bfa]"
                    }, void 0, false, {
                        fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 sm:mt-6 max-h-[50vh] sm:max-h-[60vh] lg:max-h-[68vh] overflow-y-auto pr-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: grouped.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[color:var(--muted)] font-medium",
                                        children: group.section
                                    }, void 0, false, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 sm:mt-3 flex flex-col gap-1",
                                        children: group.items.map((doc)=>{
                                            const isActive = doc.slug === activeSlug;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/python-cli/${doc.slug}`,
                                                className: `rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition-colors ${isActive ? "bg-[rgba(167,139,250,0.15)] text-[#a78bfa] font-medium" : "text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium",
                                                    children: doc.title
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 25
                                                }, this)
                                            }, doc.slug, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                                                lineNumber: 73,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, group.section, true, {
                                fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/indusagi-ts/indusagi-docs/app/python-cli/_components/PythonCliDocsNav.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(PythonCliDocsNav, "L8Lg2V+OkB8DPnZ65zZMk1WWiew=");
_c = PythonCliDocsNav;
var _c;
__turbopack_context__.k.register(_c, "PythonCliDocsNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/indusagi-ts/indusagi-docs/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// The four documentation families, in nav order. A single "Docs" dropdown lists them all.
const DOC_FAMILIES = [
    {
        href: "/docs",
        label: "IndusAGI (TypeScript)",
        note: "Framework",
        badge: "TS",
        from: "from-[#fe6027]",
        to: "to-[#ff8a50]",
        accent: "#ff7a45"
    },
    {
        href: "/cli",
        label: "IndusAGI Coding Agent (TypeScript)",
        note: "Coding-agent CLI",
        badge: "TS",
        from: "from-cyan-500",
        to: "to-teal-600",
        accent: "#22d3ee"
    },
    {
        href: "/python",
        label: "IndusAGI (Python)",
        note: "Framework",
        badge: "PY",
        from: "from-emerald-500",
        to: "to-green-600",
        accent: "#34d399"
    },
    {
        href: "/python-cli",
        label: "IndusAGI Coding Agent (Python)",
        note: "Coding-agent CLI",
        badge: "PY",
        from: "from-violet-500",
        to: "to-purple-600",
        accent: "#a78bfa"
    }
];
function Header() {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedSection, setExpandedSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [docsMenuOpen, setDocsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Determine which docs family we're in
    const isDocs = pathname.startsWith("/docs");
    const isCLI = pathname.startsWith("/cli");
    const isPythonCli = pathname.startsWith("/python-cli");
    const isPython = pathname.startsWith("/python") && !isPythonCli;
    // /python-cli also starts with /python, so the framework match must exclude it.
    const isActiveFamily = (href)=>href === "/python" ? isPython : pathname.startsWith(href);
    const anyDocsActive = isDocs || isCLI || isPython || isPythonCli;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            // Close menus on route change
            setMobileMenuOpen(false);
            setDocsMenuOpen(false);
        }
    }["Header.useEffect"], [
        pathname
    ]);
    // Auto-expand the Docs group when the mobile menu opens on a docs page
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (mobileMenuOpen && anyDocsActive) {
                setExpandedSection("docs");
            }
        }
    }["Header.useEffect"], [
        mobileMenuOpen,
        anyDocsActive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            // Prevent body scroll when menu is open
            if (mobileMenuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        mobileMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#2a2a2a]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-3 sm:px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-12 sm:h-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2 text-sm font-medium text-[color:var(--ink)] hover:text-[color:var(--accent)] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://i.ibb.co/PvCrYrPn/IND-wordmark-tr.png",
                                    alt: "Indusagi",
                                    className: "h-6 sm:h-7 md:h-8 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${pathname === "/" ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]" : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"}`,
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setDocsMenuOpen((v)=>!v),
                                                "aria-expanded": docsMenuOpen,
                                                "aria-haspopup": "menu",
                                                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${anyDocsActive || docsMenuOpen ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]" : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"}`,
                                                children: [
                                                    "Docs",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: `transition-transform ${docsMenuOpen ? "rotate-180" : ""}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "6 9 12 15 18 9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            docsMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "fixed inset-0 z-40",
                                                        onClick: ()=>setDocsMenuOpen(false)
                                                    }, void 0, false, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        role: "menu",
                                                        className: "absolute left-0 mt-2 w-80 z-50 rounded-2xl border border-[color:var(--border)] bg-[#161616] shadow-xl p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]",
                                                                children: "Documentation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 23
                                                            }, this),
                                                            DOC_FAMILIES.map((f)=>{
                                                                const active = isActiveFamily(f.href);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: f.href,
                                                                    role: "menuitem",
                                                                    onClick: ()=>setDocsMenuOpen(false),
                                                                    className: `flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${active ? "bg-[rgba(255,255,255,0.06)]" : "hover:bg-[rgba(255,255,255,0.04)]"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `w-7 h-7 shrink-0 rounded-lg bg-gradient-to-br ${f.from} ${f.to} flex items-center justify-center text-white text-[10px] font-semibold`,
                                                                            children: f.badge
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                                            lineNumber: 135,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "block text-sm font-medium text-[color:var(--ink)] truncate",
                                                                                    style: active ? {
                                                                                        color: f.accent
                                                                                    } : undefined,
                                                                                    children: f.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                                                    lineNumber: 141,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "block text-xs text-[color:var(--muted)]",
                                                                                    children: f.note
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                                                    lineNumber: 147,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                                            lineNumber: 140,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, f.href, true, {
                                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                                    lineNumber: 126,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.npmjs.com/package/indusagi",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-1.5 rounded-lg bg-[color:var(--accent)] text-white px-3 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM4.24 4.5h15.52v15.52H4.24V4.5zm3.12 3.12v9.28h3.12v-6.16h3.04v6.16h3.12V7.62H7.36z"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            "npm"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://pypi.org/project/indusagi/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        title: "indusagi for Python (framework)",
                                        className: "flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] text-[color:var(--muted)] px-3 py-1.5 text-sm font-medium hover:text-[#34d399] hover:border-[#34d399] transition-colors ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "3.27 6.96 12 12.01 20.73 6.96"
                                                    }, void 0, false, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "22.08",
                                                        x2: "12",
                                                        y2: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            "Python"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/varunisrani/indusagi.git",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] text-[color:var(--muted)] px-3 py-1.5 text-sm font-medium hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition-colors ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 0.5C5.65 0.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.24.78-.54 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.05.77 2.12 0 1.53-.02 2.76-.02 3.14 0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            "Indusagi SDK"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/varunisrani/indusagi-coding-agent.git",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] text-[color:var(--muted)] px-3 py-1.5 text-sm font-medium hover:text-[color:var(--accent-2)] hover:border-[color:var(--accent-2)] transition-colors ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 0.5C5.65 0.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.24.78-.54 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.05.77 2.12 0 1.53-.02 2.76-.02 3.14 0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            "Indusagi CLI"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                className: "md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-[color:var(--border)] hover:border-[color:var(--accent)] transition-colors",
                                "aria-label": "Toggle menu",
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "3",
                                            y1: "6",
                                            x2: "21",
                                            y2: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "3",
                                            y1: "12",
                                            x2: "21",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "3",
                                            y1: "18",
                                            x2: "21",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed inset-0 z-40 bg-[#0f0f0f] pt-12 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "p-4 pb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: ()=>setMobileMenuOpen(false),
                                className: `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === "/" ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]" : "text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "9 22 9 12 15 12 15 22"
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    "Home"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px bg-[color:var(--border)] my-3"
                        }, void 0, false, {
                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setExpandedSection(expandedSection === "docs" ? null : "docs"),
                                    className: `w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${anyDocsActive ? "bg-[rgba(255,122,69,0.15)] text-[color:var(--accent)]" : "text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-6 h-6 rounded-lg bg-gradient-to-br from-[#fe6027] to-[#ff8a50] flex items-center justify-center text-white text-xs",
                                                    children: "DOC"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this),
                                                "Docs"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: `transition-transform ${expandedSection === "docs" ? "rotate-180" : ""}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "6 9 12 15 18 9"
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this),
                                expandedSection === "docs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 ml-4 pl-4 border-l border-[color:var(--border)] space-y-0.5",
                                    children: DOC_FAMILIES.map((f)=>{
                                        const active = isActiveFamily(f.href);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: f.href,
                                            onClick: ()=>setMobileMenuOpen(false),
                                            className: `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active ? "bg-[rgba(255,255,255,0.06)] font-medium" : "text-[color:var(--muted)] hover:text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.03)]"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `w-6 h-6 shrink-0 rounded-lg bg-gradient-to-br ${f.from} ${f.to} flex items-center justify-center text-white text-[10px] font-semibold`,
                                                    children: f.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block truncate",
                                                            style: active ? {
                                                                color: f.accent
                                                            } : undefined,
                                                            children: f.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-xs text-[color:var(--muted)]",
                                                            children: f.note
                                                        }, void 0, false, {
                                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, f.href, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 289,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 285,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px bg-[color:var(--border)] my-3"
                        }, void 0, false, {
                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.npmjs.com/package/indusagi",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-[color:var(--accent)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM4.24 4.5h15.52v15.52H4.24V4.5zm3.12 3.12v9.28h3.12v-6.16h3.04v6.16h3.12V7.62H7.36z"
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this),
                                        "indusagi (SDK)",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "ml-auto text-[color:var(--muted)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "15 3 21 3 21 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "14",
                                                    x2: "21",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.npmjs.com/package/indusagi-coding-agent",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-[color:var(--accent-2)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM4.24 4.5h15.52v15.52H4.24V4.5zm3.12 3.12v9.28h3.12v-6.16h3.04v6.16h3.12V7.62H7.36z"
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        "indusagi-coding-agent (CLI)",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "ml-auto text-[color:var(--muted)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "15 3 21 3 21 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "14",
                                                    x2: "21",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 339,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://pypi.org/project/indusagi/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            style: {
                                                color: "#34d399"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "3.27 6.96 12 12.01 20.73 6.96"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "22.08",
                                                    x2: "12",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this),
                                        "indusagi (Python)",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "ml-auto text-[color:var(--muted)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "15 3 21 3 21 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "14",
                                                    x2: "21",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 368,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://pypi.org/project/induscode/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            style: {
                                                color: "#a78bfa"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "3.27 6.96 12 12.01 20.73 6.96"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "12",
                                                    y1: "22.08",
                                                    x2: "12",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this),
                                        "induscode (Python)",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "ml-auto text-[color:var(--muted)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "15 3 21 3 21 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "14",
                                                    x2: "21",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/varunisrani/indusagi.git",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-[color:var(--accent)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 0.5C5.65 0.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.24.78-.54 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.05.77 2.12 0 1.53-.02 2.76-.02 3.14 0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 401,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this),
                                        "Indusagi SDK",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "ml-auto text-[color:var(--muted)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "15 3 21 3 21 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "14",
                                                    x2: "21",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/varunisrani/indusagi-coding-agent.git",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-[color:var(--ink)] hover:bg-[rgba(255,255,255,0.05)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-[color:var(--accent-2)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 0.5C5.65 0.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.24.78-.54 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.38-3.88-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.05.77 2.12 0 1.53-.02 2.76-.02 3.14 0 .3.2.65.79.54A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
                                            }, void 0, false, {
                                                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                lineNumber: 418,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this),
                                        "Indusagi CLI",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            className: "ml-auto text-[color:var(--muted)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "15 3 21 3 21 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "14",
                                                    x2: "21",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 411,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 bg-[rgba(255,122,69,0.1)] rounded-xl p-4 border border-[rgba(255,122,69,0.2)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-[color:var(--muted)] mb-2",
                                    children: "Quick install"
                                }, void 0, false, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 431,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "text-sm text-[color:var(--accent)] font-mono",
                                    children: "npm install indusagi"
                                }, void 0, false, {
                                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                            lineNumber: 430,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                    lineNumber: 232,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/indusagi-ts/indusagi-docs/app/_components/Header.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "146sc5wfmkeHRlv9izIZfh6Habw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$indusagi$2d$ts$2f$indusagi$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=indusagi-ts_indusagi-docs_app_9aa40883._.js.map