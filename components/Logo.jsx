import Link from "next/link";
import NovaMark from "./NovaMark";

export default function Logo({ compact = false }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="NovaPlay home"
    >
      <span className="transition-transform duration-200 group-hover:scale-105">
        <NovaMark size={36} tile />
      </span>
      {!compact && (
        <span className="text-[17px] font-bold tracking-tight">
          Nova<span className="text-accent">Play</span>
        </span>
      )}
    </Link>
  );
}
