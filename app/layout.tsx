import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Applied before paint so the saved theme never flashes.
const THEME_INIT = `(function(){try{var t=localStorage.getItem('indusagi-theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.classList.remove('light','dark');document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();`;

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
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} ${ibmPlexSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
