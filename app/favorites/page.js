import FavoritesList from "@/components/FavoritesList";

export const metadata = {
  title: "Favorites",
  description: "Games you saved on this device.",
};

export default function FavoritesPage() {
  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Favorites
      </h1>
      <p className="mt-1.5 text-sm text-muted">
        Games you have saved on this device — stored locally in your browser.
      </p>

      <div className="mt-8">
        <FavoritesList />
      </div>
    </div>
  );
}
