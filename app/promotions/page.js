import PromotionCard from "@/components/PromotionCard";

export const metadata = {
  title: "Promotions",
  description: "Current NovaPlay demo events and showcases.",
};

const PROMOS = [
  {
    icon: "calendar",
    title: "Weekend Gaming Event",
    description:
      "Every weekend, selected arcade titles host leaderboard runs and community challenges. Scores reset Monday morning.",
    cta: "Browse arcade games",
    href: "/games?category=Arcade",
  },
  {
    icon: "sparkles",
    title: "New Games Spotlight",
    description:
      "A rotating showcase of the newest titles in the library. This week: Crystal Caverns, Turbo Darts and Stellar Mines.",
    cta: "See new games",
    href: "/new-games",
  },
  {
    icon: "gift",
    title: "Daily Rewards",
    description:
      "In this demo, daily check-ins grant cosmetic profile badges only — nothing to buy, nothing to wager, nothing to cash out.",
    cta: "Browse games",
    href: "/games",
  },
  {
    icon: "sparkles",
    title: "Community Choice",
    description:
      "Vote for next month's featured banner. The highest-rated community pick takes the homepage spotlight.",
    cta: "Rate games",
    href: "/popular",
  },
];

export default function PromotionsPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Promotions
      </h1>
      <p className="mt-1.5 text-sm text-muted">
        Events and showcases running across NovaPlay. Frontend demo only — no
        purchases or prizes.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {PROMOS.map((promo) => (
          <PromotionCard key={promo.title} {...promo} />
        ))}
      </div>
    </div>
  );
}
