import Link from "next/link";
import CategoryNav from "@/components/CategoryNav";
import GameGrid, { EmptyState } from "@/components/GameGrid";
import { games, categories, searchGames, filterByCategory } from "@/data/games";

export const metadata = {
  title: "Games",
  description: "Browse the full NovaPlay game library.",
};

export default async function GamesPage({ searchParams }) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";
  const category =
    typeof params.category === "string" && categories.includes(params.category)
      ? params.category
      : "All";

  let results = searchGames(query);
  results = filterByCategory(category, results);

  return (
    <div className="animate-fade-up">
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
    </div>
  );
}
