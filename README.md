# NovaPlay

A **frontend-only gaming platform demo** built with Next.js App Router,
JavaScript, Tailwind CSS and Lucide React. NovaPlay is a UI showcase — there
is no backend, no accounts, and no real-money functionality of any kind.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## What's Inside

| Route | Description |
| --- | --- |
| `/` | Hero banner, category navigation, Popular / Featured / New sections, promotions |
| `/games` | Full library with search (`?q=`) and category filters (`?category=`) |
| `/games/[slug]` | Dynamic game detail page — breadcrumb, artwork, meta, preview placeholder, related games |
| `/favorites` | Games saved locally via `localStorage` |
| `/popular`, `/new-games`, `/live`, `/promotions`, `/settings` | Supporting pages |
| `*` | Clean 404 (and a dedicated "Game Not Found" state for unknown slugs) |

## Structure

```
app/                  # App Router pages
components/           # Reusable UI (Header, Sidebar, GameCard, ...)
data/games.js         # Central mock-data source (15 fictional games)
public/games/         # Original hand-authored SVG cover artwork
```

## Notes

- All games, artwork and branding are fictional and created for this demo.
- Favorites persist in your browser's local storage only.
- The "Play Demo" action shows a frontend notification — no actual gameplay.
