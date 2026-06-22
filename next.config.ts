import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow redirecting the build dir to a user-writable path (the default
  // .next is root-owned from a prior sudo build). No-op unless NEXT_BUILD_DIR is set.
  distDir: process.env.NEXT_BUILD_DIR || ".next",
  // Pin the Turbopack workspace root to this project. Without this, Next infers
  // the parent dir (a stray ~/package-lock.json) as the root and fails to create
  // its lockfile there (permission denied).
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
