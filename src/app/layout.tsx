import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Manacop Wood Works",
  description: "Custom woodworking and handcrafted joinery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-white)] text-[var(--color-dark)]">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-[#e8dfd4] bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
              <Link href="/" className="text-lg font-semibold uppercase tracking-[0.2em] text-[var(--color-dark)]">
                Manacop Wood Works
              </Link>

              <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-dark)]/80 md:flex">
                <Link href="/" className="transition hover:text-[var(--color-primary)]">
                  Home
                </Link>
                <Link href="#about" className="transition hover:text-[var(--color-primary)]">
                  About
                </Link>
                <Link href="#contact" className="transition hover:text-[var(--color-primary)]">
                  Contact
                </Link>
              </nav>

              <a
                href="#contact"
                className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#8e6348]"
              >
                Get a Quote
              </a>
            </div>
          </header>

          <main className="flex-1 px-6 py-8 lg:px-8">
            <div className="mx-auto flex w-full max-w-6xl flex-col">{children}</div>
          </main>

          <footer className="border-t border-[#e8dfd4] bg-white/70">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-[var(--color-dark)]/70 sm:flex-row sm:items-center sm:justify-between lg:px-8">
              <p>© 2026 Manacop Wood Works. Crafted with care.</p>
              <a href="mailto:hello@manacopwoodworks.com" className="transition hover:text-[var(--color-primary)]">
                hello@manacopwoodworks.com
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
