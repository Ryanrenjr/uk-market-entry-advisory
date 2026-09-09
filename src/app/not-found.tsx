import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Not Found / 页面不存在",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function RootNotFound() {
  return (
    <html lang="en" className={`${geistSans.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center bg-background px-6 py-24 text-foreground">
        <div className="w-full max-w-xl text-center">
          <p className="text-eyebrow uppercase text-accent">404</p>

          <h1 className="mt-4 text-balance font-display text-h1 text-primary-dark">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-4 text-body-lg text-primary-dark/70">
            The page you&apos;re looking for may have moved or no longer exists.
          </p>

          <h2 className="mt-10 text-balance font-display text-h1 text-primary-dark">
            页面不存在。
          </h2>
          <p className="mt-4 text-body-lg text-primary-dark/70">
            您访问的页面可能已被移动或不存在。
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en"
              className={`${buttonBase} bg-primary-dark text-white hover:bg-secondary-dark`}
            >
              Return Home
            </Link>
            <Link
              href="/zh"
              className={`${buttonBase} border border-primary-dark/15 bg-white text-primary-dark hover:border-primary-dark/30`}
            >
              返回首页
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
