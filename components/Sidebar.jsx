"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NAV_ITEMS } from "./navItems";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside
      className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-edge bg-surface lg:flex"
      aria-label="Sidebar"
    >
      <div className="flex h-16 items-center border-b border-edge px-6">
        <Logo />
      </div>

      <nav aria-label="Main navigation" className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent ${
                    active
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-card hover:text-white"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={active ? 2.2 : 1.8}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                  {label}
                  {active && (
                    <span
                      className="ml-auto h-1.5 w-1.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-edge p-4">
        <div className="rounded-lg border border-edge bg-card p-4">
          <p className="text-sm font-semibold">Demo Mode</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            NovaPlay is a frontend demo. No accounts, no purchases — just the
            interface.
          </p>
        </div>
      </div>
    </aside>
  );
}
