"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CategoryNav from "@/components/CategoryNav";
import GameGrid, { EmptyState } from "@/components/GameGrid";
import { categories, searchGames, filterByCategory } from "@/data/games";

export default function GamesView() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const rawCat = searchParams.get("category") || "All";
  const category = categories.includes(rawCat) ? rawCat : "All";

  let results = searchGames(query);
  results = filterByCategory(category, results);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Games
          </h1>
          <p className="mt-1.5 text-sm text-muted">
            {results.length} {results.length === 1 ? "game" : "games"} in the
            library
            {query ? ` matching “${query}”` : ""}
            {category !== "All" ? ` in ${category}` : ""}
          </p>
        </div>
      </div>

      {/* Category filters */}
      <div className="mt-6">
        <CategoryNav
          categories={categories}
          active={category}
          asLinks
          basePath="/games"
        />
      </div>

      {/* Results */}
      <div className="mt-8">
        {results.length > 0 ? (
          <GameGrid games={results} priorityFirst />
        ) : (
          <EmptyState
            title="No games found"
            hint={
              query
                ? `Nothing matches “${query}”${category !== "All" ? ` in ${category}` : ""}. Try a different search or category.`
                : "Try a different category."
            }
            action={
              <Link
                href="/games"
                className="inline-flex h-10 items-center rounded-lg bg-accent px-4 text-sm font-bold text-bg outline-none transition-colors duration-150 hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Clear filters
              </Link>
            }
          />
        )}
      </div>
    </>
  );
}
