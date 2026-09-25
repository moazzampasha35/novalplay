import GameCard from "./GameCard";

const DEFAULT_GRID = "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4";

export default function GameGrid({ games, priorityFirst = false, className }) {
  if (!games?.length) return null;

  return (
    <div className={className ?? DEFAULT_GRID}>
      {games.map((game, i) => (
        <GameCard key={game.id} game={game} priority={priorityFirst && i < 4} />
      ))}
    </div>
  );
}

export function EmptyState({ title, hint, action = null }) {
  return (
    <div className="rounded-xl border border-edge bg-card px-6 py-14 text-center">
      <p className="text-base font-semibold text-white">{title}</p>
      {hint && <p className="mt-1.5 text-sm text-muted">{hint}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
