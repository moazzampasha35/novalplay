import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Star, Users } from "lucide-react";
import { getGameBySlug, getRelatedGames, games } from "@/data/games";
import GamePreview from "@/components/GamePreview";
import GameGrid from "@/components/GameGrid";
import FavoriteToggle from "./FavoriteToggle";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Game Not Found" };
  return {
    title: game.title,
    description: game.description,
  };
}

export default async function GameDetailPage({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = getRelatedGames(game, 6);

  return (
    <div className="animate-fade-up">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <li>
            <Link href="/" className="outline-none transition-colors duration-150 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent">
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li>
            <Link href="/games" className="outline-none transition-colors duration-150 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent">
              Games
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li>
            <span aria-current="page" className="font-medium text-white">
              {game.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Main section */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Artwork */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-edge bg-surface">
          <Image
            src={game.image}
            alt={`${game.title} cover art`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
              {game.category}
            </span>
            {game.status && (
              <span
                className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                  game.status === "New"
                    ? "bg-emerald-400/10 text-emerald-400"
                    : "bg-card text-muted border border-edge"
                }`}
              >
                {game.status}
              </span>
            )}
          </div>

          <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {game.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Star size={15} className="text-accent" fill="currentColor" aria-hidden="true" />
              <span className="font-semibold text-white">{game.rating.toFixed(1)}</span>
              rating
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={15} aria-hidden="true" />
              {game.players} playing
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            {game.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-edge bg-card px-2.5 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <FavoriteToggle slug={game.slug} title={game.title} />
            <Link
              href="/games"
              className="inline-flex h-10 items-center rounded-lg border border-edge bg-card px-4 text-sm font-semibold text-white outline-none transition-colors duration-150 hover:border-accent/40 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            >
              Back to Games
            </Link>
          </div>
        </div>
      </div>

      {/* Preview placeholder */}
      <section aria-label="Game preview" className="mt-10">
        <GamePreview title={game.title} />
      </section>

      {/* Related */}
      <section aria-labelledby="related-heading" className="mt-12">
        <h2 id="related-heading" className="mb-4 text-lg font-bold tracking-tight sm:text-xl">
          More Games
        </h2>
        <GameGrid games={related} />
      </section>
    </div>
  );
}
