"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "novaplay:favorites";
const EMPTY = [];

/* Tiny external store backed by localStorage, read through
   useSyncExternalStore. Hydration-safe: server and first client render see
   the empty list, then the stored value is read right after hydration. */

let favorites = EMPTY;
let hydrated = false;
const listeners = new Set();

function emit() {
  for (const listener of listeners) listener();
}

function readStored() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  // First client call reads localStorage once; afterwards the in-memory list
  // is the single source of truth.
  if (!hydrated && typeof window !== "undefined") {
    const stored = readStored();
    if (stored) favorites = stored;
    hydrated = true;
  }
  return favorites;
}

function getServerSnapshot() {
  return EMPTY;
}

function toggleFavorite(slug) {
  getSnapshot(); // ensure hydrated before first write
  favorites = favorites.includes(slug)
    ? favorites.filter((s) => s !== slug)
    : [...favorites, slug];
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch {
    // Storage unavailable (private mode etc.)
  }
  emit();
}

export function useFavorites() {
  const list = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    favorites: list,
    isFavorite: (slug) => list.includes(slug),
    toggleFavorite,
    ready: true,
  };
}

/* Kept for symmetry with the original layout import; the app shell wraps
   children so any future context-based state has a home. */
export function FavoritesProvider({ children }) {
  return <>{children}</>;
}
