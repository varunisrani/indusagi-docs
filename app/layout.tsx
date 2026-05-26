import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.indusagi.com'),
  title: {
    template: '%s | Indusagi Documentation',
    default: 'Indusagi Documentation',
  },
  description: 'Developer documentation for Indusagi TypeScript AI agent framework and terminal-first Coding Agent CLI.',
  keywords: ['indusagi', 'ai agent', 'typescript', 'coding agent', 'cli', 'terminal ai', 'next.js', 'open source'],
  openGraph: {
    title: 'Indusagi Documentation',
    description: 'Developer documentation for Indusagi packages and Coding Agent CLI.',
    url: 'https://www.indusagi.com',
    siteName: 'Indusagi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Indusagi Documentation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indusagi Documentation',
    description: 'Developer documentation for Indusagi packages and Coding Agent CLI.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#0f0f0f", colorScheme: "dark" }}>
      <head>
        <meta name="color-scheme" content="dark" />
        <style dangerouslySetInnerHTML={{ __html: `html, body { background: #0f0f0f !important; }` }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`} style={{ backgroundColor: "#0f0f0f" }}>
        {children}
      </body>
    </html>
  );
}
