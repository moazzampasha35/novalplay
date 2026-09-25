import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/popular", label: "Popular" },
  { href: "/new-games", label: "New Games" },
  { href: "/favorites", label: "Favorites" },
];

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A frontend demo gaming platform. All games and artwork are
              fictional and created for showcase purposes.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Navigation
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-10 gap-y-2">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted outline-none transition-colors duration-150 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-edge pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NovaPlay. Demo project — not a real platform.</p>
          <p>No real money, wagering, or purchases are involved.</p>
        </div>
      </div>
    </footer>
  );
}
