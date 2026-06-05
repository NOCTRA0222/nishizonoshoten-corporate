import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-charcoal/10 bg-charcoal text-off-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-off-white/70">{site.tagline}</p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-off-white/80">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-off-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-xs text-off-white/50">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
