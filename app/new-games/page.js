import GameGrid from "@/components/GameGrid";
import { games } from "@/data/games";

export const metadata = {
  title: "New Games",
  description: "The latest additions to the NovaPlay library.",
};

export default function NewGamesPage() {
  const sorted = [...games].sort(
    (a, b) => new Date(b.added) - new Date(a.added)
  );

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        New Games
      </h1>
      <p className="mt-1.5 text-sm text-muted">
        The latest additions to the NovaPlay library, newest first.
      </p>

      <div className="mt-8">
        <GameGrid games={sorted} priorityFirst />
      </div>
    </div>
  );
}
