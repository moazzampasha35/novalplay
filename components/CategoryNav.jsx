import Link from "next/link";

export default function CategoryNav({
  categories,
  active,
  onSelect,
  asLinks = false,
  basePath = "/games",
}) {
  return (
    <nav
      aria-label="Game categories"
      className="scrollbar-thin -mx-1 overflow-x-auto px-1 pb-1"
    >
      <div
        role={asLinks ? undefined : "tablist"}
        className="flex w-max items-center gap-2"
      >
        {categories.map((category) => {
          const selected = active === category;
          if (asLinks) {
            const href =
              category === "All" ? basePath : `${basePath}?category=${encodeURIComponent(category)}`;
            return (
              <Link
                key={category}
                href={href}
                aria-current={selected ? "page" : undefined}
                className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent ${
                  selected
                    ? "bg-accent/15 text-accent"
                    : "border border-edge bg-card text-muted hover:border-accent/30 hover:text-white"
                }`}
              >
                {category}
              </Link>
            );
          }
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onSelect?.(category)}
              className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium outline-none transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-accent ${
                selected
                  ? "bg-accent/15 text-accent"
                  : "border border-edge bg-card text-muted hover:border-accent/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
