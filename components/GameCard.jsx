import Link from "next/link";
import Image from "next/image";
import { Play, Star } from "lucide-react";
import FavoriteButton from "./FavoriteButton";

const STATUS_STYLES = {
  Popular: "bg-accent/15 text-accent",
  New: "bg-emerald-400/10 text-emerald-400",
};

export default function GameCard({ game, priority = false }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group block overflow-hidden rounded-xl border border-edge bg-card outline-none transition-colors duration-200 hover:border-accent/40 focus-visible:ring-2 focus-visible:ring-accent"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={game.image}
          alt={`${game.title} cover art`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
          priority={priority}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />

        {game.status && STATUS_STYLES[game.status] && (
          <span
            className={`absolute left-2.5 top-2.5 rounded-md px-2 py-0.5 text-[11px] font-semibold ${STATUS_STYLES[game.status]}`}
          >
            {game.status}
          </span>
        )}

        <div className="absolute right-1.5 top-1.5 rounded-full bg-black/55 p-0.5 backdrop-blur-sm transition-colors duration-150 group-hover:bg-black/70">
          <FavoriteButton slug={game.slug} title={game.title} />
        </div>
      </div>

      {/* Body */}
      <div className="p-3.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-sm font-semibold text-white">
            {game.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-accent">
            <Star size={12} fill="currentColor" aria-hidden="true" />
            {game.rating.toFixed(1)}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2">
          <span className="truncate text-xs text-muted">{game.category}</span>
          <span className="flex items-center gap-1 text-[11px] text-muted">
            {game.players} playing
          </span>
        </div>

        <span className="mt-3 flex h-8 items-center justify-center gap-1.5 rounded-lg border border-edge bg-surface text-xs font-semibold text-white transition-colors duration-150 group-hover:border-accent/50 group-hover:text-accent">
          <Play size={12} fill="currentColor" aria-hidden="true" />
          View Game
        </span>
      </div>
    </Link>
  );
}
