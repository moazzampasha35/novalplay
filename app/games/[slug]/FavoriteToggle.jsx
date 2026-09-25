"use client";

import { useState } from "react";
import { Heart, Play } from "lucide-react";
import { useFavorites } from "@/components/FavoritesProvider";

export default function FavoriteToggle({ slug, title }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(slug);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2400);
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() =>
            showToast("Demo preview coming soon.")
          }
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-bold text-bg outline-none transition-colors duration-150 hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <Play size={15} fill="currentColor" aria-hidden="true" />
          Play Demo
        </button>

        <button
          type="button"
          onClick={() => toggleFavorite(slug)}
          aria-pressed={active}
          className={`inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-sm font-semibold outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent ${
            active
              ? "border-accent/50 bg-accent/10 text-accent"
              : "border-edge bg-card text-white hover:border-accent/40 hover:text-accent"
          }`}
        >
          <Heart
            size={15}
            fill={active ? "currentColor" : "none"}
            aria-hidden="true"
          />
          {active ? "In Favorites" : "Add to Favorites"}
        </button>
      </div>

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="absolute -top-12 left-0 rounded-lg border border-edge bg-card px-3.5 py-2 text-sm font-medium text-white shadow-lg"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
