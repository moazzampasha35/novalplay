import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="animate-fade-up flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md rounded-xl border border-edge bg-card px-6 py-12 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Compass size={26} aria-hidden="true" />
        </span>
        <h1 className="mt-5 text-xl font-bold tracking-tight">Page Not Found</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          The page you are looking for does not exist in this demo.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-10 items-center rounded-lg bg-accent px-4 text-sm font-bold text-bg outline-none transition-colors duration-150 hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Return to Games
        </Link>
      </div>
    </div>
  );
}
