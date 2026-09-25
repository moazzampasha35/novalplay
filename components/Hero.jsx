"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Add more slides here later — arrows and dots appear automatically
   once there is more than one image. */
const SLIDES = [
  {
    src: "/hero-banner.png",
    alt: "NovaPlay featured game artwork",
  },
  {
    src: "/hero-banner-2.png",
    alt: "NovaPlay featured game artwork — alternate slide",
  },
];

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const count = SLIDES.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const go = useCallback(
    (next) => setIndex((i) => (next + count) % count),
    [count]
  );

  // Auto-advance (only when multiple slides and not hovered/touched)
  useEffect(() => {
    if (count < 2 || paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [count, paused]);

  // Lightweight swipe support for touch devices
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 48) go(delta < 0 ? index + 1 : index - 1);
    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured artwork"
      className="animate-fade-up overflow-hidden rounded-xl border border-edge bg-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative aspect-[16/10] sm:aspect-[21/9]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Sliding track */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <div key={slide.src} className="relative h-full w-full shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Arrows — rendered only with multiple slides */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg border border-edge bg-bg/70 p-2 text-white outline-none backdrop-blur-sm transition-colors duration-150 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border border-edge bg-bg/70 p-2 text-white outline-none backdrop-blur-sm transition-colors duration-150 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent ${
                    i === index
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
