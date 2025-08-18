"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = ["home", "menu", "events", "about", "contact"];

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow-lg z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-2xl">Food Truck WA 🚚</h1>
        <ul className="flex gap-6">
          {navItems.map((id) => (
            <li key={id}>
              <Link
                href={getHrefFor(id)}
                className={`${isActive(id) ? "font-semibold underline underline-offset-4 decoration-white" : ""} hover:text-white/80 transition`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
