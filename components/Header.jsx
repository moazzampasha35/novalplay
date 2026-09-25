"use client";

import Link from "next/link";
import { Bell, Heart, Search } from "lucide-react";
import { useFavorites } from "./FavoritesProvider";
import MobileMenu from "./MobileMenu";
import NovaMark from "./NovaMark";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-30 border-b border-edge bg-bg/95">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-10">
        {/* Mobile brand */}
        <div className="lg:hidden">
          <span className="flex items-center gap-2 text-base font-bold tracking-tight">
            <NovaMark size={32} tile />
            Nova<span className="text-accent">Play</span>
          </span>
        </div>

        {/* Search */}
        <SearchBox />

        {/* Actions */}
        <div className="ml-auto flex items-center gap-1.5">
          <Link
            href="/favorites"
            aria-label={`Favorites${
              favorites.length ? ` (${favorites.length} saved)` : ""
            }`}
            className="relative rounded-lg p-2.5 text-muted outline-none transition-colors duration-150 hover:bg-card hover:text-white focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Heart size={19} strokeWidth={1.8} aria-hidden="true" />
            {favorites.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold leading-none text-bg">
                {favorites.length}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label="Notifications (demo)"
            className="hidden rounded-lg p-2.5 text-muted outline-none transition-colors duration-150 hover:bg-card hover:text-white focus-visible:ring-2 focus-visible:ring-accent sm:block"
          >
            <Bell size={19} strokeWidth={1.8} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="ml-1 flex items-center gap-2.5 rounded-lg py-1 pl-1 pr-2.5 outline-none transition-colors duration-150 hover:bg-card focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-edge text-xs font-bold text-white"
              aria-hidden="true"
            >
              NP
            </span>
            <span className="hidden text-left md:block">
              <span className="block text-xs font-semibold leading-tight">
                Demo Player
              </span>
              <span className="block text-[11px] leading-tight text-muted">
                Guest
              </span>
            </span>
          </button>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

/* Simple presentational search field. It links to /games and forwards the
   query via a form GET — the games page reads `q` from searchParams. */
export function SearchBox() {
  return (
    <form action="/games" method="get" className="relative min-w-0 flex-1">
      <Search
        size={16}
        strokeWidth={1.8}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        aria-hidden="true"
      />
      <input
        type="search"
        name="q"
        placeholder="Search games…"
        aria-label="Search games"
        className="h-10 w-full rounded-lg border border-edge bg-card pl-9 pr-3 text-sm text-white outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/40"
      />
    </form>
  );
}
