"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (href: string) => {
    const active = isNavActive(pathname, href);
    return active
      ? "font-medium text-slate-blue"
      : "transition-colors hover:text-slate-blue";
  };

  return (
    <header className="border-b border-charcoal/10 bg-off-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3 sm:py-5">
        <Link href="/" className="group min-w-0" onClick={() => setMenuOpen(false)}>
          <span className="text-lg font-semibold text-charcoal group-hover:text-slate-blue">
            {site.name}
          </span>
          <span className="mt-0.5 hidden text-xs text-charcoal/55 sm:block sm:max-w-xs">
            {site.headerTagline}
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-charcoal/15 text-charcoal sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "閉じる" : "メニュー"}</span>
          <svg
            aria-hidden
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <nav aria-label="メインナビゲーション" className="hidden sm:block">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-charcoal/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={navLinkClass(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="モバイルナビゲーション"
          className="border-t border-charcoal/10 sm:hidden"
        >
          <ul className="mx-auto max-w-5xl px-6 py-3 text-sm text-charcoal/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2.5 ${navLinkClass(item.href)}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
