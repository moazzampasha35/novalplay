import Link from "next/link";
import { Gamepad2 } from "lucide-react";

export default function GameNotFound() {
  return (
    <div className="animate-fade-up flex min-h-[50vh] items-center justify-center">
      <div className="w-full max-w-md rounded-xl border border-edge bg-card px-6 py-12 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Gamepad2 size={26} aria-hidden="true" />
        </span>
        <h1 className="mt-5 text-xl font-bold tracking-tight">Game Not Found</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          The game you are looking for does not exist or may have been removed
          from the demo library.
        </p>
        <Link
          href="/games"
          className="mt-6 inline-flex h-10 items-center rounded-lg bg-accent px-4 text-sm font-bold text-bg outline-none transition-colors duration-150 hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Return to Games
        </Link>
      </div>
    </div>
  );
}
