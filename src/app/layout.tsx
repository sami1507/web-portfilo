import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sami Aburaed — Portfolio",
  description:
    "Personal portfolio of Sami Aburaed: projects, skills, and contact. Open to learning, growing, and contributing to impactful teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-950 min-h-screen flex flex-col`}
      >
        <header className="border-b border-zinc-200/70 dark:border-zinc-800/70 sticky top-0 bg-white/80 dark:bg-zinc-950/70 backdrop-blur z-40">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">Sami Aburaed</a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#projects">Projects</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#skills">Skills</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400" href="#contact">Contact</a>
              <a className="rounded-md px-3 py-1.5 border border-zinc-300/70 dark:border-zinc-700/70 hover:bg-zinc-100 dark:hover:bg-zinc-900" href="/CV_Sami_Aburaed_EN.docx">Download CV</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-zinc-200/70 dark:border-zinc-800/70">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-500">
            © {new Date().getFullYear()} Sami Aburaed. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
