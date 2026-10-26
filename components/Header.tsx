"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BusinessLogo from "../public/logos/business-logo.webp";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "Let's Move", href: "/lets-move" },
  { label: "About Us", href: "/about-us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // If the screen grows to desktop while the menu is open, close it
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);
    document.body.style.overflow = "hidden"; // lock page scroll

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Click-outside backdrop (mobile/tablet only) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-50 bg-primary">
        <div className="flex items-center justify-between py-2 pr-3 pl-5 lg:px-10">
          <Link href="/" onClick={close}>
            <Image
              src={BusinessLogo}
              alt="Marci Metzger Homes"
              priority
              className="w-40 brightness-0 invert md:w-50"
            />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:text-secondary ${
                      pathname === href ? "text-secondary" : "text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Burger button (tablet + mobile) */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer p-2 text-white lg:hidden"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile/tablet dropdown panel */}
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className={`absolute top-full left-0 w-full border-t border-white/10 bg-primary shadow-lg transition-all duration-300 lg:hidden ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-5 py-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="border-b border-white/10 last:border-0">
                <Link
                  href={href}
                  onClick={close}
                  aria-current={pathname === href ? "page" : undefined}
                  className={`block py-4 text-lg uppercase tracking-widest transition-colors hover:text-secondary ${
                    pathname === href ? "text-secondary" : "text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}