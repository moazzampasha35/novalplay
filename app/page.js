import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import GameGrid from "@/components/GameGrid";
import PromotionCard from "@/components/PromotionCard";
import SectionHeader from "@/components/SectionHeader";
import { games, categories } from "@/data/games";

export default function HomePage() {
  const popular = games.filter((g) => g.status === "Popular");
  const featured = [...games].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const newGames = [...games]
    .sort((a, b) => new Date(b.added) - new Date(a.added))
    .slice(0, 4);

  return (
    <div className="animate-fade-up">
      <Hero />

      {/* Categories */}
      <section aria-label="Game categories" className="mt-8">
        <CategoryNav categories={categories} active="All" asLinks basePath="/games" />
      </section>

      {/* Popular */}
      <section aria-labelledby="popular-heading" className="mt-10">
        <div id="popular-heading">
          <SectionHeader title="Popular Games" viewAllHref="/popular" />
        </div>
        <GameGrid games={popular} priorityFirst />
      </section>

      {/* Featured — larger visual grid */}
      <section aria-labelledby="featured-heading" className="mt-12">
        <div id="featured-heading">
          <SectionHeader title="Featured Games" viewAllHref="/games" />
        </div>
        <GameGrid
          games={featured}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        />
      </section>

      {/* New */}
      <section aria-labelledby="new-heading" className="mt-12">
        <div id="new-heading">
          <SectionHeader title="New Games" viewAllHref="/new-games" />
        </div>
        <GameGrid games={newGames} />
      </section>

      {/* Promotions */}
      <section aria-labelledby="promotions-heading" className="mt-12">
        <div id="promotions-heading">
          <SectionHeader title="Promotions" viewAllHref="/promotions" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <PromotionCard
            icon="calendar"
            title="Weekend Gaming Event"
            description="Leaderboard runs and bonus streaks light up selected arcade titles every weekend."
            cta="Browse event games"
            href="/games?category=Arcade"
          />
          <PromotionCard
            icon="sparkles"
            title="New Games"
            description="Fresh titles join the NovaPlay library every week. Be first on the leaderboard."
            cta="See what's new"
            href="/new-games"
          />
          <PromotionCard
            icon="gift"
            title="Daily Rewards"
            description="Check in each day to unlock cosmetic badges and profile flair in this demo."
            cta="View promotions"
            href="/promotions"
          />
        </div>
      </section>
    </div>
  );
}
