
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

// Configure Google Fonts for consistent typography
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site metadata for SEO and browser tabs
export const metadata: Metadata = {
  title: "Login — Food Club WA",
  description: "Login to your Food Club WA account.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
