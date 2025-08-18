"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleInPageClick = (e: React.MouseEvent, id: string) => {
    if (!isHome) return; // allow normal navigation on other pages
    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 items-start">
          <div>
            <p className="font-semibold text-lg">Food Club WA Pty Ltd</p>
            <p className="text-white/80 text-sm mt-2">Bold flavors on wheels. Track us, find us, and grab a bite!</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <p className="text-white/80 text-sm mt-2">📍 29A Ewart Street, Midvale WA 6056</p>
            <p className="text-white/80 text-sm">📞 0430 067 850</p>
            <p className="text-white/80 text-sm">📧 foodclubwa2023@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">Quick Links</p>
            <ul className="mt-2 space-y-1 text-sm text-white/90">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:underline">Menu</Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">Events</Link>
              </li>
              <li>
                <Link href="/#about" onClick={(e) => handleInPageClick(e, "about")} className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/#contact" onClick={(e) => handleInPageClick(e, "contact")} className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Follow Us</p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.instagram.com/foodclub_wa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/FoodClubWA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/80">
          <p>© {new Date().getFullYear()} Food Club WA Pty Ltd. All rights reserved.</p>
          <Link href="/#home" onClick={(e) => handleInPageClick(e, "home")} className="hover:underline">Back to top ↑</Link>
        </div>
      </div>
    </footer>
  );
}