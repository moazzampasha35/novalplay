import Link from "next/link";
import Image from "next/image";
import { Radio } from "lucide-react";
import { games } from "@/data/games";

export const metadata = {
  title: "Live",
  description: "Live activity from the NovaPlay demo community.",
};

const LIVE_TILES = [
  { slug: "dragon-arena", viewers: "1,284" },
  { slug: "neon-rush", viewers: "932" },
  { slug: "space-raiders", viewers: "611" },
  { slug: "galaxy-wars", viewers: "388" },
];

export default function LivePage() {
  const liveGames = LIVE_TILES.map(({ slug, viewers }) => ({
    game: games.find((g) => g.slug === slug),
    viewers,
  })).filter((t) => t.game);

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Live</h1>
      <p className="mt-1.5 text-sm text-muted">
        Live tables and community runs across the platform. (Simulated demo
        data.)
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {liveGames.map(({ game, viewers }) => (
          <Link
            key={game.slug}
            href={`/games/${game.slug}`}
            className="group overflow-hidden rounded-xl border border-edge bg-card outline-none transition-colors duration-200 hover:border-accent/40 focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={game.image}
                alt={`${game.title} live session`}
                fill
                sizes="(max-width: 640px) 100vw, 550px"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md bg-black/70 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-red-400 backdrop-blur-sm">
                <Radio size={11} aria-hidden="true" />
                Live
              </span>
              <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                {viewers} watching
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-sm font-semibold">{game.title}</h2>
              <p className="mt-0.5 text-xs text-muted">
                {game.category} · Arena 0{game.id}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
