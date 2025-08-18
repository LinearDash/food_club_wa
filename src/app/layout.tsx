// Root layout component - wraps all pages with common elements
// Sets up fonts, metadata, and includes Navbar/Footer on every page
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Food Club WA — Food Truck",
  description: "Fresh bites on wheels. Track events, browse the menu, and contact Food Club WA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {/* Navigation bar - fixed at top, appears on all pages */}
        <Navbar />

        {/* Main page content - changes based on route */}
        {children}

        {/* Footer - appears on all pages */}
        <Footer />
      </body>
    </html>
  );
}
