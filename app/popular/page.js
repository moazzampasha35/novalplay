import GameGrid from "@/components/GameGrid";
import { games } from "@/data/games";

export const metadata = {
  title: "Popular",
  description: "The most-played games on NovaPlay right now.",
};

export default function PopularPage() {
  const popular = games.filter((g) => g.status === "Popular");

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Popular</h1>
      <p className="mt-1.5 text-sm text-muted">
        The most-played games on NovaPlay right now.
      </p>

      <div className="mt-8">
        <GameGrid games={popular} priorityFirst />
      </div>
    </div>
  );
}
