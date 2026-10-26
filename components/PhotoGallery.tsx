"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/photo-gallery-${i + 1}.webp`,
  alt: `Pahrump property and landscape photo ${i + 1} of 7`,
}));

const INTERVAL_MS = 5000;

export function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % SLIDES.length),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length),
    []
  );

  // A fresh timeout starts whenever the index changes,
  // so clicking a thumbnail or arrow restarts the 5s countdown.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(next, INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, paused, next]);

  return (
    <section className="flex min-h-dvh flex-col bg-primary px-5 py-20 lg:px-10">
      <div className="text-center">
        <h2 className="text-3xl tracking-[0.2em] text-white uppercase sm:text-4xl">
          Photo Gallery
        </h2>
        <span className="mx-auto mt-4 block h-0.5 w-16 bg-secondary" />
      </div>

      <div className="flex flex-1 items-center justify-center py-10">
        <div
          className="w-full max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Photo gallery"
        >
          <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-2xl sm:aspect-16/9">
            {SLIDES.map(({ src, alt }, i) => (
              <div
                key={src}
                aria-hidden={i !== index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary/60 text-white transition hover:bg-secondary hover:text-primary"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary/60 text-white transition hover:bg-secondary hover:text-primary"
            >
              ›
            </button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {SLIDES.map(({ src }, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index}
                className={`relative h-12 w-16 cursor-pointer overflow-hidden rounded-md transition sm:h-14 sm:w-20 ${
                  i === index
                    ? "ring-2 ring-secondary"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <Image src={src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}