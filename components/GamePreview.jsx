"use client";

import { Play } from "lucide-react";

export default function GamePreview({ title }) {
  return (
    <div className="relative flex aspect-[16/9] flex-col items-center justify-center overflow-hidden rounded-xl border border-edge bg-surface">
      {/* Faint diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #101216 0px, #101216 14px, #15171c 14px, #15171c 28px)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-edge bg-card">
          <Play size={24} className="ml-0.5 text-accent" fill="currentColor" aria-hidden="true" />
        </span>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Game Preview
        </p>
        <p className="mt-1.5 text-lg font-semibold text-white">
          Demo preview coming soon
        </p>
        {title && (
          <p className="mt-1 text-sm text-muted">
            &ldquo;{title}&rdquo; is a fictional showcase title.
          </p>
        )}
      </div>
    </div>
  );
}
