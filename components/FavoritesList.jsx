"use client";

import Link from "next/link";
import GameGrid, { EmptyState } from "@/components/GameGrid";
import { useFavorites } from "@/components/FavoritesProvider";
import { games } from "@/data/games";

export default function FavoritesList() {
  const { favorites, ready } = useFavorites();
  const favoriteGames = games.filter((g) => favorites.includes(g.slug));

  if (!ready) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-56 animate-pulse rounded-xl border border-edge bg-card"
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  if (favoriteGames.length === 0) {
    return (
      <EmptyState
        title="No favorites yet"
        hint="Tap the heart on any game card to save it here."
        action={
          <Link
            href="/games"
            className="inline-flex h-10 items-center rounded-lg bg-accent px-4 text-sm font-bold text-bg outline-none transition-colors duration-150 hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Browse Games
          </Link>
        }
      />
    );
  }

  return <GameGrid games={favoriteGames} />;
}
