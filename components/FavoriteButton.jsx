"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "./FavoritesProvider";

export default function FavoriteButton({ slug, title, className = "" }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(slug);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(slug);
      }}
      aria-pressed={active}
      aria-label={active ? `Remove ${title} from favorites` : `Add ${title} to favorites`}
      className={`rounded-full p-2 outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent ${
        active
          ? "text-accent"
          : "text-white/70 hover:text-white"
      } ${className}`}
    >
      <Heart
        size={17}
        strokeWidth={active ? 2.4 : 1.8}
        fill={active ? "currentColor" : "none"}
        aria-hidden="true"
      />
    </button>
  );
}
