// NovaPlay — central mock data source (frontend demo only, no backend).

export const games = [
  {
    id: 1,
    slug: "neon-rush",
    title: "Neon Rush",
    category: "Arcade",
    rating: 4.8,
    players: "18.2k",
    image: "/games/neon-rush.svg",
    description:
      "A fast-paced futuristic arcade experience where quick reflexes light up the grid. Chain combos before the city dims.",
    tags: ["Arcade", "Action", "Popular"],
    status: "Popular",
    added: "2026-08-14",
  },
  {
    id: 2,
    slug: "royal-fortune",
    title: "Royal Fortune",
    category: "Slots",
    rating: 4.6,
    players: "12.7k",
    image: "/games/royal-fortune.svg",
    description:
      "Spin the golden reels of a royal court. Match crowns, goblets and crests to climb the castle ledger.",
    tags: ["Slots", "Classic", "Popular"],
    status: "Popular",
    added: "2026-07-02",
  },
  {
    id: 3,
    slug: "space-raiders",
    title: "Space Raiders",
    category: "Action",
    rating: 4.7,
    players: "15.4k",
    image: "/games/space-raiders.svg",
    description:
      "Command a small crew with big ambitions. Outmaneuver rival squads across contested asteroid fields.",
    tags: ["Action", "Sci-Fi", "Popular"],
    status: "Popular",
    added: "2026-06-21",
  },
  {
    id: 4,
    slug: "jungle-quest",
    title: "Jungle Quest",
    category: "Adventure",
    rating: 4.5,
    players: "9.8k",
    image: "/games/jungle-quest.svg",
    description:
      "Trek through dense canopies and forgotten ruins. Solve the old trails and chart your own path out.",
    tags: ["Adventure", "Exploration", "Popular"],
    status: "Popular",
    added: "2026-05-30",
  },
  {
    id: 5,
    slug: "dragon-arena",
    title: "Dragon Arena",
    category: "Action",
    rating: 4.9,
    players: "21.6k",
    image: "/games/dragon-arena.svg",
    description:
      "Face the arena champions in a trial of timing and nerve. Every round raises the stakes and the heat.",
    tags: ["Action", "Arena", "Popular"],
    status: "Popular",
    added: "2026-04-18",
  },
  {
    id: 6,
    slug: "lucky-wheels",
    title: "Lucky Wheels",
    category: "Arcade",
    rating: 4.3,
    players: "7.9k",
    image: "/games/lucky-wheels.svg",
    description:
      "A bright spin-driven arcade romp. Time your release, hit the glowing pockets and keep the streak alive.",
    tags: ["Arcade", "Casual"],
    status: null,
    added: "2026-03-11",
  },
  {
    id: 7,
    slug: "cyber-strike",
    title: "Cyber Strike",
    category: "Action",
    rating: 4.6,
    players: "11.3k",
    image: "/games/cyber-strike.svg",
    description:
      "A sleek tactical shooter set in a rain-slick megacity. Plan the run, break the grid, vanish quietly.",
    tags: ["Action", "Tactical", "Popular"],
    status: "Popular",
    added: "2026-02-27",
  },
  {
    id: 8,
    slug: "treasure-island",
    title: "Treasure Island",
    category: "Slots",
    rating: 4.4,
    players: "8.6k",
    image: "/games/treasure-island.svg",
    description:
      "Follow the weathered map to five reels of coastal plunder. Compass wilds point the way to bonus coves.",
    tags: ["Slots", "Adventure"],
    status: null,
    added: "2026-02-09",
  },
  {
    id: 9,
    slug: "mystic-quest",
    title: "Mystic Quest",
    category: "Adventure",
    rating: 4.7,
    players: "10.9k",
    image: "/games/mystic-quest.svg",
    description:
      "An enchanted journey through floating shrines and whispering woods. Magic answers those who explore.",
    tags: ["Adventure", "Fantasy", "Popular"],
    status: "Popular",
    added: "2026-01-22",
  },
  {
    id: 10,
    slug: "speed-legends",
    title: "Speed Legends",
    category: "Sports",
    rating: 4.5,
    players: "13.1k",
    image: "/games/speed-legends.svg",
    description:
      "Drift through six legendary circuits. Clean lines beat raw throttle, but only just.",
    tags: ["Sports", "Racing", "Popular"],
    status: "Popular",
    added: "2025-12-15",
  },
  {
    id: 11,
    slug: "galaxy-wars",
    title: "Galaxy Wars",
    category: "Strategy",
    rating: 4.8,
    players: "16.8k",
    image: "/games/galaxy-wars.svg",
    description:
      "Build fleets, hold the rim, outthink the swarm. A slow-burn strategy campaign among distant stars.",
    tags: ["Strategy", "Sci-Fi", "Popular"],
    status: "Popular",
    added: "2025-11-28",
  },
  {
    id: 12,
    slug: "shadow-arena",
    title: "Shadow Arena",
    category: "Strategy",
    rating: 4.4,
    players: "9.2k",
    image: "/games/shadow-arena.svg",
    description:
      "Duel in the dark where every move is a feint. Read your rival before the lanterns go out.",
    tags: ["Strategy", "PvP"],
    status: null,
    added: "2026-09-04",
  },
  {
    id: 13,
    slug: "crystal-caverns",
    title: "Crystal Caverns",
    category: "Adventure",
    rating: 4.2,
    players: "6.4k",
    image: "/games/crystal-caverns.svg",
    description:
      "Descend into glowing depths and map tunnels nobody has seen. The deeper you go, the brighter it gets.",
    tags: ["Adventure", "Exploration"],
    status: "New",
    added: "2026-09-12",
  },
  {
    id: 14,
    slug: "turbo-darts",
    title: "Turbo Darts",
    category: "Sports",
    rating: 4.1,
    players: "5.7k",
    image: "/games/turbo-darts.svg",
    description:
      "Classic darts with a brisk modern tempo. Steady hands and quick math take the leg.",
    tags: ["Sports", "Casual"],
    status: "New",
    added: "2026-09-18",
  },
  {
    id: 15,
    slug: "stellar-mines",
    title: "Stellar Mines",
    category: "Strategy",
    rating: 4.5,
    players: "8.1k",
    image: "/games/stellar-mines.svg",
    description:
      "Claim asteroid claims and run the extraction rush. Upgrade the rig or lose the vein to rivals.",
    tags: ["Strategy", "Management"],
    status: "New",
    added: "2026-09-22",
  },
];

export const categories = [
  "All",
  "Slots",
  "Arcade",
  "Action",
  "Adventure",
  "Sports",
  "Strategy",
  "New",
];

export function getGameBySlug(slug) {
  return games.find((game) => game.slug === slug);
}

export function getRelatedGames(game, count = 4) {
  const sameCategory = games.filter(
    (other) => other.id !== game.id && other.category === game.category
  );
  const others = games.filter(
    (other) => other.id !== game.id && other.category !== game.category
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function searchGames(query, list = games) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter(
    (game) =>
      game.title.toLowerCase().includes(q) ||
      game.category.toLowerCase().includes(q) ||
      game.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

export function filterByCategory(category, list = games) {
  if (!category || category === "All") return list;
  if (category === "New") {
    return list.filter(
      (game) => game.status === "New" || new Date(game.added) >= new Date("2026-08-01")
    );
  }
  return list.filter((game) => game.category === category);
}
