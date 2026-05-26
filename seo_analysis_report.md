# Full SEO Analysis Report

> [!WARNING]
> **Overall SEO Status: Poor.**
> The current Next.js application has a very basic SEO setup. It is missing several critical components that search engines rely on to crawl, index, and display your site effectively, particularly for a documentation site where dynamic metadata is crucial.

## 1. Global Metadata & Config (`app/layout.tsx`)

**Current State:**
```typescript
export const metadata: Metadata = {
  title: "Indusagi Documentation",
  description: "Developer documentation for Indusagi packages and Coding Agent CLI.",
};
```
- **What's Good:** A basic title and description exist.
- **What's Missing:** 
  - `metadataBase`: Essential for resolving absolute URLs for OpenGraph images and canonical URLs.
  - `openGraph` & `twitter`: No social sharing cards are configured. If someone shares your link on Twitter/X or Discord, it won't have a rich preview image.
  - `keywords`: Missing relevant keywords (though less critical today, still good practice).

## 2. Dynamic Routing Metadata (`app/docs/[...slug]/page.tsx` & `app/cli/[...slug]/page.tsx`)

**Current State:**
These files currently only export the default component and `export const dynamic = "force-dynamic";`.

- **What's Missing:** Neither file exports a `generateMetadata()` function. 
- **Impact:** **Critical.** Every single documentation page will have the exact same title ("Indusagi Documentation") in Google Search results. Users won't know which page they are clicking on, and search engines won't properly index the specific topics (e.g., a page about "Installation" should have the title "Installation | Indusagi Documentation").

## 3. Crawlability & Indexing (`public/` or root `app/`)

**Current State:**
No `robots.txt` or `sitemap.xml` (or `sitemap.ts`/`robots.ts`) exists in the project.

- **What's Missing:**
  - **Sitemap:** A `sitemap.xml` is critical for a documentation site so search engines can discover all your nested `[...slug]` pages.
  - **Robots.txt:** Needed to tell search engine bots what they can and cannot crawl.

## 4. Semantic HTML (`app/page.tsx`)

**Current State:**
The homepage uses semantic headers like `<h1>` and `<h2>`, and utilizes Next.js `<Link>` components which is great for internal routing and SEO.

- **What's Missing:**
  - The main content is wrapped in `<div className="min-h-screen">`. This should ideally be a `<main>` tag to help screen readers and search engines identify the primary content of the page.

## Summary of Recommendations

To make this site's SEO "Good", you should implement the following:

1. **Add OpenGraph & Twitter Cards** to `app/layout.tsx`.
2. **Set `metadataBase`** in `app/layout.tsx` to your production URL.
3. **Implement `generateMetadata`** in your dynamic routes (`app/docs/[...slug]/page.tsx` and `app/cli/[...slug]/page.tsx`) so that each doc page uses the `doc.title` and `doc.description`.
4. **Create a `sitemap.ts` and `robots.ts`** in your `app/` directory to automatically generate your sitemap based on your `docs` manifests.
5. **Update generic wrapper `<div>`s** to semantic tags like `<main>`, `<section>`, `<nav>`, etc.
