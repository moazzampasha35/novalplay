import { Suspense } from "react";
import GamesView from "@/components/GamesView";

export const metadata = {
  title: "Games",
  description: "Browse the full NovaPlay game library.",
};

export default function GamesPage() {
  return (
    <div className="animate-fade-up">
      <Suspense
        fallback={
          <div className="py-12 text-center text-sm text-muted">
            Loading games…
          </div>
        }
      >
        <GamesView />
      </Suspense>
    </div>
  );
}
