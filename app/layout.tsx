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
  title: "Indusagi Documentation",
  description: "Developer documentation for Indusagi packages and Coding Agent CLI.",
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
