"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { navItems, mobileNavExtras } from "@/data/nav";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 16);

      if (currentY > lastScrollY.current && currentY > 120) {
        setNavVisible(false);
        setActiveMenu(null);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = currentY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(query.trim() ? `/packages?q=${encodeURIComponent(query.trim())}` : "/packages");
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-200",
        scrolled && "shadow-[0_1px_0_rgba(17,24,39,0.06),0_12px_30px_-18px_rgba(17,24,39,0.15)]"
      )}
    >
      {/* Row 1: logo, search, call/CTA — 80px */}
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex h-20 items-center gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-950 font-display text-base font-extrabold text-gold-500">
              ZV
            </span>
            <span className="hidden font-display text-lg font-extrabold leading-none text-navy-950 sm:block">
              {siteConfig.name}
              <span className="block text-[10px] font-sans font-medium tracking-[0.22em] uppercase text-navy-600">
                {siteConfig.tagline}
              </span>
            </span>
          </Link>

          <form onSubmit={onSearchSubmit} className="hidden flex-1 justify-center md:flex">
            <div className="relative w-full max-w-md">
              <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-600" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search "Gulmarg", "Pangong", "Houseboat"...'
                className="w-full rounded-full border border-mist-200 bg-mist-50 py-2.5 pl-11 pr-4 text-sm text-navy-950 outline-none transition-colors placeholder:text-navy-600 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20"
              />
            </div>
          </form>

          <div className="ml-auto flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors hover:text-gold-700 lg:flex"
            >
              <Phone size={15} /> {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/packages"
              className="hidden items-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
            >
              Plan My Trip
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 lg:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile search (below logo row) */}
        <form onSubmit={onSearchSubmit} className="pb-3 md:hidden">
          <div className="relative w-full">
            <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-600" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search "Gulmarg"...'
              className="w-full rounded-full border border-mist-200 bg-mist-50 py-2.5 pl-10 pr-4 text-sm text-navy-950 outline-none placeholder:text-navy-600 focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20"
            />
          </div>
        </form>
      </div>

      {/* Row 2: slim nav with hover underline — hides on scroll down, reappears on scroll up */}
      <div
        className={cn(
          "hidden overflow-hidden border-t border-mist-200 transition-[max-height,opacity] duration-300 ease-in-out lg:block",
          navVisible ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto max-w-[1320px] px-6">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="nav-underline flex items-center gap-1 whitespace-nowrap px-3 py-2.5 text-[13px] font-semibold text-navy-800 transition-colors hover:text-gold-700"
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none text-white">
                      {item.badge}
                    </span>
                  )}
                  {item.columns && <ChevronDown size={12} className="opacity-50" />}
                </Link>

                {item.columns && activeMenu === item.label && (
                  <div className="absolute left-0 top-full z-50 pt-2 animate-dropdown">
                    <div className="w-110 rounded-2xl border border-mist-200 bg-white p-6 shadow-2xl grid grid-cols-2 gap-6">
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-700">{col.heading}</p>
                          <ul className="space-y-2.5">
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <Link href={link.href} className="text-sm text-navy-800 hover:text-gold-700 transition-colors">
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {activeMenu && (
        <div className="pointer-events-none absolute inset-x-0 top-full z-40 h-screen animate-dropdown bg-navy-950/20 backdrop-blur-[1px]" />
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-navy-950/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl animate-fade-up">
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-lg font-semibold text-navy-950">{siteConfig.name}</span>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="h-9 w-9 flex items-center justify-center rounded-full bg-mist-100">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-1">
              {navItems.map((item) => (
                <details key={item.label} className="group border-b border-mist-100 py-3">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-navy-900 list-none">
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none text-white">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {item.columns && <ChevronDown size={16} className="transition-transform group-open:rotate-180" />}
                  </summary>
                  {item.columns && (
                    <div className="mt-3 space-y-4 pl-2">
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold-700">{col.heading}</p>
                          <ul className="space-y-2">
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <Link href={link.href} onClick={() => setMobileOpen(false)} className="text-sm text-navy-700">
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </details>
              ))}
              {mobileNavExtras.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block border-b border-mist-100 py-3 text-base font-medium text-navy-900">
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-navy-950 py-3 text-sm font-semibold text-white"
            >
              <Phone size={16} /> Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
