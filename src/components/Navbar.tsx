"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";

const sections = ["home", "menu", "events", "about", "contact"];

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
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

  const navItems = isHome ? ["home", "menu", "events", "about", "contact"] : ["home", "menu", "events"];

  const getHrefFor = (id: string) => {
    if (id === "home") return "/";
    if (id === "menu") return "/menu";
    if (id === "events") return "/events";
    if (id === "about") return "#about";
    if (id === "contact") return "#contact";
    return "/";
  };

  const isActive = (id: string) => {
    if (id === "home") return pathname === "/";
    if (id === "menu") return pathname.startsWith("/menu");
    if (id === "events") return pathname.startsWith("/events");
    if (id === "about" || id === "contact") return isHome && activeSection === id;
    return false;
  };

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
        <Link href="/" className="flex items-center gap-3">
          <Image src="/Logo.png" alt="Food Truck WA logo" width={36} height={36} className="rounded-full" />
          <span className="font-bold text-xl sm:text-2xl">Food Truck WA</span>
        </Link>
        <button
          className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <RxHamburgerMenu className="w-6 h-6" />
        </button>
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

      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-72 max-w-[80%] bg-white text-gray-900 shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-lg">Menu</span>
              <button aria-label="Close menu" onClick={() => setIsOpen(false)} className="p-2 rounded hover:bg-gray-100">
                <RxCross2 className="w-5 h-5" />
              </button>
            </div>
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
