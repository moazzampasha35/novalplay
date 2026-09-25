import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SectionHeader({ title, viewAllHref, viewAllLabel = "View All" }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <h2 className="text-lg font-bold tracking-tight sm:text-xl">{title}</h2>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="group flex shrink-0 items-center gap-0.5 rounded-md text-sm font-medium text-muted outline-none transition-colors duration-150 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
        >
          {viewAllLabel}
          <ChevronRight
            size={15}
            className="transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  );
}
