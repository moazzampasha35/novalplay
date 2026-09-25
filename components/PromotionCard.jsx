import Link from "next/link";

const ICONS = {
  calendar: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  sparkles: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.9 2.6 11.4 6l3.4 1.5-3.4 1.5-1.5 3.4-1.5-3.4L5 7.5 8.4 6l1.5-3.4Z" />
      <path d="M18 12l1 2.4L21.4 15.5 19 16.5l-1 2.4-1-2.4-2.4-1 2.4-1.1L18 12Z" />
      <path d="M7 16l.8 1.9 1.9.8-1.9.8L7 21.4l-.8-1.9-1.9-.8 1.9-.8L7 16Z" />
    </svg>
  ),
  gift: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </svg>
  ),
};

export default function PromotionCard({ icon, title, description, cta, href }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-edge bg-card p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
        {ICONS[icon] ?? ICONS.sparkles}
      </div>
      <h3 className="mt-3.5 text-base font-semibold">{title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      {cta && href && (
        <Link
          href={href}
          className="mt-4 inline-flex w-fit items-center rounded-lg border border-edge bg-surface px-3.5 py-2 text-sm font-semibold text-white outline-none transition-colors duration-150 hover:border-accent/40 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
        >
          {cta}
        </Link>
      )}
      <p className="mt-3 text-[11px] text-muted/70">
        Frontend demo — nothing to claim or purchase.
      </p>
    </div>
  );
}
