"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";

// Navigation sections for scroll tracking and menu items
const sections = ["home", "menu", "events", "about", "contact"];

const Navbar = () => {
  // Get current page path for conditional rendering and active states
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Track which section is currently active for scroll-based highlighting
  const [activeSection, setActiveSection] = useState("home");

  // Control mobile sidebar open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll tracking effect - only runs on homepage
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      let current = "home";
      // Check which section is currently in view
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100; // Offset for navbar height
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Show different nav items based on current page
  // Homepage shows all sections, other pages show only main navigation
  const navItems = isHome ? ["home", "menu", "events", "about", "contact"] : ["home", "menu", "events"];

  // Generate correct href for each navigation item
  const getHrefFor = (id: string) => {
    if (id === "home") return "/";
    if (id === "menu") return "/menu";
    if (id === "events") return "/events";
    if (id === "about") return "#about";
    if (id === "contact") return "#contact";
    return "/";
  };

  // Determine if a nav item should be highlighted as active
  const isActive = (id: string) => {
    if (id === "home") return pathname === "/";
    if (id === "menu") return pathname.startsWith("/menu");
    if (id === "events") return pathname.startsWith("/events");
    // About/Contact are only active on homepage when scrolled to that section
    if (id === "about" || id === "contact") return isHome && activeSection === id;
    return false;
  };

  // Handle clicks on About/Contact links for smooth scrolling on homepage
  const handleInPageClick = (e: React.MouseEvent, id: string) => {
    if (isHome && (id === "about" || id === "contact")) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow-lg z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3 sm:p-4">
        {/* Logo and Brand - clickable link to homepage */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/Logo.png" alt="Food Club WA logo" width={36} height={36} className="rounded-full" />
          <span className="font-bold text-xl sm:text-2xl">Food Club WA</span>
        </Link>

        {/* Mobile hamburger menu button - only visible on small screens */}
        <button
          className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <RxHamburgerMenu className="w-6 h-6" />
        </button>

        {/* Desktop navigation menu - hidden on mobile */}
        <ul className="hidden md:flex gap-4 md:gap-6">
          {navItems.map((id) => (
            <li key={id}>
              <Link
                href={getHrefFor(id)}
                className={`${isActive(id) ? "font-semibold underline underline-offset-4 decoration-white" : ""} hover:text-white/80 transition`}
                onClick={(e) => handleInPageClick(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile sidebar overlay and menu */}
      {isOpen && (
        <div className="md:hidden">
          {/* Dark overlay - clicking closes the menu */}
          <div className="fixed inset-0 bg-black/40" onClick={() => setIsOpen(false)} />

          {/* Sidebar menu - slides in from right */}
          <div className="fixed top-0 right-0 h-full w-72 max-w-[80%] bg-white text-gray-900 shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-lg">Menu</span>
              <button aria-label="Close menu" onClick={() => setIsOpen(false)} className="p-2 rounded hover:bg-gray-100">
                <RxCross2 className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile navigation items */}
            <nav>
              <ul className="flex flex-col gap-4">
                {navItems.map((id) => (
                  <li key={id}>
                    <Link
                      href={getHrefFor(id)}
                      className={`${isActive(id) ? "text-primary font-semibold" : ""} hover:text-primary transition`}
                      onClick={(e) => handleInPageClick(e, id)}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
