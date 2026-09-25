"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_ITEMS } from "./navItems";

const emptySubscribe = () => () => {};

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Hydration-safe "is client" flag: false on the server render, true after
  // hydration — lets us portal without setState-in-effect (lint-clean).
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Escape to close + scroll lock while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Trigger lives in the header flow */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="rounded-lg p-2.5 text-muted outline-none transition-colors duration-150 hover:bg-card hover:text-white focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
      >
        <Menu size={20} strokeWidth={1.8} aria-hidden="true" />
      </button>

      {/* Portal renders the overlay + panel directly on <body>, so the
          header's backdrop-filter can never trap them. */}
      {mounted &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-200 lg:hidden ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              onClick={close}
              aria-hidden="true"
            />

            {/* Slide-out panel */}
            <div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              aria-hidden={!open}
              className={`fixed inset-y-0 left-0 z-[61] flex w-72 max-w-[85vw] flex-col border-r border-edge bg-surface shadow-2xl transition-transform duration-200 ease-out lg:hidden ${
                open ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex h-16 items-center justify-between border-b border-edge px-4">
                <Logo />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="rounded-lg p-2 text-muted outline-none transition-colors duration-150 hover:bg-card hover:text-white focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <X size={20} strokeWidth={1.8} aria-hidden="true"/>
                </button>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="flex-1 overflow-y-auto p-3"
              >
                <ul className="space-y-1">
                  {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                    const active = isActive(href);
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={close}
                          aria-current={active ? "page" : undefined}
                          className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent ${
                            active
                              ? "bg-accent/10 text-accent"
                              : "text-muted hover:bg-card hover:text-white"
                          }`}
                        >
                          <Icon size={18} strokeWidth={active ? 2.2 : 1.8} className="shrink-0" aria-hidden="true" />
                          {label}
                          {active && (
                            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-edge p-4">
                <p className="text-xs leading-relaxed text-muted">
                  NovaPlay demo — a frontend showcase with fictional games.
                </p>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
